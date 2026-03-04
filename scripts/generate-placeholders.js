const fs = require('fs');
const path = require('path');

function createPlaceholder(filePath, width, height, text, bgColor) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.06}" fill="rgba(255,255,255,0.7)" font-weight="bold">${text}</text>
</svg>`;

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, svg);
}

// Hero images
createPlaceholder('public/images/hero/hero-bg.jpg', 1920, 1080, 'Hero Background', '#0d4f4f');
createPlaceholder('public/images/hero/cta-bg.jpg', 1920, 800, 'CTA Background', '#0a3d6b');
createPlaceholder('public/images/hero/domestic-hero.jpg', 1920, 800, 'Domestic Hero', '#2d5016');
createPlaceholder('public/images/hero/international-hero.jpg', 1920, 800, 'International Hero', '#4a1942');
createPlaceholder('public/images/hero/about-hero.jpg', 1920, 800, 'About Hero', '#1a3a5c');
createPlaceholder('public/images/hero/blog-hero.jpg', 1920, 800, 'Blog Hero', '#3d2914');
createPlaceholder('public/images/hero/contact-hero.jpg', 1920, 800, 'Contact Hero', '#14363d');

// Destination images
const dests = [
    ['kerala', '#1a6b4a'], ['rajasthan', '#8b4513'], ['bali', '#0d6b4f'],
    ['dubai', '#6b4400'], ['kashmir', '#2d5a87'], ['maldives', '#006b8f']
];
dests.forEach(([name, color]) => {
    createPlaceholder(`public/images/destinations/${name}.jpg`, 800, 600, name.charAt(0).toUpperCase() + name.slice(1), color);
});

// Domestic package images
const domesticPkgs = ['kerala', 'goa', 'rajasthan', 'himachal', 'andaman', 'kashmir', 'meghalaya'];
const domesticColors = ['#1a6b4a', '#c4722f', '#8b4513', '#2d5a87', '#006b8f', '#2d5a87', '#1a4a2a'];
domesticPkgs.forEach((name, i) => {
    for (let j = 0; j < 4; j++) {
        const suffix = j === 0 ? '' : `-${j + 1}`;
        createPlaceholder(`public/images/packages/${name}${suffix}.jpg`, 800, 600, `${name.charAt(0).toUpperCase() + name.slice(1)} ${j + 1}`, domesticColors[i]);
    }
});

// International package images
const intlPkgs = ['bali', 'dubai', 'thailand', 'maldives', 'singapore', 'europe'];
const intlColors = ['#0d6b4f', '#6b4400', '#4a1942', '#006b8f', '#2d2d6b', '#3d2914'];
intlPkgs.forEach((name, i) => {
    for (let j = 0; j < 4; j++) {
        const suffix = j === 0 ? '' : `-${j + 1}`;
        createPlaceholder(`public/images/packages/${name}${suffix}.jpg`, 800, 600, `${name.charAt(0).toUpperCase() + name.slice(1)} ${j + 1}`, intlColors[i]);
    }
});

// Blog images
const blogImgs = ['kerala-guide', 'bali-tips', 'visa-guide', 'family-travel'];
const blogColors = ['#1a6b4a', '#0d6b4f', '#4a1942', '#c4722f'];
blogImgs.forEach((name, i) => {
    createPlaceholder(`public/images/blog/${name}.jpg`, 800, 450, name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), blogColors[i]);
});

console.log('✅ All placeholder images generated!');
