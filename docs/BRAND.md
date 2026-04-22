# Brand

Condensed from the Vital City Brand Guidelines (Design for Progress, September 2024) and the live vitalcitynyc.org implementation.

## Promise

> Vital City promises diverse, evidenced, actionable expertise on public safety and urban policy in a package that is easy to understand and enjoyable to engage with.

## DNA

| Vital City is | Vital City is not |
|---|---|
| Data-driven | Clinical |
| Sophisticated | Pretentious |
| Measured | Dry |
| Nuanced | Precious |
| Succinct | Austere |
| Charming | Cute |
| Intellectually energizing | Politically agitative |
| Pragmatic | Pessimistic |
| Clever | Smart aleck-y |
| Must-know information and ideas | News |
| An intellectual community | A think tank or a club |

## Personality

If Vital City were a person, they would walk quite fast with efficiency and purpose, strike a certain contrapposto pose while waiting for the subway, and slap the top of a cab to say thanks.

## Wordmark

The wordmark is set in **Bayard**, inspired by hand-lettered signs from the 1963 March on Washington for Jobs and Freedom and named for Bayard Rustin. **Bayard is never used outside the wordmark and favicon**, with rare exceptions for merch.

- **Horizontal** — the primary lockup. Use almost exclusively.
- **Vertical / stacked** — secondary. Print journal cover, merch.
- **Clear space:** leave at least 50% of the height of the "V" in "Vital" on all sides.
- **Minimum size:** 1.25 inches wide in print / 90 pixels wide on web.
- **Color:** Black by default. White when set on Black or a similarly dark field. Never any other color.
- **Never** stretch, skew, angle, apply drop shadows, set in any other font, or place on a busy background.

## Color

See [`tokens/tokens.css`](../tokens/tokens.css) for every hex and tint.

- **Primary:** Black, White, Cloud, Chartreuse, Safety Orange, Periwinkle.
- **Secondary:** Rose, Magenta, Charcoal, Indigo, Cerulean.
- **Tints** exist at 80 / 50 / 20 for each brand color.
- **Tertiary (data viz only):** Goodest Green → Chartreuse linear, and Safety Orange → Baddest Red linear, plus "good" and "bad" binned steps.

### Rules

- **Black text is standard** — in print and on web. Color text is used sparingly for accents only.
- **Safety Orange** appears in the nav rail and footer, occasional CTAs, category kickers, and as a trend-line color in data viz.
- **Chartreuse** is a purposeful pop — drop shadows, primary bar fills, and at most one single-word accent per page. Avoid decorative underlines; the brand has moved away from them.
- **Magenta** highlights the subject of analysis (e.g., NYC in a city comparison).
- **Cerulean** is the comparison group.
- Check accessibility for text on color, especially at thin weights.

### Data-viz gradients

- **Good → bad, linear:** Chartreuse `#dde44c` → Safety Orange `#ff7c53`.
- **Good, binned (colder):** Goodest Green `#57aa4a` → Good 3 `#7cbf4e` → Good 2 `#9cc456` → Good 1 `#bdd451` → Chartreuse `#dde44c`.
- **Bad, binned (hotter):** Safety Orange `#ff7c53` → Bad 1 `#fb693c` → Bad 2 `#ed5236` → Bad 3 `#e03a30` → Baddest Red `#d2232a`.
- **Divergent:** Goodest Green → Good 0 `#e0e883` → Bad 0 `#fb9e63` → Baddest Red, with optional minimums extending each side.
- Tertiary "good/bad" colors are for data viz only — they are **not** general brand colors. Drop steps to reduce vibration; prefer primary/secondary palette colors or the tertiary colors closest to them.

## Typography

### Halyard Text · primary

Contemporary grotesque by Darden Studio. Loaded via Adobe Typekit:

```html
<link rel="stylesheet" href="https://use.typekit.net/qqk2vto.css">
```

Always `font-family: "halyard-text", sans-serif`, varying by weight.

| Weight | Role |
|---|---|
| **900 Black** | Chart headlines, article H1s, section labels |
| **700 Bold** | Small-caps labels, category tags, author bylines, nav links |
| **300 Book** | Body copy, chart annotations |
| **200 Light** | Subheads, chart subtitles, deks |

### Gascogne Extra Light · secondary serif

Erudite serif by TypeShop Collection. Self-hosted TTF at `fonts/GascogneTS-Light.ttf`.

- **Big analytical article titles** on the live site (e.g., "To Prioritize Pedestrians, We Need to Walk the Walk") — serif carries the headline; Halyard Black is used for more journalistic / chart headlines.
- **Section heads** on the site ("The Journal", "Data").
- **Article deks / subdeks** that want a refreshing break from Halyard.
- **Pullquotes** — never in quotation marks.

### Fallbacks

- Halyard → `Inter`, `Helvetica Neue`, Arial, sans-serif.
- Gascogne → `Source Serif 4`, Georgia, Times New Roman, serif.

## Photography

- **High contrast.** Bold shapes and lines. Creative angles and crops that feel natural, not contrived.
- **4:1 color-to-black-and-white ratio or more color.**
- **Depict the grit and charm of New York** (and occasionally other cities). Artistic or documentary — never advocacy or activism.
- **Avoid** overtly pessimistic subjects (graveyards, bloodstains, people in serious distress), stereotype-reinforcing images, AI-generated or digitally-manipulated images, stock studio shoots, and generic nondescript photos.
- **Signature treatment:** photo with a white text-panel tucked into the lower-left corner, overlapping the image.

## Illustration

- **Contributor portraits:** black-and-white semi-realistic line art. Subject recognizable. Hand of the artist visible.
- **Editorial illustration:** high-contrast, hand-drawn feel, b&w or color, tells a story the reader can discover.
- **Never** flat stock vectors, 3D renderings, cartoonish drawings, clip art, or expected-nonprofit style.

## Supporting graphic elements

- **Hairlines** and thin rules to structure layouts.
- **Black strokes** on photos for print.
- **Chartreuse drop shadows** behind photos in print. Chartreuse accents on web are rare — one single-word highlight per page at most; avoid highlighter-style underlines.
