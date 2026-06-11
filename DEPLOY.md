# Deploy to GitHub Pages

This prototype is fully static — no build step. GitHub Pages serves it as-is.

## One-time setup

1. **Create a new repo on GitHub**
   - Go to https://github.com/new
   - Name it something like `debtrespro-affiliate-prototype`
   - **Public** (required for free GitHub Pages — private needs Pro)
   - Don't initialize with a README; we already have files here.

2. **Push this folder to that repo** — from the design system root:

   ```bash
   cd /Users/myorra/debt-resolve-pro-design
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Repo → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **`main`** / folder: **`/ (root)`**
   - Save. Wait ~1 minute.

4. **Open the site**

   `https://<your-username>.github.io/<your-repo>/`

   The root `index.html` auto-redirects to the affiliate homepage.

## Direct links (for sharing)

After deployment:

- Homepage:           `…/ui_kits/affiliate_portal/homepage.html`
- Become an Affiliate: `…/ui_kits/affiliate_portal/become-affiliate.html`
- Apply:              `…/ui_kits/affiliate_portal/apply.html`
- Affiliate Sign In:  `…/ui_kits/affiliate_portal/signin.html`
- Portal Dashboard:   `…/ui_kits/affiliate_portal/index.html`

## Custom domain (optional)

To serve at `affiliates-preview.debtrespro.com` (or similar):

1. Add a `CNAME` file at the repo root containing only your subdomain.
2. In your DNS provider, add a CNAME record pointing your subdomain at
   `<your-username>.github.io`.
3. Repo → Settings → Pages → set custom domain + enable "Enforce HTTPS".

## Re-deploying after edits

Any push to `main` re-deploys automatically:

```bash
git add -A
git commit -m "update"
git push
```
