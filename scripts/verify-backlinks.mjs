#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════════
 * SEO FORENSIK: Backlink & Route Integrity Verification
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Dieses Skript prüft ALLE aktiven URLs des Projekts gegen den
 * laufenden Next.js Server und stellt sicher, dass:
 *
 *  1. Jede statische Route (CONTENT_GRAPH + page.tsx) ein 200 OK liefert
 *  2. Jede der 78+ Stadt-Seiten (allLocations) ein 200 OK liefert
 *  3. Jeder Legacy-Redirect (next.config.ts) korrekt auf 200 OK auflöst
 *  4. Die Backlink-Ziele von Alex Pit (backlink-targets.json) nicht 404en
 *
 * Usage:
 *   npm run verify:backlinks
 *   TEST_URL=https://staging.vercel.app npm run verify:backlinks
 *
 * Exit Codes:
 *   0  = Alle URLs sicher (200 OK)
 *   1  = Mindestens eine URL wirft einen Fehler → Deployment blockiert
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

// ─── Farben für Terminal-Output ───
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const cyan = (s) => `\x1b[36m${s}\x1b[0m`;
const bold = (s) => `\x1b[1m${s}\x1b[0m`;

// ─── 1. Statische Routen aus backlink-targets.json laden ───
function loadStaticRoutes() {
  const jsonPath = path.join(ROOT, 'backlink-targets.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  return data.static_routes || [];
}

// ─── 2. Legacy-Redirects aus next.config.ts extrahieren ───
function loadLegacyRedirects() {
  const configPath = path.join(ROOT, 'next.config.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');

  // Regex: Extrahiere alle source: '/...' Einträge aus dem redirects() Block
  const sourceRegex = /source:\s*['"]([^'"]+)['"]/g;
  const sources = [];
  let match;
  while ((match = sourceRegex.exec(configContent)) !== null) {
    const src = match[1];
    // Überspringe Wildcard-Patterns mit :path* (kann nicht direkt getestet werden)
    if (src.includes(':path*') || src.includes(':path+')) continue;
    // Überspringe Patterns mit Regex groups
    if (src.includes('(\\d')) continue;
    sources.push(src);
  }
  return sources;
}

// ─── 3. Alle Stadt-Slugs dynamisch aus den Location-Dateien extrahieren ───
function loadAllLocationSlugs() {
  const dataDir = path.join(ROOT, 'lib', 'data');
  const slugs = [];

  // Scanne alle locations*.ts Dateien
  const files = fs.readdirSync(dataDir).filter(
    (f) => f.startsWith('locations') && f.endsWith('.ts')
  );

  for (const file of files) {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.push(`/${match[1]}`);
    }
  }

  return [...new Set(slugs)]; // Deduplizieren
}

// ─── 4. URL prüfen ───
async function checkUrl(urlPath, category) {
  const fullUrl = `${BASE_URL}${urlPath}`;
  try {
    const response = await fetch(fullUrl, { redirect: 'follow' });

    if (response.status === 200) {
      if (response.redirected) {
        const dest = new URL(response.url).pathname;
        return { path: urlPath, status: 'redirect', code: 200, dest, category };
      }
      return { path: urlPath, status: 'ok', code: 200, category };
    } else {
      return { path: urlPath, status: 'error', code: response.status, category };
    }
  } catch (err) {
    return { path: urlPath, status: 'network_error', code: 0, category, error: err.message };
  }
}

// ─── 5. Hauptprogramm ───
async function main() {
  console.log(`\n${bold('═══════════════════════════════════════════════════════')}`);
  console.log(`${bold('  🔍 SEO-FORENSIK: Backlink & Route Integrity Check')}`);
  console.log(`${bold('═══════════════════════════════════════════════════════')}`);
  console.log(`  Server: ${cyan(BASE_URL)}\n`);

  // URLs sammeln
  const staticRoutes = loadStaticRoutes();
  const legacyRedirects = loadLegacyRedirects();
  const locationSlugs = loadAllLocationSlugs();

  console.log(`  📄 Statische Routen:    ${bold(String(staticRoutes.length))}`);
  console.log(`  🔄 Legacy-Redirects:    ${bold(String(legacyRedirects.length))}`);
  console.log(`  📍 Stadt-Seiten:        ${bold(String(locationSlugs.length))}`);
  console.log(`  ───────────────────────────────────────`);
  const totalUrls = staticRoutes.length + legacyRedirects.length + locationSlugs.length;
  console.log(`  Σ  Gesamt:              ${bold(String(totalUrls))} URLs\n`);

  // Alle Checks parallel ausführen (mit Concurrency-Limit)
  const allChecks = [
    ...staticRoutes.map((p) => ({ path: p, cat: 'STATIC' })),
    ...legacyRedirects.map((p) => ({ path: p, cat: 'REDIRECT' })),
    ...locationSlugs.map((p) => ({ path: p, cat: 'CITY' })),
  ];

  // Concurrency-Limit: 10 parallel requests
  const CONCURRENCY = 10;
  const results = [];
  for (let i = 0; i < allChecks.length; i += CONCURRENCY) {
    const batch = allChecks.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(
      batch.map((c) => checkUrl(c.path, c.cat))
    );
    results.push(...batchResults);
  }

  // Ergebnisse ausgeben
  let errors = 0;
  let redirects = 0;
  let ok = 0;

  for (const r of results) {
    if (r.status === 'ok') {
      ok++;
      // Nur bei --verbose ausgeben
      if (process.argv.includes('--verbose')) {
        console.log(`  ${green('✅')} [${r.category}] ${r.path}`);
      }
    } else if (r.status === 'redirect') {
      redirects++;
      console.log(`  ${yellow('🔄')} [${r.category}] ${r.path} → ${r.dest}`);
    } else if (r.status === 'error') {
      errors++;
      console.log(`  ${red('❌')} [${r.category}] ${r.path} — HTTP ${r.code} ${red('LINK JUICE VERLUST!')}`);
    } else {
      errors++;
      console.log(`  ${red('🚨')} [${r.category}] ${r.path} — NETZWERK-FEHLER: ${r.error}`);
    }
  }

  // Zusammenfassung
  console.log(`\n${bold('═══════════════════════════════════════════════════════')}`);
  console.log(`  ${green(`✅ OK: ${ok}`)}  |  ${yellow(`🔄 Redirects: ${redirects}`)}  |  ${red(`❌ Fehler: ${errors}`)}`);
  console.log(`${bold('═══════════════════════════════════════════════════════')}\n`);

  if (errors > 0) {
    console.log(red(bold(`  🛑 FORENSIK-ALARM: ${errors} URLs werfen Fehler!`)));
    console.log(red(`     Deployment BLOCKIERT bis alle URLs auf 200 OK auflösen.\n`));
    process.exit(1);
  } else {
    console.log(green(bold(`  🎉 ALLES SICHER: Alle ${totalUrls} URLs landen auf 200 OK.`)));
    console.log(green(`     Link Juice bleibt zu 100% erhalten. Deployment freigegeben.\n`));
    process.exit(0);
  }
}

main().catch((err) => {
  console.error(red(`\n  🚨 FATALER FEHLER: ${err.message}\n`));
  process.exit(1);
});
