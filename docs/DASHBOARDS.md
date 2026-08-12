# Data dashboards

How to build a Vital City dashboard — an explorer, tracker, map or multi-panel data product that a reader interacts with. Read [`INFOGRAPHICS.md`](INFOGRAPHICS.md) first: every panel inside a dashboard follows the chart-card rules. This file covers what a dashboard adds on top — shell, controls, maps, embedding, updating, and the integrity obligations that come with a page that keeps publishing after you walk away.

## 1. Decide two things before writing any code

**Full-screen or embedded?** Ask; don't assume. Full-screen is the norm for explorers and trackers — a standalone GitHub Pages URL. Embedded means it lives inside a Ghost article column. Most dashboards ship as both: one `index.html` that renders full-screen by default and strips its chrome under `?embed=1`.

**Does it update itself?** A dashboard fed by a scheduled job needs a visible last-updated stamp, a failure mode, and a methodology note that describes the refresh cadence. A one-shot dashboard needs none of that but should say which date the data was pulled.

## 2. Shell architecture

One card, hairline-separated horizontal bands, in this order:

```
┌─ .card ────────────────────────────────────────┐
│ .head        headline + dek                    │
├────────────────────────────────────────────────┤
│ .stats       4 serif numerals + sans labels    │
├────────────────────────────────────────────────┤
│ .toolbar     filters, toggles, search          │
├────────────────────────────────────────────────┤
│ .map-wrap / .chart-wrap    the main panel      │
├────────────────────────────────────────────────┤
│ .legend                                        │
├────────────────────────────────────────────────┤
│ .lower       secondary charts, ranked lists    │
├────────────────────────────────────────────────┤
│ .source      sources, methodology, updated at  │
└────────────────────────────────────────────────┘
```

Bands are separated by `1px solid var(--vc-cloud)`. Never by gaps, shadows or rounded panels. The outer card keeps its 1px black border and square corners. Full-screen dashboards can run wider than the 880px infographic card — 1100–1200px is common — but the internal rhythm is identical.

## 3. Controls

Controls are utility type: uppercase, bold, small, letter-spaced, Charcoal. They never compete with the headline. Buttons are square, black-bordered, and fill black when active.

```css
.map-toolbar{display:flex; align-items:center; gap:14px; flex-wrap:wrap;
  padding:12px 16px; border-bottom:1px solid var(--vc-cloud); background:var(--vc-white);}

.toolbar-label{font-weight:700; font-size:.6rem; letter-spacing:.14em;
  text-transform:uppercase; color:var(--vc-charcoal);}

/* Segmented control — the default Vital City filter */
.btn-group{display:inline-flex; border:1px solid var(--vc-black);}
.btn-group button{font-family:var(--vc-sans); font-weight:700; font-size:.68rem;
  letter-spacing:.06em; text-transform:uppercase;
  background:var(--vc-white); color:var(--vc-black);
  padding:6px 12px; border:none; border-right:1px solid var(--vc-black);
  cursor:pointer; transition:background .15s,color .15s;}
.btn-group button:last-child{border-right:none;}
.btn-group button:hover{background:var(--vc-cloud-50);}
.btn-group button.active{background:var(--vc-black); color:var(--vc-white);}
.btn-group button:focus-visible{outline:2px solid var(--vc-orange); outline-offset:1px;}

/* Search — right-aligned, Cloud border, Orange focus */
.search{position:relative; flex:1; min-width:170px; max-width:260px; margin-left:auto;}
.search input{width:100%; padding:6px 10px; font-family:var(--vc-sans); font-weight:300;
  font-size:.82rem; background:var(--vc-white); border:1px solid var(--vc-cloud); outline:none;}
.search input:focus{border-color:var(--vc-orange);}
.search-results{display:none; position:absolute; top:100%; left:0; right:0; z-index:1000;
  background:var(--vc-white); border:1px solid var(--vc-cloud); border-top:none;
  max-height:200px; overflow-y:auto;}
.search-results.active{display:block;}
.search-result{padding:8px 10px; font-size:.78rem; cursor:pointer;
  border-bottom:1px solid var(--vc-cloud-50);}
.search-result:hover{background:var(--vc-orange-20);}

/* Inline help — a hairline circle, never an emoji or icon font */
.toolbar-label .tip{display:inline-block; width:13px; height:13px; line-height:11px;
  text-align:center; border-radius:50%; border:1px solid var(--vc-charcoal);
  color:var(--vc-charcoal); font-size:.55rem; font-weight:700; margin-left:4px; cursor:help;}
```

Chartreuse is the hover state for map controls; Safety Orange is the focus ring everywhere. Neither is a fill for a resting control.

## 4. Maps

Leaflet is the default. Strip its chrome down to the brand:

```css
.map-wrap{position:relative; height:460px; background:var(--vc-cloud);}
#map{position:absolute; inset:0; width:100%; height:100%;}
.leaflet-container{background:#f3f0ea; font-family:var(--vc-sans);}
.leaflet-control-zoom{border:1px solid var(--vc-black) !important; box-shadow:none !important; margin:12px !important;}
.leaflet-control-zoom a{background:var(--vc-white) !important; color:var(--vc-black) !important;
  border:none !important; border-bottom:1px solid var(--vc-black) !important;
  width:28px !important; height:28px !important; line-height:28px !important;
  font-size:17px !important; font-weight:300 !important; font-family:var(--vc-sans) !important;}
.leaflet-control-zoom a:last-child{border-bottom:none !important;}
.leaflet-control-zoom a:hover{background:var(--vc-chartreuse) !important;}
.leaflet-control-attribution{font-size:9px !important; background:rgba(255,255,255,.85) !important;
  color:var(--vc-charcoal) !important;}
```

- Square controls, hairline borders, no rounded pills, no shadows.
- Choropleths use the divergent or sequential gradients in [`DATA-VIZ.md`](DATA-VIZ.md) — not a rainbow, not a default d3 scheme.
- Points in the categorical palette; render thousands of points to a canvas overlay rather than as DOM markers.
- A "reset view" control belongs next to zoom, styled identically.
- Popups are utility type: sans bold heading, sans light body — never a serif headline.
- For New York City choropleths, use shoreline-clipped boundary files rather than raw TIGER polygons, so water doesn't get colored as land.

## 5. Panels inside a dashboard

Every chart panel obeys [`INFOGRAPHICS.md`](INFOGRAPHICS.md). Two additional rules apply because the panels sit together:

- **Hold one headline weight across all panels.** Mixed 700/900 headlines inside one dashboard read as a mistake.
- **Keep the series-to-color mapping stable across panels.** If misdemeanors are Cerulean in the top chart they are Cerulean in the ranked list below it. A reader should never have to re-learn the legend mid-page.
- **Bar-chart axes start at zero.** When a project has a defensible reason to truncate, ship a zero-baseline toggle rather than silently truncating, and default it to the honest view unless the truncated view is the point.

## 6. Embedding in a Ghost article

**Static dashboards:** paste the whole `index.html` into a Ghost HTML card. Keep the file lean and the card ~700px wide.

**Interactive dashboards with bounded height:** build one file with an `?embed=1` mode that strips chrome and posts its height to the parent.

```js
if (new URLSearchParams(location.search).get('embed') === '1') {
  document.body.classList.add('embed');
  const postHeight = () => {
    const h = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    parent.postMessage({ type: 'vc-embed-height', id: '<SLUG>', height: h }, '*');
  };
  window.addEventListener('load', postHeight);
  window.addEventListener('resize', postHeight);
  let n = 0; const t = setInterval(() => { postHeight(); if (++n > 20) clearInterval(t); }, 300);
}
```

```css
body.embed{padding:0;}
body.embed .card{border:none; max-width:none;}
```

Ghost side: one wrapper div carrying the single 1px black border, an iframe with `scrolling="no"` and a fallback height, and a listener that resizes it on the height message. Put the border on the wrapper, never on the iframe — themes override iframe borders.

Hard-won specifics: never use a fixed `padding-top` aspect ratio for an interactive page (it always crops or leaves whitespace); re-measure height on an interval for a few seconds because maps and charts hydrate after `load`; and never leave borders on both the page and the host.

**Interactive dashboards with unbounded height** — searchable databases where a query can return hundreds of rows — invert the pattern. Under `?embed=1`, turn the page into a fixed-height app frame: slim topbar with the title and an "Open full screen" link that carries the current hash, header and footer hidden, and `main` scrolling internally. The Ghost iframe gets `height: clamp(650px, 85vh, 1100px)` and no postMessage. Also drop `autofocus` from search inputs in embed mode — it scroll-jacks the host article — and preserve `location.search` in any `history.replaceState` call so `?embed=1` survives navigation.

**Compact mode** is a third option: `body.compact` hides the stats strip, secondary panels and source line, leaving head, toolbar, map and legend, for when the host article already carries the context. Full-screen restores everything.

## 7. Responsive and accessible

- Stats strip reflows 4 → 2×2 under 600px; toolbars wrap; map height shrinks but never below ~340px.
- Touch targets ≥ 40px in the toolbar on mobile.
- `:focus-visible` gets a 2px Safety Orange outline, offset 1–2px, on every interactive element.
- Check contrast for Charcoal on Paper and for any text set on Chartreuse or Orange — thin weights on color fail easily.
- Respect `prefers-reduced-motion`: no count-up animations, no scroll-driven reveals, no transitions.
- Every control needs a text label or `aria-label`; a legend swatch alone is not a label.

## 8. Live dashboards

- **Stamp the data.** "Updated 12 August 2026" in the source band, generated from the data file rather than typed.
- **Fail loud.** A refresh job that fetches nothing must exit non-zero and leave the last good data in place — never write an empty file and never exit 0 on an empty fetch.
- **Never ship a silent gap.** If a feed lags, say so on the page ("311 data lags roughly a day and a half").
- **State the query.** The source band should say what was counted, over what period, from which dataset, with the dataset hyperlinked.

## 9. Integrity — non-negotiable on Vital City data products

- **Every dashboard gets a methodology document** — no black boxes. What the data is, how it was pulled, what was excluded, what the known limitations are.
- **Cite every number to a source the reader can open.**
- **Label year-to-date, projected and estimated figures as such**, in the chart, not only in the methodology.
- **State confidence.** If a figure is derived, say it is derived and show the arithmetic.
- **Add a small, unobtrusive AI-caution note** on any data product built with AI assistance, near the source or footer, telling readers to verify against the linked sources.
- **Facts, not opinions.** Vital City data products describe what the data shows; the argument belongs in the accompanying essay.

## 10. Copy inside the dashboard

Sentence case for every headline, label and control. Straight quotes and real characters, never Unicode escapes. Spell out acronyms on first reference. "New York City" in full rather than NYC in body copy. No serial comma. Applying this design system does not make the output "Vital City"-branded — use a project-specific name and omit the wordmark unless asked for it.

## 11. Ship checklist

- [ ] Full-screen and embed modes both tested; no doubled borders, no inner scrollbar, no trailing whitespace.
- [ ] One headline weight and one color mapping across all panels.
- [ ] Stats strip reflows; toolbar wraps; map usable at 375px.
- [ ] Focus rings visible on every control; reduced-motion honored.
- [ ] Source band carries datasets, method notes and an update stamp.
- [ ] Methodology document written and linked.
- [ ] AI-caution note present if AI assisted the build.
- [ ] Deployed to the right GitHub account — confirm `vitalcity-nyc` versus a personal account before pushing.
