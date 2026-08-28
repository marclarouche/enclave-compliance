const sharp = require('sharp');
const fs = require('fs');

// Master Icon (512x512 Solid Teal Hexagon + White Serif E)
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <polygon points="256,24 456,139 456,373 256,488 56,373 56,139" fill="#006680" />
  <text x="256" y="348" text-anchor="middle" font-family="Georgia, serif" font-size="256" font-weight="bold" fill="#FFFFFF">E</text>
</svg>`;

// Brands List
const brands = [
  { name: 'enclave-compliance', suffix: 'nclave-Compliance', width: 540 },
  { name: 'enclave-ai', suffix: 'nclave-AI', width: 320 },
  { name: 'enclave-gap', suffix: 'nclave-GAP', width: 380 },
  { name: 'enclave-ssp', suffix: 'nclave-SSP', width: 380 }
];

async function generateAssets() {
  for (const brand of brands) {
    const dir = `./resources/${brand.name}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // 1. Generate Master 512x512 App Icon PNG
    await sharp(Buffer.from(iconSvg))
      .resize(512, 512)
      .png()
      .toFile(`${dir}/icon-512x512.png`);

    // 2. Generate Primary Logotype PNG
    const logoSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${brand.width} 80" width="${brand.width}" height="80">
      <style>
        .hex { stroke: #006680; stroke-width: 4; fill: none; stroke-linejoin: round; }
        .e { font-family: Georgia, serif; font-size: 34px; font-weight: bold; fill: #006680; }
        .txt { font-family: Georgia, serif; font-size: 32px; font-weight: bold; fill: #1A1A1A; letter-spacing: -0.5px; }
      </style>
      <g transform="translate(10, 8)">
        <polygon points="32,2 58,17 58,47 32,62 6,47 6,17" class="hex" />
        <text x="32" y="44" text-anchor="middle" class="e">E</text>
      </g>
      <text x="72" y="49" class="txt">${brand.suffix}</text>
    </svg>`;

    await sharp(Buffer.from(logoSvg))
      .png()
      .toFile(`${dir}/logo-primary-2x.png`);

    console.log(`✓ Packaged PNGs for ${brand.name}`);
  }
}

generateAssets();