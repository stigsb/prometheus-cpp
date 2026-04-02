#pragma once

#include <prometheus/detail/assert.hpp>
#include <prometheus/metric_family_builder.hpp>
#include <prometheus/metric_family.hpp>
#include <prometheus/counter.hpp>
#include <prometheus/gauge.hpp>
#include <prometheus/histogram.hpp>
#include <prometheus/text_serializer.hpp>

#include <cstddef>
#include <memory>
#include <mutex>
#include <shared_mutex>
#include <sstream>
#include <string>
#include <unordered_map>
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

    // Dynamic histogram (backward compat) — called as registry.histogram<AppLabels>(...)
    template <typename LabelTraits>
    MetricFamilyBuilder<LabelTraits, DynamicHistogram>
    histogram(std::string name, std::string help) {
        return {std::move(name), std::move(help), *this};
    }

    // Static histogram — called as registry.histogram<AppLabels, 8>(...)
    template <typename LabelTraits, std::size_t N>
    MetricFamilyBuilder<LabelTraits, Histogram<N>>
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
        auto [it, inserted] = registered_names_.try_emplace(
            std::string(family->name()), family->type());
        if (!inserted) {
            PROMETHEUS_ASSERT(it->second == family->type()
                && "metric family registered with conflicting type");
            PROMETHEUS_ASSERT(false && "duplicate metric family name");
        }
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
    std::unordered_map<std::string, MetricType> registered_names_;
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
        std::move(factory_));
    return registry_.register_family(std::move(family));
}

} // namespace prometheus
