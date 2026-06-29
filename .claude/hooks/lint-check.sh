#!/usr/bin/env bash
#
# Stop hook: ensure the C/C++ code Claude touched this turn is lint-free before
# the turn is allowed to finish. Runs clang-format (always) and clang-tidy (when
# a compile database is available, or directly on headers) over the files changed
# relative to HEAD. If anything is non-conformant it blocks the stop and feeds the
# diagnostics back to Claude so it fixes them and re-checks — by design this lives
# at "post-prompt" (Stop) rather than post-tool, so Claude can make several edits
# and only needs the tree clean once it is done.
#
# Output contract (Stop hook): print {"decision":"block","reason":...} on stdout
# to keep Claude working; print nothing and exit 0 to let it stop.

set -uo pipefail

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$repo_root" || exit 0

# --- locate tools (PATH first, then a Homebrew LLVM install) -----------------
find_tool() {
  local name="$1" p
  if command -v "$name" >/dev/null 2>&1; then command -v "$name"; return 0; fi
  for p in /opt/homebrew/opt/llvm/bin /usr/local/opt/llvm/bin; do
    [ -x "$p/$name" ] && { echo "$p/$name"; return 0; }
  done
  return 1
}

CLANG_FORMAT="$(find_tool clang-format || true)"
CLANG_TIDY="$(find_tool clang-tidy || true)"

# On macOS, clang-tidy (Homebrew LLVM) must be pointed at the SDK or it cannot
# find the C++ standard library headers when reading an AppleClang compile DB.
TIDY_EXTRA=()
if [ "$(uname -s)" = "Darwin" ] && command -v xcrun >/dev/null 2>&1; then
  _sdk="$(xcrun --show-sdk-path 2>/dev/null || true)"
  [ -n "$_sdk" ] && TIDY_EXTRA=(--extra-arg=-isysroot --extra-arg="$_sdk")
fi

# Nothing to enforce with — don't block the turn over missing local tooling.
[ -z "$CLANG_FORMAT" ] && [ -z "$CLANG_TIDY" ] && exit 0

# --- collect changed C/C++ files (modified, staged, untracked) ---------------
mapfile -t changed < <(
  {
    git diff --name-only HEAD 2>/dev/null
    git diff --name-only --cached 2>/dev/null
    git ls-files --others --exclude-standard 2>/dev/null
  } | sort -u
)

files=()
for f in "${changed[@]}"; do
  [ -f "$f" ] || continue
  case "$f" in
    build/*|build-*/*|build_*/*) continue ;;
  esac
  case "$f" in
    include/*|tests/*|examples/*|bench/*) ;;
    *) continue ;;
  esac
  case "$f" in
    *.hpp|*.cpp|*.h|*.hh|*.cc|*.cxx|*.hxx) files+=("$f") ;;
  esac
done

[ "${#files[@]}" -eq 0 ] && exit 0

# --- find a compile database for clang-tidy ----------------------------------
compile_db_dir=""
for d in build-tidy build build-example build_bench; do
  [ -f "$d/compile_commands.json" ] && { compile_db_dir="$d"; break; }
done

report=""

# --- clang-format: report any file that is not already formatted -------------
if [ -n "$CLANG_FORMAT" ]; then
  unformatted=()
  for f in "${files[@]}"; do
    if ! "$CLANG_FORMAT" --dry-run --Werror "$f" >/dev/null 2>&1; then
      unformatted+=("$f")
    fi
  done
  if [ "${#unformatted[@]}" -gt 0 ]; then
    report+="clang-format: the following files are not formatted. Run \`clang-format -i <file>\` (or fix manually):"$'\n'
    for f in "${unformatted[@]}"; do report+="  - $f"$'\n'; done
    report+=$'\n'
  fi
fi

# --- clang-tidy: lint only translation units present in the compile DB --------
# Only enforce when the project ships a tuned .clang-tidy AND a compile database
# exists. Linting a file that is not in the DB makes clang-tidy fall back to a
# guessed command line; with missing external headers the parse breaks and the
# broken AST yields garbage findings. So we lint strictly the TUs the DB knows.
# Headers are covered transitively (HeaderFilterRegex): if a header changed we
# lint every DB TU, since we cannot tell which one exercises it.
if [ -n "$CLANG_TIDY" ] && [ -f "$repo_root/.clang-tidy" ] && [ -n "$compile_db_dir" ]; then
  mapfile -t db_files < <(
    python3 -c "import json,sys,os
for e in json.load(open(sys.argv[1])):
    print(os.path.realpath(e['file']))" "$compile_db_dir/compile_commands.json" 2>/dev/null | sort -u
  )

  header_changed=0
  declare -A want=()
  for f in "${files[@]}"; do
    case "$f" in include/*.hpp|include/*.h|include/*/*.hpp|include/*/*.h) header_changed=1 ;; esac
    abs="$(cd "$repo_root" && python3 -c "import os,sys;print(os.path.realpath(sys.argv[1]))" "$f")"
    for t in "${db_files[@]}"; do [ "$t" = "$abs" ] && want["$t"]=1; done
  done
  if [ "$header_changed" -eq 1 ]; then
    for t in "${db_files[@]}"; do want["$t"]=1; done
  fi

  tidy_out=""
  for f in "${!want[@]}"; do
    out="$("$CLANG_TIDY" -p "$compile_db_dir" "${TIDY_EXTRA[@]}" "$f" 2>/dev/null)"
    if printf '%s' "$out" | grep -Eq 'warning:|error:'; then
      tidy_out+="### ${f#"$repo_root"/}"$'\n'"$out"$'\n\n'
    fi
  done
  if [ -n "$tidy_out" ]; then
    report+="clang-tidy reported issues:"$'\n'"$tidy_out"
  fi
fi

[ -z "$report" ] && exit 0

# Keep the fed-back context bounded.
report="$(printf '%s' "$report" | head -c 6000)"

reason="Lint is not clean. Fix these before finishing (clang-format / clang-tidy, see .clang-format and .clang-tidy):"$'\n\n'"$report"

# Emit the Stop-hook block decision as JSON.
python3 - "$reason" <<'PY' 2>/dev/null || printf '{"decision":"block","reason":%s}\n' "\"lint not clean; run clang-format/clang-tidy on changed files\""
import json, sys
print(json.dumps({"decision": "block", "reason": sys.argv[1]}))
PY
exit 0
