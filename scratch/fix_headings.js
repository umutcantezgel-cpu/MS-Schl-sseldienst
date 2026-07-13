const fs = require('fs');
const path = require('path');

const targetDirs = ['app'];
let filesToProcess = [];

function findFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      filesToProcess.push(fullPath);
    }
  }
}

targetDirs.forEach(findFiles);

function cleanTextNodes(html) {
  // We want to replace hyphens and emojis only outside of tags.
  // A simple way is to match tags and text separately.
  const parts = html.split(/(<[^>]*>)/);
  for (let i = 0; i < parts.length; i++) {
    // Even indices are text nodes, odd indices are tags
    if (i % 2 === 0) {
      let text = parts[i];
      // Remove emojis
      text = text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|🚨|🔑|🔒|✅|⭐|📞|⚡|🛡️|🖼️|📊/gu, '');
      // Handle compound hyphens (e.g. Tastatur-Bedienbarkeit -> Tastaturbedienbarkeit)
      text = text.replace(/([a-zA-ZäöüßÄÖÜ])\-([A-ZÄÖÜ])/g, (m, p1, p2) => p1 + p2.toLowerCase());
      // Handle remaining hyphens
      text = text.replace(/-/g, ' ');
      parts[i] = text;
    }
  }
  return parts.join('');
}

let changesCount = 0;

for (const file of filesToProcess) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Process H1, H2, H3
  const headingRegex = /(<h[1-6][^>]*>)(.*?)(<\/h[1-6]>)/gs;
  content = content.replace(headingRegex, (match, openTag, innerContent, closeTag) => {
    const cleanedInner = cleanTextNodes(innerContent);
    return openTag + cleanedInner + closeTag;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    changesCount++;
    console.log(`Fixed headings in ${file}`);
  }
}

console.log(`\nFixed headings in ${changesCount} files.`);
