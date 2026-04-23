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

  // Pages are 1280px wide x 1657px tall — full newsletter width, letter proportions (8.5:11)
  await page.pdf({
    path: 'newsletter.pdf',
    width: '1280px',
    height: '1657px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log('PDF generated successfully');
})();
