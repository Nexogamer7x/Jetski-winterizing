# Smoky Mountain Jetski Winterizing — Website

A single-page static website for a jetski/PWC winterizing business based in Knoxville, TN.

## Structure

- `index.html` — page content (hero, services, pricing, service area, contact form)
- `css/style.css` — all styling
- `js/script.js` — mobile nav toggle + contact form (opens the visitor's email client, since there's no backend)

## Before you launch

Search the files for these placeholders and swap in your real info:

- Business name — currently "Smoky Mountain Jetski Winterizing" (`index.html`, `css`/`js` reference it too)
- Phone number — `(865) 555-1234`
- Email — `info@smokymountainjetski.com`
- Service area towns listed under "Service Area" — adjust to match how far you actually travel

## Running locally

No build step needed — it's plain HTML/CSS/JS. Open `index.html` directly in a browser, or serve it locally:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, etc.) — just upload the three files/folders as-is.
