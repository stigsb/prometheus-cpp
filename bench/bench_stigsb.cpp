#include <benchmark/benchmark.h>
#include <prometheus/prometheus.hpp>
#include <string>

// Define labels for comparison benchmarks
PROMETHEUS_DEFINE_LABELS(CmpLabels,
    (service, std::string),
    (method,  std::string),
    (code,    uint32_t)
);

// 1. Single-threaded counter increment (hot path, handle pre-obtained)
static void BM_Stigsb_CounterInc(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.counter<CmpLabels>("stigsb_counter", "bench")
        .required(CmpLabels::Key::service, CmpLabels::Key::method)
        .build();
    auto& c = fam.get({.service = "api", .method = "GET"});
    for (auto _ : state) {
        c.inc();
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Stigsb_CounterInc);

// 2. Multi-threaded counter increment
static void BM_Stigsb_CounterInc_MT(benchmark::State& state) {
    static prometheus::Registry* reg = nullptr;
    static prometheus::Counter* ctr = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        auto& fam = reg->counter<CmpLabels>("stigsb_counter_mt", "bench")
            .required(CmpLabels::Key::service, CmpLabels::Key::method)
            .build();
        ctr = &fam.get({.service = "api", .method = "GET"});
    }

    for (auto _ : state) {
        ctr->inc();
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        delete reg;
        reg = nullptr;
    }
}
BENCHMARK(BM_Stigsb_CounterInc_MT)->ThreadRange(1, 8)->UseRealTime();

// 3. Single-threaded histogram observe
static void BM_Stigsb_HistogramObserve(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<CmpLabels>("stigsb_hist", "bench")
        .required(CmpLabels::Key::service)
        .buckets(1, 10)  // 1, 2, 4, ..., 512, +Inf
        .build();
    auto& h = fam.get({.service = "api"});
    int64_t v = 0;
    for (auto _ : state) {
        h.observe(v % 600);
        v++;
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Stigsb_HistogramObserve);

// 4. get() + inc() combined (map lookup + atomic)
static void BM_Stigsb_GetAndInc(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.counter<CmpLabels>("stigsb_get_inc", "bench")
        .required(CmpLabels::Key::service, CmpLabels::Key::method)
        .build();
    // Pre-create
    fam.get({.service = "api", .method = "GET"});

    for (auto _ : state) {
        fam.get({.service = "api", .method = "GET"}).inc();
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Stigsb_GetAndInc);

// 5. Registry serialize (1 counter family, 4 label combos)
static void BM_Stigsb_Serialize(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.counter<CmpLabels>("stigsb_ser_counter", "bench")
        .required(CmpLabels::Key::service, CmpLabels::Key::method, CmpLabels::Key::code)
        .build();
    fam.get({.service = "web", .method = "GET",  .code = 200u}).inc(100);
    fam.get({.service = "web", .method = "POST", .code = 200u}).inc(50);
    fam.get({.service = "api", .method = "GET",  .code = 200u}).inc(200);
    fam.get({.service = "api", .method = "GET",  .code = 500u}).inc(3);

    for (auto _ : state) {
        auto out = reg.serialize();
        benchmark::DoNotOptimize(out);
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Stigsb_Serialize);
