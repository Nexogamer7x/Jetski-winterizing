# 865 Winterizing — Website

A single-page static website for a jetski/PWC winterizing business based in Knoxville, TN.

## Structure

- `index.html` — page content (hero, services, pricing, service area, contact form)
- `css/style.css` — all styling
- `js/script.js` — mobile nav toggle + contact form (opens the visitor's email client, since there's no backend)

## Contact info on the site

- Business name: 865 Winterizing
- Phone: `(865) 599-2282`
- Email: `eb016381@gmail.com`
- Service area towns listed under "Service Area" — adjust to match how far you actually travel

## Running locally

No build step needed — it's plain HTML/CSS/JS. Open `index.html` directly in a browser, or serve it locally:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, etc.) — just upload the three files/folders as-is.
