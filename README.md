# prometheus-client-cpp

A high-performance, header-only C++23 Prometheus client library.

**Optimised for metric update throughput.** Values are stored as `int64_t` atomic integers, not `double`. On x86, `std::atomic<int64_t>::fetch_add` is a single `LOCK XADD` instruction — no CAS loop, no contention penalty. Double conversion happens only at scrape time.

## Quick Start

### 1. Define your application's labels (once)

```cpp
// my_app/labels.hpp
#include <prometheus/label_def.hpp>

PROMETHEUS_DEFINE_LABELS(
    AppLabels,
    (service,     std::string_view),
    (method,      std::string_view),
    (status_code, uint32_t),
    (region,      std::string_view)
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

// Histogram: request latency in microseconds
auto& latency = registry.histogram<AppLabels>(
        "http_request_duration_us", "Request latency in microseconds")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .buckets(/*min_upper_bound=*/100, /*count=*/14)  // 100, 200, 400 ... µs
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

## Label System

Labels are defined at compile time as a typed aggregate. There are **no string keys at runtime** — label names exist only in compile-time metadata and in the scrape formatter.

```cpp
PROMETHEUS_DEFINE_LABELS(AppLabels,
    (service,  std::string_view),
    (method,   std::string_view),
    (status,   uint32_t)
);
// AppLabels::Key::service, ::method, ::status are enum values (powers of two)
// AppLabels::LabelSet is {optional<string_view>, optional<string_view>, optional<uint32_t>}
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
    GIT_REPOSITORY https://github.com/your-org/prometheus-client-cpp
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

---

## Design

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full design document covering:

- Label system and LabelMask design
- Metric family builder API
- Counter / Gauge / Histogram internals
- Storage model and concurrency
- Collection and Prometheus text exposition
- Testing strategy
- File layout and build system

---

## License

MIT
