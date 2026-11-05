# Vital City Design System

**A working kit for designing anything Vital City makes** — articles, dashboards, reports, decks, merch, social cards, data stories, and any throwaway prototype that should still feel on-brand. Tokens, fonts, components, chart themes and editorial guidance, all in one place.

> **Vital City** is a journal about urban policy, politics, data and culture, headquartered in New York City and housed at Columbia Law School. It publishes smart, accessible writing about how cities work — and how they could work better.

## Quick start

```html
<link rel="stylesheet" href="https://use.typekit.net/qqk2vto.css">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="fonts/fonts.css">
<link rel="stylesheet" href="components/components.css">
<link rel="stylesheet" href="charts/chart-theme.css">
```

Open [`index.html`](index.html) (live at [vital-city-nyc.github.io/vital-city-design-system](https://vital-city-nyc.github.io/vital-city-design-system/)) for the living style guide: every token, component and chart pattern on one page. The [`preview/`](preview/) cards show each piece on its own.

---

## Read this first: which file wins

This README is the overview. The detailed rules live in `docs/`. When two files disagree, the newer, more specific one wins:

1. `docs/INFOGRAPHICS.md`, `docs/DASHBOARDS.md` and `docs/DATA-VIZ.md` for anything with a chart, map, table or big number.
2. `docs/WEB-DESIGN.md` for anything that has to sit on vitalcitynyc.org (it documents what the live Ghost site ships).
3. `docs/STYLEBOOK.md` and `docs/VOICE.md` for words.
4. `docs/BRAND.md`, then this README, for everything else.

### Settled rulings (these override anything older)

- **Chartreuse is rare.** Primary bar fills, plus at most one single-word accent per page. No highlighter underlines, no chartreuse drop shadows. (The brand has moved away from both; the 2024 brand book's print drop shadow is retired.)
- **No drop shadows of any kind** on cards, photos or panels. Square corners, 1px black or Cloud hairlines.
- **Chart, table and infographic headlines:** `halyard-text` at weight 900, sentence case, black, and analytical (they say what the data means). Never `halyard-display` (it reads too heavy, and the font kit has no display 800, so 800 snaps to Display Black). Never Gascogne. No kicker, no decorative bar above the headline. Use `.vc-chart__title` from `charts/chart-theme.css`. (Settled Aug. 12 and Sept. 1, 2026.)
- **Gascogne on data graphics is for big numerals only** (stat counts, the ranked column in a table figure). Titles, labels, legends and source lines are Halyard.
- **No mark on chart cards.** No logo and no letterspaced "VITAL CITY" stamp in a card corner. Attribution goes in the source line. (Sept. 1, 2026.)
- **Every chart matches Flourish.** A chart built in any tool should look like a Flourish chart styled with `flourish/vital-city.flourish-theme.json`. Allowed exceptions are listed in `docs/DATA-VIZ.md`.
- **"state" is always lowercase,** including the state government ("the state budget"). "City" is still capitalized for the government. (Sept. 28, 2026.)
- **Article pages on vitalcitynyc.org** set headlines in `halyard-display` 500 (the live site's kit, `nlh6iak`); that is the one place the display cut belongs. See `docs/WEB-DESIGN.md` and `index.html`.
- **Embeds for Ghost articles** follow the iframe + `?embed=1` + height-message recipe in `docs/DASHBOARDS.md` §6.
- **Logo vs. wordmark:** in small or data-product chrome, use the text wordmark (`.vc-wordmark`). Use the real Bayard logo file (`assets/vc-logo-black.png`; masters `.ai`, `.eps`, `.jpg` and the charcoal `vc-logo-black-alt.png` are in `assets/`) for formal and external pieces such as decks, invites and app icons, where it renders large and crisp.

---

## Sources this was built from

- **Claude Design project** (spring to fall 2026) — this brand book, the preview cards and the UI kits were built there from this repo, then merged back here on Nov. 5, 2026, with the repo's newer rules taking precedence.
- **Living style guide** — [`index.html`](index.html) at the repo root.
- **Brand guidelines** — Design for Progress, September 2024 (distilled into `docs/BRAND.md`).
- **Live site** — `vitalcitynyc.org` (homepage, Journal index, article pages).
- **Data-viz conventions** — reverse-engineered from published Flourish charts on `public.flourish.studio`, captured in `docs/DATA-VIZ.md` + `flourish/vital-city.flourish-theme.json`.
- **Logo asset** — user-supplied `VC-logo-black.png` (the horizontal Bayard wordmark), copied to `assets/vc-logo-black.png`.

---

## Products this system covers

Vital City is an editorial publication, not a SaaS product. The surfaces we design for:

1. **The Website (`vitalcitynyc.org`)** — the journal. Homepage, Journal index, article pages, Data Explorer, About, Contribute.
2. **Data visualizations** — Flourish charts embedded in articles, plus standalone chart exports for social and print.
3. **Editorial artifacts** — event invites, social cards, email heroes, print reports, merch.

`ui_kits/journal/` and `ui_kits/data/` cover #1. Chart patterns live in `charts/` + `docs/DATA-VIZ.md`. Event / invite patterns in `templates/`.

---

## Design principles

1. **Architectural, not decorative.** Clean grids. Minimal gridlines. Square corners by default. Color encodes meaning, not mood.
2. **Serif for the headline, sans for the utility.** Gascogne for big analytical titles and section heads; Halyard for everything that has a job to do.
3. **Chartreuse and Safety Orange are pops, not floods.** One Safety Orange CTA and at most one single-word chartreuse accent per page. No highlighter underlines, no drop shadows.
4. **Data viz is a brand expression.** Chart headlines **make a point, without too much attitude** — observational, not editorializing ("1 in 7 days in 2025 were shooting-free" ✓ · "Shootings finally, mercifully, drop" ✗ · "Shooting-Free Days by Year" ✗ — the first is the right register, the second has attitude, the third is a file name).
5. **Voice is measured, pragmatic, evidenced.** No invective. No vibes-only op-eds. Acknowledge the strongest opposing view before you disagree.

---

## CONTENT FUNDAMENTALS

### Tone

**Measured, civil, clever, pragmatic.** Never smart-aleck-y, politically agitative, or pessimistic. Think *The Economist* crossed with a New Yorker who actually takes the subway.

Vital City *is:* Data-driven · Sophisticated · Measured · Nuanced · Succinct · Charming · Intellectually energizing · Pragmatic · Clever.

Vital City is *not:* Clinical · Pretentious · Dry · Precious · Austere · Cute · Politically agitative · Pessimistic · Smart-aleck-y.

### Person

Writing addresses the reader directly but not pandering-ly. First-person plural ("we") is used for house editorial voice ("we assembled practitioners…", "what we publish"). Second-person ("you") is fine in explanatory asides and calls to action. Avoid marketing "I" — bylined essays use "I" only when genuinely first-person.

### Headlines

**Analytical and observational.** Tell the reader what the data or piece actually *means* — but state it plainly. **Make a point without too much attitude.** No exclamations, no editorializing adverbs, no wink.

| Good | Bad |
|------|-----|
| 1 in 7 days in 2025 were shooting-free | Shooting-Free Days by Year |
| The city's reduction in murders lags the nation | Murder Rate Changes by City |
| To Prioritize Pedestrians, We Need to Walk the Walk | Pedestrian Policy in NYC |
| Mamdani's first 100 days: a scorecard | Mamdani Administration Update |

- **Article titles** set in **Gascogne Light** (serif) or **Halyard Black** (sans) depending on register — chart / journalistic pieces lean sans, essayistic pieces lean serif.
- **Title case**, contra AP. Capitalize infinitives' "to", each word of phrasal verbs.
- **No period.**
- Can be long (2+ lines). Favor clarity over brevity.

### Deks

- **Sentence case.** Final punctuation only if the dek is a complete sentence.
- **Halyard Light**, one line of methodological or editorial context.
- E.g., "Percent change in murder rates between 2019 and 2025*" · "Behind a major new effort to track pedestrian flows in New York"

### Kickers / Categories

- **Halyard Bold, all caps, tracked +0.08em.**
- **Safety Orange** by default; charcoal when muted; white when inverted.
- Examples: `CITY PLANNING` · `CRIME` · `HOMELESSNESS` · `JUST FIX IT · APR. 14 2026`.

### Pullquotes

- **Gascogne**. **Never** wrapped in quotation marks.
- Formatted exactly as they'd appear in body copy (curly quotes inside are kept).

### Punctuation

- **Em dashes** — with spaces on both sides. Not en dashes, not double hyphens.
- **No serial comma** (per AP). Exception: clarity.
- **Single-character ellipsis** (`…`) — not three dots.
- **Single-word slash terms** (`and/but/or`) — no spaces. **Multi-word** (`World War I / World War II`) — spaces.
- **Curly quotes** in display and body type. ASCII quotes only in code.

### Numbers

- Spell out one through nine; numerals for 10+.
- Ages, ratios, percentages, currency, decimals → always numerals.
- `%` not "percent".
- Never start a sentence with a numeral (except years).

### NYC-specific capitalization

- `the City` when the governing body; lowercase when geography or populace. `state` is always lowercase, even for the state government (changed Sept. 28, 2026).
- `Midtown` (neighborhood) vs `midtown Manhattan` (geography).
- `the Bronx` (lowercase "the").
- `NoMad`, `NoHo`, `SoHo`, `TriBeCa`, but `Dumbo`.
- `the A train`, `the 4/5 trains`, `the Second Avenue Subway`.

### Emoji / icons in text

**No emoji.** Ever, in editorial text. Unicode decorative chars are used sparingly — the site uses `◘` and `↑` as section closers and photo-tag arrows, but these are rare typographic ornaments, not icons.

Hyperlinks, **not footnotes**. Vital City is not an academic journal.

### Tone examples (pulled from live pieces)

- > "How can the toughest problems of urban life be addressed in a serious, sustained way?" — essayistic opening, common pattern.
- > "On any given night, about 4,000 people are living on the streets and subways in New York City." — evidenced, specific, unshowy.
- > "Durable safety comes first from civic well-being, not the point of a gun." — the mission one-liner.

### What Vital City is *not* interested in publishing

Invective. Ad hominem. Partisan scorekeeping. Vibes-only op-eds. Outrage-built pieces. "Blame one villain" arguments. Inside-baseball that loses the general reader.

---

## VISUAL FOUNDATIONS

### Color

**Black is the default text color in print and on web.** Color text is used sparingly for accents only.

**Primary palette:** Black `#050507` · White `#ffffff` · Cloud `#dddddd` · Chartreuse `#dde44c` · Safety Orange `#ff7c53` · Periwinkle `#9b9fbc`.

**Secondary palette:** Rose `#cea9be` · Magenta `#e7466d` · Charcoal `#707175` · Indigo `#394882` · Cerulean `#217ebe`.

**Tints** at 80/50/20 exist for every brand color (see `tokens/tokens.css`).

**Role assignments:**

- **Pop** → Chartreuse. Primary bar fills and at most one single-word accent per page. Never decorative; no underlines or drop shadows.
- **Accent** → Safety Orange. Nav rail, footer flood, CTAs, category kickers, trend lines.
- **Focal** → Magenta. Subject of analysis (e.g., NYC in a city comparison).
- **Compare** → Cerulean. Comparison groups.
- **Muted** → Charcoal. Axis labels, deks, metadata.
- **Neutral** → Periwinkle / Cloud. Sophisticated filler.

### Typography

- **Halyard Text** (primary, sans) — Loaded via Adobe Typekit: `https://use.typekit.net/qqk2vto.css`. Weights 200 Light, 300 Book, 700 Bold, 900 Black.
- **Gascogne Extra Light** (secondary, serif) — Self-hosted TTF at `fonts/GascogneTS-Light.ttf`. Used for display titles, section heads ("The Journal", "Data"), article deks, pullquotes and big numerals on data graphics. The file is included (it is the Light cut; `fonts/fonts.css` declares it at weight 200 so browsers don't fake a bolder weight).
- **Bayard** — wordmark only. Never used outside the wordmark and favicon.
- **Atlas Grotesk** — Flourish's substitute for Halyard inside embedded charts. Ignore in your own designs.

### Spacing & layout

- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 96 px (mapped to `--s1` … `--s9`).
- **Containers:** 72rem standard · 84rem wide · 44rem reading column.
- **Grid:** clean columns, lots of hairline rules, no rounded corners on layout elements.

### Borders & rules

- **Hairlines** — 1px solid black, to structure layouts and separate sections.
- **Bold rule** — 2px.
- **Black strokes** on photos in print.
- **Vertical rules** (1px × 32px, charcoal-50) to separate co-brand marks in footers.

### Corner radii

- **Square (0) by default** — cards, photos, section blocks, inputs.
- **Pill (999px)** only for the Donate-style CTA button and similar action pills.
- Nothing between: no 4px / 8px "friendly" radii.

### Shadows

- **No soft UI shadows.** The visual language is architectural, not Material.
- **No chartreuse drop shadows either.** The 2024 brand book's flat chartreuse offset behind photos is retired, and so are highlighter-style chartreuse underlines on the web.

### Backgrounds & texture

- **White is the default background.** Always.
- **Black (`--vc-dark`)** inversion for the Data section and select panels.
- **Chartreuse flood** — event invites and short-form poster pieces only. Never for articles or dashboards.
- **No repeating patterns, no textures, no gradients** on UI surfaces. Gradients are reserved for data-viz (divergent / sequential scales only).
- **No background images on layout chrome.** Photos are content, not decoration.

### Photography & imagery

- **Photography is the primary imagery system.** Illustration is reserved for contributor portraits only — story art is essentially always photography.
- **Source:** high-quality editorial photography — typically **Getty**, **Magnum**, or **independent NYC photographers** working in a documentary register. Never AI-generated, never generic stock, never studio shots.
- **High contrast**, bold shapes and lines. Creative angles and crops that feel natural, not contrived.
- **4:1 color-to-black-and-white ratio or more color.**
- **Depicts the grit and charm of New York** — artistic or documentary, never advocacy or activism.
- **Signature treatment:** photo with a white text-panel tucked into the lower-left corner, overlapping the image.
- **Avoid:** pessimistic imagery (graveyards, bloodstains, distress), stereotype-reinforcing shots, AI-generated art, stock studio work, and generic nondescript photos.

### Photo credits and captions

- **Credit line** format: `Photograph by {Photographer} / {Agency}` — e.g., `Photograph by Spencer Platt / Getty Images`. Independent NYC photographers: drop the agency (`Photograph by Gregoire Alessandrini`).
- **Typography:** Halyard Bold, 10 px, tracked +0.06em, **UPPERCASE**, charcoal `--fg2`.
- **Overlay placement** (hero, card, feature images where no caption is needed): bottom-right of the image, white-88% pill, black text. No glyph, no prefix.
- **Inline caption** (article body, documentary-style): italic Halyard Book, normal case, sentence. End with a period. Append the credit in **non-italic bold** at the end of the same line. Example: *A crowded uptown platform during evening rush, 2024.* **Photograph by Alex Webb / Magnum Photos**
- **Never** use "Photo:" or "Photo credit:" prefixes. Never put the photographer in parentheses. No © symbol.

### Illustration

- **Contributor portraits** — **black line drawings** (fine, uniform stroke ~1.4px) on a **light grey circle** (`#f1f1f2`). Recognizable subject, hand of the artist visible, head-and-shoulders, no color. Paired below with the contributor's name in **Gascogne** and a **"View articles"** link in Halyard Book, charcoal.
- **Editorial illustration is not used** for story art. Photography does that job.
- **Never:** flat stock vectors, 3D renders, cartoonish drawings, clip art, nonprofit-template illustration.

### Motion / animation

- **Minimal.** Vital City is an editorial publication — page transitions are instant, hover states are short and linear.
- **Transitions:** 120ms linear ease on color swaps (background / border / underline). No bounces, no elastic easing, no scroll-jack animations.
- **Hover states:**
  - Nav links → color swaps from black to Safety Orange.
  - Inline links → underline thickens from 1px to 2px; underline color swaps to Chartreuse.
  - Buttons → background swaps (black ↔ orange), no lift, no scale.
  - Cards → no shadow bump; the hover signal is on the title's color or underline.
- **Press / active:** no shrink, no shadow shift. Color-only.
- **Entrance animations:** none by default. Appropriate on data-viz reveal only (bars grow from 0, line draws left-to-right).

### Transparency / blur

- **Not used on UI chrome.** No frosted backdrops. No semi-transparent overlays on photos except for the white editorial panel treatment, which is fully opaque.

### Iconography

See [`ICONOGRAPHY`](#iconography) below.

### Cards

- **Square corners.** 1px hairline border optional; more common is no border at all, relying on the grid gutter for separation.
- **No shadow.** No rounded corners.
- **Article card anatomy:** 16×10 image · tag (top-left, on-image, white bg) · headline (Halyard Black) · dek (Halyard Book, charcoal) · byline (Halyard Bold caps, charcoal).
- **Feature card anatomy:** large photo · white text panel tucked into bottom-left, overlapping the image by ~12% · serif title inside the panel · short hairline rule · dek.

### Layout rules

- **No fixed elements** except the top nav bar (and even that is often static).
- **No sticky sidebars**, **no parallax**, **no scroll-hijacking**.
- **Source line** at the bottom-left of every chart. Hyperlinked dataset names underlined.

### Data visualization vibe

- White background always.
- 1px Cloud gridlines, horizontal only where possible.
- Direct data labels on bars and points preferred over relying on axes alone.
- Dotted vertical annotation lines for contextual events (e.g., "PANDEMIC"), with rotated tracked-caps labels along the line.

---

## ICONOGRAPHY

Vital City's interface is **almost entirely typographic**. There is no custom icon set and no proprietary icon font.

- **Logo / wordmark** — Bayard, PNG at `assets/vc-logo-black.png`. White version achieved via CSS `filter: brightness(0) invert(1)` on the black PNG (see `.vc-footer__wordmark`).
- **Arrows and ornaments** — set as **Unicode characters** in the brand sans:
  - `→` (U+2192) for "Read more" and section links.
  - `↑` (U+2191) for the photo-tag treatment on the Data section.
  - `◘` (U+25D8) as an end-of-article ornament, pulled from the house-voice archive.
- **Social / external links** — minimal. Where they appear, use a **1.25–1.5 px stroke, square-cap, square-corner** line icon from **Lucide** (pin a version, e.g. `https://unpkg.com/lucide@0.460.0`, never `@latest`). Lucide is the sanctioned CDN fallback: its geometry matches the brand's architectural rule-and-hairline look.
- **Chart icons** — none. Charts rely on color and direct labels.
- **Emoji** — **never used.** Not in editorial, not in UI, not in captions.
- **Favicon** — Bayard "VC" monogram (PNG, not included in repo — flag for user).

### Icon substitution policy

When a design needs an icon the brand doesn't supply, in this order:

1. Use a Unicode character in Halyard if one exists (`→ ↑ ← ↓ ◘ · — %`).
2. Otherwise pull from **Lucide** (square-corner, 1.5px stroke) via CDN.
3. Never reach for Font Awesome, Material Icons, or emoji.

---

## Index

### Root

- [`README.md`](README.md) — this file.
- [`colors_and_type.css`](colors_and_type.css) — flat, editorial-semantic CSS variables + element styles for designs. Use this for quick prototypes.
- [`index.html`](index.html) — the living style guide (also the GitHub Pages home page).
- [`SKILL.md`](SKILL.md) — entry point for Claude Code and other agents that use skills.

### Tokens, components and docs

- [`tokens/tokens.css`](tokens/tokens.css) — full CSS custom-property system (colors, tints, type scale, spacing, chart tokens).
- [`tokens/tokens.json`](tokens/tokens.json) — same as JSON for tooling / Figma.
- [`tokens/design-system-tokens.json`](tokens/design-system-tokens.json) — every color, type style, spacing step and radius as a flat list with usage notes, in the shape Claude's design-system pages read.
- [`components/components.css`](components/components.css) — nav, buttons, cards, section heads, footer, photo tags, swatches, annotations.
- [`charts/chart-theme.css`](charts/chart-theme.css) — standalone chart styling (Vega-Lite, D3, SVG).
- [`charts/vega-lite-theme.json`](charts/vega-lite-theme.json) — Vega-Lite config drop-in.
- [`flourish/vital-city.flourish-theme.json`](flourish/vital-city.flourish-theme.json) — Flourish Preview → Settings paste.
- [`fonts/fonts.css`](fonts/fonts.css) — font-face declarations + Typekit instructions.
- [`docs/BRAND.md`](docs/BRAND.md) — brand DNA, color, typography, photography, illustration.
- [`docs/VOICE.md`](docs/VOICE.md) — editorial voice, what we publish, pitch guidance.
- [`docs/STYLEBOOK.md`](docs/STYLEBOOK.md) — AP-adjacent style entries A–Z.
- [`docs/DATA-VIZ.md`](docs/DATA-VIZ.md) — chart conventions, Flourish parity and the pre-ship checklist.
- [`docs/INFOGRAPHICS.md`](docs/INFOGRAPHICS.md) — the infographic card: anatomy, type, table figures, checklist.
- [`docs/DASHBOARDS.md`](docs/DASHBOARDS.md) — dashboards and maps, plus the Ghost embed recipe (§6).
- [`docs/WEB-DESIGN.md`](docs/WEB-DESIGN.md) — what vitalcitynyc.org actually ships (live tokens, Ghost classes, Typekit kit).
- [`templates/event-invite.html`](templates/event-invite.html) — chartreuse-flood event-invite template.
- [`templates/donation-card.html`](templates/donation-card.html) — Donorbox donation card (chartreuse flood, centered form).

### Previews and kits

- [`preview/`](preview/) — at-a-glance Design System cards (typography, colors, spacing, components, brand).
- [`ui_kits/journal/`](ui_kits/journal/) — interactive recreation of the `vitalcitynyc.org` editorial site (home, article, section heads, footer).
- [`ui_kits/data/`](ui_kits/data/) — interactive Data dashboard (big stats, bar + line charts, filter, tile grid, detail).
- [`assets/`](assets/) — the logo (PNG, JPG, `.ai`, `.eps`, charcoal alt) and reference screenshots in `assets/reference/`.

---

## Caveats & known gaps

- **Gascogne** is included as `fonts/GascogneTS-Light.ttf` under Vital City's license (see `LICENSE`). The brand book calls for Extra Light; this is the Light cut. `Source Serif 4` is the fallback if the file can't load.
- **Halyard Text** loads via the Adobe Fonts (Typekit) kit `qqk2vto` (see `assets/reference/typekit-kit-qqk2vto.png`). It needs a network connection, and Adobe only serves a kit to web domains on that kit's allowed list, so on a domain that isn't listed pages fall back to Inter. The live site uses a different kit, `nlh6iak` (see `docs/WEB-DESIGN.md`). No Halyard font files are included; they are licensed from Adobe and are not redistributable.
- **Bayard** (the wordmark typeface) is not installed — only the logo PNG is used, so this is correct per brand policy.
- **No Figma file was provided** — all component recreations are sourced from `components/components.css`, `index.html`, and `templates/event-invite.html`, plus the Brand guide in `docs/`.
- **No icon assets** — the brand is intentionally typographic. We document substitution policy above.
- **Contributor portraits** — one reference screenshot of the line-art style is at `assets/reference/contributor-portraits-example.png`.

---

## Credits

- Brand system by **Design for Progress** (September 2024).
- **Halyard** by Darden Studio. **Gascogne** by TypeShop Collection. **Bayard** (wordmark only) by Vocal Type.
- Flourish theme values reverse-engineered from published Vital City charts on `public.flourish.studio`.
