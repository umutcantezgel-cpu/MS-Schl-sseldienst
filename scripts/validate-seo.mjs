#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════
 * SEO Pre-Build Validation Script
 * ═══════════════════════════════════════════════════════════════
 *
 * Validates the integrity of critical SEO configuration:
 *
 *   1. Trailing slash configuration in next.config.ts
 *   2. Canonical URL format (no trailing slashes)
 *   3. Critical route existence
 *   4. Metadata function usage on all page.tsx files
 *   5. Schema.org structured data types
 *   6. Sitemap configuration
 *
 * EXIT CODE 0 = All checks passed → build proceeds
 * EXIT CODE 1 = SEO violation detected → build ABORTED
 *
 * Usage: node scripts/validate-seo.mjs
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, join } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
let errors = 0;
let warnings = 0;

function pass(msg) { console.log(`  ✅ ${msg}`); }
function fail(msg) { errors++; console.error(`  ❌ ${msg}`); }
function warn(msg) { warnings++; console.warn(`  ⚠️  ${msg}`); }
function section(title) { console.log(`\n━━━ ${title} ━━━`); }

// ─── CHECK 1: Trailing Slash Configuration ──────────────────────────────────
section('1. TRAILING SLASH');

const configPath = join(ROOT, 'next.config.ts');
const configContent = readFileSync(configPath, 'utf-8');

if (configContent.includes('trailingSlash: false') || configContent.includes('trailingSlash:false')) {
  pass('trailingSlash: false is explicitly set');
} else if (configContent.includes('trailingSlash: true') || configContent.includes('trailingSlash:true')) {
  fail('trailingSlash: true detected! Production uses NO trailing slashes. This will break canonicals.');
} else {
  warn('trailingSlash not explicitly set. Default is false, but explicit is safer.');
}

// ─── CHECK 2: Canonical URL Format ──────────────────────────────────────────
section('2. CANONICAL URLS');

const metadataPath = join(ROOT, 'lib', 'metadata.ts');
if (existsSync(metadataPath)) {
  const metadataContent = readFileSync(metadataPath, 'utf-8');

  if (metadataContent.includes("path.endsWith('/')") && metadataContent.includes('.slice(0, -1)')) {
    pass('Canonical URLs strip trailing slashes (matches production behavior)');
  } else if (metadataContent.includes("? `${path}/`")) {
    fail('Canonical URLs ADD trailing slashes! Production serves without trailing slash. Duplicate content risk!');
  } else {
    pass('Canonical URL format appears correct');
  }
} else {
  warn('lib/metadata.ts not found — skipping canonical URL check');
}

// ─── CHECK 3: Critical Routes ───────────────────────────────────────────────
section('3. CRITICAL ROUTES');

const criticalRoutes = [
  'app/page.tsx',                                       // Homepage
  'app/(marketing)/preise/page.tsx',                    // Preise
  'app/(marketing)/kontakt/page.tsx',                   // Kontakt
  'app/(marketing)/leistungen/page.tsx',                // Leistungen
  'app/(marketing)/faq/page.tsx',                       // FAQ
  'app/(marketing)/servicegebiet/page.tsx',             // Servicegebiet
  'app/(marketing)/ueber-uns/page.tsx',                 // Über uns
  'app/(marketing)/[stadtgebiet]/page.tsx',             // Stadtgebiete (dynamic)
  'app/(marketing)/bewertungen/page.tsx',               // Bewertungen
  'app/(legal)/impressum/page.tsx',                     // Impressum
  'app/(legal)/datenschutz/page.tsx',                   // Datenschutz
  'app/(marketing)/schluessel-schmiede/page.tsx',       // Schlüssel Schmiede
];

for (const route of criticalRoutes) {
  const fullPath = join(ROOT, route);
  if (existsSync(fullPath)) {
    pass(`Route exists: ${route}`);
  } else {
    fail(`MISSING critical route: ${route}`);
  }
}

// ─── CHECK 4: Metadata API Usage ────────────────────────────────────────────
section('4. METADATA API');

const keyPages = [
  'app/page.tsx',
  'app/(marketing)/preise/page.tsx',
  'app/(marketing)/kontakt/page.tsx',
  'app/(marketing)/leistungen/page.tsx',
  'app/(marketing)/faq/page.tsx',
];

for (const page of keyPages) {
  const fullPath = join(ROOT, page);
  if (existsSync(fullPath)) {
    const content = readFileSync(fullPath, 'utf-8');
    if (content.includes('generateSharedMetadata') || content.includes('metadata')) {
      pass(`Metadata API used: ${page}`);
    } else {
      warn(`No metadata export found: ${page}`);
    }
  }
}

// ─── CHECK 5: Schema.org Presence ───────────────────────────────────────────
section('5. SCHEMA.ORG');

const schemaPath = join(ROOT, 'lib', 'schema.ts');
if (existsSync(schemaPath)) {
  const schemaContent = readFileSync(schemaPath, 'utf-8');
  const requiredTypes = ['Locksmith', 'AggregateRating', 'WebSite', 'Organization', 'HowTo'];
  for (const type of requiredTypes) {
    if (schemaContent.includes(`"${type}"`)) {
      pass(`Schema type present: ${type}`);
    } else {
      fail(`Missing Schema type: ${type}`);
    }
  }
} else {
  fail('lib/schema.ts not found!');
}

// ─── CHECK 6: Sitemap ───────────────────────────────────────────────────────
section('6. SITEMAP');

const sitemapPath = join(ROOT, 'app', 'sitemap.ts');
if (existsSync(sitemapPath)) {
  const sitemapContent = readFileSync(sitemapPath, 'utf-8');
  if (sitemapContent.includes('allLocations')) {
    pass('Sitemap includes city/location pages');
  } else {
    warn('Sitemap may not include all city pages');
  }
  if (sitemapContent.includes('CONTENT_GRAPH')) {
    pass('Sitemap uses CONTENT_GRAPH for route coverage');
  } else {
    warn('Sitemap does not use CONTENT_GRAPH');
  }
} else {
  fail('app/sitemap.ts not found!');
}

// ─── RESULT ─────────────────────────────────────────────────────────────────
section('RESULT');

if (errors > 0) {
  console.error(`\n🚨 SEO VALIDATION FAILED: ${errors} error(s), ${warnings} warning(s)`);
  console.error('   Build aborted to protect SEO integrity.\n');
  process.exit(1);
} else {
  console.log(`\n🛡️  SEO VALIDATION PASSED: 0 errors, ${warnings} warning(s)`);
  console.log('   SEO integrity confirmed. Build may proceed.\n');
  process.exit(0);
}
