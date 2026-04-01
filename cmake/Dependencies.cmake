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
