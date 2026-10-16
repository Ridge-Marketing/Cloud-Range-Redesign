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
| `/`          | Review hub       | Concept cards, Lighthouse results, competitive read of all 12 sites        |
| `/concept-a` | **Command**      | Dark, product-led. The hero is a live Performance Portal mock.             |
| `/concept-b` | **The Exercise** | Light, editorial serif. The page tells one live-fire exercise, minute by minute. |
| `/concept-c` | **Live-Fire**    | Loud, stencil type, full-bleed purple, animated attack-path diagram.       |

A floating switcher at the bottom of each concept is for review only.

## Brand

Pulled from the live Squarespace theme (`site.css` / `custom.css`):

| Token  | Hex       | Role in concepts                                      |
| ------ | --------- | ----------------------------------------------------- |
| Purple | `#9300FE` | Primary brand + CTA color                              |
| Green  | `#84BD00` | Logo, "defended / detected / pass" signal              |
| Orange | `#FF8500` | Warnings, "contained", focus ring, secondary accent    |

The shield mark and stencil wordmark in `src/components/Logo.astro` are a recreation. Swap in the official SVG before launch.

## Structure

- `src/data/site.ts`: all shared content (nav, products, stats, industries, posts). This is the content model that would move into Sanity schemas or WordPress fields. The concepts differ only in presentation.
- `src/pages/concept-*.astro`: each concept is self-contained, with styles scoped to the page.
- Zero client-side JavaScript. Menus use `:hover`/`:focus-within` and `<details>`, and motion is CSS-only (it respects `prefers-reduced-motion`).

## Lighthouse (local production build, desktop / mobile)

| Concept | Performance | Accessibility | Best practices | SEO |
| ------- | ----------- | ------------- | -------------- | --- |
| A       | 100 / 98    | 100           | 100            | 100 |
| B       | 100 / 99    | 100           | 100            | 100 |
| C       | 100 / 99    | 100           | 100            | 100 |

For comparison, competitor desktop performance ranges from 99 (SimSpace) to 29 (CrowdStrike). See the hub page for the full table.

## Placeholders to replace

- Customer logos are rendered as text. Replace them with monochrome SVGs.
- Product UI in the heroes (scores, timelines, report card) is illustrative mock data.
- All links other than in-page anchors point to `#`.
