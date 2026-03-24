const fs = require('fs');
const pages = [
  'app/not-found.tsx',
  'app/(marketing)/leistungen/page.tsx',
  'app/(marketing)/ueber-uns/page.tsx',
  'app/(legal)/datenschutz/page.tsx',
  'app/(legal)/impressum/page.tsx',
  'app/(marketing)/faq/page.tsx',
  'app/(marketing)/blog/page.tsx',
  'app/(marketing)/anfrage/page.tsx' // Might be /kontakt depending on previous phases
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    console.log(`[PASS] ${p} exists.`);
  } else {
    console.log(`[WARN] ${p} missing.`);
  }
}
