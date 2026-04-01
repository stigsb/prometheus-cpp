#pragma once

// All-in-one include for prometheus-client-cpp.
// Provides: PROMETHEUS_DEFINE_LABELS, Registry, MetricFamily,
//           Counter, Gauge, Histogram, TextSerializer, and helpers.

#include <prometheus/detail/assert.hpp>
#include <prometheus/label_mask.hpp>
#include <prometheus/label_def.hpp>
#include <prometheus/counter.hpp>
#include <prometheus/gauge.hpp>
#include <prometheus/histogram.hpp>
#include <prometheus/detail/label_key.hpp>
#include <prometheus/detail/metric_store.hpp>
#include <prometheus/text_serializer.hpp>
#include <prometheus/metric_family.hpp>
#include <prometheus/metric_family_builder.hpp>
#include <prometheus/registry.hpp>
