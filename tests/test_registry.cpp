#include <gtest/gtest.h>
#include <prometheus/prometheus.hpp>
#include <string>

PROMETHEUS_DEFINE_LABELS(RegLabels,
    (service, std::string_view),
    (method,  std::string_view),
    (code,    uint32_t)
);

TEST(RegistryTest, RegisterCounterGaugeHistogram) {
    prometheus::Registry reg;

    auto& counter = reg.counter<RegLabels>("reqs", "Total requests")
        .required(RegLabels::Key::service, RegLabels::Key::method)
        .build();

    auto& gauge = reg.gauge<RegLabels>("conns", "Active connections")
        .required(RegLabels::Key::service)
        .build();

    auto& hist = reg.histogram<RegLabels>("latency", "Latency")
        .required(RegLabels::Key::service, RegLabels::Key::method)
        .buckets(100, 5)
        .build();

    counter.get({.service = "api", .method = "GET"}).inc(100);
    gauge.get({.service = "api"}).set(42);
    hist.get({.service = "api", .method = "GET"}).observe(150);

    auto out = reg.serialize();
    EXPECT_NE(out.find("# TYPE reqs counter"), std::string::npos);
    EXPECT_NE(out.find("# TYPE conns gauge"), std::string::npos);
    EXPECT_NE(out.find("# TYPE latency histogram"), std::string::npos);
}

TEST(RegistryTest, EndToEnd) {
    prometheus::Registry reg;

    auto& counter = reg.counter<RegLabels>("http_total", "HTTP requests")
        .required(RegLabels::Key::service, RegLabels::Key::method, RegLabels::Key::code)
        .const_label("env", "test")
        .build();

    // Simulate some traffic
    counter.get({.service = "api", .method = "GET",  .code = 200u}).inc(1000);
    counter.get({.service = "api", .method = "POST", .code = 201u}).inc(50);
    counter.get({.service = "api", .method = "GET",  .code = 404u}).inc(3);

    auto out = reg.serialize();

    // Verify format
    EXPECT_NE(out.find("# HELP http_total HTTP requests"), std::string::npos);
    EXPECT_NE(out.find("# TYPE http_total counter"), std::string::npos);
    EXPECT_NE(out.find("env=\"test\""), std::string::npos);
    EXPECT_NE(out.find("1000"), std::string::npos);
    EXPECT_NE(out.find("50"), std::string::npos);
    EXPECT_NE(out.find("3"), std::string::npos);
}

TEST(RegistryTest, SerializeToStream) {
    prometheus::Registry reg;
    auto& fam = reg.counter<RegLabels>("count", "A counter")
        .required(RegLabels::Key::service)
        .build();
    fam.get({.service = "svc"}).inc(7);

    std::ostringstream oss;
    reg.serialize(oss);
    EXPECT_NE(oss.str().find("7"), std::string::npos);
}

TEST(RegistryTest, EmptySerialize) {
    prometheus::Registry reg;
    auto out = reg.serialize();
    // No families registered — should produce empty or minimal output
    // (just no crash)
    EXPECT_TRUE(out.empty() || out.find("# ") != std::string::npos);
}
