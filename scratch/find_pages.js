const fs = require('fs');
const path = require('path');

const targetDirs = ['app/(marketing)', 'app/referenzen', 'app/(legal)', 'app/standorte', 'app/(panic)'];
let pagesToAudit = [];

function findPages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPages(fullPath);
    } else if (file === 'page.tsx' || file === 'page.ts' || file === 'layout.tsx') {
      pagesToAudit.push(fullPath);
    }
  }
}

// Add root pages
pagesToAudit.push('app/page.tsx', 'app/layout.tsx', 'app/sitemap-uebersicht/page.tsx');

for (const dir of targetDirs) {
  findPages(dir);
}

// Write to JSON for the agents to process
fs.writeFileSync('scratch/pages_to_audit.json', JSON.stringify(pagesToAudit, null, 2));
console.log(`Found ${pagesToAudit.length} pages to audit.`);
