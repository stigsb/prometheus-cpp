#pragma once

#include <prometheus/metric_family.hpp>
#include <prometheus/label_mask.hpp>
#include <prometheus/detail/assert.hpp>
#include <prometheus/detail/check_names.hpp>

#include <concepts>
#include <cstddef>
#include <cstdint>
#include <functional>
#include <memory>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>

namespace prometheus {

class Registry; // defined in registry.hpp

// Fluent builder returned by Registry::counter<LT>(), ::gauge<LT>(), ::histogram<LT>().
// Call .required()/.optional()/.const_label()/.buckets()/.bounds()/.scale() then .build().
template <typename LabelTraits, typename MetricT>
class MetricFamilyBuilder {
public:
    MetricFamilyBuilder(std::string name, std::string help, Registry& reg)
        : name_(std::move(name))
        , help_(std::move(help))
        , registry_(reg)
    {
        PROMETHEUS_ASSERT(detail::check_metric_name(name_));
        // Set up default factory based on type
        if constexpr (!HistogramLike<MetricT>) {
            // Counter, Gauge, etc.
            factory_ = []{ return std::make_unique<MetricT>(); };
        } else if constexpr (std::is_same_v<MetricT, DynamicHistogram>) {
            // Default: 8 power-of-two buckets starting at 100
            factory_ = []{
                return std::make_unique<DynamicHistogram>(
                    DynamicHistogram::make_bounds(100, 8));
            };
        }
        // For Histogram<N>: factory_ is empty until bounds() is called
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

    // DynamicHistogram: power-of-two buckets from min
    auto& buckets(int64_t min, std::size_t count)
        requires std::same_as<MetricT, DynamicHistogram>
    {
        factory_ = [min, count]{
            return std::make_unique<DynamicHistogram>(
                DynamicHistogram::make_bounds(min, count));
        };
        return *this;
    }

    // DynamicHistogram: explicit boundaries
    auto& buckets(std::vector<int64_t> boundaries)
        requires std::same_as<MetricT, DynamicHistogram>
    {
        auto b = DynamicHistogram::make_bounds(std::move(boundaries));
        factory_ = [b = std::move(b)]{
            return std::make_unique<DynamicHistogram>(b);
        };
        return *this;
    }

    // Histogram<N>: compile-time-sized bounds array
    template <std::size_t BucketCount>
    auto& bounds(std::array<int64_t, BucketCount> b)
        requires HistogramLike<MetricT> && (!std::is_same_v<MetricT, DynamicHistogram>)
    {
        factory_ = [b]{ return std::make_unique<MetricT>(b); };
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
    std::function<std::unique_ptr<MetricT>()> factory_;
};

} // namespace prometheus
