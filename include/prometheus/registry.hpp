#pragma once

#include <prometheus/metric_family_builder.hpp>
#include <prometheus/metric_family.hpp>
#include <prometheus/counter.hpp>
#include <prometheus/gauge.hpp>
#include <prometheus/histogram.hpp>
#include <prometheus/text_serializer.hpp>

#include <memory>
#include <shared_mutex>
#include <sstream>
#include <string>
#include <vector>

namespace prometheus {

class Registry {
public:
    // --- Builder entry points ---

    template <typename LabelTraits>
    MetricFamilyBuilder<LabelTraits, Counter>
    counter(std::string name, std::string help) {
        return {std::move(name), std::move(help), *this};
    }

    template <typename LabelTraits>
    MetricFamilyBuilder<LabelTraits, Gauge>
    gauge(std::string name, std::string help) {
        return {std::move(name), std::move(help), *this};
    }

    template <typename LabelTraits>
    MetricFamilyBuilder<LabelTraits, Histogram>
    histogram(std::string name, std::string help) {
        return {std::move(name), std::move(help), *this};
    }

    // Called by MetricFamilyBuilder::build().
    // Takes ownership of the family and returns a stable reference.
    template <typename LabelTraits, typename MetricT>
    MetricFamily<LabelTraits, MetricT>&
    register_family(std::unique_ptr<MetricFamily<LabelTraits, MetricT>> family) {
        auto& ref = *family;
        std::unique_lock lock(mutex_);
        families_.push_back(std::move(family));
        return ref;
    }

    // --- Serialization ---

    void serialize(std::ostream& out) const {
        TextSerializer ser(out);
        std::shared_lock lock(mutex_);
        for (const auto& f : families_) {
            f->collect(ser);
        }
    }

    std::string serialize() const {
        std::ostringstream oss;
        serialize(oss);
        return oss.str();
    }

private:
    mutable std::shared_mutex mutex_;
    std::vector<std::unique_ptr<Collectable>> families_;
};

// --- MetricFamilyBuilder::build() --- defined here so Registry is complete ---

template <typename LabelTraits, typename MetricT>
MetricFamily<LabelTraits, MetricT>&
MetricFamilyBuilder<LabelTraits, MetricT>::build() {
    auto family = std::make_unique<MetricFamily<LabelTraits, MetricT>>(
        std::move(name_),
        std::move(help_),
        required_mask_,
        optional_mask_,
        std::move(const_labels_),
        scale_,
        bucket_min_,
        bucket_count_);
    return registry_.register_family(std::move(family));
}

} // namespace prometheus
