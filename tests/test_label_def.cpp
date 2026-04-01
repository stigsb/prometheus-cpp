#include <gtest/gtest.h>
#include <prometheus/label_def.hpp>
#include <prometheus/label_mask.hpp>

PROMETHEUS_DEFINE_LABELS(TestLabels,
    (service,  std::string_view),
    (method,   std::string_view),
    (code,     uint32_t),
    (region,   std::string_view)
);

TEST(LabelDefTest, KeyValuesArePowersOfTwo) {
    EXPECT_EQ(static_cast<uint64_t>(TestLabels::Key::service), 1ULL);
    EXPECT_EQ(static_cast<uint64_t>(TestLabels::Key::method),  2ULL);
    EXPECT_EQ(static_cast<uint64_t>(TestLabels::Key::code),    4ULL);
    EXPECT_EQ(static_cast<uint64_t>(TestLabels::Key::region),  8ULL);
}

TEST(LabelDefTest, Count) {
    EXPECT_EQ(TestLabels::count, 4u);
}

TEST(LabelDefTest, KeyName) {
    EXPECT_EQ(TestLabels::key_name(TestLabels::Key::service), "service");
    EXPECT_EQ(TestLabels::key_name(TestLabels::Key::method),  "method");
    EXPECT_EQ(TestLabels::key_name(TestLabels::Key::code),    "code");
    EXPECT_EQ(TestLabels::key_name(TestLabels::Key::region),  "region");
}

TEST(LabelDefTest, KeyNameUnknown) {
    // A synthesised key value that doesn't match any declared field
    auto bad = static_cast<TestLabels::Key>(0ULL);
    EXPECT_EQ(TestLabels::key_name(bad), "unknown");
}

TEST(LabelDefTest, PopulatedMaskServiceMethod) {
    TestLabels::LabelSet ls{.service = "api", .method = "GET"};
    auto mask = TestLabels::populated_mask(ls);
    EXPECT_EQ(mask, 1ULL | 2ULL);  // service | method
}

TEST(LabelDefTest, PopulatedMaskNone) {
    TestLabels::LabelSet ls{};
    EXPECT_EQ(TestLabels::populated_mask(ls), 0u);
}

TEST(LabelDefTest, PopulatedMaskAll) {
    TestLabels::LabelSet ls{
        .service = "api",
        .method  = "POST",
        .code    = 200u,
        .region  = "eu",
    };
    EXPECT_EQ(TestLabels::populated_mask(ls), 1ULL | 2ULL | 4ULL | 8ULL);
}

TEST(LabelDefTest, DesignatedInitializers) {
    TestLabels::LabelSet ls{.code = 200u, .region = "eu"};
    EXPECT_FALSE(ls.service.has_value());
    EXPECT_FALSE(ls.method.has_value());
    EXPECT_TRUE(ls.code.has_value());
    EXPECT_EQ(*ls.code, 200u);
    EXPECT_TRUE(ls.region.has_value());
    EXPECT_EQ(*ls.region, "eu");
}

TEST(LabelDefTest, FormatValueStringView) {
    TestLabels::LabelSet ls{.service = "api"};
    EXPECT_EQ(TestLabels::format_value(TestLabels::Key::service, ls), "api");
}

TEST(LabelDefTest, FormatValueArithmetic) {
    TestLabels::LabelSet ls{.code = 404u};
    EXPECT_EQ(TestLabels::format_value(TestLabels::Key::code, ls), "404");
}

TEST(LabelDefTest, FormatValueAbsent) {
    TestLabels::LabelSet ls{};
    EXPECT_EQ(TestLabels::format_value(TestLabels::Key::service, ls), "");
    EXPECT_EQ(TestLabels::format_value(TestLabels::Key::code,    ls), "");
}

TEST(LabelDefTest, FormatValueUnknownKey) {
    TestLabels::LabelSet ls{.service = "api"};
    auto bad = static_cast<TestLabels::Key>(0ULL);
    EXPECT_EQ(TestLabels::format_value(bad, ls), "");
}

TEST(LabelDefTest, AllKeys) {
    auto keys = TestLabels::all_keys();
    EXPECT_EQ(keys.size(), 4u);
    EXPECT_EQ(keys[0], TestLabels::Key::service);
    EXPECT_EQ(keys[1], TestLabels::Key::method);
    EXPECT_EQ(keys[2], TestLabels::Key::code);
    EXPECT_EQ(keys[3], TestLabels::Key::region);
}

TEST(LabelDefTest, MakeMask) {
    auto mask = prometheus::make_mask<TestLabels>(
        TestLabels::Key::service, TestLabels::Key::code);
    EXPECT_EQ(mask, 1ULL | 4ULL);
}

TEST(LabelDefTest, MakeMaskEmpty) {
    auto mask = prometheus::make_mask<TestLabels>();
    EXPECT_EQ(mask, 0u);
}

TEST(LabelDefTest, MakeMaskAll) {
    auto mask = prometheus::make_mask<TestLabels>(
        TestLabels::Key::service,
        TestLabels::Key::method,
        TestLabels::Key::code,
        TestLabels::Key::region);
    EXPECT_EQ(mask, 1ULL | 2ULL | 4ULL | 8ULL);
}

// Single-label definition (edge case)
PROMETHEUS_DEFINE_LABELS(SingleLabel, (env, std::string_view));

TEST(LabelDefTest, SingleLabelCount) {
    EXPECT_EQ(SingleLabel::count, 1u);
    EXPECT_EQ(static_cast<uint64_t>(SingleLabel::Key::env), 1ULL);
}

TEST(LabelDefTest, SingleLabelFormat) {
    SingleLabel::LabelSet ls{.env = "prod"};
    EXPECT_EQ(SingleLabel::format_value(SingleLabel::Key::env, ls), "prod");
    EXPECT_EQ(SingleLabel::populated_mask(ls), 1ULL);
}
