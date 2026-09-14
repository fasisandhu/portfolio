"use client";

import { useEffect, useState } from "react";
import { nav, profile, resumes } from "@/content";

/**
 * Stays out of the way until the hero is behind you, then carries the two
 * actions a recruiter wants. Replaces the fixed side rail, which was the most
 * recognisably cloned element on the page.
 */
export default function TopBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("top");
    if (!sentinel) return;

    const io = new IntersectionObserver(
      ([entry]) => setShown(!entry.isIntersecting),
      { rootMargin: "-120px 0px 0px 0px" },
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        shown
          ? "translate-y-0 border-line bg-bg/90 opacity-100 backdrop-blur-md"
          : "-translate-y-full border-transparent opacity-0"
      }`}
      aria-hidden={!shown}
    >
      <div className="shell flex h-14 items-center justify-between gap-6">
        <a
          href="#top"
          className="shrink-0 text-sm font-semibold tracking-tight"
          tabIndex={shown ? undefined : -1}
        >
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.slice(1).map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  tabIndex={shown ? undefined : -1}
                  className="text-[0.8125rem] text-dim transition-colors hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={resumes[0].file}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={shown ? undefined : -1}
            className="hidden text-[0.8125rem] text-dim transition-colors hover:text-text sm:block"
          >
            Résumé
          </a>
          <a
            href={`mailto:${profile.email}`}
            tabIndex={shown ? undefined : -1}
            className="btn btn-primary h-9 min-h-0 px-3.5 text-[0.8125rem]"
          >
            Email me
          </a>
        </div>
      </div>
    </header>
  );
}
