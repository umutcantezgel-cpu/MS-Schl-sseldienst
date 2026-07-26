const fs = require('fs');
const path = require('path');

const files = [
  'app/(marketing)/danke/page.tsx',
  'app/(marketing)/anfrage/page.tsx',
  'app/(marketing)/termin-buchen/page.tsx',
  'app/(marketing)/ueber-uns/geschichte/page.tsx',
  'app/(marketing)/ueber-uns/karriere/page.tsx',
  'app/(marketing)/ueber-uns/philosophie/page.tsx',
  'app/(marketing)/ueber-uns/team/page.tsx',
  'app/(marketing)/lexikon/page.tsx',
  'app/(marketing)/ratgeber/page.tsx',
  'app/(marketing)/schluessel-schmiede/page.tsx',
  'app/(marketing)/servicegebiet/page.tsx',
  'app/(marketing)/preview-images/page.tsx',
  'app/referenzen/page.tsx',
  'app/sitemap-uebersicht/page.tsx',
  'app/embed/einbruchrisiko/page.tsx',
  'app/(legal)/cookie-richtlinie/page.tsx',
  'app/(legal)/impressum/page.tsx',
  'app/(legal)/widerruf/page.tsx'
];

const basePath = '/Users/umurey/Downloads/MS-Schl-sseldienst-main';

console.log('--- WORD COUNT & KEYWORD REUSE AUDIT ---');

files.forEach((relPath) => {
  const fullPath = path.join(basePath, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`[MISSING] ${relPath}`);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf-8');
  
  // Strip JSX tags, imports, metadata definitions, exports
  const cleanText = content
    .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, '')
    .replace(/export\s+const\s+metadata\s*=[\s\S]*?};/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
    
  const words = cleanText.split(/\s+/).filter(Boolean);
  
  console.log(`${relPath}: ${words.length} words`);
});
