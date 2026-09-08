# Portfolio — Muhammad Faseeh

Single-page portfolio for an AI/ML & backend engineer. Next.js App Router, Tailwind v4,
statically generated, deployed on Vercel.

## Edit the content

Everything you'd want to change lives in two files:

- `content.ts` — profile, hero copy, projects, experience, education, certifications, skills, nav
- `lib/site.ts` — page title, meta description, canonical origin

No CMS and no database. Change a string, push, done.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Project screenshots

`public/shots/*.png` are real captures of the three deployed apps, taken at 1440px wide —
FlowLeadz and FitSync are captured signed in with their public demo accounts, so the cards
show working dashboards rather than login screens. To refresh one, retake it at the same
width and overwrite the file.

## Notes

- The canonical origin resolves from `VERCEL_PROJECT_PRODUCTION_URL` at build time.
  Set `NEXT_PUBLIC_SITE_URL` to override it (custom domain, local testing).
- The Open Graph card is generated at build time by `app/opengraph-image.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Scroll reveals are driven by one `IntersectionObserver` in `components/RevealRoot.tsx`;
  any server component can opt in with `data-reveal`.
