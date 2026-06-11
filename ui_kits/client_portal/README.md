# Client Portal — UI Kit

A high-fidelity recreation of the **Debt Resolve Pro client portal** — the logged-in area where a business owner tracks their MCA debt resolution.

Open `index.html`.

## What it shows
- **Navy sidebar** (Overview, My Case, Payments, Documents, Messages, Settings) + topbar with a phone-support chip.
- **Overview dashboard:**
  - Gradient progress hero — case status, original debt, negotiated-so-far, projected savings, and a resolution progress bar.
  - **Settlement progress** by creditor (status badges + per-creditor reduction bars).
  - **Next payment** + **Your specialist** cards.
  - **Recent activity** timeline.
- Sidebar nav switches between Overview and placeholder views.

## Files
| File | Role |
|------|------|
| `index.html` | Entry; loads React + the DS bundle |
| `portal.css` | Sidebar, topbar, hero, creditor rows, timeline (composes `styles.css`) |
| `icons.jsx` | Lucide-style portal icon set |
| `Portal.jsx` | Sidebar + topbar + dashboard, composing DS `Card`, `Badge`, `Button`, `Avatar` |

> Cosmetic recreation for design reference; data is hard-coded. The live debtrespro.com is a marketing site — this portal is a plausible product surface built in the brand's system.
