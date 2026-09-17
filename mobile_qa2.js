const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  const reqFails = [];
  page.on('requestfailed', req => reqFails.push(req.url() + ' :: ' + req.failure().errorText));
  await page.goto('file:///home/claude/sauberhippo_standalone.html', { waitUntil: 'networkidle' });
  console.log('Failed requests:', JSON.stringify(reqFails, null, 2));
  const hasCyrillicGarbage = await page.evaluate(() => /Гн|Ð[°-¾]/.test(document.body.innerText));
  console.log('Cyrillic garbage present:', hasCyrillicGarbage);
  await browser.close();
})();
