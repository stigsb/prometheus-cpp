#pragma once

#include <string>
#include <string_view>
#include <cstdint>

namespace prometheus::detail {

constexpr std::string escape_label_value(std::string_view sv) {
    std::string out;
    out.reserve(sv.size());
    for (char c : sv) {
        switch (c) {
            case '\\': out += "\\\\"; break;
            case '"':  out += "\\\""; break;
            case '\n': out += "\\n";  break;
            default:   out += c;      break;
        }
    }
    return out;
}

// Canonical map key: "key=val\0key2=val2\0" (null-separated, no display formatting)
template <typename LabelTraits>
std::string make_label_key(const typename LabelTraits::LabelSet& ls,
                           typename LabelTraits::Mask allowed_mask) {
    std::string key;
    for (auto k : LabelTraits::all_keys()) {
        auto bit = static_cast<uint64_t>(k);
        if ((allowed_mask & bit) && (LabelTraits::populated_mask(ls) & bit)) {
            key += LabelTraits::key_name(k);
            key += '=';
            key += LabelTraits::format_value(k, ls);
            key += '\0';
        }
    }
    return key;
}

// Display string for exposition: `key="val",key2="val2"` (no braces, no const labels)
template <typename LabelTraits>
std::string make_label_display(const typename LabelTraits::LabelSet& ls,
                               typename LabelTraits::Mask allowed_mask) {
    std::string result;
    for (auto k : LabelTraits::all_keys()) {
        auto bit = static_cast<uint64_t>(k);
        if ((allowed_mask & bit) && (LabelTraits::populated_mask(ls) & bit)) {
            if (!result.empty()) result += ',';
            result += LabelTraits::key_name(k);
            result += "=\"";
            result += escape_label_value(LabelTraits::format_value(k, ls));
            result += '"';
        }
    }
    return result;
}

} // namespace prometheus::detail
