#include <gtest/gtest.h>
#include <prometheus/detail/check_names.hpp>

using prometheus::detail::check_metric_name;
using prometheus::detail::check_label_name;

// Metric names
TEST(CheckNamesTest, ValidMetricNames) {
    EXPECT_TRUE(check_metric_name("http_requests_total"));
    EXPECT_TRUE(check_metric_name("prometheus:up"));
    EXPECT_TRUE(check_metric_name("_private_metric"));
    EXPECT_TRUE(check_metric_name("a"));
    EXPECT_TRUE(check_metric_name("A"));
}
TEST(CheckNamesTest, InvalidMetricNames) {
    EXPECT_FALSE(check_metric_name(""));
    EXPECT_FALSE(check_metric_name("2unlimited"));
    EXPECT_FALSE(check_metric_name("has space"));
    EXPECT_FALSE(check_metric_name("special!char"));
    EXPECT_FALSE(check_metric_name("with-dash"));
}

// Label names
TEST(CheckNamesTest, ValidLabelNames) {
    EXPECT_TRUE(check_label_name("method"));
    EXPECT_TRUE(check_label_name("status_code"));
    EXPECT_TRUE(check_label_name("_internal"));
    EXPECT_TRUE(check_label_name("a1"));
}
TEST(CheckNamesTest, InvalidLabelNames) {
    EXPECT_FALSE(check_label_name(""));
    EXPECT_FALSE(check_label_name("__reserved"));
    EXPECT_FALSE(check_label_name("__"));
    EXPECT_FALSE(check_label_name("2start"));
    EXPECT_FALSE(check_label_name("has space"));
    EXPECT_FALSE(check_label_name("with:colon")); // colons not allowed in labels (only metrics)
}
