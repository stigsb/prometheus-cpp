#include <gtest/gtest.h>
#include <prometheus/prometheus.hpp>



PROMETHEUS_DEFINE_LABELS(FamLabels,
    (service, std::string_view),
    (method,  std::string_view),
    (code,    uint32_t)
);

// --- Counter family basics ---

TEST(MetricFamilyTest, GetReturnsMetric) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("reqs", "help")
        .required(FamLabels::Key::service)
        .build();

    auto& c = fam.get({.service = "api"});
    c.inc(10);
    EXPECT_EQ(c.load(), 10);
}

TEST(MetricFamilyTest, SameLabelsSameRef) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("reqs", "help")
        .required(FamLabels::Key::service)
        .build();

    auto& c1 = fam.get({.service = "api"});
    auto& c2 = fam.get({.service = "api"});
    EXPECT_EQ(&c1, &c2);
}

TEST(MetricFamilyTest, DifferentLabelsDifferentRefs) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("reqs", "help")
        .required(FamLabels::Key::service)
        .build();

    auto& c1 = fam.get({.service = "api"});
    auto& c2 = fam.get({.service = "web"});
    EXPECT_NE(&c1, &c2);
    c1.inc(5);
    EXPECT_EQ(c1.load(), 5);
    EXPECT_EQ(c2.load(), 0);
}

TEST(MetricFamilyTest, OptionalLabelDistinguishesCombinations) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("reqs", "help")
        .required(FamLabels::Key::service)
        .optional(FamLabels::Key::method)
        .build();

    auto& c1 = fam.get({.service = "api", .method = "GET"});
    auto& c2 = fam.get({.service = "api", .method = "POST"});
    auto& c3 = fam.get({.service = "api"});
    EXPECT_NE(&c1, &c2);
    EXPECT_NE(&c1, &c3);
}

TEST(MetricFamilyTest, HandleStableAcrossCalls) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("reqs", "help")
        .required(FamLabels::Key::service)
        .build();

    auto& c = fam.get({.service = "api"});
    c.inc(1);
    c.inc(2);
    auto& c2 = fam.get({.service = "api"});
    EXPECT_EQ(c2.load(), 3); // same object
}

// --- Gauge family ---

TEST(MetricFamilyTest, GaugeFamily) {
    prometheus::Registry reg;
    auto& fam = reg.gauge<FamLabels>("active", "Active connections")
        .required(FamLabels::Key::service)
        .build();

    auto& g = fam.get({.service = "api"});
    g.set(42);
    EXPECT_EQ(g.load(), 42);
    g.dec(10);
    EXPECT_EQ(g.load(), 32);
}

// --- Histogram family ---

TEST(MetricFamilyTest, HistogramFamilyWithBuckets) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<FamLabels>("latency", "Latency us")
        .required(FamLabels::Key::service)
        .buckets(100, 4)
        .build();

    auto& h = fam.get({.service = "svc"});
    h.observe(50);
    h.observe(150);
    EXPECT_EQ(h.total_count(), 2);
    EXPECT_EQ(h.sum(), 200);
}

TEST(MetricFamilyTest, HistogramCustomBuckets) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<FamLabels>("latency", "Latency")
        .required(FamLabels::Key::service)
        .buckets(std::vector<int64_t>{100, 250, 500})
        .build();
    auto& h = fam.get({.service = "svc"});
    h.observe(150);
    EXPECT_EQ(h.num_buckets_runtime(), 4u); // 3 custom + +Inf
}

// --- Const labels appear in output ---

TEST(MetricFamilyTest, ConstLabelsInOutput) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("total", "Total things")
        .required(FamLabels::Key::service)
        .const_label("env", "test")
        .build();

    fam.get({.service = "api"}).inc(5);

    const std::string out = reg.serialize();
    EXPECT_NE(out.find("env=\"test\""),    std::string::npos);
    EXPECT_NE(out.find("service=\"api\""), std::string::npos);
}

TEST(MetricFamilyTest, MultipleConstLabels) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("c", "c")
        .required(FamLabels::Key::service)
        .const_label("env", "prod")
        .const_label("version", "2.0")
        .build();

    fam.get({.service = "api"}).inc(1);
    const std::string out = reg.serialize();
    EXPECT_NE(out.find("env=\"prod\""),    std::string::npos);
    EXPECT_NE(out.find("version=\"2.0\""), std::string::npos);
}

// --- Assertion behaviour (debug builds only) ---

#ifndef NDEBUG

TEST(MetricFamilyTest, RequiredLabelMissingAborts) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("reqs", "help")
        .required(FamLabels::Key::service)
        .build();
    EXPECT_DEATH(fam.get({}), "assertion failed");
}

TEST(MetricFamilyTest, ForbiddenLabelAborts) {
    prometheus::Registry reg;
    auto& fam = reg.counter<FamLabels>("reqs", "help")
        .required(FamLabels::Key::service)
        .build();
    // method is not required or optional -> forbidden
    EXPECT_DEATH(fam.get({.service = "api", .method = "GET"}), "assertion failed");
}

#endif // !NDEBUG
