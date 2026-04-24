# brushandbroomllp.com — Redirect Repository

This repository serves **redirect stubs only**. It is hosted at `brushandbroomllp.com` via GitHub Pages and exists solely to forward legacy traffic to the primary site at **[brushnbroom.com](https://brushnbroom.com)**.

> **Do not add real content here.** All website content lives in [`bnbllp/brushnbroom`](https://github.com/bnbllp/brushnbroom).

## How It Works

Each HTML file performs an instant `meta http-equiv="refresh"` redirect to the matching page on `brushnbroom.com`, and includes a `<link rel="canonical">` tag so Google treats `brushnbroom.com` as the authoritative URL. This prevents duplicate content and passes any link equity to the primary domain.

## File Structure

```
brush andbroomllp.com/
├── index.html                                                   # → https://brushnbroom.com/
├── about.html                                                   # → https://brushnbroom.com/about.html
├── areas-we-serve.html                                          # → https://brushnbroom.com/areas-we-serve.html
├── move-in-move-out-bellevue-seattle.html                       # → https://brushnbroom.com/move-in-move-out-bellevue-seattle.html
├── routine-deep-maintenance-cleaning-bellevue-seattle.html      # → https://brushnbroom.com/routine-deep-maintenance-cleaning-bellevue-seattle.html
├── interior-exterior-house-painting-bellevue-seattle.html       # → https://brushnbroom.com/ (no equivalent page)
├── thank-you.html                                               # → https://brushnbroom.com/thank-you.html
├── sitemap.xml                                                  # References brushnbroom.com URLs
├── robots.txt                                                   # Points to brushnbroom.com/sitemap.xml
├── CNAME                                                        # Custom domain: brushandbroomllp.com
└── README.md                                                    # This file
```

## Redirect Template

Each stub follows this pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=https://brushnbroom.com/page.html">
  <link rel="canonical" href="https://brushnbroom.com/page.html">
</head>
<body>
  <p>This page has moved to <a href="https://brushnbroom.com/page.html">brushnbroom.com</a>.</p>
</body>
</html>
```

## Adding a New Redirect

1. Create a new `.html` file matching the old URL slug
2. Use the template above, updating the destination URL
3. Add the destination URL (on `brushnbroom.com`) to `sitemap.xml` if not already present

## Primary Repository

All real content, styling, and development happens in:
**[github.com/bnbllp/brushnbroom](https://github.com/bnbllp/brushnbroom)**

---

**Last Updated**: April 24, 2026
