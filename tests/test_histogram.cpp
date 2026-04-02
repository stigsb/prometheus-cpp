#include <gtest/gtest.h>
#include <prometheus/histogram.hpp>

#include <climits>
#include <thread>
#include <vector>

using prometheus::DynamicHistogram;
using prometheus::Histogram;
using prometheus::make_bounds;
using prometheus::make_explicit_bounds;

// ── DynamicHistogram tests ───────────────────────────────────────────────────

// --- make_bounds (DynamicHistogram static helpers) ---

TEST(DynamicHistogramTest, MakeBoundsPowerOfTwo) {
    auto b = DynamicHistogram::make_bounds(100, 5);
    ASSERT_EQ(b.size(), 5u);
    EXPECT_EQ(b[0], 100);
    EXPECT_EQ(b[1], 200);
    EXPECT_EQ(b[2], 400);
    EXPECT_EQ(b[3], 800);
    EXPECT_EQ(b[4], INT64_MAX); // +Inf sentinel
}

TEST(DynamicHistogramTest, MakeBoundsSingleBucket) {
    auto b = DynamicHistogram::make_bounds(50, 1);
    ASSERT_EQ(b.size(), 1u);
    EXPECT_EQ(b[0], INT64_MAX); // only the +Inf bucket
}

TEST(DynamicHistogramTest, MakeBoundsTwoBuckets) {
    auto b = DynamicHistogram::make_bounds(1000, 2);
    ASSERT_EQ(b.size(), 2u);
    EXPECT_EQ(b[0], 1000);
    EXPECT_EQ(b[1], INT64_MAX);
}

// --- observe: bucket placement ---

TEST(DynamicHistogramTest, ObserveBelowMin) {
    // bounds: 100, 200, 400, +Inf
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
    h.observe(50); // 50 <= 100 → bucket 0
    EXPECT_EQ(h.bucket_count(0), 1);
    EXPECT_EQ(h.bucket_count(1), 0);
    EXPECT_EQ(h.sum(), 50);
}

TEST(DynamicHistogramTest, ObserveExactBoundary) {
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
    h.observe(100); // exactly at boundary → bucket 0 (lower_bound finds it)
    EXPECT_EQ(h.bucket_count(0), 1);
    EXPECT_EQ(h.bucket_count(1), 0);
}

TEST(DynamicHistogramTest, ObserveBetweenBounds) {
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
    h.observe(150); // 100 < 150 <= 200 → bucket 1
    EXPECT_EQ(h.bucket_count(0), 0);
    EXPECT_EQ(h.bucket_count(1), 1);
    EXPECT_EQ(h.bucket_count(2), 0);
}

TEST(DynamicHistogramTest, ObserveAboveAllBounds) {
    // bounds: 100, 200, 400, +Inf
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
    h.observe(9999); // > 400, goes to +Inf bucket (index 3)
    EXPECT_EQ(h.bucket_count(3), 1);
    EXPECT_EQ(h.total_count(), 1);
}

// --- cumulative_count monotonic ---

TEST(DynamicHistogramTest, CumulativeCountMonotonic) {
    // bounds: 100, 200, 400, +Inf
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
    h.observe(50);  // bucket 0
    h.observe(150); // bucket 1
    h.observe(500); // bucket 3 (+Inf)

    EXPECT_EQ(h.cumulative_count(0), 1); // ≤100
    EXPECT_EQ(h.cumulative_count(1), 2); // ≤200
    EXPECT_EQ(h.cumulative_count(2), 2); // ≤400
    EXPECT_EQ(h.cumulative_count(3), 3); // +Inf

    // Monotonically non-decreasing
    for (std::size_t i = 1; i < h.num_buckets_runtime(); ++i)
        EXPECT_GE(h.cumulative_count(i), h.cumulative_count(i - 1));
}

// --- sum and total_count ---

TEST(DynamicHistogramTest, SumAndTotalCount) {
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
    h.observe(50);
    h.observe(150);
    h.observe(500);
    EXPECT_EQ(h.sum(), 700);
    EXPECT_EQ(h.total_count(), 3);
}

TEST(DynamicHistogramTest, TotalCountEqualsLastCumulative) {
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
    h.observe(10);
    h.observe(200);
    h.observe(1000);
    h.observe(50);
    const std::size_t last = h.num_buckets_runtime() - 1;
    EXPECT_EQ(h.total_count(), h.cumulative_count(last));
}

// --- concurrent observe ---

TEST(DynamicHistogramTest, ConcurrentObserveSameBucket) {
    // bounds: 100, +Inf (2 buckets)
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 2));
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

TEST(DynamicHistogramTest, CustomBoundaries) {
    auto b = DynamicHistogram::make_bounds(std::vector<int64_t>{100, 250, 500, 1000});
    ASSERT_EQ(b.size(), 5u); // 4 custom + +Inf
    EXPECT_EQ(b[0], 100);
    EXPECT_EQ(b[1], 250);
    EXPECT_EQ(b[2], 500);
    EXPECT_EQ(b[3], 1000);
    EXPECT_EQ(b[4], INT64_MAX);
}

TEST(DynamicHistogramTest, CustomBoundariesAlreadyHasInf) {
    auto b = DynamicHistogram::make_bounds(std::vector<int64_t>{100, 200, INT64_MAX});
    ASSERT_EQ(b.size(), 3u); // no duplicate +Inf
}

TEST(DynamicHistogramTest, ObserveCustomBuckets) {
    DynamicHistogram h(DynamicHistogram::make_bounds(std::vector<int64_t>{100, 250, 500, 1000}));
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

TEST(DynamicHistogramTest, ConcurrentObserveDifferentBuckets) {
    // bounds: 100, 200, 400, +Inf
    DynamicHistogram h(DynamicHistogram::make_bounds(100, 4));
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

// ── Histogram<N> tests ───────────────────────────────────────────────────────

// --- consteval make_bounds<N>(min) ---

TEST(StaticHistogramTest, MakeBoundsConsteval) {
    constexpr auto b = make_bounds<5>(100);
    static_assert(b.size() == 5);
    static_assert(b[0] == 100);
    static_assert(b[1] == 200);
    static_assert(b[2] == 400);
    static_assert(b[3] == 800);
    static_assert(b[4] == INT64_MAX);
    EXPECT_EQ(b[4], INT64_MAX);
}

TEST(StaticHistogramTest, MakeBoundsSingleBucket) {
    constexpr auto b = make_bounds<1>(50);
    static_assert(b.size() == 1);
    static_assert(b[0] == INT64_MAX);
    EXPECT_EQ(b[0], INT64_MAX);
}

// --- consteval make_explicit_bounds<...>() ---

TEST(StaticHistogramTest, MakeExplicitBounds) {
    constexpr auto b = make_explicit_bounds<100, 250, 500, 1000>();
    static_assert(b.size() == 5);
    static_assert(b[0] == 100);
    static_assert(b[1] == 250);
    static_assert(b[2] == 500);
    static_assert(b[3] == 1000);
    static_assert(b[4] == INT64_MAX);
    EXPECT_EQ(b[4], INT64_MAX);
}

// --- Histogram<N> construction and num_buckets ---

TEST(StaticHistogramTest, NumBucketsRuntime) {
    Histogram<4> h(make_bounds<4>(100));
    EXPECT_EQ(h.num_buckets_runtime(), 4u);
    static_assert(Histogram<4>::num_buckets == 4);
}

// --- observe: bucket placement ---

TEST(StaticHistogramTest, ObserveBelowMin) {
    Histogram<4> h(make_bounds<4>(100)); // bounds: 100, 200, 400, +Inf
    h.observe(50); // 50 <= 100 → bucket 0
    EXPECT_EQ(h.bucket_count(0), 1);
    EXPECT_EQ(h.bucket_count(1), 0);
    EXPECT_EQ(h.sum(), 50);
}

TEST(StaticHistogramTest, ObserveExactBoundary) {
    Histogram<4> h(make_bounds<4>(100));
    h.observe(100); // exactly at boundary → bucket 0
    EXPECT_EQ(h.bucket_count(0), 1);
    EXPECT_EQ(h.bucket_count(1), 0);
}

TEST(StaticHistogramTest, ObserveBetweenBounds) {
    Histogram<4> h(make_bounds<4>(100));
    h.observe(150); // 100 < 150 <= 200 → bucket 1
    EXPECT_EQ(h.bucket_count(0), 0);
    EXPECT_EQ(h.bucket_count(1), 1);
    EXPECT_EQ(h.bucket_count(2), 0);
}

TEST(StaticHistogramTest, ObserveAboveAllBounds) {
    Histogram<4> h(make_bounds<4>(100)); // bounds: 100, 200, 400, +Inf
    h.observe(9999); // > 400, goes to +Inf bucket (index 3)
    EXPECT_EQ(h.bucket_count(3), 1);
    EXPECT_EQ(h.total_count(), 1);
}

// --- cumulative_count and sum ---

TEST(StaticHistogramTest, CumulativeCountMonotonic) {
    Histogram<4> h(make_bounds<4>(100));
    h.observe(50);  // bucket 0
    h.observe(150); // bucket 1
    h.observe(500); // bucket 3 (+Inf)

    EXPECT_EQ(h.cumulative_count(0), 1);
    EXPECT_EQ(h.cumulative_count(1), 2);
    EXPECT_EQ(h.cumulative_count(2), 2);
    EXPECT_EQ(h.cumulative_count(3), 3);

    for (std::size_t i = 1; i < h.num_buckets_runtime(); ++i)
        EXPECT_GE(h.cumulative_count(i), h.cumulative_count(i - 1));
}

TEST(StaticHistogramTest, SumAndTotalCount) {
    Histogram<4> h(make_bounds<4>(100));
    h.observe(50);
    h.observe(150);
    h.observe(500);
    EXPECT_EQ(h.sum(), 700);
    EXPECT_EQ(h.total_count(), 3);
}

TEST(StaticHistogramTest, TotalCountEqualsLastCumulative) {
    Histogram<4> h(make_bounds<4>(100));
    h.observe(10);
    h.observe(200);
    h.observe(1000);
    h.observe(50);
    const std::size_t last = h.num_buckets_runtime() - 1;
    EXPECT_EQ(h.total_count(), h.cumulative_count(last));
}

// --- explicit bounds ---

TEST(StaticHistogramTest, ExplicitBoundsObserve) {
    constexpr auto b = make_explicit_bounds<100, 250, 500, 1000>();
    Histogram<5> h(b);
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

// --- concurrent observe ---

TEST(StaticHistogramTest, ConcurrentObserveSameBucket) {
    Histogram<2> h(make_bounds<2>(100)); // bounds: 100, +Inf
    constexpr int kThreads = 8;
    constexpr int kIters   = 100'000;

    std::vector<std::jthread> workers;
    workers.reserve(kThreads);
    for (int i = 0; i < kThreads; ++i)
        workers.emplace_back([&]{ for (int j = 0; j < kIters; ++j) h.observe(50); });
    workers.clear();

    EXPECT_EQ(h.total_count(), static_cast<int64_t>(kThreads) * kIters);
    EXPECT_EQ(h.bucket_count(0), static_cast<int64_t>(kThreads) * kIters);
    EXPECT_EQ(h.sum(), static_cast<int64_t>(kThreads) * kIters * 50);
}

// ── LocalHistogram tests ────────────────────────────────────────────────────

TEST(LocalHistogramTest, BasicAccumulate) {
    constexpr auto bounds = prometheus::make_bounds<4>(100);
    prometheus::Histogram<4> hist(bounds);
    prometheus::LocalHistogram<4> local(hist);

    // Accumulate locally (no atomics)
    local.observe(50);   // bucket 0
    local.observe(150);  // bucket 1
    local.observe(500);  // bucket 3 (+Inf)

    // Not yet merged — histogram should be empty
    EXPECT_EQ(hist.total_count(), 0);
    EXPECT_EQ(hist.sum(), 0);

    // Merge
    local.merge_into(hist);

    EXPECT_EQ(hist.total_count(), 3);
    EXPECT_EQ(hist.sum(), 700);
    EXPECT_EQ(hist.bucket_count(0), 1);
    EXPECT_EQ(hist.bucket_count(1), 1);
    EXPECT_EQ(hist.bucket_count(3), 1);
}

TEST(LocalHistogramTest, MergeResetsLocal) {
    constexpr auto bounds = prometheus::make_bounds<4>(100);
    prometheus::Histogram<4> hist(bounds);
    prometheus::LocalHistogram<4> local(hist);

    local.observe(50);
    local.merge_into(hist);

    // Merge again — should add nothing
    local.merge_into(hist);
    EXPECT_EQ(hist.total_count(), 1);
    EXPECT_EQ(hist.sum(), 50);
}

TEST(LocalHistogramTest, MultipleMerges) {
    constexpr auto bounds = prometheus::make_bounds<4>(100);
    prometheus::Histogram<4> hist(bounds);
    prometheus::LocalHistogram<4> local(hist);

    // Batch 1
    for (int i = 0; i < 1000; ++i)
        local.observe(50);
    local.merge_into(hist);

    // Batch 2
    for (int i = 0; i < 500; ++i)
        local.observe(150);
    local.merge_into(hist);

    EXPECT_EQ(hist.total_count(), 1500);
    EXPECT_EQ(hist.bucket_count(0), 1000);
    EXPECT_EQ(hist.bucket_count(1), 500);
    EXPECT_EQ(hist.sum(), 1000 * 50 + 500 * 150);
}

TEST(LocalHistogramTest, Reset) {
    constexpr auto bounds = prometheus::make_bounds<4>(100);
    prometheus::Histogram<4> hist(bounds);
    prometheus::LocalHistogram<4> local(hist);

    local.observe(50);
    local.observe(150);
    local.reset();  // discard without merging
    local.merge_into(hist);

    EXPECT_EQ(hist.total_count(), 0);
    EXPECT_EQ(hist.sum(), 0);
}

TEST(LocalHistogramTest, ConcurrentLocalMerge) {
    // Each thread has its own LocalHistogram, merges into shared Histogram
    constexpr auto bounds = prometheus::make_bounds<4>(100);
    prometheus::Histogram<4> hist(bounds);

    constexpr int kThreads = 8;
    constexpr int kBatchSize = 100'000;

    std::vector<std::jthread> workers;
    workers.reserve(kThreads);
    for (int t = 0; t < kThreads; ++t) {
        workers.emplace_back([&hist, &bounds] {
            prometheus::LocalHistogram<4> local(bounds);
            for (int i = 0; i < kBatchSize; ++i)
                local.observe(50);
            local.merge_into(hist);
        });
    }
    workers.clear();

    EXPECT_EQ(hist.total_count(), kThreads * kBatchSize);
    EXPECT_EQ(hist.sum(), static_cast<int64_t>(kThreads) * kBatchSize * 50);
}
