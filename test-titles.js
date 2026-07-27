const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/title:\s*['"`](.*?)['"`]/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title.length > 65 || title.length < 10) {
      console.log(`[${title.length} chars] ${filePath}: ${title}`);
    }
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('page.tsx')) {
      checkFile(filePath);
    }
  }
}

walk('app');
