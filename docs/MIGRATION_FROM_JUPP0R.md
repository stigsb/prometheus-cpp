# Migration Guide: jupp0r/prometheus-cpp → stigsb/prometheus-client-cpp

This guide helps you migrate from [jupp0r/prometheus-cpp](https://github.com/jupp0r/prometheus-cpp) to [stigsb/prometheus-client-cpp](https://github.com/stigsb/prometheus-cpp).

## Why migrate?

- **Performance**: `int64_t` atomics use a single `LOCK XADD` on x86 — no CAS retry loops. Counters and gauges are cache-line aligned.
- **Type safety**: Labels are compile-time typed structs, not runtime string maps. Misspelled label names are caught at compile time.
- **Modern C++**: Header-only C++23. No runtime dependencies, no linked libraries.
- **No double arithmetic on the hot path**: Values are stored as `int64_t`. Conversion to `double` happens only at scrape time.

---

## Key differences at a glance

| Aspect | jupp0r/prometheus-cpp | stigsb/prometheus-client-cpp |
|---|---|---|
| C++ standard | C++11 | C++23 |
| Library type | Compiled (shared/static) | Header-only |
| Value type | `double` | `int64_t` (converted to `double` at scrape) |
| Labels | Runtime `map<string, string>` | Compile-time typed struct via `PROMETHEUS_DEFINE_LABELS` |
| Registry | `shared_ptr<Registry>` | Plain `Registry` (value type, not heap-allocated) |
| Metric creation | `BuildCounter().Name().Help().Register()` | `registry.counter<Labels>(name, help).build()` |
| Get metric instance | `family.Add({{"k","v"}})` | `family.get({.k = "v"})` |
| Counter increment | `Increment(double)` | `inc(int64_t)` (default 1) |
| Gauge operations | `Set(double)`, `Increment()`, `Decrement()` | `set(int64_t)`, `inc(int64_t)`, `dec(int64_t)` |
| Histogram observe | `Observe(double)` | `observe(int64_t)` |
| Histogram buckets | `BucketBoundaries` (vector of `double`) | `vector<int64_t>` or power-of-two via `buckets(min, count)` |
| HTTP server | Built-in `Exposer` | None — call `registry.serialize()` and wire to your server |
| Push gateway | Built-in | Not included |
| Summary metric | Yes | No (use Histogram) |
| Compression | Built-in (gzip) | Not included (delegate to HTTP server) |
| Include extension | `.h` | `.hpp` |
| CMake target | `prometheus-cpp::pull`, `::push`, `::core` | `prometheus-client-cpp` |

---

## Step-by-step migration

### 1. CMake setup

**Before (jupp0r):**
```cmake
find_package(prometheus-cpp CONFIG REQUIRED)
target_link_libraries(my_app PRIVATE prometheus-cpp::pull)
```

**After (stigsb):**
```cmake
include(FetchContent)
FetchContent_Declare(
    prometheus-client-cpp
    GIT_REPOSITORY https://github.com/stigsb/prometheus-cpp
    GIT_TAG        main
)
FetchContent_MakeAvailable(prometheus-client-cpp)

target_link_libraries(my_app PRIVATE prometheus-client-cpp)
```

Also set C++23 in your project:
```cmake
set(CMAKE_CXX_STANDARD 23)
```

### 2. Include path changes

| jupp0r | stigsb |
|---|---|
| `#include <prometheus/counter.h>` | `#include <prometheus/counter.hpp>` |
| `#include <prometheus/gauge.h>` | `#include <prometheus/gauge.hpp>` |
| `#include <prometheus/histogram.h>` | `#include <prometheus/histogram.hpp>` |
| `#include <prometheus/registry.h>` | `#include <prometheus/registry.hpp>` |
| `#include <prometheus/exposer.h>` | *(removed — no built-in HTTP server)* |

Or use the convenience header:
```cpp
#include <prometheus/prometheus.hpp>  // includes everything
```

### 3. Define your label set

jupp0r uses runtime string pairs. stigsb requires a compile-time label definition.

**Before (jupp0r):**
```cpp
// Labels are inline string maps — no upfront definition
auto& counter = family.Add({{"method", "GET"}, {"status", "200"}});
```

**After (stigsb):**
```cpp
// labels.hpp — define once, share across your application
#include <prometheus/label_def.hpp>

PROMETHEUS_DEFINE_LABELS(HttpLabels,
    (method,      std::string_view),
    (status_code, uint32_t),
    (service,     std::string_view)
);
```

This macro generates a struct with:
- `HttpLabels::Key::method`, `::status_code`, `::service` — enum values for the builder API
- `HttpLabels::LabelSet` — an aggregate of `std::optional` fields, supporting designated initializers

### 4. Registry creation

**Before (jupp0r):**
```cpp
auto registry = std::make_shared<prometheus::Registry>();
```

**After (stigsb):**
```cpp
prometheus::Registry registry;  // plain value, no shared_ptr
```

The registry owns all metric families. Keep it alive for the lifetime of your application.

### 5. Counter migration

**Before (jupp0r):**
```cpp
auto& family = prometheus::BuildCounter()
    .Name("http_requests_total")
    .Help("Total HTTP requests")
    .Register(*registry);

auto& counter = family.Add({{"method", "GET"}, {"status", "200"}});
counter.Increment();       // +1
counter.Increment(5.0);   // +5.0 (double)
```

**After (stigsb):**
```cpp
auto& family = registry.counter<HttpLabels>(
        "http_requests_total", "Total HTTP requests")
    .required(HttpLabels::Key::method, HttpLabels::Key::status_code)
    .build();

auto& counter = family.get({.method = "GET", .status_code = 200});
counter.inc();      // +1
counter.inc(5);     // +5 (int64_t)
```

Key changes:
- `BuildCounter()...Register()` → `registry.counter<Labels>()...build()`
- `.Name()` / `.Help()` → constructor arguments
- `Add({{"k","v"}})` → `get({.k = value})`
- `Increment(double)` → `inc(int64_t)`, default argument is 1
- Declare which labels are `.required()` — debug assertions catch missing labels

### 6. Gauge migration

**Before (jupp0r):**
```cpp
auto& family = prometheus::BuildGauge()
    .Name("active_connections")
    .Help("Active connections")
    .Register(*registry);

auto& gauge = family.Add({{"service", "api"}});
gauge.Set(42.0);
gauge.Increment();
gauge.Decrement();
gauge.Increment(10.0);
```

**After (stigsb):**
```cpp
auto& family = registry.gauge<HttpLabels>(
        "active_connections", "Active connections")
    .required(HttpLabels::Key::service)
    .build();

auto& gauge = family.get({.service = "api"});
gauge.set(42);
gauge.inc();
gauge.dec();
gauge.inc(10);
```

Key changes:
- `Set(double)` → `set(int64_t)`
- `Increment(double)` → `inc(int64_t)`, `Decrement(double)` → `dec(int64_t)`
- `set_to_current_time()` is available (stores epoch seconds as `int64_t`)

### 7. Histogram migration

This is the biggest conceptual change. jupp0r histograms use `double` bucket boundaries (e.g. `0.001` seconds). stigsb uses `int64_t` boundaries in your storage unit (e.g. microseconds) and converts to the base unit at scrape time via the Unit system.

**Before (jupp0r):**
```cpp
auto& family = prometheus::BuildHistogram()
    .Name("request_duration_seconds")
    .Help("Request duration")
    .Register(*registry);

auto& hist = family.Add(
    {{"method", "GET"}},
    prometheus::Histogram::BucketBoundaries{0.001, 0.01, 0.1, 1.0, 10.0}
);
hist.Observe(0.042);  // 42ms as fractional seconds
```

**After (stigsb):**
```cpp
auto& family = registry.histogram<HttpLabels>(
        "request_duration_seconds", "Request duration")
    .required(HttpLabels::Key::method)
    .buckets({1000, 10000, 100000, 1000000, 10000000})  // µs boundaries
    .unit(prometheus::units::microseconds)                // int64 µs → double seconds at scrape
    .build();

auto& hist = family.get({.method = "GET"});
hist.observe(42000);  // 42ms = 42000µs as int64_t
```

Or use power-of-two buckets for a more concise setup:
```cpp
    .buckets(/*min=*/100, /*count=*/14)  // 100, 200, 400, 800 ... µs, +Inf
```

Key changes:
- Bucket boundaries are `int64_t`, not `double`
- Store values in a natural integer unit (microseconds, nanoseconds, bytes, etc.)
- Use `.unit(prometheus::units::microseconds)` to auto-scale to seconds at scrape time
- `Observe(double)` → `observe(int64_t)`
- Buckets are configured on the family builder, not per-label-set via `Add()`

### 8. HTTP exposure

**Before (jupp0r):**
```cpp
prometheus::Exposer exposer{"127.0.0.1:8080"};
exposer.RegisterCollectable(registry);
// Exposer runs its own HTTP server in a background thread
```

**After (stigsb):**
```cpp
// No built-in HTTP server. Use any server you like:
#include <httplib.h>  // cpp-httplib, or Beast, Crow, Drogon, etc.

httplib::Server svr;
svr.Get("/metrics", [&](const httplib::Request&, httplib::Response& res) {
    res.set_content(registry.serialize(),
                    "text/plain; version=0.0.4; charset=utf-8");
});
svr.listen("0.0.0.0", 8080);
```

`registry.serialize()` returns a `std::string` in Prometheus text exposition format. You can also serialize to an `std::ostream`:
```cpp
registry.serialize(my_ostream);
```

---

## Full before/after example

### Before (jupp0r)

```cpp
#include <prometheus/counter.h>
#include <prometheus/histogram.h>
#include <prometheus/gauge.h>
#include <prometheus/exposer.h>
#include <prometheus/registry.h>

int main() {
    auto registry = std::make_shared<prometheus::Registry>();

    auto& req_family = prometheus::BuildCounter()
        .Name("http_requests_total")
        .Help("Total HTTP requests")
        .Register(*registry);

    auto& lat_family = prometheus::BuildHistogram()
        .Name("request_duration_seconds")
        .Help("Request duration")
        .Register(*registry);

    auto& conn_family = prometheus::BuildGauge()
        .Name("active_connections")
        .Help("Open connections")
        .Register(*registry);

    auto& req_counter = req_family.Add({{"method", "GET"}, {"status", "200"}});
    auto& lat_hist = lat_family.Add(
        {{"method", "GET"}},
        prometheus::Histogram::BucketBoundaries{0.001, 0.01, 0.1, 1.0}
    );
    auto& conn_gauge = conn_family.Add({{"service", "api"}});

    prometheus::Exposer exposer{"0.0.0.0:8080"};
    exposer.RegisterCollectable(registry);

    // Hot path
    req_counter.Increment();
    lat_hist.Observe(0.042);
    conn_gauge.Increment();
    // ...
    conn_gauge.Decrement();
}
```

### After (stigsb)

```cpp
#include <prometheus/prometheus.hpp>
#include <httplib.h>

PROMETHEUS_DEFINE_LABELS(HttpLabels,
    (method,      std::string_view),
    (status_code, uint32_t),
    (service,     std::string_view)
);

int main() {
    prometheus::Registry registry;

    auto& requests = registry.counter<HttpLabels>(
            "http_requests_total", "Total HTTP requests")
        .required(HttpLabels::Key::method, HttpLabels::Key::status_code)
        .build();

    auto& latency = registry.histogram<HttpLabels>(
            "request_duration_seconds", "Request duration")
        .required(HttpLabels::Key::method)
        .buckets({1000, 10000, 100000, 1000000})          // µs boundaries
        .unit(prometheus::units::microseconds)              // µs → seconds at scrape
        .build();

    auto& connections = registry.gauge<HttpLabels>(
            "active_connections", "Open connections")
        .required(HttpLabels::Key::service)
        .build();

    // Cache metric handles (do this once, not on every request)
    auto& req_counter = requests.get({.method = "GET", .status_code = 200});
    auto& lat_hist    = latency.get({.method = "GET"});
    auto& conn_gauge  = connections.get({.service = "api"});

    // HTTP exposure — bring your own server
    httplib::Server svr;
    svr.Get("/metrics", [&](const httplib::Request&, httplib::Response& res) {
        res.set_content(registry.serialize(),
                        "text/plain; version=0.0.4; charset=utf-8");
    });

    // Hot path
    req_counter.inc();
    lat_hist.observe(42000);   // 42ms = 42000µs
    conn_gauge.inc();
    // ...
    conn_gauge.dec();
}
```

---

## Unit conversion explained

jupp0r stores everything as `double` in the unit you choose (typically seconds for durations). stigsb stores `int64_t` in a natural integer unit and converts at scrape time.

**The pattern:**
1. Pick an integer unit with enough precision (e.g. microseconds for request latency)
2. Store values in that unit (`observe(42000)` for 42ms)
3. Tell the builder: `.unit(prometheus::units::microseconds)`
4. The serializer multiplies by the scale factor (`1e-6`) when writing the text format

This means `observe(42000)` with `units::microseconds` produces `0.042` in the Prometheus output — the same value jupp0r's `Observe(0.042)` would produce.

**Available units for common conversions:**

| You store | You want Prometheus to see | Use |
|---|---|---|
| Microseconds | Seconds | `prometheus::units::microseconds` |
| Milliseconds | Seconds | `prometheus::units::milliseconds` |
| Nanoseconds | Seconds | `prometheus::units::nanoseconds` |
| Bytes | Bytes | `prometheus::units::bytes` (scale = 1.0) |
| Kilobytes | Bytes | `prometheus::units::kilobytes` |
| Percent (0–100) | Ratio (0–1) | `prometheus::units::percent` |

You can also set a raw scale factor: `.scale(1e-6)` is equivalent to `.unit(prometheus::units::microseconds)`.

Custom units at compile time:
```cpp
constexpr auto millivolts = prometheus::units::custom("millivolts", 0.001, "volts", "_volts");
```

---

## Cache your `get()` results

In jupp0r, `Add()` is how you obtain a metric reference — it's idiomatic to call it once. In stigsb, `get()` does a map lookup (and possible allocation on first call). The pattern is the same: call it once, cache the reference.

```cpp
// GOOD: cache the reference
auto& c = family.get({.method = "GET", .status_code = 200});
for (auto& req : requests) {
    c.inc();  // single atomic op, no lookup
}

// BAD: lookup on every iteration
for (auto& req : requests) {
    family.get({.method = "GET", .status_code = 200}).inc();  // map lookup each time
}
```

For histograms under extreme contention, consider `LocalHistogram` for batch observation:
```cpp
auto& hist = latency.get({.method = "GET"});
prometheus::LocalHistogram local(hist);

for (auto& event : batch) {
    local.observe(event.duration_us);  // no atomics, no cache-line bouncing
}
local.merge_into(hist);  // flush with N+1 atomic ops
```

---

## Features without a direct equivalent

### Push gateway

jupp0r includes a push gateway client. stigsb does not. If you need push gateway support, serialize and POST yourself:

```cpp
// Pseudocode — adapt to your HTTP client
std::string body = registry.serialize();
http_client.post("http://pushgateway:9091/metrics/job/my_job", body,
                 "text/plain; version=0.0.4");
```

### Summary metric type

jupp0r supports `Summary` (client-side quantile estimation). stigsb does not — use `Histogram` instead. Prometheus server-side histogram quantile computation (via `histogram_quantile()` in PromQL) is generally preferred over client-side summaries.

### Built-in gzip compression

jupp0r's `Exposer` can compress responses. In stigsb, delegate compression to your HTTP server/reverse proxy. Most HTTP server libraries and reverse proxies (nginx, envoy) handle this transparently.

### `Family<T>` type

jupp0r exposes `Family<Counter>`, `Family<Gauge>`, etc. In stigsb, the equivalent is `MetricFamily<LabelTraits, MetricT>&` — a template parameterized on both your label struct and the metric type. You typically interact with it only via `get()`.
