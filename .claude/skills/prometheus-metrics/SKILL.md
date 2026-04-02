---
name: prometheus-metrics
description: Add, audit, and maintain Prometheus metrics using stigsb/prometheus-cpp. Use when: adding metrics to a C++ app, reviewing existing metric code, fixing Prometheus naming issues, adding histogram buckets, or wiring up a /metrics endpoint.
---

# prometheus-metrics skill

## When this skill activates

- **Explicit**: user invokes `/prometheus-metrics`
- **Auto**: user asks to add, review, or fix Prometheus metrics in C++ code; mentions counters, gauges, histograms, label definitions, or `/metrics` endpoints in the context of this library

## Key rules

1. **One `PROMETHEUS_DEFINE_LABELS` per application** — defines the universe of labels. Put it in a dedicated header (e.g. `labels.hpp`).
2. **Cache `get()` handles** — `family.get({...})` does a hash-map lookup. Call it once at construction/startup and store the reference. Never call `get()` on every request.
3. **Values are `int64_t`** — store in natural integer units (microseconds, bytes, milli-cents). Use `.unit()` to auto-scale to Prometheus base units at scrape time.
4. **Use the Unit system for histograms** — `.unit(prometheus::units::microseconds)` converts stored µs to seconds in output.
5. **`const_label()` for static values** — labels that never change per process (region, instance) go in `.const_label()`, not in the label set.
6. **`LocalHistogram` for batch/high-throughput** — avoids atomic contention; merge when the batch is done.

## Operation 1: Add metrics to an existing codebase

### Step-by-step

1. **Find or create the label definition header**
   - Search for `PROMETHEUS_DEFINE_LABELS` in the project
   - If none exists, create `labels.hpp` — see [examples/labels.hpp.example](examples/labels.hpp.example)
   - Add any new label fields needed for the metrics you're adding

2. **Create or locate the registry**
   ```cpp
   #include <prometheus/prometheus.hpp>
   prometheus::Registry registry;
   ```

3. **Register metric families** using the builder API
   - See [examples/metrics.hpp.example](examples/metrics.hpp.example)
   - Choose the correct type: `registry.counter<L>()`, `registry.gauge<L>()`, `registry.histogram<L>()`
   - Chain: `.required()` / `.optional()` / `.const_label()` / `.buckets()` / `.unit()` / `.build()`
   - `.build()` returns a stable `MetricFamily&` reference

4. **Obtain and cache metric handles**
   ```cpp
   // Do this once (member init, constructor, local static):
   auto& handle = family.get({.service = "api", .method = "GET"});
   // Hot path — single atomic op:
   handle.inc();
   ```

5. **Wire up the `/metrics` endpoint**
   - See [examples/handler.cpp.example](examples/handler.cpp.example)
   - Call `registry.serialize()` → returns `std::string` in Prometheus text format

### Builder API reference

```cpp
// Counter
auto& family = registry.counter<AppLabels>("name_total", "Help text")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .optional(AppLabels::Key::endpoint)
    .const_label("region", "us-east-1")
    .build();

// Gauge
auto& family = registry.gauge<AppLabels>("active_connections", "Help text")
    .required(AppLabels::Key::service)
    .build();

// Histogram — power-of-two buckets
auto& family = registry.histogram<AppLabels>("request_duration_seconds", "Help text")
    .required(AppLabels::Key::service, AppLabels::Key::method)
    .buckets(/*min_upper_bound=*/100, /*count=*/14)   // 100, 200, 400, ... µs
    .unit(prometheus::units::microseconds)             // auto-scales to seconds
    .build();

// Histogram — custom boundaries
auto& family = registry.histogram<AppLabels>("response_size_bytes", "Help text")
    .required(AppLabels::Key::service)
    .buckets(std::vector<int64_t>{128, 256, 512, 1024, 4096, 16384, 65536})
    .unit(prometheus::units::bytes)
    .build();
```

### Metric handle operations

| Type | Operations |
|------|-----------|
| Counter | `inc()`, `inc(int64_t n)` |
| Gauge | `inc()`, `dec()`, `inc(int64_t n)`, `dec(int64_t n)`, `set(int64_t v)` |
| Histogram | `observe(int64_t value)` |

## Operation 2: Audit existing metrics

Run through this checklist when reviewing metric code:

### Naming conventions
- See [reference/naming-conventions.md](reference/naming-conventions.md) for full rules
- Counters must end with `_total`
- Histograms/summaries measuring duration should end with `_seconds` (or use `.unit()`)
- Histograms measuring size should end with `_bytes` (or use `.unit()`)
- All names must be `snake_case`, matching `[a-zA-Z_:][a-zA-Z0-9_:]*`
- Label names must be `snake_case`, matching `[a-zA-Z_][a-zA-Z0-9_]*`, must NOT start with `__`

### Handle caching
- Search for `.get({` calls — each should be cached in a member variable, local static, or constructor
- Flag any `.get({...}).inc()` or `.get({...}).observe()` chains on hot paths — these re-do the hash-map lookup every time

### Label hygiene
- Every label passed in `.get()` should be declared as `.required()` or `.optional()` on the family
- Required labels trigger a debug assertion if missing — verify the call sites supply them
- Static per-process values (region, instance, version) should use `.const_label()`, not be in the label set

### Histogram buckets
- Default is 8 power-of-two buckets from 100 — check if this fits the measured quantity
- Duration histograms: typical web latency needs buckets covering 1ms–10s range
- Size histograms: match expected distribution (e.g. 1KB–100MB for response bodies)
- Too few buckets = poor resolution; too many = high cardinality in TSDB

## Operation 3: Maintain/update metrics

### Add a new label to an existing family
1. Add the field to `PROMETHEUS_DEFINE_LABELS` if it's new
2. Add the key to `.required()` or `.optional()` on the family builder
3. Update all `.get({...})` call sites to include the new label (if required)

### Add a new metric family
1. Choose the metric type (counter/gauge/histogram)
2. Follow naming conventions (see reference)
3. Register via the builder, specifying required/optional labels
4. Cache the handle at construction time
5. Add the hot-path calls (`inc()`, `observe()`, etc.)

### Change histogram bucket boundaries
1. Find the `.buckets(...)` call on the builder
2. For power-of-two: `.buckets(min_upper_bound, count)` — adjust min or count
3. For custom: `.buckets(std::vector<int64_t>{...})` — edit the boundary list
4. Note: `INT64_MAX` is always appended as the `+Inf` bucket automatically

### Add a Unit to a histogram
1. Add `.unit(prometheus::units::microseconds)` (or appropriate unit) to the builder chain
2. This sets the scale factor — stored int64 values are multiplied by `unit.scale` at scrape time
3. Ensure the metric name reflects the base unit (e.g. `_seconds` for duration, `_bytes` for size)
4. Available units: `nanoseconds`, `microseconds`, `milliseconds`, `seconds`, `bytes`, `kilobytes`, `megabytes`, `gigabytes`, `kibibytes`, `mebibytes`, `gibibytes`, `joules`, `kilojoules`, `megajoules`, `celsius`, `fahrenheit`, `kelvin`, `ratio`, `percent`, `none`
5. Custom units: `constexpr auto millivolts = prometheus::units::custom("millivolts", 0.001, "volts", "_volts");`

### Use LocalHistogram for high-throughput batches
```cpp
auto& hist_handle = latency.get({.service = "api", .method = "POST"});

// Thread-local accumulator — no atomics on hot path
prometheus::LocalHistogram local(hist_handle);
for (auto& event : batch) {
    local.observe(event.duration_us);  // pure local write
}
local.merge_into(hist_handle);  // flush: N+1 atomic ops
```

## Installation

This skill lives in the prometheus-cpp repo at `.claude/skills/prometheus-metrics/`.
To use it in your own project that depends on this library:

```bash
# Copy the skill directory into your project
cp -r /path/to/prometheus-cpp/.claude/skills/prometheus-metrics/ your-project/.claude/skills/

# Or add prometheus-cpp as a git submodule and symlink:
# git submodule add https://github.com/stigsb/prometheus-cpp vendor/prometheus-cpp
# ln -s vendor/prometheus-cpp/.claude/skills/prometheus-metrics .claude/skills/prometheus-metrics
```
