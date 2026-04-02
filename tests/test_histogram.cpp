#include <gtest/gtest.h>
#include <prometheus/histogram.hpp>

#include <climits>
#include <thread>
#include <vector>

using prometheus::Histogram;

// --- make_bounds ---

TEST(HistogramTest, MakeBoundsPowerOfTwo) {
    auto b = Histogram::make_bounds(100, 5);
    ASSERT_EQ(b.size(), 5u);
    EXPECT_EQ(b[0], 100);
    EXPECT_EQ(b[1], 200);
    EXPECT_EQ(b[2], 400);
    EXPECT_EQ(b[3], 800);
    EXPECT_EQ(b[4], INT64_MAX); // +Inf sentinel
}

TEST(HistogramTest, MakeBoundsSingleBucket) {
    auto b = Histogram::make_bounds(50, 1);
    ASSERT_EQ(b.size(), 1u);
    EXPECT_EQ(b[0], INT64_MAX); // only the +Inf bucket
}

TEST(HistogramTest, MakeBoundsTwoBuckets) {
    auto b = Histogram::make_bounds(1000, 2);
    ASSERT_EQ(b.size(), 2u);
    EXPECT_EQ(b[0], 1000);
    EXPECT_EQ(b[1], INT64_MAX);
}

// --- observe: bucket placement ---

TEST(HistogramTest, ObserveBelowMin) {
    // bounds: 100, 200, 400, +Inf
    Histogram h(Histogram::make_bounds(100, 4));
    h.observe(50); // 50 <= 100 → bucket 0
    EXPECT_EQ(h.bucket_count(0), 1);
    EXPECT_EQ(h.bucket_count(1), 0);
    EXPECT_EQ(h.sum(), 50);
}

TEST(HistogramTest, ObserveExactBoundary) {
    Histogram h(Histogram::make_bounds(100, 4));
    h.observe(100); // exactly at boundary → bucket 0 (lower_bound finds it)
    EXPECT_EQ(h.bucket_count(0), 1);
    EXPECT_EQ(h.bucket_count(1), 0);
}

TEST(HistogramTest, ObserveBetweenBounds) {
    Histogram h(Histogram::make_bounds(100, 4));
    h.observe(150); // 100 < 150 <= 200 → bucket 1
    EXPECT_EQ(h.bucket_count(0), 0);
    EXPECT_EQ(h.bucket_count(1), 1);
    EXPECT_EQ(h.bucket_count(2), 0);
}

TEST(HistogramTest, ObserveAboveAllBounds) {
    // bounds: 100, 200, 400, +Inf
    Histogram h(Histogram::make_bounds(100, 4));
    h.observe(9999); // > 400, goes to +Inf bucket (index 3)
    EXPECT_EQ(h.bucket_count(3), 1);
    EXPECT_EQ(h.total_count(), 1);
}

// --- cumulative_count monotonic ---

TEST(HistogramTest, CumulativeCountMonotonic) {
    // bounds: 100, 200, 400, +Inf
    Histogram h(Histogram::make_bounds(100, 4));
    h.observe(50);  // bucket 0
    h.observe(150); // bucket 1
    h.observe(500); // bucket 3 (+Inf)

    EXPECT_EQ(h.cumulative_count(0), 1); // ≤100
    EXPECT_EQ(h.cumulative_count(1), 2); // ≤200
    EXPECT_EQ(h.cumulative_count(2), 2); // ≤400
    EXPECT_EQ(h.cumulative_count(3), 3); // +Inf

    // Monotonically non-decreasing
    for (std::size_t i = 1; i < h.num_buckets(); ++i)
        EXPECT_GE(h.cumulative_count(i), h.cumulative_count(i - 1));
}

// --- sum and total_count ---

TEST(HistogramTest, SumAndTotalCount) {
    Histogram h(Histogram::make_bounds(100, 4));
    h.observe(50);
    h.observe(150);
    h.observe(500);
    EXPECT_EQ(h.sum(), 700);
    EXPECT_EQ(h.total_count(), 3);
}

TEST(HistogramTest, TotalCountEqualsLastCumulative) {
    Histogram h(Histogram::make_bounds(100, 4));
    h.observe(10);
    h.observe(200);
    h.observe(1000);
    h.observe(50);
    const std::size_t last = h.num_buckets() - 1;
    EXPECT_EQ(h.total_count(), h.cumulative_count(last));
}

// --- concurrent observe ---

TEST(HistogramTest, ConcurrentObserveSameBucket) {
    // bounds: 100, +Inf (2 buckets)
    Histogram h(Histogram::make_bounds(100, 2));
    constexpr int kThreads = 8;
    constexpr int kIters   = 100'000;

    std::vector<std::jthread> workers;
    workers.reserve(kThreads);
    for (int i = 0; i < kThreads; ++i)
        workers.emplace_back([&]{ for (int j = 0; j < kIters; ++j) h.observe(50); });
    workers.clear(); // join

    EXPECT_EQ(h.total_count(), static_cast<int64_t>(kThreads) * kIters);
    EXPECT_EQ(h.bucket_count(0), static_cast<int64_t>(kThreads) * kIters);
    EXPECT_EQ(h.sum(), static_cast<int64_t>(kThreads) * kIters * 50);
}

// --- custom boundaries overload ---

TEST(HistogramTest, CustomBoundaries) {
    auto b = Histogram::make_bounds(std::vector<int64_t>{100, 250, 500, 1000});
    ASSERT_EQ(b.size(), 5u); // 4 custom + +Inf
    EXPECT_EQ(b[0], 100);
    EXPECT_EQ(b[1], 250);
    EXPECT_EQ(b[2], 500);
    EXPECT_EQ(b[3], 1000);
    EXPECT_EQ(b[4], INT64_MAX);
}

TEST(HistogramTest, CustomBoundariesAlreadyHasInf) {
    auto b = Histogram::make_bounds(std::vector<int64_t>{100, 200, INT64_MAX});
    ASSERT_EQ(b.size(), 3u); // no duplicate +Inf
}

TEST(HistogramTest, ObserveCustomBuckets) {
    Histogram h(Histogram::make_bounds(std::vector<int64_t>{100, 250, 500, 1000}));
    h.observe(50);   // bucket 0 (le=100)
    h.observe(150);  // bucket 1 (le=250)
    h.observe(300);  // bucket 2 (le=500)
    h.observe(750);  // bucket 3 (le=1000)
    h.observe(5000); // bucket 4 (+Inf)
    EXPECT_EQ(h.bucket_count(0), 1);
    EXPECT_EQ(h.bucket_count(1), 1);
    EXPECT_EQ(h.bucket_count(2), 1);
    EXPECT_EQ(h.bucket_count(3), 1);
    EXPECT_EQ(h.bucket_count(4), 1);
    EXPECT_EQ(h.total_count(), 5);
    EXPECT_EQ(h.sum(), 50 + 150 + 300 + 750 + 5000);
}

TEST(HistogramTest, ConcurrentObserveDifferentBuckets) {
    // bounds: 100, 200, 400, +Inf
    Histogram h(Histogram::make_bounds(100, 4));
    constexpr int kThreads = 8;
    constexpr int kIters   = 50'000;

    std::vector<std::jthread> workers;
    workers.reserve(kThreads);
    for (int i = 0; i < kThreads; ++i) {
        int64_t val = (i % 2 == 0) ? 50 : 150; // alternates bucket 0 and 1
        workers.emplace_back([&h, val, kIters]{
            for (int j = 0; j < kIters; ++j) h.observe(val);
        });
    }
    workers.clear();

    EXPECT_EQ(h.total_count(), static_cast<int64_t>(kThreads) * kIters);
}
