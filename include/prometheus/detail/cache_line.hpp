#pragma once

#include <cstddef>

namespace prometheus::detail {

// Cache line size for avoiding false sharing.
// std::hardware_destructive_interference_size is the standard way (C++17)
// but some implementations don't provide it or warn about ABI instability.
// Fall back to 64, which is correct for x86-64, ARM64, and POWER.
#if defined(__cpp_lib_hardware_interference_size) && __cpp_lib_hardware_interference_size >= 201703L
    inline constexpr std::size_t cache_line_size = std::hardware_destructive_interference_size;
#else
    inline constexpr std::size_t cache_line_size = 64;
#endif

} // namespace prometheus::detail
