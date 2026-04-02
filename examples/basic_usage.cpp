#include <prometheus/prometheus.hpp>
#include <iostream>

// 1. Define your application's labels
PROMETHEUS_DEFINE_LABELS(AppLabels,
    (service,     std::string_view),
    (method,      std::string_view),
    (status_code, uint32_t)
);

int main() {
    // 2. Create a registry
    prometheus::Registry registry;

    // 3. Register metric families
    auto& requests = registry.counter<AppLabels>(
            "http_requests_total", "Total HTTP requests")
        .required(AppLabels::Key::service,
                  AppLabels::Key::method,
                  AppLabels::Key::status_code)
        .const_label("env", "production")
        .build();

    // Dynamic histogram (backward compat): runtime bucket count, heap-allocated
    auto& latency_dyn = registry.histogram<AppLabels>(
            "http_request_duration_us", "Request latency in microseconds (dynamic)")
        .required(AppLabels::Key::service, AppLabels::Key::method)
        .buckets(/*min=*/100, /*count=*/10)  // 100, 200, 400, 800 ... µs
        .build();

    // Static histogram (recommended): compile-time bucket count, zero heap allocation
    auto& latency_static = registry.histogram<AppLabels, 8>(
            "http_request_duration2_us", "Request latency in microseconds (static)")
        .required(AppLabels::Key::service, AppLabels::Key::method)
        .bounds(prometheus::make_bounds<8>(100))  // 100, 200, 400, 800 ... µs
        .build();

    auto& active = registry.gauge<AppLabels>(
            "active_connections", "Currently open connections")
        .required(AppLabels::Key::service)
        .build();

    // 4. Update metrics (the hot path — single atomic op each)
    requests.get({.service = "api", .method = "GET",  .status_code = 200u}).inc(1500);
    requests.get({.service = "api", .method = "POST", .status_code = 201u}).inc(342);
    requests.get({.service = "api", .method = "GET",  .status_code = 404u}).inc(12);

    latency_dyn.get({.service = "api", .method = "GET"}).observe(150);
    latency_dyn.get({.service = "api", .method = "GET"}).observe(250);
    latency_dyn.get({.service = "api", .method = "GET"}).observe(1200);
    latency_dyn.get({.service = "api", .method = "POST"}).observe(800);

    latency_static.get({.service = "api", .method = "GET"}).observe(150);
    latency_static.get({.service = "api", .method = "GET"}).observe(250);
    latency_static.get({.service = "api", .method = "GET"}).observe(1200);
    latency_static.get({.service = "api", .method = "POST"}).observe(800);

    active.get({.service = "api"}).set(42);

    // 5. Serialize to Prometheus text format (scrape endpoint)
    std::cout << registry.serialize();

    return 0;
}
