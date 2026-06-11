# Debt Resolve Pro — Design System

A design system for **Debt Resolve Pro** (debtrespro.com), a **business debt negotiation & MCA debt-settlement** firm. The brand promise: help business owners *"Secure Your Business's Future"* by reducing Merchant Cash Advance (MCA) debt and improving cash flow.

The aesthetic is **trustworthy professional fintech**: confident royal blue, deep navy, and a leafy green accent on clean, airy neutrals, with warm real-people photography. It should feel calm, credible, and human — a steady expert partner during a stressful time.

---

## Sources

Built from the live brand:

- **Website:** https://debtrespro.com (also www.debtrespro.com) — WordPress marketing site. Pages: Home, About Us, Our Services, Resources, Testimonials, Contact Us. Designed by BMG Media.
- **Logo:** `assets/logo-drp.png` (color, transparent) + `assets/logo-drp-white.png` (white knockout for dark surfaces), supplied by the client.
- **Homepage screenshot** (supplied) — source of the exact palette, type feel, and layout.
- Company: Debt Resolve Pro, 220 Congress Park Dr, Delray Beach, FL 33445 · 866-757-3339.

> A predecessor MCA-portal prototype ("ClearBizDebt") previously lived in this project and has been fully removed; this system is DebtResolvePro-only.

---

## What the brand does

Debt Resolve Pro negotiates and settles business MCA debt. Core services:

- **Debt Negotiation** — negotiate directly with creditors to reduce balances and secure better terms.
- **Debt Settlement** — arrange to pay less than the full amount owed, resolving debt faster.
- **Litigation Support** — guidance and coordination with legal professionals if legal action arises.

**How it works** (4 steps): Free Consultation → Comprehensive Analysis → Strategic Negotiation & Restructuring → Debt Settlement & Financial Recovery.

Differentiators emphasized: *Deep MCA Expertise*, *Truly Personalized Solutions*, *Empathetic & Driven Partnership*.

---

## CONTENT FUNDAMENTALS

How Debt Resolve Pro writes.

**Voice — reassuring expert, second person.** Copy speaks directly to the business owner as "you/your" and the firm as "we/our." It is empathetic and confident without being slick. It names the stress ("the stress and pressure that commercial debt can place on business owners") and answers it with competence and partnership.

**Tone — calm, credible, supportive.** Outcome-oriented and concrete: *"Reduce Your MCA Debt and Improve Your Cash Flow,"* *"Lower your outstanding balances and improve your cash flow."* Avoids hype; leans on expertise, integrity, and transparency.

**Casing.**
- **Title Case** for hero headlines and section/service titles: *"Secure Your Business's Future," "How It Works," "Debt Negotiation," "Comprehensive Debt Resolution Services."*
- **Sentence case** for body, sub-heads, and supporting copy.
- Small **UPPERCASE** eyebrows label sections: *"Why Choose DebtResolvePro," "Our Services," "Our Process."*

**Signature moves.**
- A two-tone headline where the last word is set in **blue** for emphasis: *"Secure Your Business's **Future**."*
- Numbered process steps (1–4) with short, plain-language descriptions.
- Services framed as **title + description + "Benefits:" line**.
- Primary CTA is always **"Free Assessment"** (or "Free Consultation"); the phone number **866-757-3339** is a persistent secondary CTA ("Call Us").
- Testimonials are warm, first-name + last initial (*Kelly P., Elizabeth C., Paul F.*), backed by Google Reviews.

**Naming.** The brand appears as **DebtResolvePro** (one word, logo lockup) and **Debt Resolve Pro** (three words, prose/legal). Tagline: *"The Pro in MCA Debt Settlement."*

**Emoji.** None. Trust signals are reviews, credentials, and real photography — not emoji.

**Vibe.** A trustworthy professional partner. Serious about money, warm about people.

---

## VISUAL FOUNDATIONS

The motifs and rules that make a screen look like Debt Resolve Pro.

**Color.** Three brand hues on clean neutrals:
- **Royal blue** `#2563EB` — the primary action color: CTAs, links, active states, and the emphasized headline word (a lighter `#3B82F6` for that accent text). Carries white text.
- **Deep navy** `#243A86` → `#131F45` — the wordmark and authority color; used for dark surfaces (footers, portal sidebar), deep headings, and the blue→navy gradient.
- **Leafy green** `#62B22F` — the secondary accent from the logo "Pro" and tagline; used sparingly for success, checkmarks, growth/positive signals, and the green→blue brand swoosh.
- Neutrals are a cool, slightly blue-tinted gray ramp from near-black `#14171F` to `#F6F8FB`. Backgrounds are white with **pale blue-gray** section panels (`#EEF4FB`).

**Type.** **Poppins** (geometric sans) for display/headings — confident, rounded, set bold/extrabold with tight tracking; the hero runs large (up to 56px). **Mulish** (humanist sans) for body and UI — calm and legible at 16px/1.5. Tabular lining numerals for money and metrics.

**Spacing & layout.** Roomy and breathable. Marketing content sits in a `1200px` container with generous vertical section padding (up to 128px). Two-column hero (copy left, image right). The portal uses a `256px` navy sidebar + `64px` topbar.

**Imagery.** **Real corporate photography** — warm, human, professional: advisors and business owners in bright modern offices, natural light, plants, soft warm tones against cool blue-gray interiors. People are approachable and mid-conversation. Images sit in rounded containers (`16–24px`). Use `<image-slot>` placeholders in mockups so the client drops in their own photos. Never AI-illustrate people.

**Backgrounds.** Mostly clean white with **pale blue-gray** tinted section panels and a subtle top-to-white **hero gradient**. Optional soft blue radial glow behind feature media. No heavy gradients, no dot grids, no noise.

**Borders.** Hairline `1px` at `--ink-200`. Inputs and outlined ("ghost") buttons use a blue border. Cards often rely on shadow + radius rather than borders.

**Corner radii.** Friendly and rounded: 8px (buttons/inputs), 12px (cards), 16px (feature panels), 24px (hero media / large surfaces), pill (chips, badges, avatars). The outlined "Call Us" button is notably rounded.

**Shadows.** Soft and cool, tinted with navy/blue at low alpha. Cards: `0 4px 16px rgba(19,31,69,0.07)`. Elevated/hover: `0 12px 32px`. The primary blue CTA carries a **blue glow** on hover (`0 6px 16px rgba(37,99,235,0.28)`). Depth comes from soft shadow, not hard lines.

**Hover states.** Buttons lift `-2px` and deepen (blue → `--blue-700`) with the blue glow; outlined buttons fill pale blue. Cards lift with a larger shadow. Links shift to `--blue-600`. Photography may scale slightly inside its frame.

**Press / active.** Buttons settle back to `translateY(0)`. Active nav/links use blue; the portal's active nav item gets a pale-blue fill with a blue left indicator.

**Motion.** Smooth and unhurried — `0.22s` ease-out is the house transition; the shared gesture is the `-2px` lift. Sections may fade-and-rise on scroll. No bounces, no looping decoration. Respect `prefers-reduced-motion`.

**Cards.** White, 12–16px radius, soft shadow, minimal or no border. Feature cards lead with a small blue/green icon tile, a title, and supporting copy. Testimonial cards show the Google Reviews mark, the quote, and a name.

**Buttons.** Primary = solid royal blue, white text, 8px radius, arrow icon, blue glow on hover. Secondary = white/outlined blue. Both appear at marketing scale (52px tall) and UI scale (44/36px).

---

## ICONOGRAPHY

- **Style:** clean **outline** icons, `24×24`, `stroke: currentColor`, `stroke-width: 2`, round caps/joins — recommend **[Lucide](https://lucide.dev)** (load from CDN). Marketing feature icons may use a **filled blue or green rounded-square tile** behind a white/▸ glyph (matching the homepage's circular feature icons).
- **Brand swoosh:** the green→blue arc above the wordmark is part of the logo lockup (`assets/logo-drp.png`); don't redraw it — use the supplied asset. `--gradient-arc` reproduces its color sweep for accents.
- **Phone** icon always accompanies the `866-757-3339` CTA. **Arrow-right** accompanies "Free Assessment" CTAs.
- **Emoji:** never. **Unicode** for typographic glyphs only (·, —, →).
- See `assets/icons.md` for the mapping.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — global entry; `@import`s all tokens.
- `tokens/colors.css · typography.css · spacing.css · effects.css · fonts.css · base.css`
- `guidelines/*.card.html` — foundation specimen cards (Colors ×3, Type ×3, Spacing ×2, Brand ×2) shown in the Design System tab.
- `guidelines/hero-directions.card.html` — the **two hero directions** to choose from: **A) Light** (faithful to debtrespro.com) and **B) Navy immersive** (premium, green CTA).

**Brand assets**
- `assets/logo-drp.png` (color) · `assets/logo-drp-white.png` (white knockout) · `assets/icons.md`.

**Components** (`components/`) — React primitives, each `<Name>.jsx` + `.d.ts` + `.prompt.md`:
- core: `Button`, `Badge`, `Eyebrow`, `Avatar`
- forms: `Input`, `Select`, `Checkbox`
- data: `Card`
- marketing: `FeatureCard`, `ProcessStep`, `Testimonial`, `SectionHeading`

**UI kits** (`ui_kits/`) — high-fidelity, click-through recreations composing the components:
- `marketing_site/` — full homepage recreation of the public debtrespro.com brand (`index.html`, `Homepage.jsx`, `icons.jsx`, `site.css`, `image-slot.js`).
- `client_portal/` — a client-facing portal app: overview dashboard tracking MCA debt resolution (`index.html`, `Portal.jsx`, `icons.jsx`, `portal.css`).

**Templates** (`templates/`)
- `deck/` — a branded 16:9 slide deck (title, section, content, stats, services, process, quote, contact). Load via `ds-base.js`.

**Skill**
- `SKILL.md` — makes this folder usable as a downloadable Claude Agent Skill.

> **Fonts:** Poppins + Mulish via Google Fonts (`tokens/fonts.css`). The site's exact heading font wasn't supplied; Poppins is a close geometric match. **Flag if you have the real brand fonts** and I'll swap them in.
