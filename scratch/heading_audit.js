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
    } else if (fullPath.endsWith('page.tsx')) {
      filesToProcess.push(fullPath);
    }
  }
}

for (const dir of targetDirs) {
  findFiles(dir);
}

const issues = [];

for (const file of filesToProcess) {
  const content = fs.readFileSync(file, 'utf8');
  
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/gs);
  
  if (!h1Match) {
    issues.push({ file, issue: 'No H1 found' });
  } else if (h1Match.length > 1) {
    issues.push({ file, issue: `Multiple H1s found (${h1Match.length})` });
  }

  // Check for hyphens and emojis in H1, H2, H3
  const headings = content.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gs);
  if (headings) {
    for (const h of headings) {
      const text = h.replace(/<[^>]+>/g, '').trim();
      const hasHyphen = text.includes('-');
      const hasEmoji = text.match(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|🚨|🔑|🔒|✅|⭐|📞|⚡|🛡️/gu);
      
      if (hasHyphen || hasEmoji) {
        issues.push({ file, issue: `Heading has hyphen or emoji: "${text}"` });
      }
    }
  }
}

fs.writeFileSync('scratch/heading_issues.json', JSON.stringify(issues, null, 2));
console.log(`Found ${issues.length} heading issues.`);
