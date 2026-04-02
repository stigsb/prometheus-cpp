#pragma once

#include <array>
#include <cstddef>
#include <cstdint>
#include <optional>
#include <string>
#include <string_view>
#include <type_traits>

#include <prometheus/label_mask.hpp>

// ── Internal: value → string conversion ────────────────────────────────────

namespace prometheus::detail {

template <typename T>
std::string label_to_string(const T& v) {
    if constexpr (std::is_arithmetic_v<T>)
        return std::to_string(v);
    else
        return std::string(v);
}

// ── FNV-1a hash helpers (zero-allocation for string/arithmetic types) ───────

constexpr std::size_t fnv1a_basis = 14695981039346656037ULL;
constexpr std::size_t fnv1a_prime = 1099511628211ULL;

inline void hash_mix_byte(std::size_t& h, uint8_t b) noexcept {
    h ^= b;
    h *= fnv1a_prime;
}

inline void hash_label_field(std::size_t& h, std::string_view v) noexcept {
    for (char c : v) hash_mix_byte(h, static_cast<uint8_t>(c));
}

inline void hash_label_field(std::size_t& h, const std::string& v) noexcept {
    hash_label_field(h, std::string_view(v));
}

template <typename T>
    requires std::is_arithmetic_v<T>
inline void hash_label_field(std::size_t& h, T v) noexcept {
    const auto* bytes = reinterpret_cast<const uint8_t*>(&v);
    for (std::size_t i = 0; i < sizeof(T); ++i)
        hash_mix_byte(h, bytes[i]);
}

} // namespace prometheus::detail

// ── Preprocessor helpers ────────────────────────────────────────────────────

#define PROMETHEUS_PP_CAT(a, b)   PROMETHEUS_PP_CAT_I(a, b)
#define PROMETHEUS_PP_CAT_I(a, b) a##b

#define PROMETHEUS_PP_STRINGIFY(x)   PROMETHEUS_PP_STRINGIFY_I(x)
#define PROMETHEUS_PP_STRINGIFY_I(x) #x

// Strip outer parens:  (a, b)  →  a, b
// STRIP_PARENS_I is variadic so that the result can be re-split by callers.
#define PROMETHEUS_PP_STRIP_PARENS(x)     PROMETHEUS_PP_STRIP_PARENS_I x
#define PROMETHEUS_PP_STRIP_PARENS_I(...) __VA_ARGS__

// Workers — called after the pair has been split into individual tokens.
#define PROMETHEUS_PP_FIRST_I(a, ...)     a
#define PROMETHEUS_PP_SECOND_I(a, b, ...) b

// Variadic wrappers force pre-scan expansion of their argument before the
// call to _I, so that STRIP_PARENS(pair) is expanded to "a, b" first and
// the resulting comma creates two arguments for FIRST_I / SECOND_I.
#define PROMETHEUS_PP_FIRST(...)  PROMETHEUS_PP_FIRST_I(__VA_ARGS__)
#define PROMETHEUS_PP_SECOND(...) PROMETHEUS_PP_SECOND_I(__VA_ARGS__)

// Pair accessors — pair still has its outer parens, e.g. (service, uint32_t)
#define PROMETHEUS_PP_PAIR_NAME(pair) PROMETHEUS_PP_FIRST(PROMETHEUS_PP_STRIP_PARENS(pair))
#define PROMETHEUS_PP_PAIR_TYPE(pair) PROMETHEUS_PP_SECOND(PROMETHEUS_PP_STRIP_PARENS(pair))

// ── Argument counting (paren-grouped pairs count as one arg each) ───────────

#define PROMETHEUS_PP_NARG(...) \
    PROMETHEUS_PP_NARG_(__VA_ARGS__, 16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0)
#define PROMETHEUS_PP_NARG_( \
    _1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,N,...) N

// ── FOR_EACH with index — no separator between expansions ───────────────────

#define PROMETHEUS_PP_FOR_EACH_IDX(F,...) \
    PROMETHEUS_PP_CAT(PROMETHEUS_PP_FOR_EACH_IDX_,PROMETHEUS_PP_NARG(__VA_ARGS__))(F,__VA_ARGS__)

#define PROMETHEUS_PP_FOR_EACH_IDX_1(F,a) \
    F(0,a)
#define PROMETHEUS_PP_FOR_EACH_IDX_2(F,a,b) \
    F(0,a) F(1,b)
#define PROMETHEUS_PP_FOR_EACH_IDX_3(F,a,b,c) \
    F(0,a) F(1,b) F(2,c)
#define PROMETHEUS_PP_FOR_EACH_IDX_4(F,a,b,c,d) \
    F(0,a) F(1,b) F(2,c) F(3,d)
#define PROMETHEUS_PP_FOR_EACH_IDX_5(F,a,b,c,d,e) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e)
#define PROMETHEUS_PP_FOR_EACH_IDX_6(F,a,b,c,d,e,f) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f)
#define PROMETHEUS_PP_FOR_EACH_IDX_7(F,a,b,c,d,e,f,g) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g)
#define PROMETHEUS_PP_FOR_EACH_IDX_8(F,a,b,c,d,e,f,g,h) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h)
#define PROMETHEUS_PP_FOR_EACH_IDX_9(F,a,b,c,d,e,f,g,h,i) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i)
#define PROMETHEUS_PP_FOR_EACH_IDX_10(F,a,b,c,d,e,f,g,h,i,j) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i) F(9,j)
#define PROMETHEUS_PP_FOR_EACH_IDX_11(F,a,b,c,d,e,f,g,h,i,j,k) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i) F(9,j) F(10,k)
#define PROMETHEUS_PP_FOR_EACH_IDX_12(F,a,b,c,d,e,f,g,h,i,j,k,l) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i) F(9,j) F(10,k) F(11,l)
#define PROMETHEUS_PP_FOR_EACH_IDX_13(F,a,b,c,d,e,f,g,h,i,j,k,l,m) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i) F(9,j) F(10,k) F(11,l) F(12,m)
#define PROMETHEUS_PP_FOR_EACH_IDX_14(F,a,b,c,d,e,f,g,h,i,j,k,l,m,n) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i) F(9,j) F(10,k) F(11,l) F(12,m) F(13,n)
#define PROMETHEUS_PP_FOR_EACH_IDX_15(F,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i) F(9,j) F(10,k) F(11,l) F(12,m) F(13,n) F(14,o)
#define PROMETHEUS_PP_FOR_EACH_IDX_16(F,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) \
    F(0,a) F(1,b) F(2,c) F(3,d) F(4,e) F(5,f) F(6,g) F(7,h) F(8,i) F(9,j) F(10,k) F(11,l) F(12,m) F(13,n) F(14,o) F(15,p)

// ── FOR_EACH with index — comma-separated (for array literals) ──────────────

#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA(F,...) \
    PROMETHEUS_PP_CAT(PROMETHEUS_PP_FOR_EACH_IDX_COMMA_,PROMETHEUS_PP_NARG(__VA_ARGS__))(F,__VA_ARGS__)

#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_1(F,a) \
    F(0,a)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_2(F,a,b) \
    F(0,a), F(1,b)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_3(F,a,b,c) \
    F(0,a), F(1,b), F(2,c)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_4(F,a,b,c,d) \
    F(0,a), F(1,b), F(2,c), F(3,d)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_5(F,a,b,c,d,e) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_6(F,a,b,c,d,e,f) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_7(F,a,b,c,d,e,f,g) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_8(F,a,b,c,d,e,f,g,h) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_9(F,a,b,c,d,e,f,g,h,i) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_10(F,a,b,c,d,e,f,g,h,i,j) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i), F(9,j)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_11(F,a,b,c,d,e,f,g,h,i,j,k) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i), F(9,j), F(10,k)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_12(F,a,b,c,d,e,f,g,h,i,j,k,l) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i), F(9,j), F(10,k), F(11,l)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_13(F,a,b,c,d,e,f,g,h,i,j,k,l,m) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i), F(9,j), F(10,k), F(11,l), F(12,m)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_14(F,a,b,c,d,e,f,g,h,i,j,k,l,m,n) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i), F(9,j), F(10,k), F(11,l), F(12,m), F(13,n)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_15(F,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i), F(9,j), F(10,k), F(11,l), F(12,m), F(13,n), F(14,o)
#define PROMETHEUS_PP_FOR_EACH_IDX_COMMA_16(F,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) \
    F(0,a), F(1,b), F(2,c), F(3,d), F(4,e), F(5,f), F(6,g), F(7,h), F(8,i), F(9,j), F(10,k), F(11,l), F(12,m), F(13,n), F(14,o), F(15,p)

// ── Per-field code generators ───────────────────────────────────────────────

// enum class Key member
#define PROMETHEUS_PP_GEN_ENUM(idx, pair) \
    PROMETHEUS_PP_PAIR_NAME(pair) = 1ULL << (idx),

// LabelSet optional field
#define PROMETHEUS_PP_GEN_FIELD(idx, pair) \
    std::optional<PROMETHEUS_PP_PAIR_TYPE(pair)> PROMETHEUS_PP_PAIR_NAME(pair){};

// key_name() switch case
#define PROMETHEUS_PP_GEN_KEY_NAME(idx, pair) \
    case Key::PROMETHEUS_PP_PAIR_NAME(pair): \
        return PROMETHEUS_PP_STRINGIFY(PROMETHEUS_PP_PAIR_NAME(pair));

// populated_mask() accumulator statement
#define PROMETHEUS_PP_GEN_POP_MASK(idx, pair) \
    if (ls.PROMETHEUS_PP_PAIR_NAME(pair).has_value()) \
        m |= static_cast<uint64_t>(Key::PROMETHEUS_PP_PAIR_NAME(pair));

// format_value() switch case
#define PROMETHEUS_PP_GEN_FORMAT(idx, pair) \
    case Key::PROMETHEUS_PP_PAIR_NAME(pair): \
        if (ls.PROMETHEUS_PP_PAIR_NAME(pair)) \
            return ::prometheus::detail::label_to_string(*ls.PROMETHEUS_PP_PAIR_NAME(pair)); \
        return "";

// all_keys() array element (comma-separated via FOR_EACH_IDX_COMMA)
#define PROMETHEUS_PP_GEN_KEY(idx, pair) \
    Key::PROMETHEUS_PP_PAIR_NAME(pair)

// hash_value() per-field hash accumulator (zero-allocation)
#define PROMETHEUS_PP_GEN_HASH(idx, pair) \
    if (allowed_mask & static_cast<uint64_t>(Key::PROMETHEUS_PP_PAIR_NAME(pair))) { \
        ::prometheus::detail::hash_mix_byte(h, static_cast<uint8_t>(idx)); \
        if (ls.PROMETHEUS_PP_PAIR_NAME(pair).has_value()) { \
            ::prometheus::detail::hash_label_field(h, *ls.PROMETHEUS_PP_PAIR_NAME(pair)); \
        } else { \
            ::prometheus::detail::hash_mix_byte(h, 0xFF); \
        } \
    }

// ── Public macro ────────────────────────────────────────────────────────────

/**
 * PROMETHEUS_DEFINE_LABELS(StructName, (field1, Type1), (field2, Type2), ...)
 *
 * Generates a label-traits struct compatible with the prometheus-client-cpp
 * MetricFamily builder.  Up to 16 labels are supported.
 *
 * Example:
 *   PROMETHEUS_DEFINE_LABELS(AppLabels,
 *       (service,     std::string_view),
 *       (method,      std::string_view),
 *       (status_code, uint32_t)
 *   );
 */
#define PROMETHEUS_DEFINE_LABELS(Name, ...)                                   \
struct Name {                                                                  \
    /* Power-of-two bitmask enum */                                            \
    enum class Key : uint64_t {                                                \
        PROMETHEUS_PP_FOR_EACH_IDX(PROMETHEUS_PP_GEN_ENUM, __VA_ARGS__)       \
    };                                                                         \
                                                                               \
    using Mask = uint64_t;                                                     \
                                                                               \
    /* Aggregate of optional label values; supports designated initialisers */ \
    struct LabelSet {                                                           \
        PROMETHEUS_PP_FOR_EACH_IDX(PROMETHEUS_PP_GEN_FIELD, __VA_ARGS__)      \
    };                                                                         \
                                                                               \
    static constexpr std::size_t count = PROMETHEUS_PP_NARG(__VA_ARGS__);     \
                                                                               \
    static constexpr std::string_view key_name(Key k) noexcept {              \
        switch (k) {                                                           \
            PROMETHEUS_PP_FOR_EACH_IDX(PROMETHEUS_PP_GEN_KEY_NAME, __VA_ARGS__) \
            default: return "unknown";                                         \
        }                                                                      \
    }                                                                          \
                                                                               \
    static constexpr Mask populated_mask(const LabelSet& ls) noexcept {       \
        Mask m = 0;                                                            \
        PROMETHEUS_PP_FOR_EACH_IDX(PROMETHEUS_PP_GEN_POP_MASK, __VA_ARGS__)   \
        return m;                                                              \
    }                                                                          \
                                                                               \
    static std::string format_value(Key k, const LabelSet& ls) {              \
        switch (k) {                                                           \
            PROMETHEUS_PP_FOR_EACH_IDX(PROMETHEUS_PP_GEN_FORMAT, __VA_ARGS__) \
            default: return "";                                                \
        }                                                                      \
    }                                                                          \
                                                                               \
    static constexpr std::array<Key, count> all_keys() noexcept {             \
        return {                                                               \
            PROMETHEUS_PP_FOR_EACH_IDX_COMMA(PROMETHEUS_PP_GEN_KEY, __VA_ARGS__) \
        };                                                                     \
    }                                                                          \
                                                                               \
    static std::size_t hash_value(const LabelSet& ls,                          \
                                  Mask allowed_mask) noexcept {                \
        std::size_t h = ::prometheus::detail::fnv1a_basis;                     \
        PROMETHEUS_PP_FOR_EACH_IDX(PROMETHEUS_PP_GEN_HASH, __VA_ARGS__)        \
        return h;                                                              \
    }                                                                          \
}
