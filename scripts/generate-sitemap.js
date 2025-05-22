const fs = require('fs');
const { globby } = require('globby');

(async () => {
  const pages = await globby([
    'pages/**/*.{js,tsx}',
    '!pages/_*.{js,tsx}',
    '!pages/api',
  ]);

  const locales = ['ro', 'en'];
  const domain = 'https://sewcels.ro';

  const sitemapEntries = pages
    .filter((page) => !page.includes('[...'))
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('.js', '')
        .replace('.tsx', '')
        .replace('/index', '')
        .replace('[', '')
        .replace(']', '');

      return locales
        .map(
          (lang) => `<url>
  <loc>${domain}/${lang}${path}</loc>
</url>`
        )
        .join('\n');
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();