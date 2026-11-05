# Vital City — Journal UI kit

High-fidelity recreation of the Vital City journal website: navigation, hero, section heads, article cards, photo-tag grid (Data section), article detail page, and the orange footer.

## Entry
- `index.html` — interactive click-thru (home → article → back; nav across Journal, Data, etc).

## Components
- **Chrome.jsx** — `Nav`, `Footer`.
- **Cards.jsx** — `Hero`, `SectionHead`, `ArticleCard`, `PhotoTag`.
- **App.jsx** — routes + sample content (`HomePage`, `ArticlePage`, `JournalIndex`, `DataIndex`).

## Tokens
All styling draws from `colors_and_type.css` (via `kit.css`). Spacing scale `--s1…--s9`; colors `--fg1`, `--orange`, `--chartreuse`, `--magenta`, etc.

## Gaps / things to polish
- Real article body and bylines are placeholder. Swap when you have real fixtures.
- Search UI not built; mobile-nav drawer not built.
