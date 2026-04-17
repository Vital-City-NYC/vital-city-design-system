# Vital City design system

The working kit for anything Vital City makes — articles, dashboards, reports, decks, merch, social cards, data stories. Tokens, fonts, components, chart themes and editorial guidance, all in one place.

## Quick start

```html
<link rel="stylesheet" href="https://use.typekit.net/qqk2vto.css">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="fonts/fonts.css">
<link rel="stylesheet" href="components/components.css">
<link rel="stylesheet" href="charts/chart-theme.css">
```

Open [`index.html`](index.html) for the living style guide — every token, component and chart pattern on one page.

## What's in here

| Path | What it is |
|------|------------|
| [`tokens/tokens.css`](tokens/tokens.css) | All CSS custom properties: colors, tints, type, spacing, semantic roles |
| [`tokens/tokens.json`](tokens/tokens.json) | Same tokens as JSON for tooling / Figma import |
| [`fonts/`](fonts/) | GascogneTS-Light TTF + `fonts.css` with Typekit instructions |
| [`assets/`](assets/) | Logo PNGs (black, tight crop) |
| [`components/components.css`](components/components.css) | Nav, buttons, cards, section headers, footer, photo tags |
| [`charts/chart-theme.css`](charts/chart-theme.css) | Standalone chart styling (Vega-Lite, D3, SVG) |
| [`charts/vega-lite-theme.json`](charts/vega-lite-theme.json) | Drop-in Vega-Lite config |
| [`flourish/vital-city.flourish-theme.json`](flourish/vital-city.flourish-theme.json) | Flourish settings (paste into any viz's Preview → Settings) |
| [`docs/BRAND.md`](docs/BRAND.md) | Brand DNA, color, typography, photography, illustration |
| [`docs/VOICE.md`](docs/VOICE.md) | Editorial voice, what we publish, pitch guidance |
| [`docs/STYLEBOOK.md`](docs/STYLEBOOK.md) | AP-adjacent style entries A–Z |
| [`docs/DATA-VIZ.md`](docs/DATA-VIZ.md) | Chart conventions — headlines, annotation, Flourish specifics |

## Design principles

1. **Architectural, not decorative.** Clean grids. Minimal gridlines. Square corners by default. Color encodes meaning, not mood.
2. **Serif for the headline, sans for the utility.** Gascogne for the big analytical titles and section heads; Halyard for everything that has a job to do.
3. **Chartreuse and Safety Orange are pops, not floods.** One underline, one drop shadow, one CTA per page goes a long way.
4. **Data viz is a brand expression.** Headlines are opinionated ("1 in 7 days in 2025 were shooting-free"), not descriptive ("Shooting-Free Days by Year").
5. **Voice is measured, pragmatic, evidenced.** No invective. No vibes-only op-eds. Acknowledge the strongest opposing view before you disagree.

## Credits

- Brand system by Design for Progress (September 2024).
- Halyard by Darden Studio. Gascogne by TypeShop Collection. Bayard (wordmark only) by Vocal Type.
- Flourish theme values reverse-engineered from published Vital City charts on `public.flourish.studio`.
