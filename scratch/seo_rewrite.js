const fs = require('fs');
const path = require('path');

const targetDirs = ['app', 'lib/data'];
let filesToProcess = [];

function findFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      filesToProcess.push(fullPath);
    }
  }
}

for (const dir of targetDirs) {
  findFiles(dir);
}

function cleanText(text, isTitle) {
  // Remove emojis
  let cleaned = text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|🚨|🔑|🔒|✅|⭐|📞|⚡|🛡️/gu, '');
  
  // Replace " - " with " | " if it's separating brand, otherwise space
  if (isTitle) {
    cleaned = cleaned.replace(/ - /g, ' | ');
  } else {
    cleaned = cleaned.replace(/ - /g, ' ');
  }

  // Handle specific hyphenated compound words in German
  // Example: Schlüssel-Notdienst -> Schlüsselnotdienst
  cleaned = cleaned.replace(/([a-zA-ZäöüßÄÖÜ])\-([A-ZÄÖÜ])/g, (match, p1, p2) => {
    return p1 + p2.toLowerCase();
  });
  
  // Handle remaining hyphens (e.g. 24-Stunden -> 24 Stunden)
  cleaned = cleaned.replace(/-/g, ' ');
  
  // Collapse multiple spaces and trim
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  // Enforce lengths
  if (isTitle && cleaned.length > 65) {
    cleaned = cleaned.substring(0, 62).trim() + '...'; // Not ideal, but ensures length limit
  }

  return cleaned;
}

let changesCount = 0;

for (const file of filesToProcess) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Regex to match title: "..." or title: `...`
  const titleRegex = /title:\s*(["'`])(.*?)(?<!\\)\1/g;
  content = content.replace(titleRegex, (match, quote, titleText) => {
    // Exclude layout keys or simple variables if they don't look like SEO text
    if (titleText.length < 3 || titleText.includes('${')) return match; 
    const newTitle = cleanText(titleText, true);
    return `title: ${quote}${newTitle}${quote}`;
  });

  // Regex to match description: "..." or description: `...`
  const descRegex = /description:\s*(["'`])(.*?)(?<!\\)\1/gs;
  content = content.replace(descRegex, (match, quote, descText) => {
    if (descText.length < 5 || descText.includes('${')) return match;
    const newDesc = cleanText(descText, false);
    return `description: ${quote}${newDesc}${quote}`;
  });

  // Regex to match SEO headings (H1, H2, H3) text inside JSX
  // This is much trickier. Let's start with title/desc.
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    changesCount++;
    console.log(`Updated metadata in ${file}`);
  }
}

console.log(`\nFinished processing. Changed metadata in ${changesCount} files.`);
