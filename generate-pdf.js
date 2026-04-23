const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto('http://localhost:3000/newsletter.html', {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  await new Promise(r => setTimeout(r, 4000));

  await page.addStyleTag({
    content: `
      .pdf-btn, .chrome, .tweaks { display: none !important; }
      .cover, section, .toc, .thesis, .colophon { min-height: 0 !important; }
    `,
  });

  // Get full page height then expand viewport so clips work correctly
  const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewport({ width: 1280, height: fullHeight });
  await new Promise(r => setTimeout(r, 500));

  // Letter proportions at 1280px wide: 1280 * (11/8.5) = 1657px per page
  const pageHeight = 1657;
  const totalPages = Math.ceil(fullHeight / pageHeight);

  if (!fs.existsSync('pages')) fs.mkdirSync('pages');

  for (let i = 0; i < totalPages; i++) {
    const y = i * pageHeight;
    const h = Math.min(pageHeight, fullHeight - y);
    await page.screenshot({
      path: `pages/page-${String(i + 1).padStart(2, '0')}.png`,
      clip: { x: 0, y, width: 1280, height: h },
      type: 'png',
    });
    console.log(`Page ${i + 1}/${totalPages}`);
  }

  await browser.close();
  console.log(`Done — ${totalPages} pages exported`);
})();
