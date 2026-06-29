# prometheus-cpp

High-performance header-only C++23 Prometheus client library (stigsb/prometheus-cpp).

- Values are `int64_t` atomics, not `double` — single `LOCK XADD` on x86, no CAS loops
- Labels are compile-time typed structs via `PROMETHEUS_DEFINE_LABELS` macro
- Zero allocation on the hot path; `get()` handles should be cached

## Building

```bash
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
# Tests:
cmake -B build -DCMAKE_BUILD_TYPE=Debug -DPROMETHEUS_BUILD_TESTS=ON && cmake --build build && ctest --test-dir build --output-on-failure
```

## Available skills

- `/prometheus-metrics` — Add, audit, and maintain Prometheus metrics in apps using this library.
  Install in your project: `cp -r .claude/skills/prometheus-metrics/ your-project/.claude/skills/`
