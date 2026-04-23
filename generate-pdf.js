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

  await page.addStyleTag({
    content: `
      .pdf-btn, .chrome, .tweaks { display: none !important; }
      .cover, section, .toc, .thesis, .colophon { min-height: 0 !important; }
    `,
  });

  await page.screenshot({
    path: 'newsletter.png',
    fullPage: true,
    type: 'png',
  });

  await browser.close();
  console.log('Screenshot generated successfully');
})();
