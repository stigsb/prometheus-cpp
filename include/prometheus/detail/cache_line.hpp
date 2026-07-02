#pragma once

#include <cstddef>

namespace prometheus::detail {

// Cache line size for avoiding false sharing.
//
// Deliberately hard-coded to 64 rather than using
// std::hardware_destructive_interference_size:
//   - 64 is the destructive-interference size on x86-64, ARM64 and POWER, the
//     targets this library supports;
//   - the standard constant is not provided by every standard library and warns
//     about ABI instability on some; and
//   - on libstdc++/aarch64 it evaluates to 256, which over-pads the per-counter
//     and per-histogram-bucket structures, bloating the working set and
//     measurably slowing multithreaded workloads.
// Hard-coding it also removes an include-order hazard: whether the standard
// constant was visible depended on whether <new>/<version> had been included by
// the time this header was processed, so the value could silently differ
// between translation units.
inline constexpr std::size_t cache_line_size = 64;

} // namespace prometheus::detail
