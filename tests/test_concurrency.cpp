#include <gtest/gtest.h>
#include <prometheus/prometheus.hpp>
#include <thread>
#include <vector>

PROMETHEUS_DEFINE_LABELS(ConcLabels,
    (service, std::string_view),
    (method,  std::string_view)
);

TEST(ConcurrencyTest, ConcurrentGetAndInc) {
    // Multiple threads getting the same metric handle and incrementing
    prometheus::Registry reg;
    auto& fam = reg.counter<ConcLabels>("conc_counter", "Concurrent counter")
        .required(ConcLabels::Key::service, ConcLabels::Key::method)
        .build();

    constexpr int num_threads = 8;
    constexpr int iters = 100'000;

    std::vector<std::jthread> workers;
    workers.reserve(num_threads);
    for (int i = 0; i < num_threads; ++i) {
        workers.emplace_back([&] {
            // Each thread calls get() every iteration (tests shared_mutex path)
            for (int j = 0; j < iters; ++j) {
                fam.get({.service = "api", .method = "GET"}).inc();
            }
        });
    }
    workers.clear(); // join all

    auto& metric = fam.get({.service = "api", .method = "GET"});
    EXPECT_EQ(metric.load(), static_cast<int64_t>(num_threads) * iters);
}

TEST(ConcurrencyTest, ConcurrentNewLabelCombinations) {
    // Multiple threads creating different label combinations simultaneously
    prometheus::Registry reg;
    auto& fam = reg.counter<ConcLabels>("conc_new_labels", "Concurrent label creation")
        .required(ConcLabels::Key::service, ConcLabels::Key::method)
        .build();

    constexpr int num_threads = 8;
    constexpr int combos_per_thread = 100;

    // Each thread creates unique label combos and increments each once
    std::vector<std::jthread> workers;
    workers.reserve(num_threads);
    for (int t = 0; t < num_threads; ++t) {
        workers.emplace_back([&, t] {
            for (int c = 0; c < combos_per_thread; ++c) {
                auto svc = "svc_" + std::to_string(t);
                auto method = "m_" + std::to_string(c);
                // string_view must outlive the call
                fam.get({.service = svc, .method = method}).inc();
            }
        });
    }
    workers.clear();

    // Verify: serialize should contain all label combinations without crash
    auto out = reg.serialize();
    EXPECT_NE(out.find("# TYPE conc_new_labels counter"), std::string::npos);
}

TEST(ConcurrencyTest, ConcurrentHistogramObserve) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<ConcLabels>("conc_hist", "Concurrent histogram")
        .required(ConcLabels::Key::service)
        .buckets(100, 6)
        .build();

    constexpr int num_threads = 8;
    constexpr int iters = 100'000;

    std::vector<std::jthread> workers;
    workers.reserve(num_threads);
    for (int i = 0; i < num_threads; ++i) {
        workers.emplace_back([&, i] {
            for (int j = 0; j < iters; ++j) {
                fam.get({.service = "api"}).observe(static_cast<int64_t>(j % 500));
            }
        });
    }
    workers.clear();

    auto& h = fam.get({.service = "api"});
    EXPECT_EQ(h.total_count(), static_cast<int64_t>(num_threads) * iters);
}
