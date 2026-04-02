cmake_minimum_required(VERSION 3.25)

project(
    prometheus-client-cpp
    VERSION 0.1.0
    DESCRIPTION "High-performance header-only C++23 Prometheus client library"
    LANGUAGES CXX
)

# ── Options ───────────────────────────────────────────────────────────────────
option(PROMETHEUS_BUILD_TESTS       "Build unit tests"   ${PROJECT_IS_TOP_LEVEL})
option(PROMETHEUS_BUILD_EXAMPLES   "Build examples"     ${PROJECT_IS_TOP_LEVEL})
option(PROMETHEUS_BUILD_BENCHMARKS "Build benchmarks"   OFF)
option(PROMETHEUS_ENABLE_ASAN    "Enable AddressSanitizer (Debug only)" OFF)
option(PROMETHEUS_ENABLE_TSAN    "Enable ThreadSanitizer (Debug only)"  OFF)

# ── Header-only interface library ─────────────────────────────────────────────
add_library(prometheus-client-cpp INTERFACE)
add_library(prometheus::client ALIAS prometheus-client-cpp)

target_include_directories(prometheus-client-cpp
    INTERFACE
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<INSTALL_INTERFACE:include>
)

target_compile_features(prometheus-client-cpp INTERFACE cxx_std_23)

# ── Sanitizer helper (applied to test/example executables, not the interface) ─
function(prometheus_apply_sanitizers target)
    if(PROMETHEUS_ENABLE_ASAN AND CMAKE_BUILD_TYPE STREQUAL "Debug")
        target_compile_options(${target} PRIVATE -fsanitize=address,undefined -fno-omit-frame-pointer)
        target_link_options(${target}    PRIVATE -fsanitize=address,undefined)
    endif()
    if(PROMETHEUS_ENABLE_TSAN AND CMAKE_BUILD_TYPE STREQUAL "Debug")
        target_compile_options(${target} PRIVATE -fsanitize=thread)
        target_link_options(${target}    PRIVATE -fsanitize=thread)
    endif()
endfunction()

# ── Common compiler warnings for first-party targets ──────────────────────────
function(prometheus_set_warnings target)
    target_compile_options(${target} PRIVATE
        $<$<CXX_COMPILER_ID:Clang,AppleClang>:
            -Wall -Wextra -Wpedantic
            -Wno-unused-parameter
            -Wno-gnu-zero-variadic-macro-arguments
        >
        $<$<CXX_COMPILER_ID:GNU>:
            -Wall -Wextra -Wpedantic
            -Wno-unused-parameter
        >
        $<$<CXX_COMPILER_ID:MSVC>:
            /W4 /WX /wd4100
        >
    )
endfunction()

# ── Dependencies ──────────────────────────────────────────────────────────────
include(cmake/Dependencies.cmake)

# ── Tests ─────────────────────────────────────────────────────────────────────
if(PROMETHEUS_BUILD_TESTS)
    enable_testing()
    add_subdirectory(tests)
endif()

# ── Examples ──────────────────────────────────────────────────────────────────
if(PROMETHEUS_BUILD_EXAMPLES)
    add_subdirectory(examples)
endif()

# ── Benchmarks ────────────────────────────────────────────────────────────────
if(PROMETHEUS_BUILD_BENCHMARKS)
    add_subdirectory(bench)
endif()

# ── Install rules ─────────────────────────────────────────────────────────────
include(GNUInstallDirs)
include(CMakePackageConfigHelpers)

install(
    TARGETS prometheus-client-cpp
    EXPORT  prometheus-client-cpp-targets
)

install(
    DIRECTORY include/
    DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}
)

install(
    EXPORT      prometheus-client-cpp-targets
    FILE        prometheus-client-cpp-targets.cmake
    NAMESPACE   prometheus::
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/prometheus-client-cpp
)

configure_package_config_file(
    cmake/prometheus-client-cpp-config.cmake.in
    ${CMAKE_CURRENT_BINARY_DIR}/prometheus-client-cpp-config.cmake
    INSTALL_DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/prometheus-client-cpp
)

write_basic_package_version_file(
    ${CMAKE_CURRENT_BINARY_DIR}/prometheus-client-cpp-config-version.cmake
    VERSION       ${PROJECT_VERSION}
    COMPATIBILITY SameMajorVersion
)

install(
    FILES
        ${CMAKE_CURRENT_BINARY_DIR}/prometheus-client-cpp-config.cmake
        ${CMAKE_CURRENT_BINARY_DIR}/prometheus-client-cpp-config-version.cmake
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/prometheus-client-cpp
)
