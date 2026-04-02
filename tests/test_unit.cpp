#include <gtest/gtest.h>
#include <prometheus/prometheus.hpp>

PROMETHEUS_DEFINE_LABELS(UnitLabels,
    (service, std::string_view)
);

TEST(UnitTest, MicrosecondsScale) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<UnitLabels>("request_duration_seconds", "Duration")
        .required(UnitLabels::Key::service)
        .unit(prometheus::units::microseconds)
        .buckets(1000, 4)  // 1000us, 2000us, 4000us, +Inf
        .build();

    auto& h = fam.get({.service = "api"});
    h.observe(1500);  // 1500 microseconds

    auto out = reg.serialize();
    // le values should be scaled to seconds: 0.001, 0.002, 0.004
    EXPECT_NE(out.find("le=\"0.001\""), std::string::npos);
    EXPECT_NE(out.find("le=\"0.002\""), std::string::npos);
    EXPECT_NE(out.find("le=\"0.004\""), std::string::npos);
}

TEST(UnitTest, GigabytesScale) {
    prometheus::Registry reg;
    auto& fam = reg.gauge<UnitLabels>("disk_usage_bytes", "Disk usage")
        .required(UnitLabels::Key::service)
        .unit(prometheus::units::gigabytes)
        .build();

    fam.get({.service = "db"}).set(2);  // 2 gigabytes

    auto out = reg.serialize();
    // 2 * 1e9 = 2000000000 (to_chars may use scientific notation)
    bool found = out.find("2000000000") != std::string::npos
              || out.find("2e+09") != std::string::npos
              || out.find("2e+9") != std::string::npos
              || out.find("2e9") != std::string::npos;
    EXPECT_TRUE(found) << "Output: " << out;
}

TEST(UnitTest, PercentToRatio) {
    prometheus::Registry reg;
    auto& fam = reg.gauge<UnitLabels>("cpu_usage_ratio", "CPU usage")
        .required(UnitLabels::Key::service)
        .unit(prometheus::units::percent)
        .build();

    fam.get({.service = "web"}).set(75);  // 75%

    auto out = reg.serialize();
    // 75 * 0.01 = 0.75
    EXPECT_NE(out.find("0.75"), std::string::npos);
}

TEST(UnitTest, MillisecondsScale) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<UnitLabels>("latency_seconds", "Latency")
        .required(UnitLabels::Key::service)
        .unit(prometheus::units::milliseconds)
        .buckets(100, 3)  // 100ms, 200ms, +Inf
        .build();

    auto& h = fam.get({.service = "api"});
    h.observe(150);  // 150ms

    auto out = reg.serialize();
    // le=0.1 (100ms), le=0.2 (200ms)
    EXPECT_NE(out.find("le=\"0.1\""), std::string::npos);
    EXPECT_NE(out.find("le=\"0.2\""), std::string::npos);
}

TEST(UnitTest, NoneUnitNoScaling) {
    prometheus::Registry reg;
    auto& fam = reg.counter<UnitLabels>("http_requests_total", "Requests")
        .required(UnitLabels::Key::service)
        .unit(prometheus::units::none)
        .build();

    fam.get({.service = "api"}).inc(42);

    auto out = reg.serialize();
    EXPECT_NE(out.find("42"), std::string::npos);
}

TEST(UnitTest, CustomUnit) {
    constexpr auto millivolts = prometheus::units::custom("millivolts", 0.001, "volts", "_volts");
    static_assert(millivolts.scale == 0.001);
    static_assert(millivolts.base_name == "volts");

    prometheus::Registry reg;
    auto& fam = reg.gauge<UnitLabels>("battery_volts", "Battery voltage")
        .required(UnitLabels::Key::service)
        .unit(millivolts)
        .build();

    fam.get({.service = "sensor"}).set(3300);  // 3300mV

    auto out = reg.serialize();
    // 3300 * 0.001 = 3.3
    EXPECT_NE(out.find("3.3"), std::string::npos);
}

TEST(UnitTest, UnitConstexpr) {
    // Verify units are usable in constexpr context
    static_assert(prometheus::units::microseconds.scale == 1e-6);
    static_assert(prometheus::units::gigabytes.scale == 1e9);
    static_assert(prometheus::units::percent.scale == 0.01);
    static_assert(prometheus::units::none.scale == 1.0);
    static_assert(prometheus::units::microseconds.base_name == "seconds");
    static_assert(prometheus::units::megabytes.base_name == "bytes");
}

// Also test that scale() still works as escape hatch
TEST(UnitTest, RawScaleStillWorks) {
    prometheus::Registry reg;
    auto& fam = reg.gauge<UnitLabels>("custom_metric", "Custom")
        .required(UnitLabels::Key::service)
        .scale(0.001)
        .build();

    fam.get({.service = "api"}).set(5000);

    auto out = reg.serialize();
    EXPECT_NE(out.find("5"), std::string::npos);  // 5000 * 0.001 = 5
}
