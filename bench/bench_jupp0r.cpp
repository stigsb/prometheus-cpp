#include <benchmark/benchmark.h>
#include <prometheus/counter.h>
#include <prometheus/gauge.h>
#include <prometheus/histogram.h>
#include <prometheus/registry.h>
#include <prometheus/text_serializer.h>
#include <memory>
#include <string>
#include <sstream>

// 1. Single-threaded counter increment (hot path, handle pre-obtained)
static void BM_Jupp0r_CounterInc(benchmark::State& state) {
    auto registry = std::make_shared<prometheus::Registry>();
    auto& family = prometheus::BuildCounter()
        .Name("jupp0r_counter")
        .Help("bench")
        .Register(*registry);
    auto& counter = family.Add({{"service", "api"}, {"method", "GET"}});

    for (auto _ : state) {
        counter.Increment();
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Jupp0r_CounterInc);

// 2. Multi-threaded counter increment
static void BM_Jupp0r_CounterInc_MT(benchmark::State& state) {
    static std::shared_ptr<prometheus::Registry> registry;
    static prometheus::Counter* ctr = nullptr;

    if (state.thread_index() == 0) {
        registry = std::make_shared<prometheus::Registry>();
        auto& family = prometheus::BuildCounter()
            .Name("jupp0r_counter_mt")
            .Help("bench")
            .Register(*registry);
        ctr = &family.Add({{"service", "api"}, {"method", "GET"}});
    }

    for (auto _ : state) {
        ctr->Increment();
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        registry.reset();
        ctr = nullptr;
    }
}
BENCHMARK(BM_Jupp0r_CounterInc_MT)->ThreadRange(1, 8)->UseRealTime();

// 3. Single-threaded histogram observe
static void BM_Jupp0r_HistogramObserve(benchmark::State& state) {
    auto registry = std::make_shared<prometheus::Registry>();
    auto& family = prometheus::BuildHistogram()
        .Name("jupp0r_hist")
        .Help("bench")
        .Register(*registry);
    // Equivalent bucket boundaries: 1, 2, 4, 8, ..., 512 (10 buckets)
    auto& hist = family.Add({{"service", "api"}},
        prometheus::Histogram::BucketBoundaries{1, 2, 4, 8, 16, 32, 64, 128, 256, 512});

    double v = 0;
    for (auto _ : state) {
        hist.Observe(static_cast<int>(v) % 600);
        v++;
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Jupp0r_HistogramObserve);

// 4. Add(labels) + Increment() combined (map lookup + atomic)
static void BM_Jupp0r_AddAndInc(benchmark::State& state) {
    auto registry = std::make_shared<prometheus::Registry>();
    auto& family = prometheus::BuildCounter()
        .Name("jupp0r_add_inc")
        .Help("bench")
        .Register(*registry);
    // Pre-create
    family.Add({{"service", "api"}, {"method", "GET"}});

    for (auto _ : state) {
        family.Add({{"service", "api"}, {"method", "GET"}}).Increment();
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Jupp0r_AddAndInc);

// 5. Serialize (1 counter family, 4 label combos)
static void BM_Jupp0r_Serialize(benchmark::State& state) {
    auto registry = std::make_shared<prometheus::Registry>();
    auto& family = prometheus::BuildCounter()
        .Name("jupp0r_ser_counter")
        .Help("bench")
        .Register(*registry);
    family.Add({{"service", "web"}, {"method", "GET"},  {"code", "200"}}).Increment(100);
    family.Add({{"service", "web"}, {"method", "POST"}, {"code", "200"}}).Increment(50);
    family.Add({{"service", "api"}, {"method", "GET"},  {"code", "200"}}).Increment(200);
    family.Add({{"service", "api"}, {"method", "GET"},  {"code", "500"}}).Increment(3);

    prometheus::TextSerializer serializer;

    for (auto _ : state) {
        auto collected = registry->Collect();
        auto out = serializer.Serialize(collected);
        benchmark::DoNotOptimize(out);
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Jupp0r_Serialize);
