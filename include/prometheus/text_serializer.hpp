#pragma once

#include <ostream>
#include <string>
#include <string_view>
#include <vector>
#include <utility>
#include <charconv>
#include <cmath>

namespace prometheus {

enum class MetricType { Counter, Gauge, Histogram };

// Writes Prometheus text exposition format (version 0.0.4) to an ostream.
class TextSerializer {
public:
    explicit TextSerializer(std::ostream& out) : out_(out) {}

    void write_header(std::string_view name, std::string_view help, MetricType type) {
        out_ << "# HELP " << name << ' ' << help << '\n';
        out_ << "# TYPE " << name << ' ';
        switch (type) {
            case MetricType::Counter:   out_ << "counter";   break;
            case MetricType::Gauge:     out_ << "gauge";     break;
            case MetricType::Histogram: out_ << "histogram"; break;
        }
        out_ << '\n';
    }

    // Write one sample line.
    // extra_label_name/value: for histogram le= label (pass empty string_view to skip)
    // const_labels: family-level fixed labels, appended after dynamic + extra
    void write_sample(std::string_view metric_name,
                      std::string_view dynamic_labels,
                      const std::vector<std::pair<std::string,std::string>>& const_labels,
                      double value,
                      std::string_view extra_label_name = {},
                      std::string_view extra_label_value = {}) {
        out_ << metric_name;
        bool any = !dynamic_labels.empty()
                || !extra_label_name.empty()
                || !const_labels.empty();
        if (any) {
            out_ << '{';
            bool first = true;
            if (!dynamic_labels.empty()) {
                out_ << dynamic_labels;
                first = false;
            }
            if (!extra_label_name.empty()) {
                if (!first) out_ << ',';
                out_ << extra_label_name << "=\"" << extra_label_value << '"';
                first = false;
            }
            for (const auto& [k, v] : const_labels) {
                if (!first) out_ << ',';
                out_ << k << "=\"" << v << '"';
                first = false;
            }
            out_ << '}';
        }
        out_ << ' ' << format_double(value) << '\n';
    }

    void write_newline() { out_ << '\n'; }

    // Compact floating-point formatting: integers without decimal point,
    // +Inf/-Inf/NaN handled, up to 15 significant digits otherwise.
    static std::string format_double(double v) {
        if (std::isinf(v)) return v > 0.0 ? "+Inf" : "-Inf";
        if (std::isnan(v)) return "NaN";
        char buf[64];
        auto [ptr, ec] = std::to_chars(buf, buf + sizeof(buf), v);
        return std::string(buf, ptr);
    }

private:
    std::ostream& out_;
};

} // namespace prometheus
