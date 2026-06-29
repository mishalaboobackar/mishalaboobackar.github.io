# Mishal Aboobackar — Portfolio (redesigned)

A creative, multi-page static portfolio. No build step, no framework. Just open `index.html`.

## Pages
- `index.html` — Home / About, animated stats, what I bring
- `projects.html` — 4 case studies + a **live mini-dashboard** built from the real restaurant-analytics data (Chart.js)
- `experience.html` — career timeline (incl. digital-marketing work), skills, education, certifications, languages
- `impact.html` — CSR (Women Power), testimonials slots, international engagement
- `contact.html` — contact details
- `styles.css`, `main.js` — shared design system and behavior
- `mishalcv.pdf` — CV download (currently your general resume; swap in whichever CV you prefer)

## Preview locally
Open `index.html` in any browser. (For the Chart.js dashboard and Google Fonts you just need an internet connection.)

## Deploy to GitHub Pages (replaces the old Quarto site)
Your user site repo is `mishalaboobackar.github.io`. To publish this version:

1. Copy all files in this folder into the root of that repo (replacing the old Quarto files).
2. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, branch `main`, folder `/ (root)`. (If a Quarto GitHub Action is configured, disable it so it doesn't overwrite these files.)
3. Commit and push:
   ```
   git add .
   git commit -m "Redesign portfolio: multi-page site with live dashboard"
   git push
   ```
4. Your site updates at https://mishalaboobackar.github.io in a minute or two.

Prefer to keep the old site live until you're happy? Push to a new repo first (e.g. `portfolio-v2`) and enable Pages there to preview.

## Images to add (drop these into the `images/` folder)
- `images/headshot.jpg` — your professional headshot. **This powers the interactive dot-portrait on the home page** (move your cursor over it and the dots scatter). Without it, the hero falls back to the "MA" monogram. Use a portrait-oriented photo; ~800px tall is plenty.
- `images/news18.jpg` — the News18 Anti-Drug speaking photo (for the Events gallery on Impact).
- `images/austrade.jpg` — already included (your Oman / Austrade expo photo).

The dot-portrait reads pixels from the image, so it needs to run from a web server. It works once deployed to GitHub Pages; if you open `index.html` straight from disk, some browsers block pixel reads and it will show the monogram instead (that's expected locally).

## Already wired
- **Testimonials**: 3 Instagram reels + the YouTube video for Women Power are embedded on `impact.html`.
- **Sharjah Book Fair**: linked to the Ahmedabad Mirror press article.

## To finish / personalize
- **GPA**: set to **3.4** to match your resume. If your transcript says 3.5, update `index.html` and `experience.html`.
- **CV**: replace `mishalcv.pdf` with your preferred CV file (keep the same name).
