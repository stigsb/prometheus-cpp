#pragma once

#ifndef NDEBUG
#include <cstdio>
#include <cstdlib>

#define PROMETHEUS_ASSERT(cond)                                              \
    do {                                                                      \
        if (!(cond)) {                                                        \
            std::fprintf(stderr,                                              \
                "prometheus assertion failed: %s at %s:%d\n",                 \
                #cond, __FILE__, __LINE__);                                   \
            std::abort();                                                     \
        }                                                                     \
    } while (false)
#else
#define PROMETHEUS_ASSERT(cond) do { (void)(cond); } while (false)
#endif
