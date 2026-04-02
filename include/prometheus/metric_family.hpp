#pragma once

#include <prometheus/detail/assert.hpp>
#include <prometheus/detail/label_key.hpp>
#include <prometheus/detail/metric_store.hpp>
#include <prometheus/counter.hpp>
#include <prometheus/gauge.hpp>
#include <prometheus/histogram.hpp>
#include <prometheus/text_serializer.hpp>

#include <climits>
#include <cstddef>
#include <cstdint>
#include <functional>
#include <memory>
#include <string>
#include <string_view>
#include <type_traits>
#include <utility>
#include <vector>

namespace prometheus {

// Type-erased interface implemented by every MetricFamily.
class Collectable {
public:
    virtual ~Collectable() = default;
    virtual void collect(TextSerializer& out) const = 0;
    virtual std::string_view name() const noexcept = 0;
    virtual std::string_view help() const noexcept = 0;
    virtual MetricType type() const noexcept = 0;
};

// A named, typed group of metric instances sharing HELP/TYPE but differing
// in label values.  Instances are created on first get() and cached.
template <typename LabelTraits, typename MetricT>
class MetricFamily : public Collectable {
public:
    MetricFamily(std::string name,
                 std::string help,
                 uint64_t required_mask,
                 uint64_t optional_mask,
                 std::vector<std::pair<std::string,std::string>> const_labels,
                 double scale,
                 std::function<std::unique_ptr<MetricT>()> factory)
        : name_(std::move(name))
        , help_(std::move(help))
        , required_mask_(required_mask)
        , optional_mask_(optional_mask)
        , const_labels_(std::move(const_labels))
        , scale_(scale)
        , factory_(std::move(factory))
    {}

    // Obtain (or create) the metric instance for the given label set.
    // In debug builds, asserts required labels are present and no
    // forbidden labels are supplied.
    MetricT& get(const typename LabelTraits::LabelSet& ls) {
        const uint64_t allowed    = required_mask_ | optional_mask_;
        const uint64_t populated  = LabelTraits::populated_mask(ls);
        PROMETHEUS_ASSERT((populated & required_mask_) == required_mask_);
        PROMETHEUS_ASSERT((populated & ~allowed) == 0u);

        auto hash = detail::make_label_hash<LabelTraits>(ls, allowed);

        return store_.get_or_create(
            hash,
            [&]{ return detail::make_label_key<LabelTraits>(ls, allowed); },
            [&]{ return detail::make_label_display<LabelTraits>(ls, allowed); },
            factory_
        );
    }

    // --- Collectable interface ---

    std::string_view name() const noexcept override { return name_; }
    std::string_view help() const noexcept override { return help_; }

    MetricType type() const noexcept override {
        if constexpr (std::is_same_v<MetricT, Counter>)    return MetricType::Counter;
        else if constexpr (std::is_same_v<MetricT, Gauge>) return MetricType::Gauge;
        else if constexpr (std::is_same_v<MetricT, Histogram>) return MetricType::Histogram;
        else {
            static_assert(sizeof(MetricT) == 0, "Unknown metric type");
            return MetricType::Counter; // unreachable
        }
    }

    void collect(TextSerializer& ser) const override {
        ser.write_header(name_, help_, type());

        if constexpr (std::is_same_v<MetricT, Histogram>) {
            store_.for_each([&](const std::string& dyn, const MetricT& h) {
                const std::size_t n = h.num_buckets();
                int64_t cum = 0;
                for (std::size_t i = 0; i < n; ++i) {
                    cum += h.bucket_count(i);
                    std::string le_val;
                    if (h.upper_bound(i) == INT64_MAX) {
                        le_val = "+Inf";
                    } else {
                        le_val = TextSerializer::format_double(
                            static_cast<double>(h.upper_bound(i)) * scale_);
                    }
                    ser.write_sample(name_ + "_bucket", dyn, const_labels_,
                                     static_cast<double>(cum), "le", le_val);
                }
                ser.write_sample(name_ + "_sum", dyn, const_labels_,
                                 static_cast<double>(h.sum()) * scale_);
                ser.write_sample(name_ + "_count", dyn, const_labels_,
                                 static_cast<double>(h.total_count()));
            });
        } else {
            store_.for_each([&](const std::string& dyn, const MetricT& m) {
                ser.write_sample(name_, dyn, const_labels_, m.to_double(scale_));
            });
        }

        ser.write_newline();
    }

private:
    std::string name_;
    std::string help_;
    uint64_t required_mask_{};
    uint64_t optional_mask_{};
    std::vector<std::pair<std::string,std::string>> const_labels_;
    double scale_{1.0};
    std::function<std::unique_ptr<MetricT>()> factory_;

    detail::MetricStore<MetricT> store_;
};

} // namespace prometheus
