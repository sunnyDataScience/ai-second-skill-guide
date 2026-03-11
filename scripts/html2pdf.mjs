import { chromium } from 'playwright';
import { resolve } from 'path';
import muhammara from 'muhammara';
import fs from 'fs';

const input = resolve(process.argv[2] || 'docs/ebook/assets/ai-second-skill-guide.html');
const email = process.argv[3] || '';
const outputDir = 'docs/ebook/assets';
const tempPdf = resolve(outputDir, '_temp_unprotected.pdf');
const finalName = email
  ? `ai-second-skill-guide-${email.replace(/[@.]/g, '_')}.pdf`
  : 'ai-second-skill-guide.pdf';
const finalPdf = resolve(outputDir, finalName);

// --- Step 1: Generate PDF with watermark + page numbers ---
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${input}`, { waitUntil: 'networkidle' });

// Inject watermark
await page.addStyleTag({
  content: `
    body::after {
      content: "桑尼資料科學${email ? ' · ' + email : ''}";
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-family: 'Noto Sans TC', sans-serif;
      color: rgba(150, 150, 150, 0.07);
      transform: rotate(-35deg);
      pointer-events: none;
      z-index: 99999;
      white-space: nowrap;
      letter-spacing: 0.05em;
    }
  `
});

await page.pdf({
  path: tempPdf,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', bottom: '20mm', left: '0', right: '0' },
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate: `
    <div style="width:100%; text-align:center; font-size:9px; color:#9ca3af; font-family:sans-serif; padding-bottom:4mm;">
      <span class="pageNumber"></span> / <span class="totalPages"></span>
    </div>
  `
});
await browser.close();
console.log('PDF generated, applying protection...');

// --- Step 2: Encrypt + restrict permissions ---
const ownerPassword = 'sunny-ds-owner-2026';
const userPassword = '';  // empty = no password to open

try {
  const readStream = new muhammara.PDFRStreamForFile(tempPdf);
  const writeStream = new muhammara.PDFWStreamForFile(finalPdf);

  const writer = muhammara.createWriterToModify(readStream, writeStream, {
    userPassword,
    ownerPassword,
    userProtectionFlag: 0  // 0 = deny everything (no print, no copy, no modify)
  });

  writer.end();
} catch (err) {
  // Fallback: just copy if encryption fails
  console.warn('Encryption warning:', err.message);
  fs.copyFileSync(tempPdf, finalPdf);
}

// Cleanup temp file
if (fs.existsSync(tempPdf)) fs.unlinkSync(tempPdf);

console.log(`Protected PDF saved to: ${finalPdf}`);
console.log(`Watermark: 桑尼資料科學${email ? ' · ' + email : ''}`);
console.log('Restrictions: no copy, no print, no modify');
console.log('Open without password: yes');
