const puppeteer = require('puppeteer');

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

  // Wait for React + fonts to fully render
  await new Promise(r => setTimeout(r, 4000));

  // Hide the export button in the PDF
  await page.addStyleTag({ content: '.pdf-btn { display: none !important; }' });

  const height = await page.evaluate(() => document.documentElement.scrollHeight);

  await page.pdf({
    path: 'newsletter.pdf',
    width: '1280px',
    height: `${height}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log(`Done — PDF is ${height}px tall`);
})();
