# ErgoNest

**Build a workspace that works better for you.**

ErgoNest is a static, mobile-first informational website about home office
ergonomics — desk setup, posture, monitor positioning, input devices,
lighting, cable management and workspace planning.

Designed to launch at **$0** (Blogger/Blogspot friendly, no build step,
no paid hosting required) and to scale later into an affiliate resource.

---

## 1. Project structure

- `build_ergonest.py` — static site generator
- `ergonest/` — generated output directory
- `ergonest/assets/css/style.css` — complete stylesheet
- `ergonest/assets/js/main.js` — interactive behaviors
- `ergonest/assets/img/` — SVG placeholders and social preview assets
- `ergonest/*.html` — generated pages

## 2. Local preview

```bash
python build_ergonest.py
python -m http.server 8000 --directory ergonest
```

Then open `http://localhost:8000` in a browser.

## 3. Deploy

Upload the contents of the `ergonest/` directory to any static host such as GitHub Pages, Netlify, Cloudflare Pages or a plain web server.
