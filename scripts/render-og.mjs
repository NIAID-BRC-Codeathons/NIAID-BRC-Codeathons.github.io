#!/usr/bin/env node
// Render the OG card SVG to a static PNG using sharp.
// Run via: node scripts/render-og.mjs
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(here, "og-template.svg");
const outPath = resolve(here, "..", "public", "og-image.png");

const svg = await readFile(svgPath);

const png = await sharp(svg, { density: 144 })
	.resize(1200, 630, { fit: "cover" })
	.png({ compressionLevel: 9, palette: false })
	.toBuffer();

await writeFile(outPath, png);
console.log(`Wrote ${outPath} (${png.length} bytes)`);
