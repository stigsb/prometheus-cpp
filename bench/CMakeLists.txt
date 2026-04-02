add_executable(prometheus_bench bench.cpp)
target_link_libraries(prometheus_bench
    PRIVATE
        prometheus::client
        benchmark::benchmark
        benchmark::benchmark_main
)
target_compile_features(prometheus_bench PRIVATE cxx_std_23)
target_compile_options(prometheus_bench PRIVATE -O2)
