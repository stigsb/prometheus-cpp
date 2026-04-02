include(FetchContent)

# ── GoogleTest (tests only) ───────────────────────────────────────────────────
if(PROMETHEUS_BUILD_TESTS)
    FetchContent_Declare(
        googletest
        GIT_REPOSITORY https://github.com/google/googletest.git
        GIT_TAG        v1.15.2
        FIND_PACKAGE_ARGS NAMES GTest
    )
    # Prevent GoogleTest from overriding our compiler/linker settings on Windows
    set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
    FetchContent_MakeAvailable(googletest)
endif()

# ── Google Benchmark (benchmarks only) ───────────────────────────────────────
if(PROMETHEUS_BUILD_BENCHMARKS)
  FetchContent_Declare(
    googlebenchmark
    GIT_REPOSITORY https://github.com/google/benchmark.git
    GIT_TAG        v1.9.1
    GIT_SHALLOW    TRUE
  )
  set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "" FORCE)
  set(BENCHMARK_ENABLE_GTEST_TESTS OFF CACHE BOOL "" FORCE)
  FetchContent_MakeAvailable(googlebenchmark)

  # jupp0r/prometheus-cpp for comparison benchmarks
  FetchContent_Declare(
    jupp0r_prometheus
    GIT_REPOSITORY https://github.com/jupp0r/prometheus-cpp.git
    GIT_TAG        v1.3.0
    GIT_SHALLOW    TRUE
  )
  set(ENABLE_PUSH        OFF CACHE BOOL "" FORCE)
  set(ENABLE_COMPRESSION OFF CACHE BOOL "" FORCE)
  set(ENABLE_TESTING     OFF CACHE BOOL "" FORCE)
  set(BUILD_SHARED_LIBS  OFF CACHE BOOL "" FORCE)
  FetchContent_MakeAvailable(jupp0r_prometheus)
endif()

# ── cpp-httplib (examples only, optional) ─────────────────────────────────────
if(PROMETHEUS_BUILD_EXAMPLES)
    FetchContent_Declare(
        httplib
        GIT_REPOSITORY https://github.com/yhirose/cpp-httplib.git
        GIT_TAG        v0.18.0
        FIND_PACKAGE_ARGS NAMES httplib
    )
    FetchContent_MakeAvailable(httplib)
endif()
