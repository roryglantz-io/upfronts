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

  // Strip elements and styles that don't belong in print
  await page.addStyleTag({
    content: `
      .pdf-btn, .chrome, .tweaks { display: none !important; }
      .cover, section, .toc, .thesis, .colophon { min-height: 0 !important; }
    `,
  });

  // scale: 0.63 fits a 1280px-wide layout onto letter paper (8.5in = ~816px)
  await page.pdf({
    path: 'newsletter.pdf',
    format: 'Letter',
    printBackground: true,
    scale: 0.63,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log('PDF generated successfully');
})();
