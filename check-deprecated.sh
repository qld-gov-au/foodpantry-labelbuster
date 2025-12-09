#!/usr/bin/env bash

set -euo pipefail

# Detect deprecated packages by scanning the npm dependency tree.

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required to run this script." >&2
  exit 1
fi

echo "Collecting dependency tree (npm ls --long --all)..."
tmp_json="$(mktemp)"

# npm ls can exit non-zero if there are unmet peers; we still want its JSON output.
if ! npm ls --json --long --all --silent >"$tmp_json"; then
  echo "npm ls reported issues, continuing with collected data." >&2
fi

node - "$tmp_json" <<'NODE'
const fs = require('fs');

const file = process.argv[2];
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const deprecated = [];

function walk(node, chain) {
  const name = node.name || '(root)';
  const version = node.version || 'unknown';
  const nextChain = [...chain, `${name}@${version}`];

  if (node.deprecated) {
    deprecated.push({
      pkg: `${name}@${version}`,
      path: nextChain.join(' > '),
      reason: node.deprecated,
    });
  }

  const deps = node.dependencies || {};
  for (const dep of Object.values(deps)) {
    walk(dep, nextChain);
  }
}

walk(data, []);

if (deprecated.length === 0) {
  console.log('No deprecated packages found.');
  process.exit(0);
}

console.log(`Found ${deprecated.length} deprecated package(s):`);
for (const entry of deprecated) {
  console.log(`- ${entry.pkg}`);
  console.log(`  path: ${entry.path}`);
  if (entry.reason) {
    console.log(`  reason: ${entry.reason}`);
  }
}
NODE

rm -f "$tmp_json"
