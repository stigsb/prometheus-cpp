#pragma once

#include <algorithm>
#include <array>
#include <atomic>
#include <cstddef>
#include <cstdint>
#include <climits>
#include <vector>
#include <prometheus/detail/cache_line.hpp>

namespace prometheus {

// ── Consteval bucket boundary generators ────────────────────────────────────

// Power-of-two: {min, min*2, min*4, ..., INT64_MAX}
template <std::size_t N>
consteval std::array<int64_t, N> make_bounds(int64_t min) {
    std::array<int64_t, N> bounds{};
    int64_t val = min;
    for (std::size_t i = 0; i + 1 < N; ++i) {
        bounds[i] = val;
        val *= 2;
    }
    bounds[N - 1] = INT64_MAX;
    return bounds;
}

// Explicit boundaries + auto-appended +Inf
template <int64_t... Bounds>
consteval auto make_explicit_bounds() {
    constexpr std::size_t N = sizeof...(Bounds) + 1;
    return std::array<int64_t, N>{Bounds..., INT64_MAX};
}

// ── Histogram<N> — compile-time-sized, zero heap allocation ─────────────────

template <std::size_t N>
class Histogram {
    static_assert(N >= 1, "Histogram must have at least 1 bucket (+Inf)");
public:
    static constexpr std::size_t num_buckets = N;

    // Construct from a std::array of upper bounds (last must be INT64_MAX)
    explicit constexpr Histogram(std::array<int64_t, N> upper_bounds)
        : upper_bounds_(upper_bounds), bucket_counts_{} {}

    // Hot path: binary search + 2 atomic ops
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

    [[nodiscard]] constexpr std::size_t num_buckets_runtime() const noexcept {
        return N;
    }

    [[nodiscard]] constexpr int64_t upper_bound(std::size_t idx) const noexcept {
        return upper_bounds_[idx];
    }

private:
    std::array<int64_t, N> upper_bounds_;
    std::array<std::atomic<int64_t>, N> bucket_counts_;
    alignas(detail::cache_line_size) std::atomic<int64_t> sum_{0};
};

// ── DynamicHistogram — runtime-sized, heap-allocated (backward compat) ──────

class DynamicHistogram {
public:
    explicit DynamicHistogram(std::vector<int64_t> upper_bounds)
        : upper_bounds_(std::move(upper_bounds))
        , bucket_counts_(upper_bounds_.size())
    {}

    void observe(int64_t value) noexcept {
        auto it = std::lower_bound(upper_bounds_.begin(), upper_bounds_.end(), value);
        if (it == upper_bounds_.end()) {
            bucket_counts_.back().fetch_add(1, std::memory_order_relaxed);
        } else {
            auto idx = static_cast<std::size_t>(it - upper_bounds_.begin());
            bucket_counts_[idx].fetch_add(1, std::memory_order_relaxed);
        }
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

    [[nodiscard]] std::size_t num_buckets_runtime() const noexcept {
        return upper_bounds_.size();
    }

    [[nodiscard]] int64_t upper_bound(std::size_t idx) const noexcept {
        return upper_bounds_[idx];
    }

    // Helpers for vector-based bounds
    static std::vector<int64_t> make_bounds(std::vector<int64_t> boundaries) {
        if (boundaries.empty() || boundaries.back() != INT64_MAX)
            boundaries.push_back(INT64_MAX);
        return boundaries;
    }

    static std::vector<int64_t> make_bounds(int64_t min, std::size_t count) {
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

private:
    std::vector<int64_t> upper_bounds_;
    std::vector<std::atomic<int64_t>> bucket_counts_;
    alignas(detail::cache_line_size) std::atomic<int64_t> sum_{0};
};

// ── Concept: anything that looks like a histogram ───────────────────────────

template <typename H>
concept HistogramLike = requires(H& h, const H& ch, std::size_t i) {
    h.observe(int64_t{});
    { ch.bucket_count(i) } -> std::same_as<int64_t>;
    { ch.cumulative_count(i) } -> std::same_as<int64_t>;
    { ch.sum() } -> std::same_as<int64_t>;
    { ch.total_count() } -> std::same_as<int64_t>;
    { ch.num_buckets_runtime() } -> std::same_as<std::size_t>;
    { ch.upper_bound(i) } -> std::same_as<int64_t>;
};

} // namespace prometheus
