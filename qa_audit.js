const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = process.cwd();
const ignoreDirs = ['node_modules', '.next', '.git', 'Pipeline', 'public'];

function walkSync(dir, filelist = []) {
  if (ignoreDirs.includes(path.basename(dir))) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (!ignoreDirs.includes(file)) {
      if (fs.statSync(dirFile).isDirectory()) {
        filelist = walkSync(dirFile, filelist);
      } else {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const allFiles = walkSync(rootDir);
const stats = { tsx: 0, ts: 0, css: 0, json: 0, md: 0, other: 0 };
const routes = [];
const components = [];

allFiles.forEach(f => {
  const ext = path.extname(f);
  if (ext === '.tsx') stats.tsx++;
  else if (ext === '.ts') stats.ts++;
  else if (ext === '.css') stats.css++;
  else if (ext === '.json') stats.json++;
  else if (ext === '.md') stats.md++;
  else stats.other++;

  const content = fs.readFileSync(f, 'utf8');
  
  // Route detection
  if (f.includes('/app/') && f.endsWith('page.tsx')) {
    const routePath = f.split('/app/')[1].replace('page.tsx', '');
    const isClient = content.includes('"use client"') || content.includes("'use client'");
    const hasMetadata = content.includes('export const metadata') || content.includes('export function generateMetadata');
    const hasLayout = fs.existsSync(path.join(path.dirname(f), 'layout.tsx'));
    const hasLoading = fs.existsSync(path.join(path.dirname(f), 'loading.tsx'));
    const hasError = fs.existsSync(path.join(path.dirname(f), 'error.tsx'));
    
    routes.push({
      path: '/' + routePath,
      name: path.basename(f),
      type: isClient ? 'Client' : 'Server',
      metadata: hasMetadata,
      layout: hasLayout,
      loading: hasLoading,
      error: hasError
    });
  }

  // Component detection
  if (f.includes('/components/') && f.endsWith('.tsx')) {
    const isClient = content.includes('"use client"') || content.includes("'use client'");
    const hasProps = content.includes('interface ') || content.includes('type ') || /:\s*React\.FC</.test(content);
    components.push({
      filename: path.basename(f),
      path: f.split('/components/')[1],
      type: isClient ? 'Client' : 'Server',
      hasProps
    });
  }
});

const report = {
  totalFiles: allFiles.length,
  stats,
  routeCount: routes.length,
  routes,
  componentCount: components.length,
  components
};

fs.writeFileSync('.qa-baseline-inventory.json', JSON.stringify(report, null, 2));
console.log('Automated Codebase Scanner completed. Output saved to .qa-baseline-inventory.json');
