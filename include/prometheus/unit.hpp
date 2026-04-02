#pragma once

#include <string_view>

namespace prometheus {

struct Unit {
    std::string_view name;         // human label: "microseconds"
    double           scale;        // multiply stored int64 value by this to get base unit
    std::string_view base_name;    // "seconds", "bytes", "joules"
    std::string_view base_suffix;  // "_seconds", "_bytes" (for reference, not auto-applied)
};

namespace units {

// ── Duration ──────────────────────────────────────────
inline constexpr Unit nanoseconds  {"nanoseconds",  1e-9,  "seconds", "_seconds"};
inline constexpr Unit microseconds {"microseconds", 1e-6,  "seconds", "_seconds"};
inline constexpr Unit milliseconds {"milliseconds", 1e-3,  "seconds", "_seconds"};
inline constexpr Unit seconds      {"seconds",      1.0,   "seconds", "_seconds"};

// ── Data size ─────────────────────────────────────────
inline constexpr Unit bytes     {"bytes",     1.0,       "bytes", "_bytes"};
inline constexpr Unit kilobytes {"kilobytes", 1e3,       "bytes", "_bytes"};
inline constexpr Unit megabytes {"megabytes", 1e6,       "bytes", "_bytes"};
inline constexpr Unit gigabytes {"gigabytes", 1e9,       "bytes", "_bytes"};
inline constexpr Unit kibibytes {"kibibytes", 1024.0,    "bytes", "_bytes"};
inline constexpr Unit mebibytes {"mebibytes", 1048576.0, "bytes", "_bytes"};
inline constexpr Unit gibibytes {"gibibytes", 1073741824.0, "bytes", "_bytes"};

// ── Energy ────────────────────────────────────────────
inline constexpr Unit joules     {"joules",     1.0, "joules", "_joules"};
inline constexpr Unit kilojoules {"kilojoules", 1e3, "joules", "_joules"};
inline constexpr Unit megajoules {"megajoules", 1e6, "joules", "_joules"};

// ── Temperature ───────────────────────────────────────
inline constexpr Unit celsius    {"celsius",    1.0, "celsius",    "_celsius"};
inline constexpr Unit fahrenheit {"fahrenheit", 1.0, "fahrenheit", "_fahrenheit"};
inline constexpr Unit kelvin     {"kelvin",     1.0, "kelvin",     "_kelvin"};

// ── Ratios / rates ────────────────────────────────────
inline constexpr Unit ratio   {"ratio",   1.0,  "ratio", "_ratio"};
inline constexpr Unit percent {"percent", 0.01, "ratio", "_ratio"};

// ── Dimensionless (no unit, scale=1) ──────────────────
inline constexpr Unit none {"", 1.0, "", ""};

// ── Custom unit builder ───────────────────────────────
consteval Unit custom(std::string_view name, double scale = 1.0,
                      std::string_view base_name = "",
                      std::string_view base_suffix = "") {
    return {name, scale, base_name, base_suffix};
}

} // namespace units
} // namespace prometheus
