---
name: vital-city-design
description: Vital City's visual design system — colors, Halyard and Gascogne type, square-corner cards, chart and infographic rules, Ghost embed recipe, logo files and CSS. Use whenever making anything that should look like Vital City — a chart, infographic, dashboard, map, web page, embed, social card, promo graphic, event invite, deck or prototype — or when reviewing whether something is on brand. Use with the vital-city-voice skill for the words.
---

# Vital City design

Read `README.md` in this folder first. It is the brand book, and its "Read this first" section says which file wins when two disagree and lists the settled rulings that override older guidance.

Then read only what the job needs:

- Chart, table, map or big number: `docs/INFOGRAPHICS.md`, `docs/DATA-VIZ.md`, and link or copy `charts/chart-theme.css` (`.vc-chart__title`, `__subtitle`, `__source`, `__table`). Vega-Lite: `charts/vega-lite-theme.json`. Flourish: `flourish/vital-city.flourish-theme.json`.
- Dashboard, explorer or anything embedded in a Ghost article: `docs/DASHBOARDS.md` (embed recipe in §6).
- Anything that must sit on vitalcitynyc.org: `docs/WEB-DESIGN.md`.
- Words on the page: `docs/STYLEBOOK.md` and `docs/VOICE.md`.
- Colors, type and spacing as variables: `tokens/tokens.css` (full set, `--vc-*`) or `colors_and_type.css` (short names, quick prototypes). Components: `components/components.css`.
- Starting points: `templates/event-invite.html`, `templates/donation-card.html`, `ui_kits/journal/`, `ui_kits/data/`. Visual references: `preview/*.html`, `index.html`.

Fonts: Halyard Text loads from Adobe Fonts with `<link rel="stylesheet" href="https://use.typekit.net/qqk2vto.css">` (falls back to Inter where the kit isn't allowed). Gascogne is `fonts/GascogneTS-Light.ttf`; copy it next to the page and use the `@font-face` in `fonts/fonts.css`.

Logo: `assets/vc-logo-black.png` (black; on dark grounds use `filter: brightness(0) invert(1)`). Never redraw or approximate it.

Non-negotiables: white background; square corners; no drop shadows; no emoji; no gradients outside data scales; chartreuse is rare; chart headlines are halyard-text 900, sentence case, and say what the data means; Gascogne only for display titles, pullquotes and big numerals; sentence case everywhere except article headlines (title case); "state" lowercase; no serial comma.
