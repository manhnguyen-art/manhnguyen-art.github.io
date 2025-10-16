# Jekyll Bilingual Starter (VI/EN)

A minimal GitHub Pages–compatible Jekyll site with two languages:

- `/vi/` and `/vi/archive/` (collection `vi`)
- `/en/` and `/en/archive/` (collection `en`)
- Clean permalinks; language switch via `alt_url`

## Quick Start

1. Push this repo to GitHub.
2. In **Settings → Pages**, set:
   - Build: GitHub Actions (or Deploy from branch, if supported by your account)
3. (Optional) Set `url:` in `_config.yml` to your real domain.

### Local preview

```bash
gem install bundler jekyll
bundle exec jekyll serve
```

Open http://localhost:4000
