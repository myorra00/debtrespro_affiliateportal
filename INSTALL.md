# Install — Debt Resolve Pro Design System (Claude Code Skill)

This folder is both a **design system** and a ready-to-use **Claude Agent Skill**.
`SKILL.md` at the root is what makes it a skill.

## Use it as a Claude Code skill

Claude Code discovers skills in a `skills/` directory:

- **Personal** (available in all your projects): `~/.claude/skills/`
- **Project** (shared via a repo): `<your-project>/.claude/skills/`

### Steps
1. Unzip this download.
2. Rename the unzipped folder to **`debt-resolve-pro-design`**.
3. Move it so the path is:
   ```
   ~/.claude/skills/debt-resolve-pro-design/SKILL.md
   ```
   (Create `~/.claude/skills/` if it doesn't exist. On macOS/Linux `~` is your home folder.)
4. In Claude Code, ask for it by name, e.g.:
   > "Use the debt-resolve-pro-design skill to build a landing page for a new service."

The only hard requirement: **`SKILL.md` must sit at the root** of the skill folder, with
everything else (readme.md, styles.css, tokens/, assets/, components/, ui_kits/, templates/)
alongside it. Don't move files out of the folder.

## Just want to look at it?

Open any `.html` file in a browser:
- `ui_kits/marketing_site/index.html` — the marketing homepage
- `ui_kits/client_portal/index.html` — the client portal dashboard
- `templates/deck/index.html` — the branded slide deck
- `guidelines/hero-directions.card.html` — the two hero directions (A / B)

> The React-based screens (`ui_kits/*`, the component cards) load `_ds_bundle.js` and a few
> libraries from a CDN, so they need an internet connection when opened directly. The static
> pages (deck, foundation cards, hero directions) work fully offline.

## Use it in production / other tools

- Link **`styles.css`** to inherit every design token (colors, type, spacing, radii, shadows)
  as CSS custom properties — e.g. `var(--blue-600)`, `var(--navy-900)`, `var(--font-display)`.
- **`readme.md`** is the full brand & usage guide (voice, visual foundations, iconography).
- **`components/`** holds the React primitives; each has a `.d.ts` (props) and `.prompt.md`
  (what & when + a usage snippet).

## Notes
- Fonts: **Poppins** (display) + **Mulish** (body) via Google Fonts. Swap in real brand fonts
  if you have them (`tokens/fonts.css`).
- Photography: marketing mockups use drag-and-drop `<image-slot>` placeholders — drop in real
  photos, or replace with `<img>` tags in production.
