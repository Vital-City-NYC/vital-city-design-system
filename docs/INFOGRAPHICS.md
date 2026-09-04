# Infographics

Rules for any Vital City data graphic — chart card, map, table, stat panel — whether it ships standalone, inside an article, or as a panel in a dashboard. Read [`DATA-VIZ.md`](DATA-VIZ.md) alongside this: that file is the system (palette, chart anatomy, Flourish parity, integrity); this file is how to build the card.

## 1. Flourish is the visual reference standard

Vital City publishes charts through Flourish, hand-built HTML/CSS, Vega-Lite/D3/Plot and static exports for print and social. **A reader should not be able to tell which tool made which chart.** When you build in anything other than Flourish, the default target is a Flourish chart styled with `../flourish/vital-city.flourish-theme.json`.

Divergence from that target is allowed only along the axes documented in [`DATA-VIZ.md`](DATA-VIZ.md) — interactivity, multi-panel layout, chart types Flourish renders badly, embed-surface chrome, print/social sizing — and even then, the **resting state** must match: same palette, same type stack, same gridlines, same source line.

## 2. Typography: sans everywhere, serif only for numerals

This is the rule that most often gets broken, and it is the one that makes the catalog look like one publication.

| Element | Face | Weight | Notes |
|---|---|---|---|
| Headline (h1) | Halyard sans — **`halyard-text`** | **900 Black** | Sentence case, black on white. Never `halyard-display` |
| Dek / subtitle | Halyard sans | 300 | Charcoal `#707175`, one line of method or framing |
| **Big stat numerals** | **Gascogne serif** | **300** | The one place serif belongs — the thin serif *is* the data-display cue |
| Stat labels | Halyard sans | 700 | Uppercase, ~0.6rem, letter-spacing ~0.12em, Charcoal |
| Section heads inside the card | Halyard sans | 700 | Uppercase, small, letter-spaced |
| Legend, axis, ticks, body | Halyard sans | 300 | Charcoal for axis/tick |
| Tooltip and popup headings | Halyard sans | 700 | Treat as utility type, not a headline |
| Source line, footer | Halyard sans | 300 | Small, Charcoal |

Gascogne never sets a headline **inside** a chart or infographic. On article and essay pages, serif headlines are correct — that rule is scoped to display type, not data graphics.

*Settled 12 August 2026:* **Halyard Black (900) is canonical for chart and infographic headlines.** [`DATA-VIZ.md`](DATA-VIZ.md) and the headline standard have always said so; the reference card implementation (`nyc-water-towers`) shipped its h1 at 700 and is a legacy exception to correct the next time that project is touched. Never mix weights between panels of the same dashboard.

*Settled 1 September 2026:* **the family is `halyard-text`, never `halyard-display`.** "Halyard Black" names a weight, not the display cut — and the display cut reads far too heavy at card sizes. There is a trap behind this: the Typekit kit (`nlh6iak`) carries `halyard-display` at 100–900 but **no 800**, so a `font-weight: 800` declaration on the display family silently snaps to Display Black and lands heavier than anything you asked for. `parks-capital-graphics` shipped that way and had to be corrected. Link `charts/chart-theme.css` and use `.vc-chart__title` rather than restating the values.

## 3. Headlines are analytical, not descriptive

The headline tells the reader what the data means.

| Good | Bad |
|---|---|
| 1 in 7 days in 2025 were shooting-free | Shooting-free days by year |
| Felony assaults increased for the sixth year in a row, but total assaults fell 1.8% in 2025 | Assault trends 2019–2025 |
| The city's reduction in murders from prepandemic to 2025 lags behind the nation | Murder rate changes by city |

Sentence case. Two or more lines is fine — favor clarity over brevity.

**A headline is edited copy: it follows [`STYLEBOOK.md`](STYLEBOOK.md).** So do deks, annotations, table headers, axis labels and source lines. The rule that trips graphics most often is numbers — spell out one through nine, use numerals for 10 and above ("The **10** slowest projects each took **eight** years or more"), and always use numerals for percentages, decimals, currency, ages and ratios. Use `%`, not "percent". No serial comma. Em dashes take spaces on both sides. A graphic is not exempt because it is a graphic, and a headline that reaches the copy desk wrong tends to ship wrong.

**No kicker above the headline.** No orange uppercase tag, no flanking rules, no decorative bars, no orange tab. The space above the headline is empty. Kickers belong on article pages, section heads and event invites.

## 4. Card anatomy

The canonical implementation is `nyc-data/nyc-water-towers/index.html`. Reproduce these specifics rather than approximating them:

- **Card:** `max-width: 880px` (≈700px when the target is a Ghost article column), white background, **1px solid black border, square corners, no drop shadow**.
- **Header block:** 22px 24px padding, bottom hairline in Cloud `#dddddd`. h1 then dek.
- **Stats strip:** four-column grid on Paper `#f7f7f4`, 1px Cloud dividers between cells, no divider after the last, reflowing to 2×2 on mobile. Serif numeral over an uppercase sans label.
- **Body:** chart, map or table, each separated by Cloud hairlines rather than gaps or shadows.
- **Source line:** bottom-left, "Source:" plus hyperlinked dataset names, methodology notes inline.
- **No mark inside the card.** Not the logo (see the size rule below) and not a letterspaced "VITAL CITY" text stamp in a corner — that treatment was tried on `parks-capital-graphics` and cut on 1 September 2026. Attribution lives in the source line and on the host page.

```css
:root{
  --vc-black:#050507; --vc-white:#ffffff; --vc-cloud:#dddddd; --vc-cloud-50:#eeeeee;
  --vc-paper:#f7f7f4; --vc-charcoal:#707175;
  --vc-orange:#ff7c53; --vc-chartreuse:#dde44c; --vc-magenta:#e7466d; --vc-cerulean:#217ebe;
  --vc-sans:"halyard-text","Inter","Helvetica Neue",Arial,sans-serif;
  --vc-serif:"GascogneTS","Source Serif 4",Georgia,"Times New Roman",serif;
}
@font-face{
  font-family:'GascogneTS';
  src:url('https://vital-city-nyc.github.io/vital-city-design-system/fonts/GascogneTS-Light.ttf') format('truetype');
  font-weight:300; font-style:normal; font-display:swap;
}

body{font-family:var(--vc-sans); font-weight:300; line-height:1.5; background:var(--vc-white); color:var(--vc-black);}

.card{width:100%; max-width:880px; background:var(--vc-white); border:1px solid var(--vc-black); overflow:hidden;}

.head{padding:22px 24px 20px; border-bottom:1px solid var(--vc-cloud);}
.head h1{font-family:var(--vc-sans); font-weight:900; font-size:1.7rem; line-height:1.15; letter-spacing:-.005em; margin-bottom:8px;}
.head .dek{font-weight:300; font-size:.92rem; line-height:1.5; max-width:62ch;}
.head .dek b{font-weight:700;}

.stats{display:grid; grid-template-columns:repeat(4,1fr); background:var(--vc-paper); border-bottom:1px solid var(--vc-cloud);}
.stat{padding:14px 16px 12px; border-right:1px solid var(--vc-cloud);}
.stat:last-child{border-right:none;}
.stat .num{font-family:var(--vc-serif); font-weight:300; font-size:1.7rem; line-height:1; margin-bottom:4px;}
.stat .lbl{font-weight:700; font-size:.6rem; letter-spacing:.12em; text-transform:uppercase; color:var(--vc-charcoal);}

.source{padding:12px 16px; font-size:.72rem; color:var(--vc-charcoal); border-top:1px solid var(--vc-cloud);}
.source a{color:var(--vc-charcoal);}

@media(max-width:600px){ .stats{grid-template-columns:repeat(2,1fr);} }
```

Do not substitute a Google-Fonts serif for GascogneTS, add `box-shadow`, or round the corners — those three changes break visual equivalence with the rest of the catalog.

## 5. Table figures

A ranked table is a chart, not a layout device. When the story is "here are the 10 worst," a table beats a bar chart: it carries the names, the borough and the dollar figure alongside the number, and it survives being read on a phone. Build it as a figure with the same card, headline, dek and source line as any other graphic — a table dropped into an article as bare rows reads as raw material, not as a published exhibit.

Use `.vc-chart__table` from [`../charts/chart-theme.css`](../charts/chart-theme.css). Reference implementation: `parks-capital-graphics` fig4 and fig5 (September 2026).

- **Header row is a solid black band**, white bold sans, no wrap. It is the table's equivalent of an axis.
- **Rows separated by Cloud hairlines** (`#dddddd`), no zebra striping, no vertical rules, no border on the last row.
- **The ranked metric leads**, in its own left-hand column, right-aligned so the digits stack. This is the **one sanctioned use of Gascogne inside a table** — the same big-numeral rule as the stats strip. Magenta (`.vc-chart__metric--negative`) when the metric is the bad news: a slip, an overrun, a delay.
- **The name column is bold**, and links to the underlying record where one exists. Deep-linking each row to its source page is the table's version of a hyperlinked source line.
- **Caveats ride in the row, not in a footnote** — `.vc-chart__tag` renders a small orange uppercase badge inside the cell ("Still active") so a reader scanning the column sees which rows come with an asterisk.
- **Empty cells get an em dash**, never a blank or "N/A".

Keep tables to roughly 10 rows. Past that, the reader is browsing rather than reading, and the right answer is a searchable tool with the app-frame embed described in [`DASHBOARDS.md`](DASHBOARDS.md).

## 6. Color assignment

Series order matches Flourish: Safety Orange, Chartreuse, Cerulean, Magenta, Rose, Indigo, Periwinkle, Periwinkle 50, Charcoal, Black, Cloud.

- Series 1 is Safety Orange **unless NYC is the focal subject of a comparison** — then NYC takes Magenta and the peers take Cerulean.
- Combo bar-and-line: bars Chartreuse, line Safety Orange, direct labels in Orange.
- Stacked families: pink family (Magenta → Rose → light pink) against blue family (Indigo → Cerulean → Periwinkle → light blue).
- Good/bad gradients are data-viz only, never UI chrome.

## 7. Ask before you build: full-screen or embedded?

Both are standard Vital City deliverables, and the answer changes the build. Ask at the top rather than assuming, then proceed.

- **Full-screen** — a standalone GitHub Pages URL. The norm for project hubs, dashboards and explorers.
- **Embedded** — sits inside a Ghost article column. For static infographics, the whole `index.html` pastes into a Ghost HTML card; keep the file lean and the card ~700px so it fits the column. For interactive pages, use the `?embed=1` + postMessage pattern in [`DASHBOARDS.md`](DASHBOARDS.md).

## 8. Pre-ship checklist

- [ ] Headline in `halyard-text` 900 — not `halyard-display` — sentence case, analytical rather than descriptive.
- [ ] Headline, dek, labels and source line read clean against [`STYLEBOOK.md`](STYLEBOOK.md): numerals for 10 and up, `%` not "percent", no serial comma, spaced em dashes.
- [ ] No kicker, no flanking rules, no Gascogne anywhere except big numerals.
- [ ] No logo and no "VITAL CITY" text stamp inside the card.
- [ ] White background; gridlines horizontal only, `#dddddd`, 1px.
- [ ] Colors follow the categorical order; focal series follows the NYC rule.
- [ ] Source line bottom-left with hyperlinked dataset names; year-to-date, projected or estimated data labeled as such.
- [ ] Bar-chart axes start at zero, or the subtitle says why not.
- [ ] Logo omitted below 24px; never rendered as a black bar. One logo in a page footer is enough for web.
- [ ] Card border 1px black, square corners, no shadow.
- [ ] Interactive or custom charts still pass the visual test against a Flourish chart of the same type in their resting state.
- [ ] Methodology is disclosed somewhere the reader can reach.
