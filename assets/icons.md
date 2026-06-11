# Iconography — Debt Resolve Pro

## Style
Clean **outline** icons — **Lucide** family. `24×24` viewBox, `fill: none`,
`stroke: currentColor`, `stroke-width: 2`, round caps & joins. Rendered 16–24px,
inheriting color via `currentColor`.

Marketing **feature icons** may sit inside a **filled rounded-square tile** (blue or green,
`--radius-md`/`--radius-lg`) with a white glyph — matching the homepage's circular feature
badges. Keep one icon style per surface.

## Delivery
Load Lucide from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<!-- <i data-lucide="arrow-right"></i> -->
```

Or copy individual SVGs from https://lucide.dev.

## Icons in use
| Purpose                 | Lucide name        |
|-------------------------|--------------------|
| Free Assessment CTA     | `arrow-right`      |
| Call / phone CTA        | `phone`            |
| Deep MCA expertise      | `search` / `target`|
| Personalized solutions  | `user-check`       |
| Empathetic partnership  | `handshake` / `heart-handshake` |
| Debt negotiation        | `messages-square`  |
| Debt settlement         | `file-check`       |
| Litigation support      | `scale` / `shield` |
| Process steps           | numbered badges    |
| Success / benefit       | `check` / `check-circle` (green) |
| Cash flow / savings     | `trending-up` (green) |
| Reviews                 | `star`             |
| Location                | `map-pin`          |
| Email                   | `mail`             |

## Brand swoosh & logo
Use the supplied lockups — do not redraw:
- `assets/logo-drp.png` — color (navy + green) on transparent, for light backgrounds.
- `assets/logo-drp-white.png` — white knockout, for navy/dark backgrounds.
The green→blue arc is part of the lockup; `--gradient-arc` mirrors its color sweep for accents
(underlines, dividers, progress fills).

## Rules
- **No emoji.** Ever.
- Unicode only for typographic glyphs (`·`, `—`, `→`), never as iconography.
- Don't mix filled and outline icon styles within one view.
