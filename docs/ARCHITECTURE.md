# Architecture: prometheus-client-cpp

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
8. [Testing Strategy](#8-testing-strategy)
9. [API Examples](#9-api-examples)
10. [File and Module Layout](#10-file-and-module-layout)
11. [Build System](#11-build-system)

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
    (service,     std::string_view),        // (field_name, value_type)
    (method,      std::string_view),
    (status_code, uint32_t),
    (path,        std::string_view),
    (environment, std::string_view)
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
        std::optional<std::string_view> service;
        std::optional<std::string_view> method;
        std::optional<uint32_t>         status_code;
        std::optional<std::string_view> path;
        std::optional<std::string_view> environment;
    };

    // ── Compile-time metadata ─────────────────────────────────────────────────
    static constexpr std::size_t count = 5;

    // Map Key → string name (used by the exposition formatter)
    static constexpr std::string_view key_name(Key k) noexcept { /* switch */ }

    // Compute a Mask from a LabelSet (which labels are populated)
    static constexpr Mask populated_mask(const LabelSet& ls) noexcept { /* ... */ }

    // Serialise a single label value to string for map keying and exposition
    static std::string format_value(Key k, const LabelSet& ls);

    // All keys in declaration order (for iteration)
    static constexpr std::array<Key, count> all_keys() noexcept { /* ... */ }
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

class Counter {
public:
    // Hot path — single LOCK XADD on x86
    void inc(int64_t delta = 1) noexcept {
        PROMETHEUS_ASSERT(delta >= 0);
        value_.fetch_add(delta, std::memory_order_relaxed);
    }

    // Read — used by the exposition layer only
    [[nodiscard]] int64_t load() const noexcept {
        return value_.load(std::memory_order_relaxed);
    }

    // Convert to double with optional scale (e.g. 1e-6 for µs → s)
    [[nodiscard]] double to_double(double scale = 1.0) const noexcept {
        return static_cast<double>(load()) * scale;
    }

private:
    std::atomic<int64_t> value_{0};
    // Pad to cache line to avoid false sharing between sibling counters
    // in arrays — only enabled when the metric is stored in an array.
    // (See §5 for the storage layout.)
};

} // namespace prometheus
```

### 4.2 Gauge

Can increase or decrease. Supports atomic set (for sampling point-in-time values).

```cpp
class Gauge {
public:
    void set(int64_t v) noexcept {
        value_.store(v, std::memory_order_relaxed);
    }
    void inc(int64_t delta = 1) noexcept {
        value_.fetch_add(delta, std::memory_order_relaxed);
    }
    void dec(int64_t delta = 1) noexcept {
        value_.fetch_add(-delta, std::memory_order_relaxed);
    }
    [[nodiscard]] int64_t load() const noexcept {
        return value_.load(std::memory_order_relaxed);
    }
    [[nodiscard]] double to_double(double scale = 1.0) const noexcept {
        return static_cast<double>(load()) * scale;
    }

private:
    std::atomic<int64_t> value_{0};
};
```

### 4.3 Histogram

The most complex metric type. Stores a fixed array of bucket counts plus a running sum.

**Bucket definition:** The caller provides a minimum upper bound and a count. Boundaries are:

```
upper_bounds[0] = min_upper_bound
upper_bounds[i] = upper_bounds[i-1] * 2      for i in [1, count-2]
upper_bounds[count-1] = +∞  (the "le=+Inf" bucket)
```

Example: `min=100, count=8` → `100, 200, 400, 800, 1600, 3200, 6400, +Inf` (all in the same integer unit as the observed values).

```cpp
// N is the number of buckets including +Inf, known at compile time.
// For runtime-defined bucket counts, N = std::dynamic_extent (see below).
template <std::size_t N = std::dynamic_extent>
class Histogram {
public:
    // Constructed by MetricFamily with the resolved bucket boundaries
    explicit Histogram(std::span<const int64_t, N> upper_bounds);

    // Hot path — O(log N) binary search + 2 atomic ops
    void observe(int64_t value) noexcept {
        // Find the first bucket whose upper bound >= value
        const auto it = std::ranges::lower_bound(upper_bounds_, value);
        const auto idx = static_cast<std::size_t>(it - upper_bounds_.begin());
        bucket_counts_[idx].fetch_add(1, std::memory_order_relaxed);
        sum_.fetch_add(value, std::memory_order_relaxed);
    }

    // Scrape-time accessors
    [[nodiscard]] int64_t bucket_count(std::size_t idx) const noexcept {
        return bucket_counts_[idx].load(std::memory_order_relaxed);
    }
    [[nodiscard]] int64_t sum() const noexcept {
        return sum_.load(std::memory_order_relaxed);
    }
    [[nodiscard]] int64_t total_count() const noexcept {
        return bucket_counts_.back().load(std::memory_order_relaxed);
    }
    [[nodiscard]] std::size_t num_buckets() const noexcept { return N; }
    [[nodiscard]] int64_t upper_bound(std::size_t idx) const noexcept {
        return upper_bounds_[idx]; // last is sentinel INT64_MAX
    }

private:
    // Bucket upper bounds; last entry is INT64_MAX (represents +Inf)
    std::array<int64_t, N> upper_bounds_;
    // One counter per bucket; last bucket accumulates everything > max bound
    std::array<std::atomic<int64_t>, N> bucket_counts_{};
    std::atomic<int64_t> sum_{0};
};
```

**Note on `std::atomic<int64_t>` in arrays:** `std::atomic` is not copyable. Histogram objects are therefore never copied; they are created in-place via `std::make_unique` and accessed through stable pointers.

**Scale factor for histograms:** The `MetricFamily<..., Histogram>` stores a `double scale` (default `1.0`). At scrape time, `sum` is multiplied by `scale` and the bucket upper bounds are formatted accordingly. This lets callers store microseconds internally but expose seconds to Prometheus without floating-point arithmetic on the hot path.

---

## 5. Storage Model

### 5.1 Metric Instance Lifetime

Metric instances (`Counter`, `Gauge`, `Histogram`) are owned by their `MetricFamily` via `std::unique_ptr`. Stable pointers mean handles returned by `get()` remain valid for the lifetime of the registry. This is the contract that makes hot-path caching safe.

### 5.2 Map Key Generation

The map key for a given `LabelSet` is a canonical string constructed from only the labels that are in the family's allowed mask:

```
"method=GET\x00service=api\x00status_code=200\x00"
```

Labels are sorted by their declaration order in the `Key` enum (which is also their bit position order). The null byte `\x00` is the separator to prevent collision between `{a="b", c="d"}` and `{a="bc", d=""}`.

Key generation is done only on the first `get()` call for a label combination. Callers who hold onto the returned reference avoid all subsequent map overhead.

### 5.3 Concurrent Map

```cpp
template <typename LabelTraits, typename MetricT>
class MetricFamily {
    // ...
private:
    mutable std::shared_mutex mutex_;
    std::unordered_map<std::string, std::unique_ptr<MetricT>> instances_;
};
```

- **Reads** (the common case after startup): `std::shared_lock` — multiple threads can look up the same or different label combinations simultaneously.
- **Writes** (first observation of a new label combination): `std::unique_lock` — rare, typically occurs during warmup or when a new client connects.

This design intentionally avoids lock-free structures. The contention occurs only on *new* label combinations, not on metric updates. Once a handle is obtained, updates go directly to the atomic value with no locking.

### 5.4 Future Optimisation: Hazard Pointers / RCU

For applications where new label combinations are created after startup (e.g. per-user metrics), the `shared_mutex` could be replaced with an RCU scheme or a lock-free concurrent hash map (such as `libcuckoo` or `junction`). The storage abstraction is isolated behind an internal `MetricStore` concept, making this swap possible without changing public API.

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

When multiple `Counter` objects are allocated adjacently (e.g. in a `std::unordered_map`), writes to one can invalidate the cache line of another, degrading throughput on multi-core systems. The library addresses this by:

1. Allocating each metric instance via `std::make_unique` — heap allocation naturally separates objects onto different cache lines most of the time.
2. Providing an optional `alignas(64)` wrapper for use cases where callers manage their own metric arrays.

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

## 8. Testing Strategy

### 8.1 Unit Testing Metric Values

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

### 8.2 Unit Testing MetricFamily

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

### 8.3 Unit Testing Histogram Buckets

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

    EXPECT_EQ(h.bucket_count(0), 1);  // cumulative: ≤100
    EXPECT_EQ(h.bucket_count(1), 2);  // cumulative: ≤200
    EXPECT_EQ(h.bucket_count(2), 2);  // cumulative: ≤400
    EXPECT_EQ(h.bucket_count(3), 3);  // cumulative: +Inf
    EXPECT_EQ(h.sum(), 700);
    EXPECT_EQ(h.total_count(), 3);
}
```

**Note on histogram semantics:** Prometheus histograms are cumulative — `bucket_count(i)` is the count of observations ≤ `upper_bound(i)`. The `observe()` method therefore increments *all* buckets from the matched index to `+Inf`...

**Actually, preferred approach:** Increment only the specific bucket and compute cumulative sums at serialisation time. This trades a single extra pass at scrape time (negligible) for simpler, faster `observe()` with a single `fetch_add`. This is the approach used here.

### 8.4 Testing Exposition Output

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

### 8.5 Concurrency Tests

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

## 9. API Examples

### 9.1 Defining Labels (once, per application)

```cpp
// my_app/labels.hpp
#pragma once
#include <prometheus/label_def.hpp>

PROMETHEUS_DEFINE_LABELS(
    AppLabels,
    (service,     std::string_view),
    (method,      std::string_view),
    (status_code, uint32_t),
    (db_table,    std::string_view),
    (region,      std::string_view)
);
```

### 9.2 Creating a Registry and Registering Metrics

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

### 9.3 Updating Metrics on the Hot Path

```cpp
void handle_request(AppMetrics& m, std::string_view svc,
                    std::string_view method, int64_t duration_us,
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
    prometheus::Histogram<>& lat_;
};
```

### 9.4 Scraping (HTTP handler)

```cpp
// Using cpp-httplib or similar
svr.Get("/metrics", [&](const httplib::Request&, httplib::Response& res) {
    res.set_content(registry.serialize(),
                    "text/plain; version=0.0.4; charset=utf-8");
});
```

---

## 10. File and Module Layout

```
prometheus-client-cpp/
│
├── include/
│   └── prometheus/
│       ├── prometheus.hpp        # Convenience all-in-one include
│       ├── label_def.hpp         # PROMETHEUS_DEFINE_LABELS macro + LabelMask
│       ├── label_mask.hpp        # make_mask<>, LabelMask<> alias
│       ├── counter.hpp           # Counter class
│       ├── gauge.hpp             # Gauge class
│       ├── histogram.hpp         # Histogram<N> class template
│       ├── metric_family.hpp     # MetricFamily<LabelTraits, MetricT>
│       ├── metric_family_builder.hpp  # Builder returned by Registry::counter() etc.
│       ├── registry.hpp          # Registry class
│       ├── text_serializer.hpp   # Prometheus text format writer
│       └── detail/
│           ├── label_key.hpp     # Internal: canonical key string generation
│           ├── metric_store.hpp  # Internal: shared_mutex + unordered_map wrapper
│           └── assert.hpp        # PROMETHEUS_ASSERT macro (debug vs. release)
│
├── src/
│   └── (empty — fully header-only)
│
├── tests/
│   ├── CMakeLists.txt
│   ├── test_label_def.cpp        # Macro expansion, mask generation
│   ├── test_counter.cpp          # Counter unit tests
│   ├── test_gauge.cpp            # Gauge unit tests
│   ├── test_histogram.cpp        # Histogram bucket logic
│   ├── test_metric_family.cpp    # Builder, get(), required/optional validation
│   ├── test_registry.cpp         # Registry registration, serialization
│   ├── test_text_serializer.cpp  # Prometheus text format correctness
│   └── test_concurrency.cpp      # Multi-threaded stress tests
│
├── examples/
│   ├── CMakeLists.txt
│   ├── basic_usage.cpp           # Minimal working example
│   └── http_server_example.cpp   # With cpp-httplib integration
│
├── docs/
│   └── ARCHITECTURE.md           # This document
│
├── cmake/
│   └── Dependencies.cmake        # FetchContent for GoogleTest, optional deps
│
├── CMakeLists.txt                # Top-level build (C++23, header-only target)
└── README.md
```

### Header dependency order (no cycles)

```
detail/assert.hpp
  ← label_mask.hpp
    ← label_def.hpp (includes label_mask.hpp)
  ← detail/label_key.hpp
  ← counter.hpp
  ← gauge.hpp
  ← histogram.hpp
  ← text_serializer.hpp
    ← detail/label_key.hpp
    ← counter.hpp, gauge.hpp, histogram.hpp
  ← detail/metric_store.hpp
    ← detail/label_key.hpp
  ← metric_family.hpp
    ← detail/metric_store.hpp
    ← text_serializer.hpp
  ← metric_family_builder.hpp
    ← metric_family.hpp
  ← registry.hpp
    ← metric_family_builder.hpp
← prometheus.hpp  (includes all of the above)
```

---

## 11. Build System

### 11.1 CMake Structure

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
target_link_libraries(my_app PRIVATE prometheus-client-cpp)
```

### 11.2 Dependencies

| Dependency | Usage | How obtained |
|---|---|---|
| C++ standard library | Everything | System |
| GoogleTest | Tests only | `FetchContent` |
| cpp-httplib | Examples only | `FetchContent` (optional) |

No runtime external dependencies. The library uses only standard C++23 facilities.

### 11.3 Compiler Requirements

| Compiler | Minimum version | Notes |
|---|---|---|
| Clang | 17 | Full C++23 support |
| GCC | 13 | Full C++23 support |
| MSVC | 19.38 (VS 2022 17.8) | C++23 mode (`/std:c++latest`) |

### 11.4 Recommended Build Flags

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
