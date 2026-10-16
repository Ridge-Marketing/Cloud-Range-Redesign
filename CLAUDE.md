# Cloud Range Redesign

Homepage design concepts for cloudrangecyber.com, built by Ridge Marketing in Astro 5 as part of a CMS exploration (Astro + Sanity is the candidate stack). These are review mockups, not the production site.

## Commands

```sh
npm run dev      # http://localhost:4321
npm run build    # static output in dist/ (must pass before committing)
npm run preview  # serve dist/
```

## Layout

- `src/pages/index.astro`: review hub (white, three concept cards only).
- `src/pages/concept-a.astro` (**In brand**), `concept-b.astro` (**Serif**), `concept-c.astro` (**The "out there" design**). Each page is self-contained: markup plus a page-scoped `<style>` block with its own color tokens on the root class (`.a`, `.b`, `.c`).
- `src/data/site.ts`: shared content (nav, products, stats, industries, posts). This mirrors the future CMS content model, so concepts change presentation, not copy. When one concept needs different wording, override it locally in that page (see `productTitles` in concept C) instead of editing shared data.
- `src/components/`: `Logo.astro` (official logo PNGs in `public/brand/`), `Icon.astro`, `ConceptBar.astro` (review-only switcher; hidden on the hub).
- `src/assets/photos/`: public-domain civilian placeholders, credited in `CREDITS.md`. Used by concept A through `astro:assets` `<Image>`.

## Concept direction (client feedback so far)

- **A:** dark, product-UI hero, green-duotone photography, alternating light sections. Brand green leads (buttons, bands, glows, icons); purple is reserved for AI elements; orange means warnings. No military imagery.
- **B:** cool off-white (not beige), DM Serif Display for headings, Poppins for UI, muted purple `#7A45D6` and bright green `#8FE31A`. The first hero line stays sans.
- **C:** brand colors, green-led: brand green `#84BD00` leads (headline, stats, buttons, CTA band); purple `#9300FE` is secondary (AI band, ticker, defenders; `#B77BFF` for purple text on dark); bone `#F3EFE6` on ink. Stencil font only on "PROVEN." and the CTA and product numbers; everything else is Inter extra-bold. Keep the transparent outline stroke on "NOT ASSUMED." exactly as is, including its inner contour lines.
- Brand colors from the live site: purple `#9300FE`, green `#84BD00` (logo green `#79B92F`), orange `#FF8500`.

## Conventions

- Zero client JavaScript. Menus use `:hover`/`:focus-within` and `<details>`; motion is CSS-only and respects `prefers-reduced-motion`.
- Vertically align `=` / `:` in consecutive declarations and object literals (see `src/data/site.ts`).
- Must work at 390px width with no horizontal scroll.

## Icons

Font Awesome Pro 6.7.2 **Sharp Regular**, inlined as SVG paths in `src/data/icons.ts`. No FA runtime, and no token is needed to build.

- Fetch or add icons: `set -a; . ./.env.local; set +a; FA_STYLE=REGULAR node scripts/fetch-icons.mjs src/data/icons.ts <names…>`. The script rewrites the whole file, so pass every existing name plus the new ones.
- The token lives only in `.env.local` (gitignored) and needs the "Pro icons and metadata" scope. Never commit it; check `git diff --cached` before committing.
- Astro scopes styles per component, so styling an `<Icon class="x">` from a page needs `:global(.x)` (e.g. `.steps :global(.step-ic)`).

## Gotchas

- Generic selectors like `.ind span { position: absolute }` also catch icon wrappers. Scope them (`.ind a > span`) or use a `div` wrapper.
- Duotone photos use a CSS `filter` chain on the `img` (`grayscale → sepia → hue-rotate`). `mix-blend-mode` rendered blank inside the industry cards.
- Verify visual changes by building and taking screenshots at 1440px and 390px before reporting them as done.
