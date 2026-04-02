#pragma once

#include <algorithm>
#include <atomic>
#include <cstddef>
#include <cstdint>
#include <climits>
#include <vector>
#include <prometheus/detail/cache_line.hpp>

namespace prometheus {

// ── Histogram — runtime-sized, heap-allocated ───────────────────────────────

class Histogram {
public:
    explicit Histogram(std::vector<int64_t> upper_bounds)
        : upper_bounds_(std::move(upper_bounds))
        , bucket_counts_(upper_bounds_.size())
    {}

    // Hot path: binary search + 2 atomic ops.
    // Since the last bound is always INT64_MAX and int64_t <= INT64_MAX,
    // lower_bound always finds a valid bucket — no end() check needed.
    void observe(int64_t value) noexcept {
        auto it = std::lower_bound(upper_bounds_.begin(), upper_bounds_.end(), value);
        auto idx = static_cast<std::size_t>(it - upper_bounds_.begin());
        bucket_counts_[idx].fetch_add(1, std::memory_order_relaxed);
        sum_.fetch_add(value, std::memory_order_relaxed);
    }

    [[nodiscard]] int64_t bucket_count(std::size_t idx) const noexcept {
        return bucket_counts_[idx].load(std::memory_order_relaxed);
    }

    [[nodiscard]] int64_t cumulative_count(std::size_t idx) const noexcept {
        int64_t sum = 0;
        for (std::size_t i = 0; i <= idx; ++i)
            sum += bucket_counts_[i].load(std::memory_order_relaxed);
        return sum;
    }

    [[nodiscard]] int64_t sum() const noexcept {
        return sum_.load(std::memory_order_relaxed);
    }

    [[nodiscard]] int64_t total_count() const noexcept {
        int64_t total = 0;
        for (const auto& bc : bucket_counts_)
            total += bc.load(std::memory_order_relaxed);
        return total;
    }

    [[nodiscard]] std::size_t num_buckets() const noexcept {
        return upper_bounds_.size();
    }

    [[nodiscard]] int64_t upper_bound(std::size_t idx) const noexcept {
        return upper_bounds_[idx];
    }

    [[nodiscard]] const std::vector<int64_t>& bounds() const noexcept {
        return upper_bounds_;
    }

    // Merge support: add delta to a specific bucket (used by LocalHistogram)
    void add_to_bucket(std::size_t idx, int64_t delta) noexcept {
        bucket_counts_[idx].fetch_add(delta, std::memory_order_relaxed);
    }

    void add_to_sum(int64_t delta) noexcept {
        sum_.fetch_add(delta, std::memory_order_relaxed);
    }

    // Power-of-two bounds: {min, min*2, ..., INT64_MAX}, total count buckets
    static constexpr std::vector<int64_t> make_bounds(int64_t min, std::size_t count) {
        std::vector<int64_t> bounds;
        bounds.reserve(count);
        int64_t val = min;
        for (std::size_t i = 0; i + 1 < count; ++i) {
            bounds.push_back(val);
            val *= 2;
        }
        bounds.push_back(INT64_MAX);
        return bounds;
    }

    // Custom boundaries — appends +Inf if not already present
    static constexpr std::vector<int64_t> make_bounds(std::vector<int64_t> boundaries) {
        if (boundaries.empty() || boundaries.back() != INT64_MAX)
            boundaries.push_back(INT64_MAX);
        return boundaries;
    }

private:
    std::vector<int64_t> upper_bounds_;
    std::vector<std::atomic<int64_t>> bucket_counts_;
    alignas(detail::cache_line_size) std::atomic<int64_t> sum_{0};
};

// Free function: make_bounds<N>(min) — power-of-two, N buckets total
template <std::size_t N>
std::vector<int64_t> make_bounds(int64_t min) {
    return Histogram::make_bounds(min, N);
}

// ── Local accumulator for batch observation (no atomics on hot path) ────────

class LocalHistogram {
public:
    // Borrows upper_bounds_ by reference — histogram must outlive this object
    explicit LocalHistogram(const Histogram& target)
        : upper_bounds_(target.bounds())
        , counts_(target.num_buckets(), 0)
        , sum_{0}
    {}

    // Hot path: pure local writes, no atomics, no cache line bouncing
    void observe(int64_t value) noexcept {
        auto it = std::lower_bound(upper_bounds_.begin(), upper_bounds_.end(), value);
        auto idx = static_cast<std::size_t>(it - upper_bounds_.begin());
        counts_[idx]++;
        sum_ += value;
    }

    // Merge accumulated counts into the real histogram (N+1 atomic ops)
    void merge_into(Histogram& target) noexcept {
        for (std::size_t i = 0; i < counts_.size(); ++i) {
            if (counts_[i] != 0) {
                target.add_to_bucket(i, counts_[i]);
                counts_[i] = 0;
            }
        }
        if (sum_ != 0) {
            target.add_to_sum(sum_);
            sum_ = 0;
        }
    }

    // Reset without merging (discard accumulated data)
    void reset() noexcept {
        std::fill(counts_.begin(), counts_.end(), 0);
        sum_ = 0;
    }

private:
    const std::vector<int64_t>& upper_bounds_;  // borrows from histogram
    std::vector<int64_t> counts_;
    int64_t sum_;
};

} // namespace prometheus
