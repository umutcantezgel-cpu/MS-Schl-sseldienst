const http = require('http');
const fs = require('fs');

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      resolve({ path, status: res.statusCode });
    }).on('error', () => {
      resolve({ path, status: 500 });
    });
  });
}

async function runAudit() {
  console.log('--- STARTING PHASE 4 ROUTE AUDIT ---');
  
  // A minimum set of critical paths to test for 200 vs 404
  const pathsToTest = [
    '/',
    '/leistungen/web-entwicklung', 
    '/leistungen/seo',
    '/ueber-uns',
    '/blog',
    '/faq',
    '/anfrage',
    '/termin',
    '/datenschutz',
    '/impressum',
    '/this-is-a-deliberate-404-check'
  ];

  let passed = 0;
  let failed = 0;

  for (const p of pathsToTest) {
    const res = await checkUrl(p);
    let ok = false;
    
    // The deliberate 404 should return 404. Others 200 or 30x.
    if (p.includes('404-check')) {
      ok = (res.status === 404);
    } else {
      // 200 OK, or redirect (307, 308)
      ok = (res.status >= 200 && res.status < 400); 
    }

    if (ok) {
      console.log(`[PASS] ${p} -> ${res.status}`);
      passed++;
    } else {
      console.error(`[FAIL] ${p} -> ${res.status}`);
      failed++;
    }
  }

  console.log(`\nAudit Complete: ${passed} Passed, ${failed} Failed.`);
  if (failed > 0) process.exit(1);
}

runAudit();
