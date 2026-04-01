#pragma once

#include <cstdint>
#include <concepts>

namespace prometheus {

template <typename LabelTraits>
using LabelMask = typename LabelTraits::Mask;

template <typename LabelTraits>
consteval LabelMask<LabelTraits> make_mask(
    std::same_as<typename LabelTraits::Key> auto... keys
) noexcept {
    if constexpr (sizeof...(keys) == 0) {
        return LabelMask<LabelTraits>{0};
    } else {
        return (static_cast<uint64_t>(keys) | ...);
    }
}

} // namespace prometheus
