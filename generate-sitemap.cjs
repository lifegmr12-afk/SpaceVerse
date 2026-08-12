const fs = require("fs");
const path = require("path");

const SITE_URL = "https://space-verse-alpha.vercel.app";
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml");

// Automatically use the date of the build/deployment.
const today = new Date().toISOString().slice(0, 10);

const sciencePages = new Set([
  "alpha-centauri-system.html",
  "asteroid-belt.html",
  "asteroids.html",
  "ceres.html",
  "earth.html",
  "gaia-bh1.html",
  "jupiter.html",
  "kepler-90.html",
  "mars.html",
  "mercury.html",
  "milky-way.html",
  "moon.html",
  "neptune.html",
  "phoenix-a-black-hole.html",
  "sagittarius-a.html",
  "saturn.html",
  "solar-system.html",
  "sun.html",
  "ton-618.html",
  "trappist-1.html",
  "uranus.html",
  "venus.html",
]);

const supportPriority = new Map([
  ["contact.html", "0.6"],
  ["disclaimer.html", "0.3"],
  ["privacy-policy.html", "0.3"],
  ["terms.html", "0.3"],
]);

const files = fs.readdirSync(PUBLIC_DIR)
  .filter(file => file.toLowerCase().endsWith(".html"))
  .filter(file => !file.toLowerCase().startsWith("google"))
  .sort((a, b) => a.localeCompare(b));

const urls = [
  `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  ...files.map(file => {
    const priority = sciencePages.has(file)
      ? "0.9"
      : (supportPriority.get(file) || "0.5");

    return `  <url>
    <loc>${SITE_URL}/${file}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority}</priority>
  </url>`;
  })
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");

console.log(`✅ sitemap.xml generated automatically: ${files.length + 1} URLs`);
console.log(`📅 Build date: ${today}`);
console.log(`📍 ${SITEMAP_PATH}`);
