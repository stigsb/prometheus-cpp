#pragma once

#include <cstddef>
#include <memory>
#include <mutex>
#include <shared_mutex>
#include <string>
#include <unordered_map>

namespace prometheus::detail {

template <typename MetricT>
class MetricStore {
    struct Entry {
        std::string display_labels; // e.g. `service="api",method="GET"`
        std::unique_ptr<MetricT> metric;
    };

    mutable std::shared_mutex mutex_;
    std::unordered_map<std::size_t, Entry> instances_;

public:
    // Returns a reference to an existing or newly-created metric.
    // hash         – precomputed zero-allocation hash of label values
    // make_display – callable() -> std::string  (only called on first insert)
    // factory      – callable() -> unique_ptr<MetricT>
    template <typename DisplayFn, typename Factory>
    MetricT& get_or_create(std::size_t hash,
                           DisplayFn&& make_display,
                           Factory&& factory) {
        // Fast path: shared lock, hash-only lookup — zero allocation
        {
            std::shared_lock lock(mutex_);
            auto it = instances_.find(hash);
            if (it != instances_.end()) return *it->second.metric;
        }
        // Slow path: exclusive lock + double-check + insert
        std::unique_lock lock(mutex_);
        auto [it, inserted] = instances_.try_emplace(hash);
        if (inserted) {
            it->second.display_labels = make_display();
            it->second.metric         = factory();
        }
        return *it->second.metric;
    }

    // Iterate over all instances; fn(display_labels, metric)
    template <typename Fn>
    void for_each(Fn&& fn) const {
        std::shared_lock lock(mutex_);
        for (const auto& [hash, entry] : instances_) {
            fn(entry.display_labels, *entry.metric);
        }
    }
};

} // namespace prometheus::detail
