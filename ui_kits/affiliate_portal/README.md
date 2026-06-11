# DebtResolvePro — Affiliate Portal (clickable prototype)

High-fidelity, click-through prototype of the DebtResolvePro affiliate program:
homepage entry point → explainer page → sign-in → logged-in affiliate portal.

The portal screens mirror the architecture in the **Affiliate Portal Integration
Architecture** doc — WordPress frontend, Zoho CRM backend, lead → contract →
sold-client lifecycle.

## File map

| File | Screen |
| --- | --- |
| `homepage.html` | Public marketing homepage with "Become an Affiliate" nav link + top ribbon |
| `become-affiliate.html` | Explainer page for the affiliate program |
| `signin.html` | Sign-in for `affiliates.debtrespro.com` |
| `index.html` | Logged-in portal SPA (Dashboard default) |

`Portal.jsx` is one component with internal nav state. The six portal screens:
**Dashboard**, **Submit a Lead**, **My Leads**, **Contracts**, **Sold Clients**,
**Profile** — selectable from the navy sidebar.

## Run it locally

This kit is static HTML — no build step. **Run the server from the design
system root** (one level above `ui_kits/`) so that the shared bundle, tokens,
and assets resolve correctly:

```bash
cd /Users/myorra/debt-resolve-pro-design
python3 -m http.server 5174
```

Then open: **http://localhost:5174/ui_kits/affiliate_portal/homepage.html**

(Port 5174 was chosen because port 4173 is in use by another local app.)

## Suggested demo flow

1. `homepage.html` — show the new green ribbon + "Become an Affiliate" nav link
2. Click **Become an Affiliate** → `become-affiliate.html`
3. Click **Affiliate Sign In** (top right) → `signin.html`
4. Click **Sign in to Affiliate Portal** → `index.html` (Dashboard)
5. From the sidebar, walk through: Dashboard → Submit a Lead → My Leads (filter chips, search) → Contracts → Sold Clients → Profile

## What's mocked vs. wired

This is a **visual prototype**. All data is hardcoded in `Portal.jsx` (mock
leads, contracts, sold clients). Form submissions don't persist. Sign-in always
succeeds. Production integration with Zoho CRM (REST API for read/write loops,
Zoho Sign webhooks, Lead → Contact conversion) is out of scope here.
