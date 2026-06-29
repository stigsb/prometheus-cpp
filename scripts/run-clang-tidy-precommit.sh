#!/usr/bin/env bash
#
# pre-commit wrapper for clang-tidy.
#
# clang-tidy needs a CMake compile database. Generate one first with:
#   cmake -B build -DCMAKE_BUILD_TYPE=Debug -DPROMETHEUS_BUILD_TESTS=ON \
#         -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
#
# If no compile database is found this hook prints a notice and passes, so
# commits are never blocked solely because the project hasn't been configured.
# Receives the staged translation-unit paths as arguments.

set -uo pipefail

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$repo_root" || exit 0

find_tool() {
  local name="$1" p
  if command -v "$name" >/dev/null 2>&1; then command -v "$name"; return 0; fi
  for p in /opt/homebrew/opt/llvm/bin /usr/local/opt/llvm/bin; do
    [ -x "$p/$name" ] && { echo "$p/$name"; return 0; }
  done
  return 1
}

CLANG_TIDY="$(find_tool clang-tidy || true)"
if [ -z "$CLANG_TIDY" ]; then
  echo "clang-tidy not found; skipping (install LLVM to enable)." >&2
  exit 0
fi

db_dir=""
for d in build build-tidy build-debug; do
  [ -f "$d/compile_commands.json" ] && { db_dir="$d"; break; }
done
if [ -z "$db_dir" ]; then
  echo "No compile_commands.json found; skipping clang-tidy." >&2
  echo "Run: cmake -B build -DPROMETHEUS_BUILD_TESTS=ON -DCMAKE_EXPORT_COMPILE_COMMANDS=ON" >&2
  exit 0
fi

# macOS: point clang-tidy at the SDK so it finds the C++ standard library
# headers when reading an AppleClang compile database.
extra=()
if [ "$(uname -s)" = "Darwin" ] && command -v xcrun >/dev/null 2>&1; then
  sdk="$(xcrun --show-sdk-path 2>/dev/null || true)"
  [ -n "$sdk" ] && extra=(--extra-arg=-isysroot --extra-arg="$sdk")
fi

# Only lint TUs the compile DB actually knows about. A file absent from the DB
# makes clang-tidy guess a command line; with missing external headers the parse
# breaks and the broken AST emits spurious findings. Skip those quietly.
mapfile -t db_files < <(
  python3 -c "import json,sys,os
for e in json.load(open(sys.argv[1])):
    print(os.path.realpath(e['file']))" "$db_dir/compile_commands.json" 2>/dev/null | sort -u
)
in_db() { local t a; a="$(python3 -c "import os,sys;print(os.path.realpath(sys.argv[1]))" "$1")"; for t in "${db_files[@]}"; do [ "$t" = "$a" ] && return 0; done; return 1; }

status=0
for f in "$@"; do
  [ -f "$f" ] || continue
  in_db "$f" || { echo "skipping $f (not in compile database)" >&2; continue; }
  if ! "$CLANG_TIDY" -p "$db_dir" "${extra[@]}" "$f"; then
    status=1
  fi
done
exit "$status"
