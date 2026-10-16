# Cloud Range — Redesign Concepts

Three homepage directions for [cloudrangecyber.com](https://www.cloudrangecyber.com/), built in Astro by Ridge Marketing as part of the CMS exploration (Option 2: Astro + Sanity).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Pages

| Route        | Concept          | Direction                                                                 |
| ------------ | ---------------- | ------------------------------------------------------------------------- |
| `/`          | Review hub       | The three concept cards                                                    |
| `/concept-a` | **Command**      | Dark, product-led. Portal mock over duotone photography, exercise band, product visuals. |
| `/concept-b` | **The Exercise** | Light, DM Serif Display + Poppins. One live-fire exercise, minute by minute. |
| `/concept-c` | **Live-Fire**    | Loud, stencil type, hazard yellow `#FFD60A` + cyan `#0AF3FF` on ink, animated attack-path diagram. |

A floating switcher at the bottom of each concept is for review only.

## Brand

Pulled from the live Squarespace theme (`site.css` / `custom.css`):

| Token  | Hex       | Role in concepts                                      |
| ------ | --------- | ----------------------------------------------------- |
| Purple | `#9300FE` | Primary brand + CTA color                              |
| Green  | `#84BD00` | Humans / defense / "detected" signal (logo green is `#79B92F`) |
| Orange | `#FF8500` | Warnings, "contained", focus ring, secondary accent    |

The logo in `public/brand/` is the official mark, converted from the color JPG on the live site into transparent dark- and light-text PNGs. Swap in the brand SVG when we have it.

## Structure

- `src/data/site.ts`: all shared content (nav, products, stats, industries, posts). This is the content model that would move into Sanity schemas or WordPress fields. The concepts differ only in presentation.
- `src/pages/concept-*.astro`: each concept is self-contained, with styles scoped to the page.
- Zero client-side JavaScript. Menus use `:hover`/`:focus-within` and `<details>`, and motion is CSS-only (it respects `prefers-reduced-motion`).

## Lighthouse (local production build, desktop / mobile; last run before photos and font changes)

| Concept | Performance | Accessibility | Best practices | SEO |
| ------- | ----------- | ------------- | -------------- | --- |
| A       | 100 / 98    | 100           | 100            | 100 |
| B       | 100 / 99    | 100           | 100            | 100 |
| C       | 100 / 99    | 100           | 100            | 100 |

For comparison, competitor desktop performance ranges from 99 (SimSpace) to 29 (CrowdStrike).

## Placeholders to replace

- Customer logos are rendered as text. Replace them with monochrome SVGs.
- Photos in `src/assets/photos/` are public-domain civilian placeholders (see `CREDITS.md`). Concept A shows them with a CSS purple duotone, so brand or stock photography drops straight in.
- Product UI in the heroes (scores, timelines, report card) is illustrative mock data.
- All links other than in-page anchors point to `#`.

## Icons

Font Awesome Pro 6.7.2, Sharp Regular (outline), inlined as SVG paths in `src/data/icons.ts` and rendered by `src/components/Icon.astro`. The site builds without a token and ships no Font Awesome JavaScript.

To add icons, put an FA API token with the **Pro icons and metadata** scope in `.env.local` (gitignored) as `FONTAWESOME_TOKEN=…`, then run:

```sh
set -a; . ./.env.local; set +a
FA_STYLE=REGULAR node scripts/fetch-icons.mjs src/data/icons.ts server crosshairs <more names…>
```

The script rewrites the whole file, so pass every icon name you want to keep.
