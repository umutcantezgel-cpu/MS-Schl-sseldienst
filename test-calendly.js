const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  
  await page.goto('http://localhost:3099/termin-buchen', { waitUntil: 'networkidle' });
  
  const hasGate = await page.locator("text=Terminbuchung blockiert").count();
  console.log('Consent gate visible:', hasGate > 0);
  
  if (hasGate > 0) {
     await page.click("text=Zustimmen & Kalender laden");
     await page.waitForTimeout(3000); // let calendly load
  }
  
  const iframe = await page.locator('iframe[src*="calendly.com"]').count();
  console.log('Calendly inner iframe loaded:', iframe > 0);
  console.log('Logs:', logs);
  
  await browser.close();
  process.exit(0);
})();
