# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: recruiters, sourcers and hiring managers screening for remote AI/ML, backend
and full-stack roles.** They are skimming, comparing many candidates, and deciding within
seconds whether to keep reading. Often on mobile, often mid-triage with many tabs open.

They arrive two ways, and both matter:

- **Sent the link** — pasted into an application form, LinkedIn's website field, or an
  email. The reader already knows the name; the link preview card is frequently seen
  before the page itself.
- **Cold search** — finding the site by searching "Muhammad Faseeh". Confirmed as a real
  goal, not just a side effect, which means indexable content has to earn its place
  without diluting the first impression.

## Product Purpose

A personal portfolio for Muhammad Faseeh, an AI/ML and backend engineer looking for remote
work. It exists to convert a recruiter's very short attention into a reply: establish
credibility in roughly ten seconds, and put working software one click away.

Success is a recruiter emailing about a remote role. Not time on page, not scroll depth.

## Positioning

Three deployed applications a stranger can open and sign into right now, with working
credentials published on the page. Most engineering portfolios show screenshots of dead
links and private repositories; this one hands the reader the keys.

Behind that: LLM work that reached production at named companies — document processing at
Valutico used by 200+ advisory and audit firms, and an insight-extraction platform for a
U.S. health insurer via Digitalytics. The distinction the site claims is production over
prototype, so every claim on it must be verifiable by clicking.

## Operating Context

- The link preview card (LinkedIn, Slack, email unfurl) is often the true first
  impression, seen before the page loads.
- A recruiter who clicks a demo must get inside without signing up or being emailed a
  code. This is why demo credentials are published rather than hidden.
- Remote-hiring logistics are part of the evaluation: where he is, and which working hours
  he overlaps. Lahore, Pakistan; EU and US overlap.
- Content is maintained by one person editing a file directly. There is no CMS, no admin
  UI, and no second editor.
- Live demos are hosted on free tiers and can cold-start slowly; a reader may meet a
  loading screen before the app.

## Capabilities and Constraints

- Single page with anchor navigation. Statically generated, no backend, no database, no
  CMS. Next.js App Router + Tailwind on Vercel, served at `muhammadfaseeh.vercel.app`.
- All editable content lives in `content.ts`; site title, description and canonical origin
  in `lib/site.ts`. The origin resolves from `VERCEL_PROJECT_PRODUCTION_URL`, overridable
  with `NEXT_PUBLIC_SITE_URL`.
- **Floor: Lighthouse ≥90 performance and accessibility.** Currently 99/100/100/100 on
  desktop.
- SEO is required, not optional: title, meta description, Open Graph and Twitter cards,
  favicon, `sitemap.xml`, `robots.txt`, and JSON-LD `Person` schema.
- **Every outbound link must resolve for a logged-out visitor.** A 404 on a GitHub or
  demo link costs more credibility than the link earns.
- **`github.com/fasisandhu/recruiter_ai_backend` (underscored) must never be made public
  or linked** — live AWS, Groq, database and Google service-account credentials sit in its
  git history, including on permanent PR refs. The scrubbed public replacement is
  `fasisandhu/recruiter-ai-backend` (hyphenated); link only that one.
- Planned next: writing or technical notes. This is also how the cold-search goal gets
  served — one page ranks for very little. (The résumé download shipped 2026-09-14.)
- Per-project case-study pages are **not** planned. The original brief parked them, and
  they were not chosen as a real next step; do not propose them as the obvious move.

## Brand Commitments

- Name **Muhammad Faseeh**, role label **AI/ML & Backend Engineer**.
- Headline, chosen by the user over alternatives: *"Most LLM projects stall at the demo. I
  build the ones that reach production."*
- Contact: `fasseeh111@gmail.com` · `github.com/fasisandhu` ·
  `linkedin.com/in/faseeh-sandhu`.
- Voice is plain, factual and first person. No marketing padding, no chatty captions.
- Naming Valutico (via Redmath) as the current employer is approved for public display.
- Binding visual constraint volunteered by the user: no status-pill badges, pulsing status
  dots, or bordered key/value stat cards — they read as generated template furniture.

## Evidence on Hand

Real and verifiable:

- Three deployed applications, with screenshots in `public/shots/` captured while signed
  in, so the cards show working dashboards rather than login walls.
- Demo credentials, intentionally public: FlowLeadz `admin@e2e.test` / `Passw0rd!Test123`;
  FitSync `user` / `admin123`.
- Public source: `fasisandhu/flowleadz`, `fasisandhu/FitSync`,
  `fasisandhu/recruiter-ai-backend`, `raffayyy/Recruiter-AI`.
- Four Anthropic certificates, each with an official Skilljar verification URL.
- Outcome figures quoted from his CV: 200+ advisory and audit firms, 70% less manual
  valuation analysis, 80% extraction accuracy, 90% less manual review, ~100 staff-hours
  saved weekly, 100+ queries/week.
- Two résumés, both one page, LaTeX-generated, supplied 2026-09-14 and served from
  `public/resume/`: `muhammad-faseeh-ai-engineer.pdf` and
  `muhammad-faseeh-software-engineer.pdf`. **The AI Engineer version is the default** —
  it is what the hero action opens and what the list leads with. Both link back to
  `muhammadfaseeh.vercel.app`, so replacing the site's domain means reissuing them.
- Both résumés carry the user's phone number, `+92 349 4012973`, and hosting them
  publicly exposes it to crawlers and scrapers. The user was told before publication.
  Do not add the number to the page itself; email is the stated contact route.

Absent — future work must not fabricate these:

- No photograph of the user.
- No testimonials, references, or recommendation quotes. He confirmed he has none to
  quote.
- No client logos, press coverage, awards, pricing, or download/traffic/user metrics.

## Product Principles

1. **Proof over description.** Every claim should be something the reader can click and
   verify for themselves. A sentence that cannot be checked is weaker than a link.
2. **Assume they never scroll.** The first screen and the link preview card carry the
   whole offer; everything below is for the reader already convinced enough to continue.
3. **Absent evidence stays absent.** Never invent a quote, a logo, a metric or a face to
   fill a layout. Redesign the layout instead.
4. **Serve the sent link and the cold search at once.** Indexable depth is a real goal,
   but it may not blunt the first impression for the reader who was handed the URL.
5. **One person, one file.** Content must stay editable by hand without a build-time
   toolchain or a second system to learn.

## Accessibility & Inclusion

Lighthouse accessibility ≥90 is a hard floor; the site currently scores 100 and should not
regress. Keyboard reachability with visible focus, and honoring `prefers-reduced-motion`,
are already committed in the implementation. No further product-specific accessibility
requirement has been established.
