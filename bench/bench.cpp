#include <benchmark/benchmark.h>
#include <prometheus/prometheus.hpp>
#include <string>

// Define labels for benchmarks
PROMETHEUS_DEFINE_LABELS(BenchLabels,
    (service, std::string_view),
    (method,  std::string_view),
    (code,    uint32_t)
);

// ============================================================
// Counter/Gauge increment with EXISTING labels (hot path)
// ============================================================

// Single-threaded baseline: counter increment
static void BM_CounterInc(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.counter<BenchLabels>("bench_counter", "bench")
        .required(BenchLabels::Key::service, BenchLabels::Key::method)
        .build();
    auto& c = fam.get({.service = "api", .method = "GET"});
    for (auto _ : state) {
        c.inc();
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_CounterInc);

// Multi-threaded counter increment — same metric handle, N threads
static void BM_CounterInc_MT(benchmark::State& state) {
    // Use a static registry so all threads share the same metric
    static prometheus::Registry* reg = nullptr;
    static prometheus::MetricFamily<BenchLabels, prometheus::Counter>* fam = nullptr;
    static prometheus::Counter* ctr = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        fam = &reg->counter<BenchLabels>("bench_counter_mt", "bench")
            .required(BenchLabels::Key::service, BenchLabels::Key::method)
            .build();
        ctr = &fam->get({.service = "api", .method = "GET"});
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
BENCHMARK(BM_CounterInc_MT)->ThreadRange(1, 16)->UseRealTime();

// Counter increment with scale (to_double exercised at collection, but inc is same)
// Actually, scale only matters at collection time, not at inc() time.
// The inc() is always int64 fetch_add regardless of scale.
// So let's benchmark inc with different delta sizes to show it doesn't matter.
static void BM_CounterIncDelta(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.counter<BenchLabels>("bench_counter_delta", "bench")
        .required(BenchLabels::Key::service)
        .build();
    auto& c = fam.get({.service = "api"});
    const int64_t delta = state.range(0);
    for (auto _ : state) {
        c.inc(delta);
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_CounterIncDelta)->Arg(1)->Arg(1000)->Arg(1000000);

// Gauge set
static void BM_GaugeSet(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.gauge<BenchLabels>("bench_gauge", "bench")
        .required(BenchLabels::Key::service)
        .build();
    auto& g = fam.get({.service = "api"});
    int64_t v = 0;
    for (auto _ : state) {
        g.set(v++);
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_GaugeSet);

// Gauge inc (multi-threaded)
static void BM_GaugeInc_MT(benchmark::State& state) {
    static prometheus::Registry* reg = nullptr;
    static prometheus::Gauge* gauge = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        auto& fam = reg->gauge<BenchLabels>("bench_gauge_mt", "bench")
            .required(BenchLabels::Key::service)
            .build();
        gauge = &fam.get({.service = "api"});
    }

    for (auto _ : state) {
        gauge->inc();
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        delete reg;
        reg = nullptr;
    }
}
BENCHMARK(BM_GaugeInc_MT)->ThreadRange(1, 16)->UseRealTime();

// ============================================================
// Histogram observe with EXISTING labels
// ============================================================

// Small bucket set (4 buckets: 100, 200, 400, +Inf)
static void BM_HistogramObserve_SmallBuckets(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<BenchLabels>("bench_hist_small", "bench")
        .required(BenchLabels::Key::service)
        .buckets(100, 4)
        .build();
    auto& h = fam.get({.service = "api"});
    int64_t v = 0;
    for (auto _ : state) {
        h.observe(v % 500);
        v++;
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_HistogramObserve_SmallBuckets);

// Large bucket set (20 buckets)
static void BM_HistogramObserve_LargeBuckets(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<BenchLabels>("bench_hist_large", "bench")
        .required(BenchLabels::Key::service)
        .buckets(1, 20)  // 1, 2, 4, 8, ... 2^18, +Inf
        .build();
    auto& h = fam.get({.service = "api"});
    int64_t v = 0;
    for (auto _ : state) {
        h.observe(v % 300000);
        v++;
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_HistogramObserve_LargeBuckets);

// ── Static Histogram<N> variants ──────────────────────────────────────────

static void BM_StaticHistogramObserve_SmallBuckets(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<BenchLabels, 4>("bench_shist_small", "bench")
        .required(BenchLabels::Key::service)
        .bounds(prometheus::make_bounds<4>(100))
        .build();
    auto& h = fam.get({.service = "api"});
    int64_t v = 0;
    for (auto _ : state) {
        h.observe(v % 500);
        v++;
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_StaticHistogramObserve_SmallBuckets);

static void BM_StaticHistogramObserve_LargeBuckets(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.histogram<BenchLabels, 20>("bench_shist_large", "bench")
        .required(BenchLabels::Key::service)
        .bounds(prometheus::make_bounds<20>(1))
        .build();
    auto& h = fam.get({.service = "api"});
    int64_t v = 0;
    for (auto _ : state) {
        h.observe(v % 300000);
        v++;
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_StaticHistogramObserve_LargeBuckets);

static void BM_StaticHistogramObserve_SmallBuckets_MT(benchmark::State& state) {
    static prometheus::Registry* reg = nullptr;
    static prometheus::Histogram<4>* hist = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        auto& fam = reg->histogram<BenchLabels, 4>("bench_shist_small_mt", "bench")
            .required(BenchLabels::Key::service)
            .bounds(prometheus::make_bounds<4>(100))
            .build();
        hist = &fam.get({.service = "api"});
    }

    int64_t v = state.thread_index();
    for (auto _ : state) {
        hist->observe(v % 500);
        v++;
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        delete reg;
        reg = nullptr;
    }
}
BENCHMARK(BM_StaticHistogramObserve_SmallBuckets_MT)->ThreadRange(1, 16)->UseRealTime();

static void BM_StaticHistogramObserve_LargeBuckets_MT(benchmark::State& state) {
    static prometheus::Registry* reg = nullptr;
    static prometheus::Histogram<20>* hist = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        auto& fam = reg->histogram<BenchLabels, 20>("bench_shist_large_mt", "bench")
            .required(BenchLabels::Key::service)
            .bounds(prometheus::make_bounds<20>(1))
            .build();
        hist = &fam.get({.service = "api"});
    }

    int64_t v = state.thread_index();
    for (auto _ : state) {
        hist->observe(v % 300000);
        v++;
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        delete reg;
        reg = nullptr;
    }
}
BENCHMARK(BM_StaticHistogramObserve_LargeBuckets_MT)->ThreadRange(1, 16)->UseRealTime();

// Histogram observe multi-threaded (small buckets)
static void BM_HistogramObserve_SmallBuckets_MT(benchmark::State& state) {
    static prometheus::Registry* reg = nullptr;
    static prometheus::DynamicHistogram* hist = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        auto& fam = reg->histogram<BenchLabels>("bench_hist_small_mt", "bench")
            .required(BenchLabels::Key::service)
            .buckets(100, 4)
            .build();
        hist = &fam.get({.service = "api"});
    }

    int64_t v = state.thread_index();
    for (auto _ : state) {
        hist->observe(v % 500);
        v++;
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        delete reg;
        reg = nullptr;
    }
}
BENCHMARK(BM_HistogramObserve_SmallBuckets_MT)->ThreadRange(1, 16)->UseRealTime();

// Histogram observe multi-threaded (large buckets)
static void BM_HistogramObserve_LargeBuckets_MT(benchmark::State& state) {
    static prometheus::Registry* reg = nullptr;
    static prometheus::DynamicHistogram* hist = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        auto& fam = reg->histogram<BenchLabels>("bench_hist_large_mt", "bench")
            .required(BenchLabels::Key::service)
            .buckets(1, 20)
            .build();
        hist = &fam.get({.service = "api"});
    }

    int64_t v = state.thread_index();
    for (auto _ : state) {
        hist->observe(v % 300000);
        v++;
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        delete reg;
        reg = nullptr;
    }
}
BENCHMARK(BM_HistogramObserve_LargeBuckets_MT)->ThreadRange(1, 16)->UseRealTime();

// ============================================================
// MetricFamily::get() with NEW label combinations (cold path)
// ============================================================

static void BM_MetricFamilyGet_NewLabels(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.counter<BenchLabels>("bench_new_labels", "bench")
        .required(BenchLabels::Key::service, BenchLabels::Key::method)
        .build();

    int i = 0;
    for (auto _ : state) {
        auto svc = "svc_" + std::to_string(i);
        auto method = "m_" + std::to_string(i);
        fam.get({.service = svc, .method = method});
        i++;
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_MetricFamilyGet_NewLabels);

// Get with new labels, multi-threaded
static void BM_MetricFamilyGet_NewLabels_MT(benchmark::State& state) {
    static prometheus::Registry* reg = nullptr;
    static prometheus::MetricFamily<BenchLabels, prometheus::Counter>* fam = nullptr;

    if (state.thread_index() == 0) {
        reg = new prometheus::Registry();
        fam = &reg->counter<BenchLabels>("bench_new_labels_mt", "bench")
            .required(BenchLabels::Key::service, BenchLabels::Key::method)
            .build();
    }

    int i = state.thread_index() * 1000000;
    for (auto _ : state) {
        auto svc = "svc_" + std::to_string(i);
        auto method = "m_" + std::to_string(i);
        fam->get({.service = svc, .method = method});
        i++;
    }
    state.SetItemsProcessed(state.iterations());

    if (state.thread_index() == 0) {
        delete reg;
        reg = nullptr;
    }
}
BENCHMARK(BM_MetricFamilyGet_NewLabels_MT)->ThreadRange(1, 16)->UseRealTime();

// ============================================================
// MetricFamily::get() with EXISTING labels (lookup, no insert)
// ============================================================

static void BM_MetricFamilyGet_ExistingLabels(benchmark::State& state) {
    prometheus::Registry reg;
    auto& fam = reg.counter<BenchLabels>("bench_existing_labels", "bench")
        .required(BenchLabels::Key::service, BenchLabels::Key::method)
        .build();
    // Pre-create the metric
    fam.get({.service = "api", .method = "GET"});

    for (auto _ : state) {
        fam.get({.service = "api", .method = "GET"});
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_MetricFamilyGet_ExistingLabels);

// Serialization benchmark
static void BM_Serialize(benchmark::State& state) {
    prometheus::Registry reg;
    auto& counters = reg.counter<BenchLabels>("bench_ser_counter", "bench")
        .required(BenchLabels::Key::service, BenchLabels::Key::method, BenchLabels::Key::code)
        .build();
    // Create 100 label combinations
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            auto svc = "svc_" + std::to_string(i);
            auto method = "m_" + std::to_string(j);
            counters.get({.service = svc, .method = method, .code = 200u}).inc(1000);
        }
    }
    for (auto _ : state) {
        auto out = reg.serialize();
        benchmark::DoNotOptimize(out);
    }
    state.SetItemsProcessed(state.iterations());
}
BENCHMARK(BM_Serialize);
