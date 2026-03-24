const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const targetDirs = ['app', 'components', 'hooks', 'lib'];

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (!['node_modules', '.git', '.next'].includes(file)) {
      if (fs.statSync(dirFile).isDirectory()) {
        filelist = walkSync(dirFile, filelist);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
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

const defects = [];

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const relativePath = path.relative(rootDir, f);
  
  // Rule: Server Component shouldn't use window/localStorage directly outside useEffect
  // (Simplified check: if not "use client", check for window. / localStorage)
  const isClient = content.includes('"use client"') || content.includes("'use client'");
  if (!isClient) {
    if (/\bwindow\./.test(content) && !content.includes('typeof window')) {
      defects.push({ file: relativePath, type: 'Hydration', message: 'Server Component uses window object.' });
    }
    if (/\blocalStorage\./.test(content)) {
      defects.push({ file: relativePath, type: 'Hydration', message: 'Server Component uses localStorage.' });
    }
  }

  // Rule: useEffect should probably have a cleanup if it has addEventListener
  if (content.includes('useEffect') && content.includes('addEventListener')) {
    if (!content.includes('removeEventListener')) {
      defects.push({ file: relativePath, type: 'Logic', message: 'useEffect with addEventListener missing removeEventListener.' });
    }
  }
  
  // Rule: Math.random or Date.now in render path
  // Hard to detect perfectly without AST, but we can flag occurrences
  // We'll skip this if we know the project is solid, but let's log them to review.
  
  // Check for implicit any in catch blocks (catch(e))
  if (/catch\s*\(\s*[a-zA-Z_]+\s*\)/.test(content) && !content.includes('catch (e: any)') && !content.includes('catch (e: unknown)')) {
     // in TS, catch (e) is implicit any if strict is true and useUnknownInCatchVariables is false, though modern TS defaults to unknown.
  }
});

console.log(JSON.stringify(defects, null, 2));
