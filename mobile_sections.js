const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
  await page.goto('file:///home/claude/sauberhippo_standalone.html', { waitUntil: 'networkidle' });

  const sections = ['header.site', '.hero', '.brands', '#leistungen', '#ablauf', '#ueber-uns', '#einblicke', '#termin', '#agb', '#faq', 'footer'];
  for (const sel of sections) {
    const el = await page.$(sel);
    if (!el) { console.log('MISSING:', sel); continue; }
    const box = await el.boundingBox();
    console.log(sel, JSON.stringify(box));
    await el.screenshot({ path: `/home/claude/sec_${sel.replace(/[^a-z0-9]/gi,'_')}.png` });
  }

  // check horizontal overflow
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  console.log('scrollWidth', scrollWidth, 'clientWidth', clientWidth, 'overflow:', scrollWidth > clientWidth);

  await browser.close();
})();
