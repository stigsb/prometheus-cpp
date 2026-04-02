#pragma once

#include <prometheus/metric_family.hpp>
#include <prometheus/label_mask.hpp>
#include <prometheus/detail/assert.hpp>
#include <prometheus/detail/check_names.hpp>

#include <concepts>
#include <cstddef>
#include <cstdint>
#include <memory>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>

namespace prometheus {

class Registry; // defined in registry.hpp

// Fluent builder returned by Registry::counter<LT>(), ::gauge<LT>(), ::histogram<LT>().
// Call .required()/.optional()/.const_label()/.buckets()/.scale() then .build().
template <typename LabelTraits, typename MetricT>
class MetricFamilyBuilder {
public:
    MetricFamilyBuilder(std::string name, std::string help, Registry& reg)
        : name_(std::move(name))
        , help_(std::move(help))
        , registry_(reg)
    {
        PROMETHEUS_ASSERT(detail::check_metric_name(name_));
    }

    auto& required(std::same_as<typename LabelTraits::Key> auto... keys) {
        if constexpr (sizeof...(keys) > 0)
            required_mask_ |= (static_cast<uint64_t>(keys) | ...);
        return *this;
    }

    auto& optional(std::same_as<typename LabelTraits::Key> auto... keys) {
        if constexpr (sizeof...(keys) > 0)
            optional_mask_ |= (static_cast<uint64_t>(keys) | ...);
        return *this;
    }

    auto& const_label(std::string k, std::string v) {
        PROMETHEUS_ASSERT(detail::check_label_name(k));
        const_labels_.emplace_back(std::move(k), std::move(v));
        return *this;
    }

    auto& buckets(int64_t min, std::size_t count)
        requires std::same_as<MetricT, Histogram>
    {
        bucket_min_   = min;
        bucket_count_ = count;
        return *this;
    }

    auto& buckets(std::vector<int64_t> boundaries)
        requires std::same_as<MetricT, Histogram>
    {
        explicit_bounds_ = std::move(boundaries);
        return *this;
    }

    auto& scale(double s) {
        scale_ = s;
        return *this;
    }

    // Finalise and register with the registry.
    // Returns a stable reference valid for the lifetime of the registry.
    // Definition is in registry.hpp (after Registry is complete).
    MetricFamily<LabelTraits, MetricT>& build();

private:
    std::string name_;
    std::string help_;
    Registry&   registry_;
    uint64_t    required_mask_{};
    uint64_t    optional_mask_{};
    std::vector<std::pair<std::string,std::string>> const_labels_;
    double      scale_{1.0};
    int64_t     bucket_min_{100};
    std::size_t bucket_count_{8};
    std::vector<int64_t> explicit_bounds_;
};

} // namespace prometheus
