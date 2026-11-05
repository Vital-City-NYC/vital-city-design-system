# Vital City — Data UI kit

Interactive data dashboard: hero, three big-stat tiles, bar chart + line chart, filter chips, tile grid, detail page.

## Entry
- `index.html` — click a filter chip or a tile to drill into a detail page.

## Components
- **Charts.jsx** — `DataNav`, `DataHero`, `FilterBar`, `BarChart`, `LineChart`, `BigStat`.
- **App.jsx** — routes (dashboard / detail) + sample fixtures.

## Chart grammar (follow strictly)
- **Opinionated title** (Halyard Black, sentence-like claim, not a noun phrase).
- **Quiet dek** (Halyard Light 200) describing the measurement.
- **Gridlines** light grey `#dddddd`, direct labels in bar color where possible.
- **Focal series** uses magenta `#e7466d`; comparisons use cerulean / periwinkle.
- **Source line** mandatory, hairline above, `Source:` bold.

## Gaps
- No filter state is persisted to URL; no mobile drawer.
- Download buttons are mock — wire to real endpoints when available.
