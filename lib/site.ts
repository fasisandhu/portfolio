/**
 * Canonical origin. On Vercel this resolves to the project's production domain
 * at build time, so canonical/OG/sitemap URLs are correct without hardcoding.
 * Override locally with NEXT_PUBLIC_SITE_URL.
 */
function origin() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const site = {
  url: origin(),
  title: "Muhammad Faseeh — AI/ML & Backend Engineer",
  description:
    "Software engineer building production LLM systems and backend services. Python, FastAPI, LangGraph, RAG. Open to remote roles.",
};
