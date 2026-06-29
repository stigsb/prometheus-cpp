#include <prometheus/prometheus.hpp>
#include <httplib.h>

#include <iostream>
#include <string_view>

// 1. Define your application's labels
PROMETHEUS_DEFINE_LABELS(HttpLabels,
                         (method, std::string_view),
                         (path, std::string_view),
                         (status_code, uint32_t));

// Listen address for the demo server.
static constexpr const char* kHost = "0.0.0.0";
static constexpr int kPort         = 8080;

int main() {
    // 2. Create a registry
    prometheus::Registry registry;

    // 3. Register metric families
    auto& requests =
        registry.counter<HttpLabels>("http_requests_total", "Total HTTP requests")
            .required(HttpLabels::Key::method, HttpLabels::Key::path, HttpLabels::Key::status_code)
            .build();

    auto& in_flight =
        registry.gauge<HttpLabels>("http_requests_in_flight", "Requests currently being served")
            .required(HttpLabels::Key::path)
            .build();

    // 4. Wire up the HTTP server
    httplib::Server server;

    // Demo route — increments the request counter.
    server.Get("/hello", [&](const httplib::Request&, httplib::Response& res) {
        in_flight.get({.path = "/hello"}).inc(1);
        res.set_content("Hello, world!\n", "text/plain");
        requests.get({.method = "GET", .path = "/hello", .status_code = 200u}).inc();
        in_flight.get({.path = "/hello"}).dec(1);
    });

    // Demo route — always returns 404 to show a different status_code label.
    server.Get("/missing", [&](const httplib::Request&, httplib::Response& res) {
        res.status = 404;
        res.set_content("Not found\n", "text/plain");
        requests.get({.method = "GET", .path = "/missing", .status_code = 404u}).inc();
    });

    // 5. The Prometheus scrape endpoint — serialize the registry to text format.
    server.Get("/metrics", [&](const httplib::Request&, httplib::Response& res) {
        res.set_content(registry.serialize(), "text/plain; version=0.0.4");
        requests.get({.method = "GET", .path = "/metrics", .status_code = 200u}).inc();
    });

    std::cout << "Serving metrics on http://" << kHost << ':' << kPort << "/metrics\n"
              << "Try: curl http://localhost:" << kPort << "/hello\n";

    server.listen(kHost, kPort);
    return 0;
}
