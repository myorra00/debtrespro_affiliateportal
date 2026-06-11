---
name: debt-resolve-pro-design
description: Use this skill to generate well-branded interfaces and assets for Debt Resolve Pro (debtrespro.com), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `readme.md` — full design guide: brand context, content fundamentals, visual foundations, iconography, file index. **Start here.**
- `styles.css` — global entry point; `@import`s all tokens. Link this one file to inherit the system.
- `tokens/` — colors, typography, spacing, effects, fonts (Poppins + Mulish via Google Fonts).
- `assets/` — `logo-drp.png` (color), `logo-drp-white.png` (white knockout), `icons.md` (Lucide set).
- `guidelines/*.card.html` — foundation specimens (colors, type, spacing, brand).
- `components/` — React primitives (`Button`, `Badge`, `Eyebrow`, `Avatar`, `Input`, `Select`,
  `Checkbox`, `Card`, `FeatureCard`, `ProcessStep`, `Testimonial`, `SectionHeading`), each with
  a `.d.ts` (props) and `.prompt.md` (what & when + usage).
- `ui_kits/marketing_site/` — homepage recreation of the public debtrespro.com brand.
- `ui_kits/client_portal/` — a client-facing portal app built in the brand.
- `templates/deck/` — a branded 16:9 slide deck template.

## The one-paragraph brief
Debt Resolve Pro ("DebtResolvePro — The Pro in MCA Debt Settlement") helps business owners
negotiate and settle Merchant Cash Advance (MCA) debt. Brand promise: *"Secure Your Business's
Future — Reduce Your MCA Debt and Improve Your Cash Flow."* Aesthetic: trustworthy professional
fintech — **royal blue `#2563EB`** for action, **deep navy `#243A86`** for authority, **leafy
green `#62B22F`** as the secondary accent, on clean cool-gray neutrals with **warm real
photography**. Display type is **Poppins** (bold, geometric, big hero); body/UI is **Mulish**.
Title-case headlines with the last word in blue; sentence-case body; second person ("you/your");
empathetic and credible; no emoji. Rounded corners (8–24px), soft cool shadows, a blue glow on
the primary CTA, and a `-2px` hover lift. Primary CTA is always **"Free Assessment"** (arrow);
phone **866-757-3339** is the persistent secondary CTA.

## Building HTML artifacts
Link `styles.css`, then use the CSS custom properties (`var(--blue-600)`, `var(--navy-900)`,
`var(--green-500)`, `var(--text-hero)`, `var(--radius-xl)`, `var(--shadow-card)`,
`var(--gradient-arc)`, …). For React mocks, the components compile to a global bundle — see any
`components/*/*.card.html` or a UI kit's `index.html` for the load order (React UMD + Babel +
`_ds_bundle.js`, then read components off `window.<Namespace>`). Use the supplied logo files;
never redraw the swoosh. For photography, use real warm corporate images (or `<image-slot>`
placeholders in mockups).
