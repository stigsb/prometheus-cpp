#pragma once

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
    std::unordered_map<std::string, Entry> instances_;

public:
    // Returns a reference to an existing or newly-created metric.
    // key       – canonical null-separated lookup key
    // display   – formatted label string for exposition
    // factory   – callable() -> unique_ptr<MetricT>
    template <typename Factory>
    MetricT& get_or_create(const std::string& key, std::string display, Factory&& factory) {
        // Fast path: shared lock
        {
            std::shared_lock lock(mutex_);
            auto it = instances_.find(key);
            if (it != instances_.end()) return *it->second.metric;
        }
        // Slow path: exclusive lock + double-check
        std::unique_lock lock(mutex_);
        auto [it, inserted] = instances_.try_emplace(key);
        if (inserted) {
            it->second.display_labels = std::move(display);
            it->second.metric = factory();
        }
        return *it->second.metric;
    }

    // Iterate over all instances; fn(display_labels, metric)
    template <typename Fn>
    void for_each(Fn&& fn) const {
        std::shared_lock lock(mutex_);
        for (const auto& [key, entry] : instances_) {
            fn(entry.display_labels, *entry.metric);
        }
    }
};

} // namespace prometheus::detail
