add_executable(prometheus_bench bench.cpp)
target_link_libraries(prometheus_bench
    PRIVATE
        prometheus::client
        benchmark::benchmark
        benchmark::benchmark_main
)
target_compile_features(prometheus_bench PRIVATE cxx_std_23)
target_compile_options(prometheus_bench PRIVATE -O2)

# ── Comparison benchmarks (stigsb vs jupp0r) ─────────────────────────────────
if(PROMETHEUS_BUILD_COMPARISON_BENCH)

    # stigsb benchmark object library (requires C++23)
    add_library(bench_stigsb_obj OBJECT bench_stigsb.cpp)
    target_link_libraries(bench_stigsb_obj
        PUBLIC
            prometheus::client
            benchmark::benchmark
    )
    target_compile_features(bench_stigsb_obj PRIVATE cxx_std_23)
    target_compile_options(bench_stigsb_obj PRIVATE -O2)

    # jupp0r benchmark object library (C++17 sufficient)
    add_library(bench_jupp0r_obj OBJECT bench_jupp0r.cpp)
    target_link_libraries(bench_jupp0r_obj
        PUBLIC
            prometheus-cpp::core
            benchmark::benchmark
    )
    target_compile_features(bench_jupp0r_obj PRIVATE cxx_std_17)
    target_compile_options(bench_jupp0r_obj PRIVATE -O2)

    # Combined comparison executable
    add_executable(prometheus_bench_comparison bench_comparison_main.cpp)
    target_link_libraries(prometheus_bench_comparison
        PRIVATE
            bench_stigsb_obj
            bench_jupp0r_obj
            benchmark::benchmark
            benchmark::benchmark_main
    )
    target_compile_features(prometheus_bench_comparison PRIVATE cxx_std_17)
    target_compile_options(prometheus_bench_comparison PRIVATE -O2)

endif() # PROMETHEUS_BUILD_COMPARISON_BENCH
