# Web design

This file documents what **vitalcitynyc.org** actually ships — extracted from the production stylesheet (`app.min.css`, build `82a91f5608`) on April 25, 2026. It is the reference for any new web build, embed, or microsite that needs to look like it lives in the Vital City family.

`BRAND.md` is the brand bible (aspirational, slower-moving). This file is the **engineering truth** of what the site does today. When the two disagree, the live site wins for web — defer here.

---

## 1. Foundation

### Stack
- **CMS:** Ghost (theme based on the "Solo" / "Vital City" custom build)
- **Stylesheet:** `https://www.vitalcitynyc.org/assets/dist/app.min.css`
- **Fonts:** Adobe Typekit kit `nlh6iak` (`halyard-display`, `halyard-text`, plus `Gascogne` self-hosted)
- **Cache-bust pattern:** `?v={hash}` query string on CSS and JS

### Typekit embed (production)
```html
<link rel="stylesheet" href="https://use.typekit.net/nlh6iak.css?display=swap" media="print" onload="this.media='all'">
<link rel="stylesheet" href="https://use.typekit.net/nlh6iak.css?display=swap">
```
The `media="print"` + `onload` trick is the site's font-loading optimization. Keep it for embeds shipped through Ghost; for static utilities a single non-printed link is fine.

---

## 2. Color tokens (live values)

These are the actual variables defined in `:root` on the production CSS — not the brand-book aspirational palette. Several names overlap with the brand tokens but the hex values are tuned for screen and Ghost's default theme system.

### Neutrals
| Token | Hex | Role |
|---|---|---|
| `--color-black` | `#000` | Pure black (rare) |
| `--color-dark` | `#262626` | **Default body text** |
| `--color-dark-acc` | `#404040` | Secondary text |
| `--color-grey-darker` | `#595959` | Muted text |
| `--color-grey-dark` | `#737373` | More muted |
| `--color-grey` | `grey` *(CSS keyword = `#808080`)* | Captions, figcaption |
| `--color-grey-light` | `#8c8c8c` | Disabled |
| `--color-grey-lighter` | `#a6a6a6` | Borders on dark |
| `--color-light-acc` | `#bfbfbf` | |
| `--color-light` | `#d9d9d9` | Reverse-text on dark backgrounds |
| `--color-white` | `#fff` | Page background |
| `--color-bg-acc` | `#fafafa` | Card / input background |
| `--color-border` | `#ebebeb` | **Default border** (lighter than the brand `cloud #dddddd`) |

> **Note.** Body text on the site is `#272727` (set on `body{}`), one tick darker than `--color-dark`. Match either — the difference is imperceptible — but use the token in new code.

### Accents in actual use
| Hex | Where it shows up |
|---|---|
| `#ff7c53` | Safety Orange — footer background, blockquote left rule |
| `#dde44c` | Chartreuse — announcement bar (`.gh-announcement-bar.light`) |
| `#fc365e` | Error / alert magenta (form errors) |
| `#48c774` | Success green (form submission) |
| `#fddc58` | Warning yellow |
| `#2375c9` | Ghost's default `--ghost-accent-color` fallback. The site doesn't actually display this — it's the link color baseline before brand overrides. **Do not use in new components**; treat the brand's Cerulean `#217ebe` as canon. |

### Status colors (forms, banners)
```css
--color-error:    #fc365e;
--color-success:  #48c774;
--color-warning:  #fddc58;
--color-info:     #259eef;
```

### What's *not* in the live site
- The brand book's full categorical palette (Periwinkle, Rose, Indigo, Magenta, Cerulean) is **not used in chrome** — only in data-viz embeds.
- Black `#050507` (the brand's near-black) is replaced by `#262626` for body text. This is intentional: pure black on white is too much contrast for long reading; `#262626` is gentler.
- The good/bad gradient palette is data-viz only.

---

## 3. Typography

### Tokens
```css
--font-system: -apple-system, BlinkMacSystemFont, "Segoe UI",
               Helvetica, Arial, sans-serif,
               "Apple Color Emoji", "Segoe UI Emoji";
--font-mono:   Consolas, Monaco, monospace;
--font-body:     var(--font-system);   /* fallback */
--font-headings: var(--font-system);   /* fallback */
--font-size-base: 1rem;                /* 16px on desktop, scales to 18px in some media queries */
--line-height-base: 1.6;
```

The `--font-body` / `--font-headings` tokens default to the system stack, but **virtually every typed element overrides them** to `halyard-text` or `halyard-display`. Treat `var(--font-system)` as a graceful fallback while Typekit loads, not as a target.

### Fluid heading scale
Headings use `clamp()` everywhere. Numbers are taken straight from the production CSS:

| Element | Family | Weight | Size |
|---|---|---|---|
| `h1` | halyard-display | 500 | `clamp(1.6rem, 1.6rem + 1vw, 2.4rem)` (~26→38px) |
| `h2` | halyard-display | 500 | `clamp(1.4rem, 1.4rem + 1vw, 2rem)` (~22→32px) |
| `h3` | halyard-display | 500 | `clamp(1.3rem, 1.3rem + 1vw, 1.6rem)` (~21→26px) |
| Body | halyard-text | 300 | 1rem / 1.6 line-height |
| Small caps label | halyard-text | 700 | 0.8rem, `letter-spacing: 0.05em`, uppercase |
| Footer title | halyard-display | 700 | `max(1.4rem, min(2.5vw, 2.4rem))` |

### Display serif (Gascogne)
Reserved for:
- Pullquotes and **blockquotes** (see §6)
- Some marketing-page section headers (`h3` overrides on landing pages)
- Decorative side-rotated callouts

```css
font-family: Gascogne;
font-weight: 200;          /* Extra Light intent */
/* line-height varies: 1 for display, 1.6 for blockquotes */
```

### Buttons
```css
font-family: halyard-text;
font-size: 13px;
font-weight: 300;
letter-spacing: 0.05em;
text-transform: uppercase;
padding: 0.9em 1.4em;       /* .btn--lg gets 1em 1.5em */
border: 1px solid var(--bg-accent);
```
The default `.btn` is **black on chartreuse / orange / white** depending on context — never floats. Background is the same as the border, so visually the button is a solid block with no rounded corners by default (`--global-radius` falls back to `0`).

---

## 4. Layout & spacing

### Breakpoints
```css
--brakepoint-sm: 36em;   /* 576px */
--brakepoint-md: 48em;   /* 768px */
--brakepoint-lg: 62em;   /* 992px */
--brakepoint-xl: 75em;   /* 1200px */
```
*(Yes, the Ghost theme spells it `brakepoint`. Don't fix it in code that's already shipped — match the existing token name when working in the Ghost theme. New repos can use `breakpoint`.)*

### Containers
```css
--container-sm: calc(36em + 1rem);
--container-md: calc(48em + 1rem);
--container-lg: calc(62em + 1rem);
--container-xl: calc(75em + 1rem);
```

### Gaps
```css
--gap:     1em;
--gap-xs:  calc(var(--gap) * 0.25);   /* 0.25em */
--gap-sm:  calc(var(--gap) * 0.5);    /* 0.5em  */
--gap-lg:  calc(var(--gap) * 2);      /* 2em    */
--gap-xl:  calc(var(--gap) * 3.5);    /* 3.5em  */
--gap-rem: 1.2rem;
```

### Gutter and outer margin
```css
--gutter-w: 1rem;
--outer-m:  1rem;
--half-gutter-w: calc(var(--gutter-w) * 0.5);
```

### Border radius
The site reads `--global-radius` but never sets it, so it resolves to `0` — **square corners by default**, matching the brand principle. If a future theme update sets it, components like buttons and inputs will pick up the new value automatically.

---

## 5. Transitions

```css
--transition-name:        ease-in-out;
--transition-duration:    200ms;
--transition-duration-lg: 400ms;
--transition-duration-xl: 800ms;
--transition-delay:       100ms;
```
Common patterns:
- Hover state: 200ms ease-in-out
- Reveal / fade: 400ms
- Slow ambient (e.g., hero image): 800ms

When `prefers-reduced-motion: reduce` is on, the site collapses `--transition-duration` to `1ms`.

---

## 6. Components — the canonical recipes

### 6.1 Header / nav
- Top bar: white, hairline border-bottom `1px solid #ebebeb`
- Brand mark: raster wordmark image (still). The design-system repo now ships a text-wordmark fallback (`.vc-wordmark`); the production site has not adopted it yet.
- Nav links: halyard-text, ~13–14px, all caps for primary, sentence case for secondary.

### 6.2 Post cards (`.post-card`)
Three variants by position:

| Variant | Title size |
|---|---|
| Lead (hero post) | `clamp(1.2rem, 1rem + 2vw, 2.8rem)` |
| Standard feed | `clamp(1.2rem, 1rem + 2vw, 1.8rem)` |
| Sidebar / simple | `clamp(0.9rem, 0.8rem + 1vw, 1.1rem)` |

Layout: each card is `display:flex; padding-left:1.25em; border-left:1px solid var(--color-border)`. The hairline-on-the-left is the site's signature "row of articles" texture.

```css
.post-card__media   { flex: 1.7; }    /* wide variant */
.post-card__content { flex: 2;   padding: 0; }
/* alt: 1 / 3 ratio for content-heavy variant */
```

### 6.3 Article body
```html
<article class="post-content">
  <h1>…</h1>
  <p>Body…</p>
  <h2>Subhead</h2>
  <blockquote>Pullquote…</blockquote>
</article>
```
- H1: see §3 scale.
- Body: `halyard-text 300`, `1rem / 1.6`, color `#262626`.
- Paragraph spacing: bottom margin `1em`.
- Links inside body: inherit color, underlined.

### 6.4 Blockquote (the canonical site quote)
```css
blockquote {
  background-color: var(--color-bg);              /* white */
  border-left: 1.5px solid #ff7c53;               /* Safety Orange */
  font-family: Gascogne;
  font-size: 22px;
  line-height: 1.6;
  font-weight: 200;
  margin: 0 0 var(--gap-lg);
  padding: 8px 0 8px 24px;
}
```
This is the most distinctive in-text component. Use it sparingly — once or twice per article max.

### 6.5 Figcaption
```css
figcaption {
  color: grey;
  font-size: 0.85rem;
  font-style: italic;
  font-weight: 200;
  text-align: right;
  padding: 8px var(--outer-m);
}
```
Right-aligned, italic, light grey. Always present on photos; data-viz embeds set their own caption inside the chart.

### 6.6 Buttons
See §3 typography. Variant naming:
- `.btn` (default — dark/light reverse)
- `.btn--brand` (chartreuse pop, black text)
- `.btn--bordered` (outline only, fills on hover)
- `.btn--xs / --sm / --lg / --xl / --xxl`
- `.btn--rounded` (only when explicitly intentional — square is canon)
- `.btn--full` (100% width, mobile or form CTAs)

### 6.7 Subscribe form
The site's email-capture form sits at the bottom of the article and at footer. Pattern:
- Stacked column on mobile, inline row on `md+`
- Input: `--color-bg-acc` background, hairline border, no rounded corners
- Button: `.btn--brand` (chartreuse) or `.btn--dark`
- Success / error states swap the button color via `--bg-accent` → `--color-success` / `--color-error`

### 6.8 Footer
```css
.footer {
  background: #ff7c53;        /* Safety Orange — the site's signature footer */
  color: #262626;
  margin-top: 40px;
  font-size: 1.1rem;
}
.footer__title {
  font-family: halyard-display;
  font-weight: 700;
  font-size: max(1.4rem, min(2.5vw, 2.4rem));
  line-height: 1.2;
}
.footer__address { font-size: 15px; line-height: 1.4; opacity: 0.9; }
```
The orange footer is one of the most recognizable parts of the site — keep it. Don't substitute another color in microsites that want to feel native.

### 6.9 Announcement bar
```css
.gh-announcement-bar.light {
  background-color: #dde44c !important;   /* Chartreuse */
  font-family: halyard-text !important;
}
```
Tiny, top-of-page strip for announcements. Only chartreuse-on-black or black-on-chartreuse — never orange (clashes with footer).

---

## 7. Things to avoid in new web work

- **No drop shadows.** The brand allows one — the site uses zero in chrome. Reserve for chart hover states only.
- **No rounded corners** on buttons, cards, or section dividers unless you have a specific reason (e.g., a phone-screen mock-up). `--global-radius` defaults to `0`.
- **No body copy in Gascogne.** Pullquotes and blockquotes only. Never paragraph runs.
- **No `#000` for body text.** Use `#262626` (`--color-dark`) — pure black is reserved for the wordmark and one or two display moments.
- **No fluorescent overrides.** If you find yourself reaching for `#dde44c` as a background block, ask whether the announcement bar pattern (small strip) is what you want instead. Chartreuse-flooded panels read as advertising, not editorial.
- **No mixed-case or italicized "Vital City."** Wordmark is set in Bayard (or the `.vc-wordmark` Halyard fallback) in tracked uppercase, always.

---

## 8. Quick start — embedding into the site's look

For a microsite, embed, or static page that should feel native:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://use.typekit.net/nlh6iak.css">
  <link rel="stylesheet" href="https://vital-city-nyc.github.io/vital-city-design-system/tokens/tokens.css">
  <link rel="stylesheet" href="https://vital-city-nyc.github.io/vital-city-design-system/components/components.css">
  <style>
    body {
      font-family: "halyard-text", -apple-system, sans-serif;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.6;
      color: #262626;
      background: #fff;
      margin: 0;
    }
    main { max-width: 38rem; margin: 0 auto; padding: 2rem 1rem; }
    h1 { font-family: "halyard-display"; font-weight: 500; font-size: clamp(1.6rem, 1.6rem + 1vw, 2.4rem); line-height: 1.1; }
    h2 { font-family: "halyard-display"; font-weight: 500; font-size: clamp(1.4rem, 1.4rem + 1vw, 2rem); }
    blockquote {
      border-left: 1.5px solid #ff7c53;
      padding: 8px 0 8px 24px;
      font-family: Gascogne, Georgia, serif;
      font-weight: 200;
      font-size: 22px;
      line-height: 1.6;
      margin: 0 0 2em;
    }
    .footer { background: #ff7c53; color: #262626; padding: 2rem 1rem; margin-top: 2rem; }
  </style>
</head>
<body>
  <main>
    <h1>Headline</h1>
    <p>Body copy…</p>
  </main>
</body>
</html>
```

That's the minimal kit. Add the design-system component classes (`.vc-wordmark`, `.vc-article__*`, `.vc-card`, etc.) when you need more.

---

## 9. Audit notes (April 2026)

A few inconsistencies worth flagging when the site next gets touched:
- Production body color is `#272727` set directly on `body{}`; the token is `#262626`. They look identical — pick one.
- The Ghost theme variable is misspelled `--brakepoint-*`. New code can use `--breakpoint-*` aliases, but don't rename the existing ones until the theme is rebuilt.
- The ghost-default brand color `#2375c9` is still the link fallback; the brand spec uses Cerulean `#217ebe`. Two different blues, neither widely visible — worth aligning on one.
- The site does not yet ship a true text wordmark (still raster). The design-system repo has `.vc-wordmark` ready to drop in.
- Border radius is set globally to 0 by default, but a few Ghost cards (`.kg-callout-card`, `.kg-image-card`) set `border-radius: var(--global-radius)` — if the global ever changes, those will pick up the change. Decide intentionally before flipping it.
