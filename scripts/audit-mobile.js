const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3001';
const pagesToAudit = [
  '/',
  '/leistungen/turoeffnung',
  '/leistungen/autooeffnung',
  '/kontakt',
  '/preise'
];

async function runAudit() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 12/13/14 Pro dimensions
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  const resultsDir = path.join(process.cwd(), '.system_generated', 'mobile_audit');
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  for (const pagePath of pagesToAudit) {
    const url = `${baseUrl}${pagePath}`;
    console.log(`Auditing: ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000); // Wait for animations/hydrations

      const fileName = pagePath === '/' ? 'home' : pagePath.replace(/\//g, '_').substring(1);
      const screenshotPath = path.join(resultsDir, `${fileName}.png`);
      
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Saved screenshot: ${screenshotPath}`);
    } catch (e) {
      console.error(`Failed to audit ${url}:`, e);
    }
  }

  await browser.close();
}

runAudit();
