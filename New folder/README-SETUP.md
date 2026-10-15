# AUREVIA Website — Setup Guide

This is a static, responsive website for the AUREVIA digital brand. It includes:
- Home / hero section
- Projects portfolio
- Services
- About / founder section
- Digital portal links
- Contact form that opens the visitor's email app
- Mobile navigation and responsive styling

## Files
- `index.html` — page structure/content
- `styles.css` — dark premium black/emerald glass-style design
- `script.js` — mobile navigation and contact form behaviour
- `assets/favicon.svg` — AUREVIA favicon

## Before publishing
1. Open `script.js`.
2. Replace `REPLACE_WITH_YOUR_SUPPORT_EMAIL@example.com` with the official AUREVIA support email.
3. Verify the GHARMARA report URL in `index.html` is still the correct deployed URL.
4. Add the official Google Play Store URL when available. Do not leave a Play Store button pointing to a placeholder.
5. Check founder name, project names and descriptions for accuracy.

## Preview locally
Open `index.html` in a browser. For best results, use a simple local static server or the hosting provider's preview.

## Publish free with GitHub Pages
1. Create/sign in to GitHub.
2. Create a new public repository, for example `aurevia-website`.
3. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)`, then Save.
7. Wait for GitHub Pages to publish. Your free address will look like:
   `https://YOUR-GITHUB-USERNAME.github.io/aurevia-website/`
8. Test the site on mobile and desktop.

## Important notes
- This is a public marketing/portfolio site, not a secure login system.
- The contact form uses `mailto:`. It does not store or send messages through a backend.
- Do not put API keys, passwords, Google ID tokens, private member data or admin credentials in these public files.
- A secure login portal needs a server-side backend and access-control rules; static hosting alone cannot securely authenticate users or protect private data.
- Google Fonts is loaded from Google Fonts when internet access is available. The site remains usable without it, using fallback fonts.
