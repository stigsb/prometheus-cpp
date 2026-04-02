#pragma once
#include <string_view>

namespace prometheus::detail {

// Metric names: [a-zA-Z_:][a-zA-Z0-9_:]*
constexpr bool check_metric_name(std::string_view name) noexcept {
    if (name.empty()) return false;
    auto first_ok = [](char c) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_' || c == ':'; };
    auto rest_ok = [](char c) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c == '_' || c == ':'; };
    if (!first_ok(name[0])) return false;
    for (std::size_t i = 1; i < name.size(); ++i)
        if (!rest_ok(name[i])) return false;
    return true;
}

// Label names: [a-zA-Z_][a-zA-Z0-9_]*, must not start with __
constexpr bool check_label_name(std::string_view name) noexcept {
    if (name.empty()) return false;
    if (name.size() >= 2 && name[0] == '_' && name[1] == '_') return false;
    auto first_ok = [](char c) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_'; };
    auto rest_ok = [](char c) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c == '_'; };
    if (!first_ok(name[0])) return false;
    for (std::size_t i = 1; i < name.size(); ++i)
        if (!rest_ok(name[i])) return false;
    return true;
}

} // namespace prometheus::detail
