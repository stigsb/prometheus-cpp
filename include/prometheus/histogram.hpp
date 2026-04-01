#pragma once

#include <atomic>
#include <cstddef>
#include <cstdint>
#include <climits>
#include <span>
#include <vector>
#include <algorithm>
#include <numeric>

namespace prometheus {

class Histogram {
public:
    // upper_bounds: sorted ascending, last element should be INT64_MAX for +Inf
    explicit Histogram(std::vector<int64_t> upper_bounds)
        : upper_bounds_(std::move(upper_bounds))
        , bucket_counts_(upper_bounds_.size())
    {}

    void observe(int64_t value) noexcept {
        // Find first bucket where upper_bound >= value
        auto it = std::lower_bound(upper_bounds_.begin(), upper_bounds_.end(), value);
        if (it == upper_bounds_.end()) {
            // Beyond all bounds, go to last bucket (+Inf)
            bucket_counts_.back().fetch_add(1, std::memory_order_relaxed);
        } else {
            const auto idx = static_cast<std::size_t>(it - upper_bounds_.begin());
            bucket_counts_[idx].fetch_add(1, std::memory_order_relaxed);
        }
        sum_.fetch_add(value, std::memory_order_relaxed);
    }

    // Non-cumulative count for bucket idx
    [[nodiscard]] int64_t bucket_count(std::size_t idx) const noexcept {
        return bucket_counts_[idx].load(std::memory_order_relaxed);
    }

    // Cumulative count up to and including bucket idx
    [[nodiscard]] int64_t cumulative_count(std::size_t idx) const noexcept {
        int64_t sum = 0;
        for (std::size_t i = 0; i <= idx; ++i) {
            sum += bucket_counts_[i].load(std::memory_order_relaxed);
        }
        return sum;
    }

    [[nodiscard]] int64_t sum() const noexcept {
        return sum_.load(std::memory_order_relaxed);
    }

    [[nodiscard]] int64_t total_count() const noexcept {
        int64_t total = 0;
        for (const auto& bc : bucket_counts_) {
            total += bc.load(std::memory_order_relaxed);
        }
        return total;
    }

    [[nodiscard]] std::size_t num_buckets() const noexcept {
        return upper_bounds_.size();
    }

    [[nodiscard]] int64_t upper_bound(std::size_t idx) const noexcept {
        return upper_bounds_[idx];
    }

    // Generate upper bounds: min, min*2, min*4, ..., INT64_MAX
    static std::vector<int64_t> make_bounds(int64_t min_upper_bound, std::size_t count) {
        std::vector<int64_t> bounds;
        bounds.reserve(count);
        int64_t val = min_upper_bound;
        for (std::size_t i = 0; i + 1 < count; ++i) {
            bounds.push_back(val);
            val *= 2;
        }
        bounds.push_back(INT64_MAX); // +Inf
        return bounds;
    }

private:
    std::vector<int64_t> upper_bounds_;
    std::vector<std::atomic<int64_t>> bucket_counts_;
    std::atomic<int64_t> sum_{0};
};

} // namespace prometheus
