#pragma once

#include <atomic>
#include <chrono>
#include <cstdint>
#include <prometheus/detail/cache_line.hpp>

namespace prometheus {

class alignas(detail::cache_line_size) Gauge {
public:
    void set(int64_t v) noexcept {
        value_.store(v, std::memory_order_relaxed);
    }

    void inc(int64_t delta = 1) noexcept {
        value_.fetch_add(delta, std::memory_order_relaxed);
    }

    void dec(int64_t delta = 1) noexcept {
        value_.fetch_add(-delta, std::memory_order_relaxed);
    }

    [[nodiscard]] int64_t load() const noexcept {
        return value_.load(std::memory_order_relaxed);
    }

    [[nodiscard]] double to_double(double scale = 1.0) const noexcept {
        return static_cast<double>(load()) * scale;
    }

    void set_to_current_time() noexcept {
        auto now = std::chrono::system_clock::now();
        auto epoch = std::chrono::duration_cast<std::chrono::seconds>(
            now.time_since_epoch()).count();
        value_.store(static_cast<int64_t>(epoch), std::memory_order_relaxed);
    }

private:
    std::atomic<int64_t> value_{0};
};

} // namespace prometheus
