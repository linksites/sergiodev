// Regenera os screenshots dos projetos a partir dos sites ao vivo.
// Uso:
//   npm install --no-save playwright
//   npx playwright install chromium
//   node scripts/screenshots.mjs
//
// As URLs são lidas de src/content/projects.ts (campo url / slug do arquivo).

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const sites = [
  ["linksites", "https://linksites.vercel.app/"],
  ["barbearia-alpha", "https://linksites.github.io/alpha/"],
  ["democrata", "https://linksites.github.io/democrata/"],
  ["arcadenoe", "https://linksites.github.io/arcadenoe/"],
  ["frigorificocarneboa", "https://linksites.github.io/frigorificocarneboa/"],
  ["ivanleal", "https://linksites.github.io/ivanleal/"],
  ["danilo-souza", "https://linksites.github.io/danilo-souza/"],
  ["almeida-cunha", "https://linksites.github.io/almeida-cunha/"],
  ["gomes-de-deus", "https://linksites.github.io/gomes-de-deus/"],
  ["sradv", "https://linksites.github.io/sradv/"],
  ["sergiorodrigues", "https://linksites.github.io/sergiorodrigues/"],
];

const outDir = "public/images/projects";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });

for (const [slug, url] of sites) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1500);
    // Salva como JPEG temporário; converta para WebP com scripts/optimize-images, se desejar.
    await page.screenshot({ path: `${outDir}/${slug}.jpg`, type: "jpeg", quality: 82 });
    console.log(`OK ${slug}`);
  } catch (e) {
    console.log(`FALHOU ${slug}: ${e.message.split("\n")[0]}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Pronto. Converta os .jpg para .webp e atualize src/content/projects.ts se necessário.");
