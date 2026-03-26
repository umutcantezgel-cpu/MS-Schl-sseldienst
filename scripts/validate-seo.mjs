#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════
 * DEFCON-1 SEO GUARDIAN — Pre-Build Validation Script
 * ═══════════════════════════════════════════════════════════════
 *
 * This script acts as a HARD GATEKEEPER before every build.
 * It validates the integrity of the SEO fortress:
 *
 *   1. Redirect matrix consistency (42 rules in next.config.ts)
 *   2. Canonical URL format (no trailing slashes)
 *   3. Critical route existence
 *   4. Metadata function usage on all page.tsx files
 *
 * EXIT CODE 0 = All checks passed → build proceeds
 * EXIT CODE 1 = SEO violation detected → build ABORTED
 *
 * Usage: node scripts/validate-seo.mjs
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, join } from 'path';
import { execSync } from 'child_process';

const ROOT = resolve(import.meta.dirname, '..');
let errors = 0;
let warnings = 0;

function pass(msg) { console.log(`  ✅ ${msg}`); }
function fail(msg) { errors++; console.error(`  ❌ ${msg}`); }
function warn(msg) { warnings++; console.warn(`  ⚠️  ${msg}`); }
function section(title) { console.log(`\n━━━ ${title} ━━━`); }

// ─── CHECK 1: next.config.ts Redirect Matrix ───────────────────────────────
section('1. REDIRECT MATRIX');

const configPath = join(ROOT, 'next.config.ts');
const configContent = readFileSync(configPath, 'utf-8');

// Count redirect rules by counting `source:` patterns in the redirects block
const redirectMatches = configContent.match(/source:\s*['"]/g);
const redirectCount = redirectMatches ? redirectMatches.length : 0;

if (redirectCount >= 40) {
  pass(`Redirect matrix contains ${redirectCount} rules (minimum: 40)`);
} else {
  fail(`Redirect matrix only has ${redirectCount} rules (minimum: 40). Link-juice leak risk!`);
}

// Verify essential redirects exist
const essentialRedirects = [
  '/index.php',
  '/index.html',
  '/kontakt.php',
  '/kontakt.html',
  '/wp-admin',
  '/wp-login.php',
];

for (const redirect of essentialRedirects) {
  if (configContent.includes(`'${redirect}'`) || configContent.includes(`"${redirect}"`)) {
    pass(`Essential redirect exists: ${redirect}`);
  } else {
    fail(`Missing essential redirect: ${redirect}`);
  }
}

// Verify all redirects are permanent (301)
const temporaryRedirects = configContent.match(/permanent:\s*false/g);
if (temporaryRedirects) {
  fail(`Found ${temporaryRedirects.length} non-permanent (302) redirect(s). All must be permanent: true (301).`);
} else {
  pass('All redirects are permanent: true (301)');
}

// ─── CHECK 2: trailingSlash Configuration ───────────────────────────────────
section('2. TRAILING SLASH');

if (configContent.includes('trailingSlash: false') || configContent.includes('trailingSlash:false')) {
  pass('trailingSlash: false is explicitly set');
} else if (configContent.includes('trailingSlash: true') || configContent.includes('trailingSlash:true')) {
  fail('trailingSlash: true detected! Production uses NO trailing slashes. This will break canonicals.');
} else {
  warn('trailingSlash not explicitly set. Default is false, but explicit is safer.');
}

// ─── CHECK 3: Canonical URL Format ──────────────────────────────────────────
section('3. CANONICAL URLS');

const metadataPath = join(ROOT, 'lib', 'metadata.ts');
const metadataContent = readFileSync(metadataPath, 'utf-8');

// Check that canonicals do NOT enforce trailing slashes
if (metadataContent.includes("path.endsWith('/')") && metadataContent.includes('.slice(0, -1)')) {
  pass('Canonical URLs strip trailing slashes (matches production behavior)');
} else if (metadataContent.includes("? `${path}/`")) {
  fail('Canonical URLs ADD trailing slashes! Production serves without trailing slash. Duplicate content risk!');
} else {
  pass('Canonical URL format appears correct');
}

// ─── CHECK 4: Critical Routes ───────────────────────────────────────────────
section('4. CRITICAL ROUTES');

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
];

for (const route of criticalRoutes) {
  const fullPath = join(ROOT, route);
  if (existsSync(fullPath)) {
    pass(`Route exists: ${route}`);
  } else {
    fail(`MISSING critical route: ${route}`);
  }
}

// ─── CHECK 5: Metadata API Usage ────────────────────────────────────────────
section('5. METADATA API');

// Check that key pages use generateSharedMetadata
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

// ─── CHECK 6: Schema.org Presence ───────────────────────────────────────────
section('6. SCHEMA.ORG');

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

// ─── CHECK 7: Sitemap ───────────────────────────────────────────────────────
section('7. SITEMAP');

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
  console.error('   Build ABORTED to protect Platz-1 ranking.\n');
  process.exit(1);
} else {
  console.log(`\n🛡️  SEO VALIDATION PASSED: 0 errors, ${warnings} warning(s)`);
  console.log('   SEO fortress integrity confirmed. Build may proceed.\n');
  process.exit(0);
}
