#include <gtest/gtest.h>
#include <prometheus/prometheus.hpp>
#include <sstream>
#include <string>

PROMETHEUS_DEFINE_LABELS(SerLabels,
    (service, std::string_view),
    (method,  std::string_view)
);

TEST(TextSerializerTest, CounterFormat) {
    prometheus::Registry reg;
    auto& fam = reg.counter<SerLabels>("http_requests_total", "Total HTTP requests")
        .required(SerLabels::Key::service, SerLabels::Key::method)
        .build();

    fam.get({.service = "api", .method = "GET"}).inc(42);

    auto out = reg.serialize();
    EXPECT_NE(out.find("# HELP http_requests_total Total HTTP requests"), std::string::npos);
    EXPECT_NE(out.find("# TYPE http_requests_total counter"), std::string::npos);
    EXPECT_NE(out.find("http_requests_total{"), std::string::npos);
    EXPECT_NE(out.find("42"), std::string::npos);
}

TEST(TextSerializerTest, GaugeFormat) {
    prometheus::Registry reg;
    auto& fam = reg.gauge<SerLabels>("active_connections", "Open connections")
        .required(SerLabels::Key::service)
        .build();

    fam.get({.service = "api"}).set(37);

    auto out = reg.serialize();
    EXPECT_NE(out.find("# TYPE active_connections gauge"), std::string::npos);
    EXPECT_NE(out.find("37"), std::string::npos);
}

TEST(TextSerializerTest, HistogramFormat) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<SerLabels>("latency_us", "Request latency")
        .required(SerLabels::Key::service)
        .buckets(100, 4)  // 100, 200, 400, +Inf
        .build();

    auto& h = fam.get({.service = "api"});
    h.observe(50);   // bucket 0 (le=100)
    h.observe(150);  // bucket 1 (le=200)
    h.observe(500);  // bucket 3 (+Inf)

    auto out = reg.serialize();
    EXPECT_NE(out.find("# TYPE latency_us histogram"), std::string::npos);
    EXPECT_NE(out.find("latency_us_bucket{"), std::string::npos);
    EXPECT_NE(out.find("le=\"+Inf\""), std::string::npos);
    EXPECT_NE(out.find("latency_us_sum{"), std::string::npos);
    EXPECT_NE(out.find("latency_us_count{"), std::string::npos);
}

TEST(TextSerializerTest, ConstLabels) {
    prometheus::Registry reg;
    auto& fam = reg.counter<SerLabels>("req_total", "Requests")
        .required(SerLabels::Key::service)
        .const_label("env", "prod")
        .build();

    fam.get({.service = "api"}).inc(10);

    auto out = reg.serialize();
    EXPECT_NE(out.find("env=\"prod\""), std::string::npos);
}

TEST(TextSerializerTest, ScaleFactor) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<SerLabels>("latency_s", "Request latency in seconds")
        .required(SerLabels::Key::service)
        .buckets(1000, 3)  // 1000, 2000, +Inf (microseconds)
        .scale(1e-6)       // display as seconds
        .build();

    auto& h = fam.get({.service = "api"});
    h.observe(500);
    h.observe(1500);

    auto out = reg.serialize();
    // Bucket le values should be scaled (0.001, 0.002, +Inf)
    EXPECT_NE(out.find("le=\"0.001\""), std::string::npos);
    EXPECT_NE(out.find("le=\"0.002\""), std::string::npos);
    EXPECT_NE(out.find("le=\"+Inf\""), std::string::npos);
}

TEST(TextSerializerTest, MultipleFamilies) {
    prometheus::Registry reg;
    auto& c = reg.counter<SerLabels>("counter_a", "Counter A")
        .required(SerLabels::Key::service)
        .build();
    auto& g = reg.gauge<SerLabels>("gauge_b", "Gauge B")
        .required(SerLabels::Key::service)
        .build();

    c.get({.service = "svc"}).inc(5);
    g.get({.service = "svc"}).set(99);

    auto out = reg.serialize();
    EXPECT_NE(out.find("# TYPE counter_a counter"), std::string::npos);
    EXPECT_NE(out.find("# TYPE gauge_b gauge"), std::string::npos);
    EXPECT_NE(out.find("5"), std::string::npos);
    EXPECT_NE(out.find("99"), std::string::npos);
}

TEST(TextSerializerTest, FormatDouble) {
    EXPECT_EQ(prometheus::TextSerializer::format_double(42.0), "42");
    EXPECT_EQ(prometheus::TextSerializer::format_double(3.14), "3.14");
    EXPECT_EQ(prometheus::TextSerializer::format_double(
        std::numeric_limits<double>::infinity()), "+Inf");
    EXPECT_EQ(prometheus::TextSerializer::format_double(
        -std::numeric_limits<double>::infinity()), "-Inf");
    EXPECT_EQ(prometheus::TextSerializer::format_double(
        std::numeric_limits<double>::quiet_NaN()), "NaN");
}

TEST(TextSerializerTest, FormatDoubleLocaleIndependent) {
    // to_chars is locale-independent by spec, verify no comma separators
    EXPECT_EQ(prometheus::TextSerializer::format_double(1.5), "1.5");
    EXPECT_EQ(prometheus::TextSerializer::format_double(0.001), "0.001");
    EXPECT_EQ(prometheus::TextSerializer::format_double(100.0), "100");
}
