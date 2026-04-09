const fs = require('fs');
const path = require('path');

const map = {
  "11": "text-xs",
  "12": "text-xs",
  "13": "text-sm",
  "14": "text-sm",
  "15": "text-base",
  "16": "text-base",
  "17": "text-lg",
  "18": "text-lg",
  "20": "text-xl",
  "22": "text-xl",
  "26": "text-2xl",
  "40": "text-4xl",
  "44": "text-5xl",
  "72": "text-[4.5rem]" 
};

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getFiles(path.join(dir, file), filesList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      filesList.push(path.join(dir, file));
    }
  }
  return filesList;
}

const targetDirs = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components')
];

let files = [];
for (const d of targetDirs) {
  if (fs.existsSync(d)) {
    files = getFiles(d, files);
  }
}

let updated = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  content = content.replace(/text-\[(\d+)px\]/g, (match, px) => {
    if (map[px]) {
      changed = true;
      return map[px];
    }
    return match;
  });
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log("Updated: " + file.split('/').pop());
    updated++;
  }
}
console.log(`Updated ${updated} files.`);
