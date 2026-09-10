export const profile = {
  name: "Muhammad Faseeh",
  role: "AI/ML & Backend Engineer",
  tagline:
    "I build production LLM systems and backend services that companies run their business on.",
  subline:
    "2+ years across finance, healthcare, and infrastructure. Currently shipping document-intelligence features at Valutico (Vienna, remote). Open to remote AI/ML, backend, and full-stack roles.",
  badge: "Open to remote roles",
  email: "fasseeh111@gmail.com",
  github: "https://github.com/fasisandhu",
  linkedin: "https://www.linkedin.com/in/faseeh-sandhu",
  location: "Lahore, Pakistan · working across EU/US timezones",
  contactLine: "Hiring for a remote AI/ML or backend role? Let's talk.",
};

/** Right-hand hero panel. Facts only — every row is stated elsewhere on the page. */
export const glance: { key: string; value: string; accent?: boolean }[] = [
  { key: "role", value: "AI/ML & Backend Engineer" },
  { key: "now", value: "Valutico · Vienna (remote)" },
  { key: "based", value: "Lahore, Pakistan" },
  { key: "hours", value: "EU + US overlap" },
  { key: "core", value: "Python · FastAPI · LLMs" },
  { key: "demos", value: "3 live, logins included", accent: true },
];

export type Repo = { label: string; url: string };

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  domain: string;
  summary: string;
  tech: string[];
  live: string;
  host: string;
  repos: Repo[];
  demo?: { user: string; pass: string };
  shot: string;
  shotAlt: string;
};

export const projects: Project[] = [
  {
    slug: "recruiter-ai",
    name: "Recruiter.AI",
    kicker: "AI Interview & Hiring Platform",
    domain: "hiring · llm + realtime voice",
    summary:
      "End-to-end AI hiring platform: LLM résumé-to-job match scoring, a real-time voice interview agent (WebSocket STT/TTS) that generates résumé-tailored questions, browser-based AI proctoring with facial detection, and automated candidate evaluation. Recruiter and candidate portals for job management and interview scheduling.",
    tech: ["React", "FastAPI", "PostgreSQL", "LLaMA", "WebSockets"],
    live: "https://recruiter-ai-ecru.vercel.app",
    host: "recruiter-ai-ecru.vercel.app",
    repos: [
      { label: "Frontend", url: "https://github.com/raffayyy/Recruiter-AI" },
      { label: "Backend", url: "https://github.com/fasisandhu/recruiter-ai-backend" },
    ],
    shot: "/shots/recruiter-ai.png",
    shotAlt:
      "Recruiter.AI landing page with an AI-powered recruitment hero and platform stats",
  },
  {
    slug: "flowleadz",
    name: "FlowLeadz",
    kicker: "Multi-Role Marketing-Agency CRM",
    domain: "agency ops · multi-role crm",
    summary:
      "Multi-role CRM: clients submit work requests, admins triage into projects and tasks, employees log time and post daily updates — with real-time SSE notifications and role-based access.",
    tech: ["Next.js 15", "PostgreSQL/Drizzle", "Better Auth", "Server-Sent Events"],
    live: "https://flowleadz.vercel.app",
    host: "flowleadz.vercel.app",
    repos: [{ label: "GitHub", url: "https://github.com/fasisandhu/flowleadz" }],
    demo: { user: "admin@e2e.test", pass: "Passw0rd!Test123" },
    shot: "/shots/flowleadz.png",
    shotAlt:
      "FlowLeadz admin dashboard showing pending requests, active projects, recent activity and a review queue",
  },
  {
    slug: "fitsync",
    name: "FitSync",
    kicker: "Gym Management Portal",
    domain: "fitness ops · full-stack portal",
    summary:
      "Full-stack gym-management portal: members, trainers, subscription & payment tracking, attendance, live analytics dashboard.",
    tech: ["Django REST Framework (JWT)", "React/TypeScript", "PostgreSQL"],
    live: "https://fitsync-drab.vercel.app",
    host: "fitsync-drab.vercel.app",
    repos: [{ label: "GitHub", url: "https://github.com/fasisandhu/FitSync" }],
    demo: { user: "user", pass: "admin123" },
    shot: "/shots/fitsync.png",
    shotAlt:
      "FitSync analytics dashboard with member counts, attendance trend and a peak-hours chart",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  place: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Valutico (via Redmath)",
    title: "Associate Software Engineer",
    period: "Jul 2025 — Present",
    place: "Vienna, Austria (Remote)",
    current: true,
    points: [
      "Python backend services and REST APIs for financial valuation products used by 200+ advisory and audit firms",
      "LLM-powered document processing cutting manual valuation analysis time by 70%",
    ],
  },
  {
    company: "Digitalytics",
    title: "Full Stack Engineer (AI/ML)",
    period: "Mar 2024 — Jun 2025",
    place: "Remote",
    points: [
      "LLM platform for a U.S. health insurer: structured insight extraction from care-coordinator conversations (80% extraction accuracy, 90% less manual review) via OpenAI APIs, vector embeddings, semantic retrieval",
      "ML-based pipeline leak-detection system deployed across two districts in Oman",
      "Custom CRM/business portals for 5+ clients (~100 staff-hours saved weekly)",
    ],
  },
  {
    company: "Programmers Force",
    title: "Part-Time Associate Software Engineer",
    period: "Aug 2024 — Dec 2024",
    place: "Lahore",
    points: [
      "LangGraph ClickUp chatbot for natural-language task management",
      "Text-to-SQL chatbot handling 100+ queries/week",
      "OpenAI-powered web-scraping pipeline (site → structured JSON)",
    ],
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "FAST-NUCES Lahore",
  period: "2021 — 2025",
  detail: "CGPA 3.71 · Dean's List all 8 semesters",
};

export const certifications = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
    url: "https://verify.skilljar.com/c/z4poh7anyxo9",
  },
  {
    name: "Building with the Claude API",
    issuer: "Anthropic",
    year: "2026",
    url: "https://verify.skilljar.com/c/jwvcfz6to6qe",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    year: "2026",
    url: "https://verify.skilljar.com/c/ccbpf8beyeqn",
  },
  {
    name: "Introduction to agent skills",
    issuer: "Anthropic",
    year: "2026",
    url: "https://verify.skilljar.com/c/dedwhv23x8xt",
  },
];

export const allCertificationsUrl =
  "https://www.linkedin.com/in/faseeh-sandhu/details/certifications/";

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "JavaScript/TypeScript", "C/C++"] },
  {
    group: "AI/ML",
    items: [
      "LLMs",
      "LangGraph",
      "RAG",
      "Vector databases (Qdrant)",
      "OpenAI/Azure OpenAI",
      "TensorFlow",
      "PyTorch",
      "STT/TTS",
    ],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Django REST", "NodeJS/NestJS", "REST APIs", "WebSockets/SSE"],
  },
  { group: "Frontend", items: ["React", "Next.js"] },
  { group: "Infra", items: ["Docker", "AWS", "PostgreSQL", "MongoDB"] },
];

export const nav = [
  { id: "top", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "background", label: "Background" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
