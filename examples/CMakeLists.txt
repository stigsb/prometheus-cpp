foreach(example basic_usage http_server_example)
    add_executable(${example} ${example}.cpp)
    target_link_libraries(${example}
        PRIVATE
            prometheus::client
            $<$<TARGET_EXISTS:httplib::httplib>:httplib::httplib>
    )
    target_compile_features(${example} PRIVATE cxx_std_23)
    prometheus_set_warnings(${example})
endforeach()
