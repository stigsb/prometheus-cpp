# Prometheus Naming Conventions

Reference for metric and label naming when using prometheus-cpp.
Based on the [Prometheus naming best practices](https://prometheus.io/docs/practices/naming/).

## Metric names

### Format
- Must match `[a-zA-Z_:][a-zA-Z0-9_:]*`
- Use `snake_case` (lowercase with underscores)
- Colons are reserved for recording rules — avoid them in instrumentation metrics

### Structure
A good metric name has the form: `<namespace>_<subsystem>_<name>_<unit>`

| Component | Example | Notes |
|-----------|---------|-------|
| namespace | `myapp` | Application or library name (optional but recommended) |
| subsystem | `http`, `db`, `queue` | Logical component |
| name | `requests`, `duration`, `size` | What is being measured |
| unit | `_total`, `_seconds`, `_bytes` | Physical unit suffix |

### Type-specific suffixes

| Metric type | Required suffix | Examples |
|-------------|----------------|----------|
| Counter | `_total` | `http_requests_total`, `errors_total` |
| Histogram (duration) | `_seconds` | `http_request_duration_seconds` |
| Histogram (size) | `_bytes` | `http_response_size_bytes` |
| Gauge | (none required) | `active_connections`, `queue_depth` |

### Unit suffixes (by base unit)

| Measuring | Suffix | Store as | Unit |
|-----------|--------|----------|------|
| Duration | `_seconds` | nanoseconds, microseconds, or milliseconds | `prometheus::units::nanoseconds`, `::microseconds`, `::milliseconds` |
| Data size | `_bytes` | bytes, kilobytes, etc. | `prometheus::units::bytes`, `::kilobytes`, etc. |
| Temperature | `_celsius` / `_fahrenheit` / `_kelvin` | native unit | `prometheus::units::celsius`, etc. |
| Ratio | `_ratio` | ratio or percent | `prometheus::units::ratio`, `::percent` |

When using `.unit()`, the library stores the raw int64 value and multiplies by the scale factor at scrape time. The metric name should reflect the **base unit** (seconds, bytes), not the storage unit.

## Label names

### Format
- Must match `[a-zA-Z_][a-zA-Z0-9_]*`
- Must NOT start with `__` (double underscore) — reserved for internal use
- Use `snake_case`
- No colons allowed in label names

### Good label names
| Label | Example values | Notes |
|-------|---------------|-------|
| `service` | `"api"`, `"worker"` | Which service/component |
| `method` | `"GET"`, `"POST"` | HTTP method |
| `status_code` | `200`, `404`, `500` | HTTP response code |
| `endpoint` | `"/v1/users"` | Route pattern, not full URL |
| `queue` | `"email"`, `"notifications"` | Queue/topic name |
| `error_type` | `"timeout"`, `"connection_refused"` | Error classification |

### Labels to avoid
| Bad label | Why | Alternative |
|-----------|-----|-------------|
| `url` / `path` with high cardinality | Explodes time-series count | Use route pattern: `/v1/users/:id` |
| `user_id`, `request_id` | Unbounded cardinality | Use logs/traces instead |
| `timestamp` | Already in the time-series | Remove entirely |
| `instance`, `job` | Added by Prometheus at scrape time | Don't duplicate |

### Required vs optional vs const labels in prometheus-cpp

| Declaration | When to use | Example |
|------------|-------------|---------|
| `.required(Key::k)` | Must be set on every `get()` call | `service`, `method` |
| `.optional(Key::k)` | May or may not be set per time-series | `endpoint` (only for HTTP metrics) |
| `.const_label("k", "v")` | Same value for all time-series in this family | `region`, `version` |

## Cardinality guidelines

Total cardinality = product of all label value counts. Keep it manageable:

| Label values | Time-series per metric | Status |
|-------------|----------------------|--------|
| 3 services × 5 methods × 5 status codes | 75 | Fine |
| 3 services × 5 methods × 5 codes × 100 endpoints | 7,500 | Caution — review if needed |
| anything × user_id | unbounded | Do not instrument |

Rule of thumb: if a label can take more than ~100 distinct values, it probably shouldn't be a Prometheus label. Use logs or traces for high-cardinality dimensions.

## Histogram bucket guidelines

### Duration histograms
- Web API latency: `buckets(100, 14)` with `unit(microseconds)` → 100µs to ~819ms, +Inf
- Background jobs: `buckets(1000, 16)` with `unit(milliseconds)` → 1s to ~32s, +Inf
- Fast operations: `buckets(1, 12)` with `unit(microseconds)` → 1µs to ~2ms, +Inf

### Size histograms
- HTTP response: `{128, 256, 512, 1024, 4096, 16384, 65536, 262144, 1048576}` bytes
- Message payload: `{64, 256, 1024, 4096, 65536}` bytes

### Choosing bucket count
- Fewer buckets (8–10): lower storage cost, less resolution
- More buckets (14–20): better percentile accuracy, higher storage cost
- Power-of-two (`.buckets(min, count)`): good general-purpose default
- Custom (`.buckets(vector)`): use when you know the distribution shape
