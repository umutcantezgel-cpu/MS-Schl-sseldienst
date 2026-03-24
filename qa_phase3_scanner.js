const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = process.cwd();
const targetDirs = ['app', 'components', 'hooks', 'lib'];

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (!['node_modules', '.git', '.next', 'public'].includes(file)) {
      if (fs.statSync(dirFile).isDirectory()) {
        filelist = walkSync(dirFile, filelist);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

let allFiles = [];
targetDirs.forEach(d => {
  allFiles = allFiles.concat(walkSync(path.join(rootDir, d)));
});
// also check next.config
if (fs.existsSync('next.config.mjs')) allFiles.push(path.join(rootDir, 'next.config.mjs'));
if (fs.existsSync('next.config.ts')) allFiles.push(path.join(rootDir, 'next.config.ts'));

const findings = {
  performance: [],
  security: [],
  state: []
};

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const relPath = path.relative(rootDir, f);
  
  // A2 & A3: Performance & Vitals
  if (content.includes('<img ')) {
    findings.performance.push({ file: relPath, msg: 'Native <img> tag used instead of next/image.' });
  }
  // B5: Security XSS
  if (content.includes('dangerouslySetInnerHTML')) {
    if (!content.includes('purify') && !content.includes('sanitize')) {
      findings.security.push({ file: relPath, msg: 'dangerouslySetInnerHTML found without obvious sanitizer.' });
    }
  }
  // B7: next.config.js Headers
  if (relPath.includes('next.config')) {
    if (!content.includes('headers') || !content.includes('Content-Security-Policy')) {
      findings.security.push({ file: relPath, msg: 'Missing Content-Security-Policy (CSP) in Next config.' });
    }
  }
});

fs.writeFileSync('.qa-phase3-rawings.json', JSON.stringify(findings, null, 2));
console.log('✅ QA Phase 3 Codebase Scan Completed!');
