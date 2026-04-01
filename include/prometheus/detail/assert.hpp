#pragma once

#ifndef NDEBUG
#include <stdexcept>
#include <string>

#define PROMETHEUS_ASSERT(cond)                                              \
    do {                                                                      \
        if (!(cond)) {                                                        \
            throw std::runtime_error(                                         \
                std::string("prometheus assertion failed: ") + #cond +        \
                " at " + __FILE__ + ":" + std::to_string(__LINE__));          \
        }                                                                     \
    } while (false)
#else
#define PROMETHEUS_ASSERT(cond) do { (void)(cond); } while (false)
#endif
