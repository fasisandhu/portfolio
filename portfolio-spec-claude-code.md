# Portfolio Site — Build Spec for Claude Code

Build and deploy a personal portfolio website for **Muhammad Faseeh**, an AI/ML & Backend Engineer. The primary audience is **recruiters and hiring managers for remote roles** — the site must communicate credibility within 10 seconds and make live projects one click away.

## Stack & constraints

- **Next.js 14+ (App Router) + Tailwind CSS**, deployed on **Vercel**
- Single-page layout with anchor navigation (Hero → Projects → Experience → Skills → Contact). A separate page per project is NOT needed for v1.
- Static generation (no backend, no CMS). All content lives in a single `content.ts`/`data` file so it's easy to edit later.
- Fully responsive, dark theme by default (dev-audience appropriate), light-mode toggle optional.
- Fast: Lighthouse 90+ on performance and accessibility. No heavy animation libraries; subtle CSS transitions only.
- SEO: proper `<title>`, meta description, Open Graph + Twitter card tags, favicon, `sitemap.xml`, `robots.txt`.
  - Title: `Muhammad Faseeh — AI/ML & Backend Engineer`
  - Description: `Software engineer building production LLM systems and backend services. Python, FastAPI, LangGraph, RAG. Open to remote roles.`

## Design direction

- Clean, minimal, engineering-credible. Think Linear/Vercel aesthetic, not agency flash.
- One accent color used sparingly (suggest a teal or electric blue on near-black).
- Monospace accents for tech tags; readable sans-serif for body.
- Every project card must have: screenshot, one-line summary, tech tags, **Live Demo** button, **GitHub** button, and demo credentials where applicable.
- Include a subtle "Open to remote roles" badge/pill in the hero.

## Content (use verbatim, do not invent facts)

### Hero
- Name: **Muhammad Faseeh**
- Title: **AI/ML & Backend Engineer**
- Tagline: *I build production LLM systems and backend services that companies run their business on.*
- Sub-line: 2+ years across finance, healthcare, and infrastructure. Currently shipping document-intelligence features at Valutico (Vienna, remote). Open to remote AI/ML, backend, and full-stack roles.
- CTAs: **View Projects** (anchor), **Email Me** (mailto:fasseeh111@gmail.com)
- Links (icons): GitHub → https://github.com/fasisandhu · LinkedIn → https://www.linkedin.com/in/faseeh-sandhu · Email → fasseeh111@gmail.com

### Projects (in this order)

**1. Recruiter.AI — AI Interview & Hiring Platform**
- End-to-end AI hiring platform: LLM résumé-to-job match scoring, a real-time voice interview agent (WebSocket STT/TTS) that generates résumé-tailored questions, browser-based AI proctoring with facial detection, and automated candidate evaluation. Recruiter and candidate portals for job management and interview scheduling.
- Tech: React, FastAPI, PostgreSQL, LLaMA, WebSockets
- Live: https://recruiter-ai-ecru.vercel.app
- GitHub: link the matching repo from github.com/fasisandhu (ask me if ambiguous)

**2. FlowLeadz — Multi-Role Marketing-Agency CRM**
- Multi-role CRM: clients submit work requests, admins triage into projects and tasks, employees log time and post daily updates — with real-time SSE notifications and role-based access.
- Tech: Next.js 15, PostgreSQL/Drizzle, Better Auth, Server-Sent Events
- Live: https://flowleadz.vercel.app
- Demo login (show on card): `admin@e2e.test` / `Passw0rd!Test123`
- GitHub: matching repo from github.com/fasisandhu

**3. FitSync — Gym Management Portal**
- Full-stack gym-management portal: members, trainers, subscription & payment tracking, attendance, live analytics dashboard.
- Tech: Django REST Framework (JWT), React/TypeScript, PostgreSQL
- Live: https://fitsync-drab.vercel.app
- Demo login (show on card): `user` / `admin123`
- GitHub: matching repo from github.com/fasisandhu

Screenshots: take real screenshots of each deployed app (I can provide them, or capture via headless browser/Playwright during build). Do not use placeholder stock images.

### Experience (condensed cards)

**Valutico (via Redmath)** — Associate Software Engineer · Jul 2025–Present · Vienna, Austria (Remote)
- Python backend services and REST APIs for financial valuation products used by 200+ advisory and audit firms
- LLM-powered document processing cutting manual valuation analysis time by 70%

**Digitalytics** — Full Stack Engineer (AI/ML) · Mar 2024–Jun 2025 · Remote
- LLM platform for a U.S. health insurer: structured insight extraction from care-coordinator conversations (80% extraction accuracy, 90% less manual review) via OpenAI APIs, vector embeddings, semantic retrieval
- ML-based pipeline leak-detection system deployed across two districts in Oman
- Custom CRM/business portals for 5+ clients (~100 staff-hours saved weekly)

**Programmers Force** — Part-Time Associate Software Engineer · Aug 2024–Dec 2024 · Lahore
- LangGraph ClickUp chatbot for natural-language task management
- Text-to-SQL chatbot handling 100+ queries/week
- OpenAI-powered web-scraping pipeline (site → structured JSON)

### Education & Certs
- BS Computer Science, FAST-NUCES Lahore, 2021–2025 — CGPA 3.71, Dean's List all 8 semesters

### Certifications (own subsection, compact card/badge grid — not a wall of text)
Render as small badge-style cards: name, issuer, year. Each card links to its verification URL (open in new tab). Do NOT invent certifications — use exactly this list, in this order:

1. Claude Code in Action — Anthropic, 2026 → https://verify.skilljar.com/c/z4poh7anyxo9
2. Building with the Claude API — Anthropic, 2026 → https://verify.skilljar.com/c/jwvcfz6to6qe
3. Introduction to Model Context Protocol — Anthropic, 2026 → https://verify.skilljar.com/c/ccbpf8beyeqn
4. Introduction to agent skills — Anthropic, 2026 → https://verify.skilljar.com/c/dedwhv23x8xt

Add a small "Verified ✓" affordance on each card since the links are official Skilljar verification pages.
Below the grid, one small link: "All certifications →" pointing to https://www.linkedin.com/in/faseeh-sandhu/details/certifications/
(The remaining IBM/Google intro certificates are deliberately omitted from the portfolio — do not add them.)

### Skills (grouped)
- **Languages:** Python, SQL, JavaScript/TypeScript, C/C++
- **AI/ML:** LLMs, LangGraph, RAG, vector databases (Qdrant), OpenAI/Azure OpenAI, TensorFlow, PyTorch, STT/TTS
- **Backend:** FastAPI, Django REST, NodeJS/NestJS, REST APIs, WebSockets/SSE
- **Frontend:** React, Next.js
- **Infra:** Docker, AWS, PostgreSQL, MongoDB

### Contact / footer
- "Hiring for a remote AI/ML or backend role? Let's talk." → mailto button
- GitHub, LinkedIn icons. Location line: "Lahore, Pakistan · working across EU/US timezones"

## Deployment

1. Init repo, build, verify locally.
2. Push to a new GitHub repo `portfolio` under fasisandhu.
3. Deploy to Vercel (I'll authenticate when prompted).
4. Output the live URL when done.

## Definition of done

- Deployed and reachable on a vercel.app URL
- All three live-demo links and demo credentials present and correct
- Real screenshots, no placeholders
- Lighthouse ≥90 performance & accessibility
- OG image renders correctly when the URL is pasted into LinkedIn