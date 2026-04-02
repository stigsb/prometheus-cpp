#include <gtest/gtest.h>
#include <prometheus/gauge.hpp>

#include <chrono>
#include <thread>
#include <vector>

using prometheus::Gauge;

TEST(GaugeTest, DefaultIsZero) {
    Gauge g;
    EXPECT_EQ(g.load(), 0);
}

TEST(GaugeTest, Set) {
    Gauge g;
    g.set(42);
    EXPECT_EQ(g.load(), 42);
}

TEST(GaugeTest, SetOverwrites) {
    Gauge g;
    g.set(10);
    g.set(99);
    EXPECT_EQ(g.load(), 99);
}

TEST(GaugeTest, IncByOne) {
    Gauge g;
    g.inc();
    EXPECT_EQ(g.load(), 1);
}

TEST(GaugeTest, IncByDelta) {
    Gauge g;
    g.inc(7);
    EXPECT_EQ(g.load(), 7);
}

TEST(GaugeTest, DecByOne) {
    Gauge g;
    g.set(5);
    g.dec();
    EXPECT_EQ(g.load(), 4);
}

TEST(GaugeTest, DecByDelta) {
    Gauge g;
    g.set(100);
    g.dec(30);
    EXPECT_EQ(g.load(), 70);
}

TEST(GaugeTest, NegativeValue) {
    Gauge g;
    g.dec(1);
    EXPECT_EQ(g.load(), -1);
}

TEST(GaugeTest, NegativeValueLarge) {
    Gauge g;
    g.set(-1'000'000);
    EXPECT_EQ(g.load(), -1'000'000);
}

TEST(GaugeTest, IncThenDec) {
    Gauge g;
    g.inc(50);
    g.dec(20);
    EXPECT_EQ(g.load(), 30);
}

TEST(GaugeTest, ToDoubleDefaultScale) {
    Gauge g;
    g.set(256);
    EXPECT_DOUBLE_EQ(g.to_double(), 256.0);
}

TEST(GaugeTest, ToDoubleWithScale) {
    Gauge g;
    g.set(2000);
    EXPECT_DOUBLE_EQ(g.to_double(0.5), 1000.0);
}

TEST(GaugeTest, ToDoubleNegative) {
    Gauge g;
    g.set(-100);
    EXPECT_DOUBLE_EQ(g.to_double(), -100.0);
}

TEST(GaugeTest, SetToCurrentTime) {
    prometheus::Gauge g;
    auto before = std::chrono::duration_cast<std::chrono::seconds>(
        std::chrono::system_clock::now().time_since_epoch()).count();
    g.set_to_current_time();
    auto after = std::chrono::duration_cast<std::chrono::seconds>(
        std::chrono::system_clock::now().time_since_epoch()).count();
    EXPECT_GE(g.load(), before);
    EXPECT_LE(g.load(), after);
}

TEST(GaugeTest, ConcurrentIncrements) {
    Gauge g;
    constexpr int kThreads = 8;
    constexpr int kIters   = 1'000'000;

    std::vector<std::jthread> workers;
    workers.reserve(kThreads);
    for (int i = 0; i < kThreads; ++i)
        workers.emplace_back([&]{ for (int j = 0; j < kIters; ++j) g.inc(); });
    workers.clear();

    EXPECT_EQ(g.load(), static_cast<int64_t>(kThreads) * kIters);
}

TEST(GaugeTest, ConcurrentMixed) {
    // Half threads increment, half decrement — net zero.
    Gauge g;
    constexpr int kHalf  = 4;
    constexpr int kIters = 500'000;

    std::vector<std::jthread> workers;
    workers.reserve(kHalf * 2);
    for (int i = 0; i < kHalf; ++i)
        workers.emplace_back([&]{ for (int j = 0; j < kIters; ++j) g.inc(); });
    for (int i = 0; i < kHalf; ++i)
        workers.emplace_back([&]{ for (int j = 0; j < kIters; ++j) g.dec(); });
    workers.clear();

    EXPECT_EQ(g.load(), 0);
}
