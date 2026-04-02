#pragma once

#include <cstddef>
#include <memory>
#include <mutex>
#include <shared_mutex>
#include <string>
#include <unordered_map>
#include <vector>

namespace prometheus::detail {

template <typename MetricT>
class MetricStore {
    struct Entry {
        std::string canonical_key;  // null-separated key for collision verification
        std::string display_labels; // e.g. `service="api",method="GET"`
        std::unique_ptr<MetricT> metric;
    };

    mutable std::shared_mutex mutex_;
    std::unordered_map<std::size_t, std::vector<Entry>> buckets_;

public:
    // Returns a reference to an existing or newly-created metric.
    // hash        – precomputed zero-allocation hash of label values
    // make_key    – callable() -> std::string  (canonical key, only called on miss/collision)
    // make_display – callable() -> std::string (display string, only called on insert)
    // factory     – callable() -> unique_ptr<MetricT>
    template <typename KeyFn, typename DisplayFn, typename Factory>
    MetricT& get_or_create(std::size_t hash,
                           KeyFn&& make_key,
                           DisplayFn&& make_display,
                           Factory&& factory) {
        // Fast path: shared lock, hash-only lookup
        {
            std::shared_lock lock(mutex_);
            auto it = buckets_.find(hash);
            if (it != buckets_.end()) {
                auto& vec = it->second;
                if (vec.size() == 1) {
                    // Single entry per hash bucket — collision probability ~1/2^64
                    return *vec[0].metric;
                }
                // Hash collision: fall back to string key comparison
                auto key = make_key();
                for (auto& entry : vec) {
                    if (entry.canonical_key == key) return *entry.metric;
                }
                // Not found in collision bucket — fall through to slow path
            }
        }
        // Slow path: exclusive lock + double-check + insert
        std::unique_lock lock(mutex_);
        auto& vec = buckets_[hash];
        if (!vec.empty()) {
            if (vec.size() == 1) {
                // Re-check: another thread may have just inserted our entry
                return *vec[0].metric;
            }
            auto key = make_key();
            for (auto& entry : vec) {
                if (entry.canonical_key == key) return *entry.metric;
            }
            // Genuine collision with a new label combo
            vec.push_back({std::move(key), make_display(), factory()});
            return *vec.back().metric;
        }
        // First entry for this hash bucket
        vec.push_back({make_key(), make_display(), factory()});
        return *vec.back().metric;
    }

    // Iterate over all instances; fn(display_labels, metric)
    template <typename Fn>
    void for_each(Fn&& fn) const {
        std::shared_lock lock(mutex_);
        for (const auto& [hash, vec] : buckets_) {
            for (const auto& entry : vec) {
                fn(entry.display_labels, *entry.metric);
            }
        }
    }
};

} // namespace prometheus::detail
