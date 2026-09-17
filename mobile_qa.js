const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const widths = [320, 375, 390, 430];
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', err => errors.push('pageerror: ' + err.message));
    await page.goto('file:///home/claude/sauberhippo_standalone.html', { waitUntil: 'networkidle' });
    const bodyText = await page.evaluate(() => document.body.innerText);
    const hasMojibake = /[Ð-ÿ]{2,}|Гн|Ð[°-¾]/.test(bodyText);
    const umlautCheck = bodyText.includes('Über uns') && bodyText.includes('Waschstraße') && bodyText.includes('Fußraum');
    console.log(`width=${w} errors=${errors.length} mojibake=${hasMojibake} umlautsOK=${umlautCheck}`);
    if (errors.length) console.log('  ', errors);
    await page.screenshot({ path: `/home/claude/mobile_qa_${w}.png`, fullPage: true });
    await page.click('.burger');
    await page.waitForTimeout(300);
    await page.screenshot({ path: `/home/claude/mobile_qa_${w}_menu.png` });
    await page.close();
  }
  await browser.close();
})();
