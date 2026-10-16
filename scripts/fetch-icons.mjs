// Fetches Font Awesome Sharp Solid icons and writes them as an inline-SVG map.
import fs from 'fs';
const [,, out, ...names] = process.argv;
const tok = process.env.FONTAWESOME_TOKEN;
const { access_token } = await (await fetch('https://api.fontawesome.com/token', { method: 'POST', headers: { Authorization: `Bearer ${tok}` } })).json();
const icons = {};
for (const name of names) {
  const q = `{ release(version: "6.x") { version icon(name: "${name}") { id svgs(filter: {familyStyles: [{family: SHARP, style: SOLID}]}) { width height pathData } } } }`;
  const j = await (await fetch('https://api.fontawesome.com', { method: 'POST', headers: { Authorization: `Bearer ${access_token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ query: q }) })).json();
  const svg = j.data?.release?.icon?.svgs?.[0];
  if (!svg) { console.log('MISSING', name); continue; }
  icons[name] = { w: svg.width, h: svg.height, d: svg.pathData };
  console.log('ok', name, j.data.release.version);
}
const ver = '6.7.2';
const body = Object.entries(icons).map(([k, v]) => `  '${k}': { w: ${v.w}, h: ${v.h}, d: ${JSON.stringify(v.d)} },`).join('\n');
fs.writeFileSync(out, `// Font Awesome Pro ${ver} · Sharp Solid. Fetched once via the FA API and inlined so the
// site builds without a token and ships no icon JavaScript. Licensed under the
// account's Font Awesome Pro license: https://fontawesome.com/license
// Regenerate: FONTAWESOME_TOKEN=… node <script> src/data/icons.ts <names…>
/* eslint-disable */
export const icons = {
${body}
} as const;

export type IconName = keyof typeof icons;
`);
