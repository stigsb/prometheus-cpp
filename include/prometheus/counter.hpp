#pragma once

#include <atomic>
#include <cstdint>
#include <prometheus/detail/assert.hpp>

namespace prometheus {

class Counter {
public:
    void inc(int64_t delta = 1) noexcept {
        PROMETHEUS_ASSERT(delta >= 0);
        value_.fetch_add(delta, std::memory_order_relaxed);
    }

    [[nodiscard]] int64_t load() const noexcept {
        return value_.load(std::memory_order_relaxed);
    }

    [[nodiscard]] double to_double(double scale = 1.0) const noexcept {
        return static_cast<double>(load()) * scale;
    }

    void reset() noexcept {
        value_.store(0, std::memory_order_relaxed);
    }

private:
    std::atomic<int64_t> value_{0};
};

} // namespace prometheus
