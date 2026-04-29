# Data visualization

Vital City's data viz is a core brand expression. Charts should feel like they belong in an urbane, confident publication — **clean enough to scan fast, rich enough to reward close reading**.

## Headlines

**Opinionated and analytical**, not descriptive labels. The headline should tell the reader what the data means.

| Good | Bad |
|---|---|
| 1 in 7 days in 2025 were shooting-free | Shooting-Free Days by Year |
| The city's reduction in murders from prepandemic to 2025 lags behind the nation | Murder Rate Changes by City |
| Felony assaults increased for the sixth year in a row, but total assaults fell 1.8% in 2025 | Assault Trends 2019-2025 |
| Total offenses are at their highest level in two decades | Total Offenses Over Time |

- Set in **Halyard Black**, sentence case.
- Black text on white background.
- Can be long (2+ lines). Favor clarity over brevity.
- **Sans only — never Gascogne.** Gascogne serif is for article display headlines and section heads. Charts, tables, and infographic cards lead with bold sans Halyard.
- **No kicker above the headline.** Do not place an orange uppercase tag ("LABOR HISTORY", "EDUCATION POLICY", etc.) above a chart headline — and no flanking rules or decorative bars. The chart card leads directly with the headline. Kickers belong on article pages, section heads, and event invites — not on data-viz cards.

## Subtitles / deks

- One line of methodological context in **Halyard Light** or **Halyard Book**, Charcoal (`#707175`).
- Sentence case, final punctuation only if a complete sentence.
- E.g., "Percent change in murder rates between 2019 and 2025*"

## Anatomy

- **White background**, always.
- **Minimal gridlines** — `#dddddd`, 1px, horizontals only where possible.
- **Direct data labels** on bars, lines and points preferred over relying solely on axes.
- **Axis labels** in Charcoal, small Halyard Book.
- **Source line** at bottom-left. "Source:" followed by hyperlinked dataset names (underlined). Include methodological notes inline — "2025 is year-to-date through 12/07", "*This end-of-year projection assumes the rate of decline…"
- **VITAL CITY logo** at bottom-right — only on standalone chart exports where it will render at ≥ 24px tall. Do NOT place the logo in inline HTML source lines or at sizes below 20px, where it becomes an unreadable black bar. For web-based visualizations, omit the logo from individual charts; a single logo in the page footer is sufficient.

## Color assignment conventions

| Role | Color | When |
|---|---|---|
| **Series 1 / primary** | Safety Orange `#ff7c53` | Flourish default — first series gets orange |
| **Series 2** | Chartreuse `#dde44c` | Default bar/area fill in standalone charts |
| **Series 3** | Cerulean `#217ebe` | Comparison groups (other cities, peer jurisdictions) |
| **Focal** | Magenta `#e7466d` | Subject of analysis — override series 1 when comparing NYC to other cities (NYC gets Magenta, others get Cerulean or Chartreuse) |
| **Trend line / overlay** | Safety Orange `#ff7c53` | Combo bar+line charts — bars in Chartreuse, line in Orange, direct labels in Orange |
| **Pink family** (stacked) | Magenta → Rose → light pink tints | One category family (e.g., felony assaults) |
| **Blue family** (stacked) | Indigo → Cerulean → Periwinkle → light blue tints | Another category family (e.g., misdemeanor assaults) |

### Full categorical order (matches Flourish)

```
#ff7c53  Safety Orange
#dde44c  Chartreuse
#217ebe  Cerulean
#e7466d  Magenta
#cea9be  Rose
#384984  Indigo
#9b9fbc  Periwinkle
#cdcfde  Periwinkle 50
#707175  Charcoal
#050507  Black
#dddddd  Cloud
```

## Annotation style

- **Contextual events** get dotted vertical lines (1px dotted, Black) with rotated text along the line — e.g., "PANDEMIC", "MISDEMEANOR AND CATEGORIES OF ASSAULTS NOW TRACKED".
- **Key data points** get direct labels in the bar/line color.
- **Percentage labels on lines** use Safety Orange text color.
- **Count labels on bars** use Black or Charcoal text.

## Chart types in regular use

- **Bar charts** with direct value labels above or inside bars.
- **Combo bar + line** (bars = counts, line = percentage on secondary axis).
- **Stacked area** for composition over time.
- **Horizontal bar** for ranked comparisons.
- **Diverging bar** (bars extending up/down from zero) for percent-change comparisons.
- **Bubble / circle** for proportional comparisons.
- **Choropleth maps** using the divergent gradient palette.
- **Donut charts** — sparingly, for simple part-to-whole.

## Gradients — divergent and sequential

- **Good → bad, linear:** Chartreuse (`#dde44c`) → Safety Orange (`#ff7c53`).
- **Good, binned (colder):** Goodest Green (`#57aa4a`) → Good 3 (`#7cbf4e`) → Good 2 (`#9cc456`) → Good 1 (`#bdd451`) → Chartreuse (`#dde44c`).
- **Bad, binned (hotter):** Safety Orange (`#ff7c53`) → Bad 1 (`#fb693c`) → Bad 2 (`#ed5236`) → Bad 3 (`#e03a30`) → Baddest Red (`#d2232a`).
- **Divergent:** Goodest Green → Good 0 (`#e0e883`) → Bad 0 (`#fb9e63`) → Baddest Red. Optional minimums extend either side as needed.
- Tertiary "good/bad" colors are for data visualization only — they are **not** general brand colors and should not appear in UI chrome, body copy, or decorative elements. Use sparingly. Drop colors to reduce vibration and improve legibility. Prefer primary/secondary palette colors or tertiary colors closest to them.

## Flourish

Paste [`flourish/vital-city.flourish-theme.json`](../flourish/vital-city.flourish-theme.json) settings into **Preview → Settings** of any Flourish visualization, or save them as an account-level theme in Flourish Enterprise. The theme covers:

- Full 11-color categorical palette (Orange leads series 1).
- Divergent / sequential palettes for maps.
- Atlas Grotesk body / Atlas Grotesk Medium titles (Flourish's substitute for Halyard).
- Title / subtitle / tick / axis / gridline / border colors.
- Source label prefix.

**Per-chart overrides to consider:**

- When NYC is the focal subject in a comparison, override series 1 from Orange to **Magenta**, and put comparison cities in Cerulean.
- For trend-line charts, set the line color to Safety Orange with Orange data labels.
- Keep only horizontal gridlines; hide the vertical grid.

## Vega-Lite / D3 / Observable Plot

Use [`charts/vega-lite-theme.json`](../charts/vega-lite-theme.json) as the `config` key of any Vega-Lite spec, or pull the same colors from [`charts/chart-theme.css`](../charts/chart-theme.css) for D3, Plot or raw SVG.

## Integrity

- **Sources cited on every chart** — no black boxes.
- **Methodology notes visible** inline (asterisked) or in the source line.
- **Year-to-date / projected / estimated** data must be labeled as such.
- **Axes start at zero** for bar charts unless there's a clear reason not to (state the reason in the subtitle).
- **Percentages and counts** should both be shown when the reader might benefit — combo bar+line is the usual pattern.
