#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const SEARCH_DIRS = [
  path.join(ROOT, '.next', 'server', 'app'),
  path.join(ROOT, '.next', 'server', 'pages'),
  path.join(ROOT, 'out'),
  path.join(ROOT, '.next', 'server'),
];

function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      const baseName = path.basename(filePath);
      if (
        !baseName.startsWith('_not-found') && 
        !baseName.startsWith('_error') && 
        !baseName.startsWith('404') && 
        !baseName.startsWith('500') && 
        !baseName.includes('icon') &&
        !filePath.includes('/dev/') &&
        !filePath.includes('/preview')
      ) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const STOP_WORDS = new Set([
  'und', 'für', 'der', 'die', 'das', 'mit', 'von', 'auf', 'in', 'den', 'dem', 'des', 
  'ein', 'eine', 'einer', 'einen', 'einem', 'eines', 'aus', 'bei', 'nach', 'über', 
  'unter', 'zum', 'zur', 'oder', 'ist', 'sind', 'wir', 'sie', 'ich', 'du', 'ihr',
  'auch', 'als', 'wie', 'an', 'im', 'am', 'um', 'dass', 'daß', 'ihre', 'ihren', 'ihrer'
]);

function extractKeywords(text) {
  return text
    .toLowerCase()
    .replace(/[^\wäöüß\s-]/g, '')
    .split(/\s+/)
    .filter(word => word.length >= 3 && !STOP_WORDS.has(word));
}

function verifyBuildHtml() {
  console.log('🔍 Starting Comprehensive SEO Build & Metadata Verification...\n');

  let htmlFiles = [];
  for (const searchDir of SEARCH_DIRS) {
    if (fs.existsSync(searchDir)) {
      const found = getAllHtmlFiles(searchDir);
      for (const f of found) {
        if (!htmlFiles.includes(f)) htmlFiles.push(f);
      }
    }
  }

  let totalChecked = 0;
  let totalFailures = 0;
  let titleErrors = 0;
  let descErrors = 0;
  let placeholderErrors = 0;
  let h1Errors = 0;
  let keywordErrors = 0;

  const results = [];

  // Pass 1: Inspect generated HTML files in build outputs
  if (htmlFiles.length > 0) {
    console.log(`📄 Inspecting ${htmlFiles.length} generated HTML build files...`);
    for (const filePath of htmlFiles) {
      totalChecked++;
      const relativePath = path.relative(ROOT, filePath);
      const content = fs.readFileSync(filePath, 'utf-8');
      const dom = new JSDOM(content);
      const doc = dom.window.document;

      const fileFailures = [];

      // 1. Title Length Check (45 - 65 chars inclusive)
      const titleEl = doc.querySelector('title');
      const rawTitle = titleEl ? titleEl.textContent : '';
      const title = rawTitle.replace(/\s+/g, ' ').trim();
      const titleLen = title.length;

      if (!titleEl || titleLen < 45 || titleLen > 65) {
        fileFailures.push(`Title length error: ${titleLen} chars (Expected 45-65). Title: "${title}"`);
        titleErrors++;
      }

      // 2. Meta Description Length Check (120 - 155 chars inclusive)
      const metaDescEl = doc.querySelector('meta[name="description"]');
      const rawDesc = metaDescEl ? (metaDescEl.getAttribute('content') || '') : '';
      const desc = rawDesc.replace(/\s+/g, ' ').trim();
      const descLen = desc.length;

      if (!metaDescEl || descLen < 120 || descLen > 155) {
        fileFailures.push(`Description length error: ${descLen} chars (Expected 120-155). Desc: "${desc}"`);
        descErrors++;
      }

      // 3. Absence of Duplicates / Placeholders
      const lowerContent = content.toLowerCase();
      if (lowerContent.includes('lorem ipsum') || lowerContent.includes('lorem') || lowerContent.includes('ipsum')) {
        fileFailures.push('Placeholder detected: "Lorem Ipsum" found in HTML page.');
        placeholderErrors++;
      }

      // 4. Heading Hierarchy & Keyword Reuse
      const h1s = Array.from(doc.querySelectorAll('h1'));
      if (h1s.length !== 1) {
        fileFailures.push(`H1 count error: found ${h1s.length} <h1> tags (Expected exactly 1).`);
        h1Errors++;
      } else {
        const h1Text = h1s[0].textContent.replace(/\s+/g, ' ').trim();
        const h1Keywords = extractKeywords(h1Text);

        const pElements = Array.from(doc.querySelectorAll('p'));
        const pText = pElements.map(p => p.textContent).join(' ').toLowerCase();

        const missingKeywords = h1Keywords.filter(kw => !pText.includes(kw));

        if (h1Keywords.length === 0) {
          fileFailures.push(`H1 text empty or contains no valid keywords: "${h1Text}"`);
          keywordErrors++;
        } else if (missingKeywords.length > 0 && missingKeywords.length === h1Keywords.length) {
          fileFailures.push(`Keyword reuse error: None of H1 keywords [${h1Keywords.join(', ')}] found in <p> text. H1: "${h1Text}"`);
          keywordErrors++;
        }
      }

      if (fileFailures.length > 0) {
        totalFailures++;
        results.push({
          file: relativePath,
          failures: fileFailures
        });
      }
    }
  }

  // Pass 2: Source Page & Shared Metadata Integrity
  const appDir = path.join(ROOT, 'app');
  function findPageTsxFiles(dir, list = []) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) {
        findPageTsxFiles(p, list);
      } else if (f === 'page.tsx') {
        list.push(p);
      }
    }
    return list;
  }

  const pageFiles = findPageTsxFiles(appDir);
  console.log(`📌 Validating metadata exports across ${pageFiles.length} page components...`);

  for (const pageFile of pageFiles) {
    const relPath = path.relative(ROOT, pageFile);
    if (relPath.includes('dev/') || relPath.includes('preview')) continue;

    const code = fs.readFileSync(pageFile, 'utf-8');

    const sharedMetaMatch = code.match(/generateSharedMetadata\(\s*\{([\s\S]*?)\}\s*\)/);
    if (sharedMetaMatch) {
      const metaBlock = sharedMetaMatch[1];
      const titleMatch = metaBlock.match(/title:\s*["']([^"']+)["']/);
      const descMatch = metaBlock.match(/description:\s*["']([^"']+)["']/);

      if (titleMatch) {
        totalChecked++;
        const title = titleMatch[1].trim();
        const titleLen = title.length;
        const fileFailures = [];

        if (titleLen < 45 || titleLen > 65) {
          fileFailures.push(`Metadata title length error: ${titleLen} chars (Expected 45-65). Title: "${title}"`);
          titleErrors++;
        }

        if (descMatch) {
          const desc = descMatch[1].trim();
          const descLen = desc.length;
          if (descLen < 120 || descLen > 155) {
            fileFailures.push(`Metadata description length error: ${descLen} chars (Expected 120-155). Desc: "${desc}"`);
            descErrors++;
          }
        }

        if (code.toLowerCase().includes('lorem ipsum')) {
          fileFailures.push('Placeholder detected: "Lorem Ipsum" in source file.');
          placeholderErrors++;
        }

        if (fileFailures.length > 0) {
          totalFailures++;
          results.push({ file: relPath, failures: fileFailures });
        }
      }
    }
  }

  // Summary Report Output
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`📊 VERIFICATION REPORT SUMMARY`);
  console.log(`Total Checked Units (Pages + HTML Files): ${totalChecked}`);
  console.log(`Total Units Passing: ${totalChecked - totalFailures}`);
  console.log(`Total Units Failing: ${totalFailures}`);
  console.log(`  - Title Errors (45-65 chars): ${titleErrors}`);
  console.log(`  - Description Errors (120-155 chars): ${descErrors}`);
  console.log(`  - Placeholder/Lorem Ipsum Errors: ${placeholderErrors}`);
  console.log(`  - H1 Count Errors (!= 1): ${h1Errors}`);
  console.log(`  - H1 Keyword Reuse Errors: ${keywordErrors}`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  if (totalFailures > 0) {
    console.error('❌ DETAILED FAILURES BY FILE:');
    for (const res of results) {
      console.error(`\n📄 File: ${res.file}`);
      for (const fail of res.failures) {
        console.error(`   ❌ ${fail}`);
      }
    }
    process.exit(1);
  } else {
    console.log('✅ ALL SEO ACCEPTANCE CRITERIA PASSED 100%! 🎉');
    process.exit(0);
  }
}

verifyBuildHtml();
