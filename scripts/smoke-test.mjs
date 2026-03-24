#!/usr/bin/env node

/**
 * ══════════════════════════════════════════════════════════════
 * Phase 17 — Smoke Tests
 * ══════════════════════════════════════════════════════════════
 * Tests critical endpoints after deployment.
 * Usage: node scripts/smoke-test.mjs
 * Set BASE_URL env var for non-localhost targets.
 * Exit code 1 on any failure (CI-compatible).
 * ══════════════════════════════════════════════════════════════
 */

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const TIMEOUT_MS = 15_000;

const endpoints = [
  { path: "/", expectedStatus: 200, name: "Homepage" },
  { path: "/kontakt", expectedStatus: 200, name: "Kontakt" },
  { path: "/preise", expectedStatus: 200, name: "Preise" },
  { path: "/faq", expectedStatus: 200, name: "FAQ" },
  { path: "/datenschutz", expectedStatus: 200, name: "Datenschutz" },
  { path: "/impressum", expectedStatus: 200, name: "Impressum" },
  { path: "/api/health", expectedStatus: 200, name: "Health Check API" },
];

let passed = 0;
let failed = 0;

console.log(`\n🔍 Smoke Tests — ${BASE_URL}\n`);

for (const { path, expectedStatus, name } of endpoints) {
  const url = `${BASE_URL}${path}`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
    });

    clearTimeout(timeoutId);

    if (res.status === expectedStatus) {
      console.log(`  ✅ ${name} (${path}) → ${res.status}`);
      passed++;
    } else {
      console.error(`  ❌ ${name} (${path}) → ${res.status} (expected ${expectedStatus})`);
      failed++;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`  ❌ ${name} (${path}) → ERROR: ${message}`);
    failed++;
  }
}

console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  process.exit(1);
}
