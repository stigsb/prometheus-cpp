# Architecture: prometheus-cpp

A high-performance, header-only C++23 Prometheus client library optimized for metric update throughput.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Label System Design](#2-label-system-design)
3. [Metric Family Builder](#3-metric-family-builder)
4. [Metric Types](#4-metric-types)
5. [Storage Model](#5-storage-model)
6. [Collection and Exposition](#6-collection-and-exposition)
7. [Concurrency Model](#7-concurrency-model)
8. [Unit System](#8-unit-system)
9. [Testing Strategy](#9-testing-strategy)
10. [API Examples](#10-api-examples)
11. [File and Module Layout](#11-file-and-module-layout)
12. [Build System](#12-build-system)

---

## 1. Design Philosophy

The central insight driving this library is that **metric updates are on the hot path; scraping is not**. A typical application increments counters millions of times per second but is only scraped every 15–30 seconds. The design optimises accordingly:

- **Values are `int64_t`, never `double`** — On x86, `std::atomic<int64_t>::fetch_add` compiles to a single `LOCK XADD` instruction. `std::atomic<double>::fetch_add` has no hardware primitive and compiles to a CAS retry loop. By storing values as integer counts of a base unit (e.g. microseconds, nanoseconds, milli-cents) and converting to `double` only at scrape time, we eliminate that cost entirely.

- **No string keys at runtime** — Labels are identified by a strongly-typed enum at call sites. String names exist only in compile-time metadata and in the scrape output formatter.

- **Zero allocation on the hot path** — Callers obtain a typed metric handle once (typically at startup or on first use) and store it. Every subsequent update is a single atomic operation on a pre-allocated object.

- **Template-parameterised on the application's label set** — The library imposes no global label registry. Each application provides its own label trait type, which the library instantiates against.

---

## 2. Label System Design

### 2.1 Application Label Definition

The application defines its universe of labels once, using a provided macro. This is the sole use of a macro in the public API; everything else is pure C++23.

```cpp
// In your application header, e.g. my_app/labels.hpp
#include <prometheus/label_def.hpp>

PROMETHEUS_DEFINE_LABELS(
    AppLabels,                              // Name of the generated trait type
    (service,     std::string),              // (field_name, value_type)
    (method,      std::string),
    (status_code, uint32_t),
    (path,        std::string),
    (environment, std::string)
);
```

### 2.2 What the Macro Generates

The `PROMETHEUS_DEFINE_LABELS` macro expands to a struct with the following shape (shown here manually for clarity):

```cpp
struct AppLabels {
    // ── Enum of label keys, each assigned a unique power-of-two bit ──────────
    enum class Key : uint64_t {
        service     = 1ULL << 0,
        method      = 1ULL << 1,
        status_code = 1ULL << 2,
        path        = 1ULL << 3,
        environment = 1ULL << 4,
    };

    // ── Bitmask type ──────────────────────────────────────────────────────────
    using Mask = uint64_t;

    // ── Aggregate of all possible label values (optional fields) ─────────────
    // Called LabelSet — callers fill in only the fields that apply.
    struct LabelSet {
        std::optional<std::string> service;
        std::optional<std::string> method;
        std::optional<uint32_t>    status_code;
        std::optional<std::string> path;
        std::optional<std::string> environment;
    };

    // ── Compile-time metadata ─────────────────────────────────────────────────
    static constexpr std::size_t count = 5;

    // Map Key → string name (used by the exposition formatter)
    static constexpr std::string_view key_name(Key k) noexcept { /* switch */ }

    // Compute a Mask from a LabelSet (which labels are populated)
    static constexpr Mask populated_mask(const LabelSet& ls) noexcept { /* ... */ }

    // Serialise a single label value to string for exposition
    static std::string format_value(Key k, const LabelSet& ls);

    // All keys in declaration order (for iteration)
    static constexpr std::array<Key, count> all_keys() noexcept { /* ... */ }

    // Zero-allocation FNV-1a hash of populated label values (used for map lookup)
    static std::size_t hash_value(const LabelSet& ls, Mask allowed_mask) noexcept;
};
```

**Design rationale:**

- The `Key` enum uses power-of-two values so that arbitrary subsets can be represented as a `uint64_t` bitmask (the `LabelMask`). This supports up to 64 labels per application, which is well above any practical Prometheus limit (Prometheus recommends far fewer).
- The `LabelSet` aggregate uses `std::optional` so callers can use C++20 designated initialisers and leave unneeded fields absent: `{.service = "api", .method = "GET"}`.
- All metadata functions are `constexpr` or `static`, contributing zero overhead to metric update calls.

### 2.3 LabelMask

```cpp
// In prometheus/label_mask.hpp
namespace prometheus {

// Bitmask over an application's label Key enum.
// Each bit position corresponds to one Key value (which are powers of two).
template <typename LabelTraits>
using LabelMask = typename LabelTraits::Mask;  // uint64_t

// Combine multiple keys into a mask
template <typename LabelTraits>
consteval LabelMask<LabelTraits> make_mask(
    std::same_as<typename LabelTraits::Key> auto... keys
) noexcept {
    return (static_cast<uint64_t>(keys) | ...);
}

} // namespace prometheus
```

### 2.4 Compile-Time vs. Runtime Checks

| Check | Mechanism | When it fires |
|---|---|---|
| Label key is valid for this app | Cannot name a non-existent `Key` enum member | Compile time |
| Required labels are present | `assert` / exception in debug; skipped in release | Call to `get()` |
| Label is allowed on this family | Bitmask comparison at `get()` | Runtime (first call) |
| Const label name collision | Checked in `MetricFamilyBuilder::build()` | Runtime (startup) |

The philosophy is: misuse of the API (wrong labels) should be caught as early as possible, but the hot-path `inc()` / `set()` / `observe()` calls never pay for any checking.

---

## 3. Metric Family Builder

### 3.1 Concept

A *metric family* is a named, typed group of metric instances that share a `HELP` and `TYPE` declaration but differ in their label values. For example, `http_requests_total` might have instances for every `{service, method, status_code}` combination observed at runtime.

### 3.2 Builder API

```cpp
namespace prometheus {

template <typename LabelTraits, typename MetricT>
class MetricFamilyBuilder {
public:
    // Mark these labels as required — get() will assert they are set
    auto& required(std::same_as<typename LabelTraits::Key> auto... keys) & {
        required_mask_ |= make_mask<LabelTraits>(keys...);
        return *this;
    }

    // Mark these labels as optional — get() accepts them if present
    auto& optional(std::same_as<typename LabelTraits::Key> auto... keys) & {
        optional_mask_ |= make_mask<LabelTraits>(keys...);
        return *this;
    }

    // Fixed label not drawn from the LabelSet (e.g. {"version", "2.1.0"})
    auto& const_label(std::string name, std::string value) & {
        const_labels_.emplace_back(std::move(name), std::move(value));
        return *this;
    }

    // Histogram-specific: defines bucket boundaries
    // (only participates in overload resolution for MetricT = Histogram)
    auto& buckets(int64_t min_upper_bound, std::size_t count) &
        requires std::same_as<MetricT, Histogram>;
    auto& buckets(std::vector<int64_t> boundaries) &
        requires std::same_as<MetricT, Histogram>;

    // Scale factor applied at scrape time (int64 value * scale = double output)
    auto& scale(double s) &;

    // Semantic unit — sets scale_ = u.scale (see §8 Unit System)
    auto& unit(const Unit& u) &;

    // Finalise and register with the owning registry.
    // Returns a reference that lives as long as the registry.
    MetricFamily<LabelTraits, MetricT>& build();

private:
    LabelMask<LabelTraits> required_mask_{};
    LabelMask<LabelTraits> optional_mask_{};
    std::vector<std::pair<std::string,std::string>> const_labels_;
    // ... name, help, registry back-pointer, histogram config
};

} // namespace prometheus
```

**Calling convention:**

```cpp
auto& requests = registry
    .add<AppLabels, prometheus::Counter>("http_requests_total",
                                        "Total HTTP requests served")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .optional(AppLabels::Key::status_code)
    .const_label("version", GIT_VERSION)
    .build();
```

Convenience wrappers exist on `Registry`:

```cpp
auto& requests = registry.counter<AppLabels>("http_requests_total", "...")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .build();

auto& latency = registry.histogram<AppLabels>("request_duration_us", "...")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .buckets(/*min=*/100, /*count=*/12)   // 100, 200, 400 ... µs
    .build();
```

### 3.3 LabelMask Semantics

Within a `MetricFamily`, every label key falls into exactly one category:

| Category | Mask | Meaning |
|---|---|---|
| Required | `required_mask_` | `get()` asserts this label is set |
| Optional | `optional_mask_` | `get()` uses it if set, ignores if absent |
| Const | Not in mask | Fixed at build time; same for all instances |
| Forbidden | Neither | `get()` asserts this label is *not* set |

The *allowed mask* is `required_mask_ | optional_mask_`. Any populated label not in the allowed mask triggers a debug assertion.

---

## 4. Metric Types

### 4.1 Counter

A monotonically increasing integer. Only `inc()` is exposed; decrement is not permitted.

```cpp
// In prometheus/counter.hpp
namespace prometheus {

class alignas(detail::cache_line_size) Counter {
public:
    // Hot path — single LOCK XADD on x86
    void inc(int64_t delta = 1) noexcept;

    // Read — used by the exposition layer only
    [[nodiscard]] int64_t load() const noexcept;

    // Convert to double with optional scale (e.g. 1e-6 for µs → s)
    [[nodiscard]] double to_double(double scale = 1.0) const noexcept;

    void reset() noexcept;

private:
    std::atomic<int64_t> value_{0};
};

} // namespace prometheus
```

The `alignas(detail::cache_line_size)` ensures Counter objects on the heap don't share cache lines, preventing false sharing between sibling counters.

### 4.2 Gauge

Can increase or decrease. Supports atomic set (for sampling point-in-time values).

```cpp
class alignas(detail::cache_line_size) Gauge {
public:
    void set(int64_t v) noexcept;
    void inc(int64_t delta = 1) noexcept;
    void dec(int64_t delta = 1) noexcept;
    [[nodiscard]] int64_t load() const noexcept;
    [[nodiscard]] double to_double(double scale = 1.0) const noexcept;

    // Store current Unix epoch seconds
    void set_to_current_time() noexcept;

private:
    std::atomic<int64_t> value_{0};
};
```

### 4.3 Histogram

The most complex metric type. Stores a runtime-sized vector of bucket counts plus a running sum.

**Bucket definition:** The caller provides a minimum upper bound and a count. Boundaries are power-of-two multiples:

```
upper_bounds[0] = min_upper_bound
upper_bounds[i] = upper_bounds[i-1] * 2      for i in [1, count-2]
upper_bounds[count-1] = INT64_MAX  (represents +Inf)
```

Example: `min=100, count=8` → `100, 200, 400, 800, 1600, 3200, 6400, +Inf` (all in the same integer unit as the observed values).

Alternatively, custom boundaries can be provided via `make_bounds(std::vector<int64_t>)` — `INT64_MAX` is appended automatically if not already present.

```cpp
class Histogram {
public:
    explicit Histogram(std::vector<int64_t> upper_bounds);

    // Hot path — O(log N) binary search + 2 atomic ops
    void observe(int64_t value) noexcept;

    // Per-bucket count (non-cumulative — the raw count for this bucket only)
    [[nodiscard]] int64_t bucket_count(std::size_t idx) const noexcept;
    // Cumulative count: sum of bucket_count(0..idx)
    [[nodiscard]] int64_t cumulative_count(std::size_t idx) const noexcept;
    [[nodiscard]] int64_t sum() const noexcept;
    // Total count across all buckets (sum of all bucket_count values)
    [[nodiscard]] int64_t total_count() const noexcept;
    [[nodiscard]] std::size_t num_buckets() const noexcept;
    [[nodiscard]] int64_t upper_bound(std::size_t idx) const noexcept;
    [[nodiscard]] const std::vector<int64_t>& bounds() const noexcept;

    // Merge support (used by LocalHistogram)
    void add_to_bucket(std::size_t idx, int64_t delta) noexcept;
    void add_to_sum(int64_t delta) noexcept;

    // Static factory methods
    static constexpr std::vector<int64_t> make_bounds(int64_t min, std::size_t count);
    static constexpr std::vector<int64_t> make_bounds(std::vector<int64_t> boundaries);

private:
    std::vector<int64_t> upper_bounds_;
    std::vector<std::atomic<int64_t>> bucket_counts_;
    alignas(detail::cache_line_size) std::atomic<int64_t> sum_{0};
};
```

There is also a convenience free function template:

```cpp
template <std::size_t N>
std::vector<int64_t> make_bounds(int64_t min);
// e.g. make_bounds<5>(100) creates 5-bucket power-of-two bounds
```

**Histogram semantics:** `observe()` increments only the single matching bucket (the first bucket whose upper bound ≥ the observed value). Cumulative counts are computed at scrape time via `cumulative_count()`, which sums buckets `0..idx`. This trades a single extra pass at scrape time (negligible, since scraping is infrequent) for a simpler, faster `observe()` with only two atomic operations (`fetch_add` on the bucket count and `fetch_add` on the sum).

**Note on `std::atomic<int64_t>` in vectors:** `std::atomic` is not copyable. Histogram objects are therefore never copied; they are created in-place via `std::make_unique` and accessed through stable pointers.

**Scale factor for histograms:** The `MetricFamily<..., Histogram>` stores a `double scale_` (default `1.0`). At scrape time, `sum` is multiplied by `scale_` and the bucket upper bounds are formatted accordingly. This lets callers store microseconds internally but expose seconds to Prometheus without floating-point arithmetic on the hot path. The scale can be set directly via `.scale(double)` or semantically via `.unit(prometheus::units::microseconds)` (see [§8 Unit System](#8-unit-system)).

### 4.4 LocalHistogram

A per-thread accumulator that avoids all atomic contention on the hot path. Useful for batch-processing scenarios where many observations happen on the same thread before being flushed.

```cpp
class LocalHistogram {
public:
    // Borrows bounds from the target histogram — histogram must outlive this object
    explicit LocalHistogram(const Histogram& target);

    // Hot path: pure local writes, no atomics, no cache-line bouncing
    void observe(int64_t value) noexcept;

    // Flush accumulated counts into the shared histogram (N+1 atomic ops)
    void merge_into(Histogram& target) noexcept;

    // Discard accumulated data without merging
    void reset() noexcept;

private:
    const std::vector<int64_t>& upper_bounds_;  // borrows from histogram
    std::vector<int64_t> counts_;                // plain integers, no atomics
    int64_t sum_;
};
```

**Usage pattern:**

```cpp
auto& hist = latency.get({.service = "api", .method = "POST"});
prometheus::LocalHistogram local(hist);

for (auto& event : batch) {
    local.observe(event.duration_us);  // no atomics
}
local.merge_into(hist);  // N+1 atomic ops to publish
```

`merge_into()` only issues atomic operations for non-zero buckets, and resets the local counts to zero after merging.

---

## 5. Storage Model

### 5.1 Metric Instance Lifetime

Metric instances (`Counter`, `Gauge`, `Histogram`) are owned by their `MetricFamily` via `std::unique_ptr`. Stable pointers mean handles returned by `get()` remain valid for the lifetime of the registry. This is the contract that makes hot-path caching safe.

### 5.2 Hash-Based Lookup

The map key for a given `LabelSet` is a `std::size_t` hash computed by `detail::make_label_hash<LabelTraits>()`, which delegates to `LabelTraits::hash_value()`. The hash function is FNV-1a applied directly to the raw label values (strings hashed byte-by-byte, arithmetic types hashed over their byte representation), with a field-index separator byte mixed in between fields. Only labels in the family's allowed mask contribute to the hash.

This design is **zero-allocation on the fast path**: the hash is computed without constructing any intermediate strings. A display string (e.g. `service="api",method="GET"`) is only materialised on the first insert for a given label combination, via a lazy lambda passed to `MetricStore::get_or_create()`. Callers who hold onto the returned reference avoid all subsequent map overhead.

### 5.3 Concurrent Map

Metric instance storage is encapsulated in `detail::MetricStore<MetricT>`:

```cpp
namespace detail {
template <typename MetricT>
class MetricStore {
    struct Entry {
        std::string display_labels;    // e.g. `service="api",method="GET"`
        std::unique_ptr<MetricT> metric;
    };

    mutable std::shared_mutex mutex_;
    std::unordered_map<std::size_t, Entry> instances_;  // keyed by label hash

public:
    // hash         – precomputed zero-allocation hash of label values
    // make_display – callable() -> std::string  (only called on first insert)
    // factory      – callable() -> unique_ptr<MetricT>
    template <typename DisplayFn, typename Factory>
    MetricT& get_or_create(std::size_t hash, DisplayFn&& make_display,
                           Factory&& factory);

    // Iterate over all instances; fn(display_labels, metric)
    template <typename Fn>
    void for_each(Fn&& fn) const;
};
}
```

- **Reads** (the common case after startup): `std::shared_lock` — multiple threads can look up the same or different label combinations simultaneously.
- **Writes** (first observation of a new label combination): `std::unique_lock` — rare, typically occurs during warmup or when a new client connects.

This design intentionally avoids lock-free structures. The contention occurs only on *new* label combinations, not on metric updates. Once a handle is obtained, updates go directly to the atomic value with no locking.

### 5.4 Future Optimisation: Lock-Free Reads

The current hash-based fast path already achieves zero allocation on reads (the `shared_lock` + hash lookup touches no allocator). For applications where new label combinations are created at very high frequency after startup (e.g. per-user metrics), the `shared_mutex` could be replaced with an RCU scheme or a lock-free concurrent hash map (such as `libcuckoo` or `junction`). The storage abstraction is isolated behind an internal `MetricStore` class, making this swap possible without changing public API.

---

## 6. Collection and Exposition

### 6.1 Collector Interface

```cpp
namespace prometheus {

// Pure interface that every MetricFamily implements
class Collectable {
public:
    virtual ~Collectable() = default;
    virtual void collect(TextSerializer& out) const = 0;
    virtual std::string_view name() const noexcept = 0;
    virtual std::string_view help() const noexcept = 0;
    virtual MetricType type() const noexcept = 0;
};

} // namespace prometheus
```

### 6.2 Registry

```cpp
class Registry {
public:
    // Builder entry points
    template <typename LabelTraits>
    MetricFamilyBuilder<LabelTraits, Counter>
    counter(std::string name, std::string help);

    template <typename LabelTraits>
    MetricFamilyBuilder<LabelTraits, Gauge>
    gauge(std::string name, std::string help);

    template <typename LabelTraits>
    MetricFamilyBuilder<LabelTraits, Histogram>
    histogram(std::string name, std::string help);

    // Scrape all registered families into Prometheus text format
    std::string serialize() const;

    // For use with an HTTP server — write directly to a stream
    void serialize(std::ostream& out) const;

private:
    mutable std::shared_mutex mutex_;
    std::vector<std::unique_ptr<Collectable>> families_;
    std::unordered_map<std::string, MetricType> registered_names_;  // duplicate detection
};
```

### 6.3 Prometheus Text Format Output

`TextSerializer` produces the Prometheus exposition format (version 0.0.4):

```
# HELP http_requests_total Total HTTP requests served
# TYPE http_requests_total counter
http_requests_total{service="api",method="GET",version="2.1.0"} 104325
http_requests_total{service="api",method="POST",version="2.1.0"} 8871

# HELP request_duration_us Request duration in microseconds
# TYPE request_duration_us histogram
request_duration_us_bucket{service="api",method="GET",le="100"} 512
request_duration_us_bucket{service="api",method="GET",le="200"} 1024
request_duration_us_bucket{service="api",method="GET",le="+Inf"} 1100
request_duration_us_sum{service="api",method="GET"} 9812300
request_duration_us_count{service="api",method="GET"} 1100
```

**Scale at collection time:** The `MetricFamily<..., Histogram>` holds a `double scale_` factor. When formatting `_sum`, it multiplies by `scale_` to convert the raw int64 (e.g. microseconds) to the unit Prometheus expects (e.g. seconds). Bucket `le=` labels are likewise scaled. This is a scrape-time `double` multiply — infrequent and off the hot path.

### 6.4 No Built-in HTTP Server

The library produces `std::string` (or writes to `std::ostream`). HTTP delivery is left to the application — use any server (Boost.Beast, cpp-httplib, a custom handler). The typical pattern:

```cpp
// In your HTTP handler for GET /metrics:
response.body() = registry.serialize();
response.set(http::field::content_type, "text/plain; version=0.0.4");
```

---

## 7. Concurrency Model

### 7.1 Memory Ordering for Metric Updates

All metric value operations use `std::memory_order_relaxed`:

```cpp
value_.fetch_add(delta, std::memory_order_relaxed);
```

**Why relaxed is correct:** Prometheus scraping is a best-effort snapshot. There is no correctness requirement that counter A and counter B be observed atomically relative to each other. A scrape that sees some updates but not others is perfectly valid — it is no different from the scraper arriving slightly earlier or later. The key properties are:

- Each individual counter/gauge value is read atomically (no torn reads)
- Each individual `fetch_add` is atomic (no lost updates)
- No ordering guarantee is needed *between* different metric objects

This is identical to the approach used by high-performance C metrics libraries (e.g. `prometheus-cpp`, `folly::stats`).

### 7.2 Memory Ordering for Scraping

The exposition layer uses `std::memory_order_relaxed` for reading as well. The scrape is a traversal of the map (under `shared_lock`) followed by atomic reads of each value. The `shared_lock` provides the required happens-before to ensure we see a consistent view of the *map structure* (no torn pointers to metric objects), while the atomic reads ensure we see valid (if slightly stale) values.

### 7.3 False Sharing

When multiple metric objects are allocated adjacently, writes to one can invalidate the cache line of another, degrading throughput on multi-core systems. The library addresses this by:

1. `Counter` and `Gauge` are declared `alignas(detail::cache_line_size)`, ensuring each instance occupies its own cache line regardless of allocation strategy.
2. `Histogram::sum_` is similarly aligned to `detail::cache_line_size` to separate it from the bucket array.
3. `detail::cache_line_size` uses `std::hardware_destructive_interference_size` when available, falling back to 64 bytes (correct for x86-64, ARM64, and POWER).

### 7.4 The int64 Trick — Detail

On x86-64, `std::atomic<int64_t>::fetch_add` compiles to:

```asm
lock xaddq %rsi, (%rdi)   ; single instruction, fully atomic
```

`std::atomic<double>::fetch_add` has no equivalent instruction and compiles to a CAS loop:

```asm
.retry:
  movsd  (%rdi), %xmm0     ; load current value
  addsd  %xmm1, %xmm0      ; compute new value
  lock cmpxchgq %rax, (%rdi)
  jne    .retry             ; retry if another thread changed it first
```

Under high contention (many threads incrementing the same metric), the CAS loop causes significant wasted work. The `fetch_add` approach is always O(1) and contention-free.

---

## 8. Unit System

### 8.1 Motivation

Prometheus best practice is to expose metrics in base SI units (seconds, bytes, etc.), but applications naturally work in convenient integer units (microseconds, megabytes, etc.). The Unit system bridges this gap by attaching a semantic scale factor to a metric family, so the library automatically converts at scrape time.

### 8.2 The `Unit` Struct

```cpp
// In prometheus/unit.hpp
namespace prometheus {

struct Unit {
    std::string_view name;         // human label: "microseconds"
    double           scale;        // multiply stored int64 by this to get base unit
    std::string_view base_name;    // "seconds", "bytes", "joules"
    std::string_view base_suffix;  // "_seconds", "_bytes" (for reference, not auto-applied)
};

} // namespace prometheus
```

### 8.3 Predefined Units

All predefined units live in the `prometheus::units::` namespace:

| Category | Units | Scale examples | Base unit |
|---|---|---|---|
| Duration | `nanoseconds`, `microseconds`, `milliseconds`, `seconds` | 1e-9, 1e-6, 1e-3, 1.0 | seconds |
| Data size | `bytes`, `kilobytes`, `megabytes`, `gigabytes` | 1, 1e3, 1e6, 1e9 | bytes |
| Data size (binary) | `kibibytes`, `mebibytes`, `gibibytes` | 1024, 1048576, 1073741824 | bytes |
| Energy | `joules`, `kilojoules`, `megajoules` | 1, 1e3, 1e6 | joules |
| Temperature | `celsius`, `fahrenheit`, `kelvin` | all 1.0 | (each is its own base) |
| Ratios | `ratio`, `percent` | 1.0, 0.01 | ratio |
| Dimensionless | `none` | 1.0 | (no unit) |

### 8.4 Custom Units

Custom units can be created at compile time using `consteval`:

```cpp
constexpr auto millivolts = prometheus::units::custom("millivolts", 0.001, "volts", "_volts");
```

### 8.5 Usage with MetricFamilyBuilder

The `.unit()` method on `MetricFamilyBuilder` sets the scale factor from the unit:

```cpp
auto& latency = registry.histogram<AppLabels>(
        "http_request_duration_seconds", "Request latency")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .buckets(100, 14)
    .unit(prometheus::units::microseconds)  // scale_ = 1e-6
    .build();
```

At scrape time, bucket `le=` labels and `_sum` values are multiplied by the scale factor. For example, a stored sum of `5000000` (microseconds) is exposed as `5.0` (seconds).

---

## 9. Testing Strategy

### 9.1 Unit Testing Metric Values

Metrics expose a `load()` method that returns the raw `int64_t`. This is sufficient for unit tests without any mocking:

```cpp
TEST(CounterTest, IncrementByOne) {
    prometheus::Counter c;
    c.inc();
    c.inc();
    EXPECT_EQ(c.load(), 2);
}

TEST(CounterTest, IncrementByDelta) {
    prometheus::Counter c;
    c.inc(42);
    EXPECT_EQ(c.load(), 42);
}
```

### 9.2 Unit Testing MetricFamily

```cpp
TEST(MetricFamilyTest, RequiredLabelEnforced) {
    prometheus::Registry reg;
    auto& fam = reg.counter<AppLabels>("reqs", "help")
        .required(AppLabels::Key::service)
        .build();

    // Valid: service is set
    auto& c = fam.get({.service = "api"});
    c.inc(10);
    EXPECT_EQ(c.load(), 10);

    // In debug builds: missing required label asserts
    // (not tested in release; use NDEBUG-aware test)
}
```

### 9.3 Unit Testing Histogram Buckets

```cpp
TEST(HistogramTest, ObservePopulatesBuckets) {
    // Buckets: 100, 200, 400, +Inf
    prometheus::Registry reg;
    auto& fam = reg.histogram<AppLabels>("latency", "help")
        .required(AppLabels::Key::service)
        .buckets(100, 4)
        .build();

    auto& h = fam.get({.service = "svc"});
    h.observe(50);   // → bucket[0] (le=100)
    h.observe(150);  // → bucket[1] (le=200)
    h.observe(500);  // → bucket[3] (le=+Inf)

    // bucket_count() returns the per-bucket (non-cumulative) count
    EXPECT_EQ(h.bucket_count(0), 1);  // le=100: just the 50
    EXPECT_EQ(h.bucket_count(1), 1);  // le=200: just the 150
    EXPECT_EQ(h.bucket_count(2), 0);  // le=400: nothing
    EXPECT_EQ(h.bucket_count(3), 1);  // le=+Inf: just the 500

    // cumulative_count() returns the Prometheus-style cumulative count
    EXPECT_EQ(h.cumulative_count(0), 1);  // ≤100
    EXPECT_EQ(h.cumulative_count(1), 2);  // ≤200
    EXPECT_EQ(h.cumulative_count(2), 2);  // ≤400
    EXPECT_EQ(h.cumulative_count(3), 3);  // ≤+Inf

    EXPECT_EQ(h.sum(), 700);
    EXPECT_EQ(h.total_count(), 3);
}
```

**Histogram semantics:** `observe()` increments only the single matching bucket. Cumulative sums (as required by the Prometheus exposition format) are computed at scrape time via `cumulative_count()`. This trades one extra pass at scrape time (negligible) for a faster `observe()` with only two atomic operations.

### 9.4 Testing Exposition Output

```cpp
TEST(ExpositionTest, CounterTextFormat) {
    prometheus::Registry reg;
    auto& fam = reg.counter<AppLabels>("total", "Total things")
        .required(AppLabels::Key::service)
        .const_label("env", "test")
        .build();

    fam.get({.service = "api"}).inc(5);

    const std::string out = reg.serialize();
    EXPECT_THAT(out, HasSubstr("# TYPE total counter"));
    EXPECT_THAT(out, HasSubstr(R"(total{service="api",env="test"} 5)"));
}
```

### 9.5 Concurrency Tests

Stress tests use multiple threads concurrently calling `inc()` and verify the final value:

```cpp
TEST(ConcurrencyTest, ConcurrentIncrements) {
    prometheus::Counter c;
    constexpr int threads = 8;
    constexpr int iters   = 1'000'000;
    std::vector<std::jthread> workers;
    for (int i = 0; i < threads; ++i)
        workers.emplace_back([&]{ for (int j = 0; j < iters; ++j) c.inc(); });
    workers.clear(); // join all
    EXPECT_EQ(c.load(), threads * iters);
}
```

---

## 10. API Examples

### 10.1 Defining Labels (once, per application)

```cpp
// my_app/labels.hpp
#pragma once
#include <prometheus/label_def.hpp>

PROMETHEUS_DEFINE_LABELS(
    AppLabels,
    (service,     std::string),
    (method,      std::string),
    (status_code, uint32_t),
    (db_table,    std::string),
    (region,      std::string)
);
```

### 10.2 Creating a Registry and Registering Metrics

```cpp
// my_app/metrics.hpp
#pragma once
#include <prometheus/prometheus.hpp>
#include "labels.hpp"

struct AppMetrics {
    explicit AppMetrics(prometheus::Registry& reg)
        : requests{reg.counter<AppLabels>("http_requests_total",
                                          "Total HTTP requests")
              .required(AppLabels::Key::service,
                        AppLabels::Key::method,
                        AppLabels::Key::status_code)
              .const_label("region", region_from_env())
              .build()}
        , latency_us{reg.histogram<AppLabels>("http_request_duration_us",
                                              "HTTP request latency in µs")
              .required(AppLabels::Key::service, AppLabels::Key::method)
              .buckets(/*min_us=*/100, /*count=*/14)
              .build()}
        , active_conns{reg.gauge<AppLabels>("active_connections",
                                            "Currently open connections")
              .required(AppLabels::Key::service)
              .build()}
    {}

    prometheus::MetricFamily<AppLabels, prometheus::Counter>&   requests;
    prometheus::MetricFamily<AppLabels, prometheus::Histogram>& latency_us;
    prometheus::MetricFamily<AppLabels, prometheus::Gauge>&     active_conns;
};
```

### 10.3 Updating Metrics on the Hot Path

```cpp
void handle_request(AppMetrics& m, const std::string& svc,
                    const std::string& method, int64_t duration_us,
                    uint32_t status)
{
    // Obtain handles once and cache them (the fast path is just atomic ops)
    auto& req_counter = m.requests.get({
        .service     = svc,
        .method      = method,
        .status_code = status,
    });
    auto& lat_hist = m.latency_us.get({
        .service = svc,
        .method  = method,
    });

    req_counter.inc();
    lat_hist.observe(duration_us);
}
```

**Recommended pattern — cache handles in the call site:**

```cpp
// In a long-lived request handler object:
struct ApiHandler {
    ApiHandler(AppMetrics& m)
        : reqs_{m.requests.get({.service="api", .method="GET", .status_code=200})}
        , lat_{m.latency_us.get({.service="api", .method="GET"})}
    {}

    void handle() {
        auto t0 = std::chrono::steady_clock::now();
        // ... do work ...
        auto us = duration_cast<microseconds>(steady_clock::now() - t0).count();
        reqs_.inc();
        lat_.observe(us);
    }

    prometheus::Counter&   reqs_;
    prometheus::Histogram& lat_;
};
```

### 10.4 Scraping (HTTP handler)

```cpp
// Using cpp-httplib or similar
svr.Get("/metrics", [&](const httplib::Request&, httplib::Response& res) {
    res.set_content(registry.serialize(),
                    "text/plain; version=0.0.4; charset=utf-8");
});
```

---

## 11. File and Module Layout

```
prometheus-cpp/
│
├── include/
│   └── prometheus/
│       ├── prometheus.hpp             # Convenience all-in-one include
│       ├── label_def.hpp              # PROMETHEUS_DEFINE_LABELS macro
│       ├── label_mask.hpp             # make_mask<>, LabelMask<> alias
│       ├── counter.hpp                # Counter class
│       ├── gauge.hpp                  # Gauge class
│       ├── histogram.hpp              # Histogram + LocalHistogram classes
│       ├── unit.hpp                   # Unit struct + predefined units (§8)
│       ├── metric_family.hpp          # MetricFamily<LabelTraits, MetricT>
│       ├── metric_family_builder.hpp  # Builder returned by Registry::counter() etc.
│       ├── registry.hpp               # Registry class
│       ├── text_serializer.hpp        # Prometheus text format writer
│       └── detail/
│           ├── assert.hpp             # PROMETHEUS_ASSERT macro (debug vs. release)
│           ├── cache_line.hpp         # cache_line_size constant for false-sharing avoidance
│           ├── check_names.hpp        # constexpr metric/label name validation
│           ├── label_key.hpp          # Internal: label hash + display string generation
│           └── metric_store.hpp       # Internal: shared_mutex + hash-keyed unordered_map
│
├── tests/
│   ├── CMakeLists.txt
│   ├── test_label_def.cpp             # Macro expansion, mask generation
│   ├── test_counter.cpp               # Counter unit tests
│   ├── test_gauge.cpp                 # Gauge unit tests
│   ├── test_histogram.cpp             # Histogram + LocalHistogram bucket logic
│   ├── test_unit.cpp                  # Unit system scaling tests
│   ├── test_check_names.cpp           # Metric/label name validation
│   ├── test_metric_family.cpp         # Builder, get(), required/optional validation
│   ├── test_registry.cpp              # Registry registration, serialization
│   ├── test_text_serializer.cpp       # Prometheus text format correctness
│   └── test_concurrency.cpp           # Multi-threaded stress tests
│
├── bench/
│   ├── CMakeLists.txt
│   └── bench.cpp                      # Google Benchmark suite (counter, gauge,
│                                      #   histogram, LocalHistogram, serialization)
│
├── examples/
│   ├── CMakeLists.txt
│   └── basic_usage.cpp                # Minimal working example
│
├── docs/
│   └── ARCHITECTURE.md                # This document
│
├── cmake/
│   └── Dependencies.cmake             # FetchContent for GoogleTest, Benchmark, cpp-httplib
│
├── CMakeLists.txt                     # Top-level build (C++23, header-only target)
└── README.md
```

### Header dependency order (no cycles)

```
detail/assert.hpp
detail/cache_line.hpp
detail/check_names.hpp
  ← label_mask.hpp
    ← label_def.hpp (includes label_mask.hpp)
  ← detail/label_key.hpp
  ← counter.hpp (includes detail/assert.hpp, detail/cache_line.hpp)
  ← gauge.hpp (includes detail/cache_line.hpp)
  ← histogram.hpp (includes detail/cache_line.hpp; defines Histogram + LocalHistogram)
  ← unit.hpp
  ← text_serializer.hpp
    ← detail/label_key.hpp
    ← counter.hpp, gauge.hpp, histogram.hpp
  ← detail/metric_store.hpp
  ← metric_family.hpp
    ← detail/label_key.hpp
    ← detail/metric_store.hpp
    ← text_serializer.hpp
  ← metric_family_builder.hpp
    ← metric_family.hpp, unit.hpp, detail/check_names.hpp
  ← registry.hpp
    ← metric_family_builder.hpp
← prometheus.hpp  (includes all of the above)
```

---

## 12. Build System

### 12.1 CMake Structure

The library is header-only and is exposed as an `INTERFACE` target:

```cmake
add_library(prometheus-client-cpp INTERFACE)
target_include_directories(prometheus-client-cpp INTERFACE
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)
target_compile_features(prometheus-client-cpp INTERFACE cxx_std_23)
```

Consumers add the library with a single line:

```cmake
target_link_libraries(my_app PRIVATE prometheus::client)
```

### 12.2 Dependencies

| Dependency | Usage | How obtained |
|---|---|---|
| C++ standard library | Everything | System |
| GoogleTest v1.15.2 | Tests only | `FetchContent` |
| Google Benchmark v1.9.1 | Benchmarks only | `FetchContent` |
| cpp-httplib v0.18.0 | Examples only | `FetchContent` (optional) |

No runtime external dependencies. The library uses only standard C++23 facilities.

### 12.3 Compiler Requirements

| Compiler | Minimum version | Notes |
|---|---|---|
| Clang | 17 | Full C++23 support |
| GCC | 13 | Full C++23 support |
| MSVC | 19.38 (VS 2022 17.8) | C++23 mode (`/std:c++latest`) |

### 12.4 Recommended Build Flags

```cmake
# In CMakePresets.json or toolchain file
add_compile_options(
    -Wall -Wextra -Wpedantic
    -Wno-unused-parameter      # label structs often have unused members
    $<$<CONFIG:Release>:-O3>
    $<$<CONFIG:Release>:-DNDEBUG>  # disables PROMETHEUS_ASSERT checks
)
```

In `Release` mode, all `PROMETHEUS_ASSERT` checks compile away to nothing, ensuring zero overhead on the hot path.

---

*End of Architecture Document*
