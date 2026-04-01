#include <gtest/gtest.h>
#include <prometheus/counter.hpp>

#include <thread>
#include <vector>

using prometheus::Counter;

TEST(CounterTest, DefaultIsZero) {
    Counter c;
    EXPECT_EQ(c.load(), 0);
}

TEST(CounterTest, IncByOne) {
    Counter c;
    c.inc();
    EXPECT_EQ(c.load(), 1);
}

TEST(CounterTest, IncByOneTwice) {
    Counter c;
    c.inc();
    c.inc();
    EXPECT_EQ(c.load(), 2);
}

TEST(CounterTest, IncByDelta) {
    Counter c;
    c.inc(42);
    EXPECT_EQ(c.load(), 42);
}

TEST(CounterTest, IncAccumulates) {
    Counter c;
    c.inc(10);
    c.inc(20);
    c.inc(5);
    EXPECT_EQ(c.load(), 35);
}

TEST(CounterTest, IncZeroIsNoop) {
    Counter c;
    c.inc(0);
    EXPECT_EQ(c.load(), 0);
}

TEST(CounterTest, ToDoubleDefaultScale) {
    Counter c;
    c.inc(1000);
    EXPECT_DOUBLE_EQ(c.to_double(), 1000.0);
}

TEST(CounterTest, ToDoubleWithScale) {
    Counter c;
    c.inc(1'000'000);
    // microseconds → seconds
    EXPECT_DOUBLE_EQ(c.to_double(1e-6), 1.0);
}

TEST(CounterTest, ToDoubleZero) {
    Counter c;
    EXPECT_DOUBLE_EQ(c.to_double(), 0.0);
    EXPECT_DOUBLE_EQ(c.to_double(1e-3), 0.0);
}

TEST(CounterTest, ConcurrentIncrements) {
    Counter c;
    constexpr int kThreads = 8;
    constexpr int kIters   = 1'000'000;

    std::vector<std::jthread> workers;
    workers.reserve(kThreads);
    for (int i = 0; i < kThreads; ++i)
        workers.emplace_back([&]{ for (int j = 0; j < kIters; ++j) c.inc(); });
    workers.clear(); // joins all jthreads

    EXPECT_EQ(c.load(), static_cast<int64_t>(kThreads) * kIters);
}

TEST(CounterTest, ConcurrentIncrementsByDelta) {
    Counter c;
    constexpr int kThreads = 8;
    constexpr int kIters   = 500'000;
    constexpr int kDelta   = 3;

    std::vector<std::jthread> workers;
    workers.reserve(kThreads);
    for (int i = 0; i < kThreads; ++i)
        workers.emplace_back([&]{
            for (int j = 0; j < kIters; ++j) c.inc(kDelta);
        });
    workers.clear();

    EXPECT_EQ(c.load(), static_cast<int64_t>(kThreads) * kIters * kDelta);
}
