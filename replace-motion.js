const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('framer-motion')) return;
  
  let original = content;

  // 1. Replace 'motion' with 'm' in framer-motion import
  // Support zero spaces before/after from (e.g. from"framer-motion")
  let modified = content.replace(/(import\s+{[^}]*)\bmotion\b([^}]*}\s*from\s*['"]framer-motion['"])/g, '$1m$2');
  
  if (original !== modified) {
    fs.writeFileSync(filePath, modified, 'utf8');
    console.log('Fixed import in: ' + filePath);
  }
}

walkDir(path.join(__dirname, 'components'), processFile);
walkDir(path.join(__dirname, 'app'), processFile);

console.log('Done fixing imports!');
