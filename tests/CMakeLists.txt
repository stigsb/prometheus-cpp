include(GoogleTest)

set(TEST_SOURCES
    test_label_def.cpp
    test_counter.cpp
    test_gauge.cpp
    test_histogram.cpp
    test_metric_family.cpp
    test_registry.cpp
    test_text_serializer.cpp
    test_concurrency.cpp
    test_check_names.cpp
    test_unit.cpp
)

foreach(src IN LISTS TEST_SOURCES)
    get_filename_component(test_name ${src} NAME_WE)
    add_executable(${test_name} ${src})
    target_link_libraries(${test_name}
        PRIVATE
            prometheus::client
            GTest::gtest_main
            GTest::gmock
    )
    target_compile_features(${test_name} PRIVATE cxx_std_23)
    prometheus_set_warnings(${test_name})
    prometheus_apply_sanitizers(${test_name})
    gtest_discover_tests(${test_name})
endforeach()
