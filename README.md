# PyMedic Website (React + Vite)

Marketing website for **PyMedic**, clinic and hospital management software by VeriRight Management Solutions Pvt. Ltd.

## Run it on your computer

You need **Node.js 20.19+ or 22.12+** (download from nodejs.org).

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:5173
```

## Build for your server

```bash
npm run build    # creates the dist/ folder
npm run preview  # check the built site locally
```

Upload everything inside `dist/` to any static host (Vercel, Netlify, AWS S3 + CloudFront, Nginx, cPanel).

The site has several pages (`/features`, `/faq`, ...) handled in the browser, so the host must serve `index.html` for any path it does not recognise (often called "SPA fallback" or "rewrite all to index.html"). Without it, refreshing an inner page gives a 404.

## Where to change things

| What | File |
|---|---|
| All text, headings, FAQ, features | `src/content/site.js` |
| Demo video URL | `SITE_CONFIG.video` in `src/content/site.js` (YouTube, Vimeo or MP4) |
| Demo form destination | `SITE_CONFIG.formEndpoint` in `src/content/site.js` (receives JSON) |
| Colours, fonts, spacing | `:root` block at the top of `src/styles/global.css` |
| Logo files | `src/assets/brand/` |
| Page title, SEO, Open Graph | `index.html` |
| Favicon | `public/favicon.png` |

## Project structure

```
src/
  App.jsx                         routes (which URL shows which page) and redirects
  pages/                          one file per page: Home, Consultation, Features, ForPatients, ForYourTeam, DemoVideo, FaqPage, BookDemo
  content/site.js                 all copy, per-page SEO (titles, descriptions) and settings
  components/
    Layout.jsx                    navbar + page + footer, shared by every page
    Seo.jsx                       sets title, description, canonical, OG and breadcrumb schema per page
    PageHero.jsx                  inner-page hero with the page's H1
    Navbar.jsx                    sticky header + mobile menu
    Hero.jsx                      home hero + capability strip
    HomeSections.jsx              problem, connected journey, six modules, PyZap, billing, LeadFlow, data flow, outcomes
    TrustSections.jsx             multi-location architecture + data/access trust
    ConsultationWalkthrough.jsx   4-step interactive consultation
    FeatureBlocks.jsx             the 11 feature sections on /features
    RoleSections.jsx              the role sections on /for-your-team
    Compare.jsx / StepList.jsx    before-after table, numbered steps
    VideoSection.jsx              click-to-play demo video
    PatientExperience.jsx         WhatsApp phone view
    FaqList.jsx                   accordion + FAQPage schema helper
    DemoForm.jsx                  Book a Demo form with validation
    Footer.jsx                    closing CTA (copy passed per page) + footer
docs/website-strategy.md          positioning, keyword map, content matrix, audits
    Brand.jsx                     logo components
    Icon.jsx                      icon set
    ProductScreenshot.jsx         browser frame for screens
    mocks/Screens.jsx             sample product screens
  hooks.js                        tabs + reduced-motion helpers
  styles/global.css               design system and styles
```

## Replacing sample screens with real screenshots

Every product screen uses `<ProductScreenshot>`. Pass a `src` and it shows your image instead of the sample UI:

```jsx
<ProductScreenshot title="My OPD" src="/screens/opd.webp" alt="Doctor OPD dashboard" />
```

Put images in `public/screens/` (1600×1000, WebP or AVIF).

## Brand colours

| Use | Colour |
|---|---|
| Bright blue accents | `#0EA5F4` |
| Cyan highlights | `#1BD5FE` |
| Dark navy text | `#00003C` |
| Light blue background | `#F9FCFE` |
| White | `#FFFFFF` |

`#0369A8` is a deeper shade of the brand blue used only for small text, because `#0EA5F4` is too light to read at small sizes on white.

## Before launch

- Set the real domain in `SITE_CONFIG.domain`, `index.html`, `public/sitemap.xml` and `public/robots.txt`.
- Connect `formEndpoint` and add the demo video URL.
- Add `public/og/pymedic-og.png` (1200×630).
- Add Privacy Policy, Terms and Cookie Policy pages (footer links are placeholders).
- ABDM: fill in confirmed facts in `ABDM` (`src/content/site.js`) and set `enabled: true`. Nothing about ABDM is shown until then.
- The source document's numeric claims (perceived wait, minutes saved, surgery conversion) are deliberately not on the site. Add them only with marketing approval.
- Replace sample screens with real screenshots (see "Replacing sample screens").
