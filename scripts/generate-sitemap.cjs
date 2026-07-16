const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

const today = new Date().toISOString().split("T")[0];

const files = fs.readdirSync(publicDir);

const pages = files.filter(file =>
  file.endsWith(".html") &&
  !file.startsWith("google")
);

const urls = pages.map(file => `
  <url>
    <loc>https://space-verse-alpha.vercel.app/${file}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`).join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
  <loc>https://space-verse-alpha.vercel.app/</loc>
  <lastmod>${today}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>

${urls}

</urlset>`;

fs.writeFileSync(
  path.join(publicDir, "sitemap.xml"),
  sitemap
);

const sitemapPath = path.join(publicDir, "sitemap.xml");

console.log("Today:", today);
console.log("Writing to:", sitemapPath);

fs.writeFileSync(sitemapPath, sitemap);

console.log("✅ sitemap.xml generated");