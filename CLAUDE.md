# CLAUDE.md — GabrielCFormiga.github.io

Personal portfolio site for Gabriel Campelo Formiga, built on the "Spatial" HTML template by TEMPLATED.

## Project structure

```
index.html        # Home page (about, news, awards)
cp.html           # Competitive programming page
misc.html         # Miscellaneous page (currently unlisted in nav)
css/style.css     # Primary stylesheet — defines all custom styles
css/style-*.css   # Responsive breakpoint overrides (xsmall → xlarge)
css/skel.css      # Grid framework
fonts/            # FontAwesome icon font
images/           # Photos and assets
js/               # jQuery, skel, and init scripts
docs/             # PDF documents (resume, etc.)
```

## Styling rules — always follow these

**Font:** `"Raleway", Arial, Helvetica, sans-serif` — imported from Google Fonts in `css/style.css:3`.

**Base colors:**
- Body text: `#000`
- Links: `#f32853` (red-pink)
- Strong/bold: `#484848`
- Background: `#fff`

**Base typography (from `css/style.css`):**
- Font size: `13pt`
- Line height: `2em`
- Headings use Raleway 700

**Spacing conventions:**
- Section padding follows the existing pattern (`padding-top: 0.1em` for sections stacked after a divider)
- Use the fading divider (`linear-gradient` `<div>`) between major sections, as seen in `index.html:118–122`
- Container widths follow `.container` from skel; use `max-width: 1000px` for content-heavy sections

**Component patterns:**
- News/awards items: `.news-item` with `.news-date` + `.news-text` side-by-side
- Content cards: `.content-card` with `.pill-row`, `.pill`, `.link-row`, `.card-cta`
- Section headers: `<header class="major special"><h2>...</h2></header>`
- Footer icons: FontAwesome via `class="icon fa-*"`

## Page template

Every page must include the standard `<head>` block from an existing page (jQuery, skel, skel-layers, init, MathJax config, Google Analytics tag `UA-174649418-1`) and the same `<header id="header">` nav with links: Home `/`, CP `/cp.html`, Resume `/docs/Gabriel_resume_october2025.pdf`.

New pages must load the same scripts and NO additional CSS files — all custom styles go into `css/style.css`.

## Do not

- Add new CSS files or `<style>` blocks in HTML; extend `css/style.css` instead.
- Change the font family or base color palette.
- Use inline styles for anything that could be a reusable CSS class.
- Remove the Google Analytics script from any page.
