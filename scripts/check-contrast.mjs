/* Chantilly — WCAG contrast verification for shipped design tokens.
 * Fails (exit 1) if any shipped color combination drops below its threshold.
 * Wired into CI: a release physically cannot ship with a regression.
 * Usage: npm run test:contrast
 */
const srgb = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = (hex) => { const [r, g, b] = hex.replace('#', '').match(/../g).map((h) => parseInt(h, 16)); return 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b); };
const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };

const light = { paper: '#FBFAF7' };
const dark  = { paper: '#1B1B19' };

// [name, solid, surface, text, page background]
const families = [
  ['error/light',   '#B0473F', '#F8ECEA', '#7C2D27', light.paper],
  ['success/light', '#517A4D', '#EDF3EC', '#31502E', light.paper],
  ['warning/light', '#9A681C', '#F9F1E2', '#654310', light.paper],
  ['info/light',    '#48708F', '#EBF0F5', '#2C475C', light.paper],
  ['error/dark',    '#CD7168', '#352220', '#EFB9B2', dark.paper],
  ['success/dark',  '#84A97F', '#232B22', '#C0D7BB', dark.paper],
  ['warning/dark',  '#C99C4F', '#2E2718', '#E6C88E', dark.paper],
  ['info/dark',     '#7CA3C2', '#202A32', '#B6CFE3', dark.paper],
];

let failed = false;
for (const [name, solid, surface, text, bg] of families) {
  const checks = [
    ['solid/bg ≥ 3 (WCAG 1.4.11)',  ratio(solid, bg), 3],
    ['text/surface ≥ 7 (AAA)',      ratio(text, surface), 7],
    ['text/bg ≥ 4.5 (AA)',          ratio(text, bg), 4.5],
    ['bg/solid ≥ 4.5 (buttons)',    ratio(bg, solid), 4.5],
  ];
  for (const [label, r, threshold] of checks) {
    const ok = r >= threshold;
    if (!ok) failed = true;
    console.log(`${ok ? ' PASS' : ' FAIL'}  ${name.padEnd(14)} ${label.padEnd(30)} ${r.toFixed(2)}:1`);
  }
}
console.log(failed ? '\nContrast regression detected — release blocked.' : '\nAll shipped combinations pass.');
process.exit(failed ? 1 : 0);