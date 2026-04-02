# prometheus-client-cpp

[![CI](https://github.com/stigsb/prometheus-cpp/actions/workflows/ci.yml/badge.svg)](https://github.com/stigsb/prometheus-cpp/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/stigsb/prometheus-cpp/graph/badge.svg)](https://codecov.io/gh/stigsb/prometheus-cpp)

📊 [Benchmark history (x64)](https://stigsb.github.io/prometheus-cpp/dev/bench/x64/) · [Benchmark history (arm64)](https://stigsb.github.io/prometheus-cpp/dev/bench/arm64/)

A high-performance, header-only C++23 Prometheus client library.

**Optimised for metric update throughput.** Values are stored as `int64_t` atomic integers, not `double`. On x86, `std::atomic<int64_t>::fetch_add` is a single `LOCK XADD` instruction — no CAS loop, no contention penalty. Double conversion happens only at scrape time.

## Quick Start

### 1. Define your application's labels (once)

```cpp
// my_app/labels.hpp
#include <prometheus/label_def.hpp>

PROMETHEUS_DEFINE_LABELS(
    AppLabels,
    (service,     std::string),
    (method,      std::string),
    (status_code, uint32_t),
    (region,      std::string)
);
```

### 2. Create a registry and register metric families

```cpp
#include <prometheus/prometheus.hpp>
#include "labels.hpp"

prometheus::Registry registry;

// Counter: total HTTP requests, by service + method + status code
auto& requests = registry.counter<AppLabels>(
        "http_requests_total", "Total HTTP requests")
    .required(AppLabels::Key::service,
              AppLabels::Key::method,
              AppLabels::Key::status_code)
    .const_label("region", "us-east-1")
    .build();

// Histogram: request latency in microseconds, exposed as seconds
auto& latency = registry.histogram<AppLabels>(
        "http_request_duration_seconds", "Request latency")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .buckets(/*min_upper_bound=*/100, /*count=*/14)  // 100, 200, 400 ... µs
    .unit(prometheus::units::microseconds)            // auto-scales to seconds at scrape time
    .build();

// Gauge: currently active connections
auto& active = registry.gauge<AppLabels>(
        "active_connections", "Open connections")
    .required(AppLabels::Key::service)
    .build();
```

### 3. Update metrics on the hot path

```cpp
// Obtain a handle (does a map lookup + possible allocation — do this once)
auto& req_counter = requests.get({
    .service     = "api",
    .method      = "POST",
    .status_code = 200,
});
auto& lat_hist = latency.get({.service = "api", .method = "POST"});

// Hot path — single atomic operation each, no allocation, no locking
req_counter.inc();
lat_hist.observe(duration_us);

// Gauges support set/inc/dec
active.get({.service = "api"}).inc();
// ... later ...
active.get({.service = "api"}).dec();
```

### 4. Expose metrics over HTTP

The library produces the Prometheus text format as a `std::string`. Wire it up to any HTTP server:

```cpp
// Using cpp-httplib (or any other server)
svr.Get("/metrics", [&](const httplib::Request&, httplib::Response& res) {
    res.set_content(registry.serialize(),
                    "text/plain; version=0.0.4; charset=utf-8");
});
```

**Output:**

```
# HELP http_requests_total Total HTTP requests
# TYPE http_requests_total counter
http_requests_total{service="api",method="POST",status_code="200",region="us-east-1"} 10482

# HELP http_request_duration_us Request latency in microseconds
# TYPE http_request_duration_us histogram
http_request_duration_us_bucket{service="api",method="POST",le="100"} 1204
http_request_duration_us_bucket{service="api",method="POST",le="200"} 3891
http_request_duration_us_bucket{service="api",method="POST",le="+Inf"} 10482
http_request_duration_us_sum{service="api",method="POST"} 8374201
http_request_duration_us_count{service="api",method="POST"} 10482

# HELP active_connections Open connections
# TYPE active_connections gauge
active_connections{service="api",region="us-east-1"} 37
```

---

## Why int64, not double?

| Operation | `int64_t` | `double` |
|---|---|---|
| `fetch_add` on x86 | 1 instruction (`LOCK XADD`) | CAS retry loop |
| Throughput under contention | Linear with threads | Degrades with contention |
| Precision | Exact (for integer units) | Rounding errors accumulate |

Conversion to `double` happens only at scrape time (typically every 15–30 seconds). Store your values in a natural integer unit — microseconds, nanoseconds, milli-cents — and specify a scale factor if needed.

---

## Unit System

The library provides a `Unit` type for semantic scale factors. Instead of manually computing scale values, use a predefined unit to automatically convert integer values to the appropriate base unit at scrape time:

```cpp
auto& latency = registry.histogram<AppLabels>(
        "http_request_duration_seconds", "Request latency")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .buckets(100, 14)
    .unit(prometheus::units::microseconds)  // stores µs, exposes seconds
    .build();
```

Predefined units in `prometheus::units::`:

| Category | Units | Base unit |
|---|---|---|
| Duration | `nanoseconds`, `microseconds`, `milliseconds`, `seconds` | seconds |
| Data size | `bytes`, `kilobytes`, `megabytes`, `gigabytes`, `kibibytes`, `mebibytes`, `gibibytes` | bytes |
| Energy | `joules`, `kilojoules`, `megajoules` | joules |
| Temperature | `celsius`, `fahrenheit`, `kelvin` | (each is its own base) |
| Ratios | `ratio`, `percent` | ratio |
| Dimensionless | `none` | (no unit) |

Custom units can be created at compile time:

```cpp
constexpr auto millivolts = prometheus::units::custom("millivolts", 0.001, "volts", "_volts");
```

---

## LocalHistogram

For high-throughput scenarios where many observations happen on the same thread (e.g. processing a batch of events), `LocalHistogram` avoids all atomic contention on the hot path:

```cpp
auto& hist = latency.get({.service = "api", .method = "POST"});

// Create a thread-local accumulator (borrows bounds from the histogram)
prometheus::LocalHistogram local(hist);

for (auto& event : batch) {
    local.observe(event.duration_us);  // pure local write — no atomics
}

local.merge_into(hist);  // N+1 atomic ops to flush all accumulated counts
```

`LocalHistogram::observe()` uses plain integer increments (no atomics, no cache-line bouncing). Call `merge_into()` when you're ready to publish the accumulated counts to the shared `Histogram`.

---

## Label System

Labels are defined at compile time as a typed aggregate. There are **no string keys at runtime** — label names exist only in compile-time metadata and in the scrape formatter.

```cpp
PROMETHEUS_DEFINE_LABELS(AppLabels,
    (service,  std::string),
    (method,   std::string),
    (status,   uint32_t)
);
// AppLabels::Key::service, ::method, ::status are enum values (powers of two)
// AppLabels::LabelSet is {optional<string>, optional<string>, optional<uint32_t>}
```

When you call `.required(AppLabels::Key::service)`, the library records a bitmask of which labels must be populated on each call to `get()`. Missing required labels trigger a debug assertion (compiled away in release builds).

---

## Building

```bash
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
```

### Running tests

```bash
cmake -B build -DCMAKE_BUILD_TYPE=Debug -DPROMETHEUS_BUILD_TESTS=ON
cmake --build build
ctest --test-dir build --output-on-failure
```

### CMake integration (FetchContent)

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

---

## Requirements

- C++23 (Clang ≥ 17, GCC ≥ 13, MSVC 2022 17.8+)
- No external runtime dependencies
- GoogleTest (tests only, fetched automatically by CMake)
- Google Benchmark (benchmarks only, fetched automatically by CMake)

### Running benchmarks

```bash
cmake -B build -DCMAKE_BUILD_TYPE=Release -DPROMETHEUS_BUILD_BENCHMARKS=ON
cmake --build build
./build/bench/prometheus_bench
```

---

## Design

See [docs/MIGRATION_FROM_JUPP0R.md](docs/MIGRATION_FROM_JUPP0R.md) if you're migrating from [jupp0r/prometheus-cpp](https://github.com/jupp0r/prometheus-cpp).

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full design document covering:

- Label system and LabelMask design
- Metric family builder API
- Counter / Gauge / Histogram internals
- Unit system for semantic scale factors
- LocalHistogram for batch observation
- Storage model and concurrency
- Collection and Prometheus text exposition
- Testing strategy and benchmarks
- File layout and build system

---

## License

MIT
