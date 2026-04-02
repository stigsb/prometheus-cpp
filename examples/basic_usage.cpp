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

    auto& latency = registry.histogram<AppLabels>(
            "http_request_duration_seconds", "Request latency")
        .required(AppLabels::Key::service, AppLabels::Key::method)
        .unit(prometheus::units::microseconds)
        .buckets(/*min=*/100, /*count=*/10)  // 100, 200, 400, 800 ... µs → scaled to seconds
        .build();

    auto& active = registry.gauge<AppLabels>(
            "active_connections", "Currently open connections")
        .required(AppLabels::Key::service)
        .build();

    // 4. Update metrics (the hot path — single atomic op each)
    requests.get({.service = "api", .method = "GET",  .status_code = 200u}).inc(1500);
    requests.get({.service = "api", .method = "POST", .status_code = 201u}).inc(342);
    requests.get({.service = "api", .method = "GET",  .status_code = 404u}).inc(12);

    latency.get({.service = "api", .method = "GET"}).observe(150);
    latency.get({.service = "api", .method = "GET"}).observe(250);
    latency.get({.service = "api", .method = "GET"}).observe(1200);
    latency.get({.service = "api", .method = "POST"}).observe(800);

    active.get({.service = "api"}).set(42);

    // 5. Serialize to Prometheus text format (scrape endpoint)
    std::cout << registry.serialize();

    return 0;
}
