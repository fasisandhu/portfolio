"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Rail() {
  const [active, setActive] = useState(nav[0].id);

  useEffect(() => {
    const targets = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Mobile: a thin sticky bar. The one action a recruiter needs stays on screen. */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md lg:hidden">
        <div className="shell flex h-14 items-center justify-between">
          <a href="#top" className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
            <span className="label mt-0.5">{profile.role}</span>
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost h-9 px-3.5 text-[0.8125rem]">
            Email
          </a>
        </div>
      </header>

      {/* Desktop: a fixed instrument rail. */}
      <nav
        aria-label="Sections"
        className="fixed inset-y-0 left-0 z-50 hidden w-(--rail) flex-col justify-between border-r border-line px-7 py-8 lg:flex"
      >
        <a href="#top" className="block">
          <span className="block text-[0.9375rem] font-semibold leading-tight tracking-tight">
            {profile.name}
          </span>
          <span className="label mt-1.5 block leading-relaxed">{profile.role}</span>
        </a>

        <ul className="-ml-7 flex flex-col gap-px">
          {nav.map((item) => {
            const on = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={on ? "true" : undefined}
                  className="group flex items-center gap-3 py-2 pl-7"
                >
                  <span
                    aria-hidden="true"
                    className={`h-px transition-all duration-300 ${
                      on ? "w-4 bg-accent" : "w-2 bg-line-strong group-hover:w-4 group-hover:bg-muted"
                    }`}
                  />
                  <span
                    className={`label transition-colors ${
                      on ? "text-text" : "group-hover:text-muted"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <RailIcon href={profile.github} label="GitHub">
            <GitHubIcon className="h-4 w-4" />
          </RailIcon>
          <RailIcon href={profile.linkedin} label="LinkedIn">
            <LinkedInIcon className="h-4 w-4" />
          </RailIcon>
          <RailIcon href={`mailto:${profile.email}`} label="Email">
            <MailIcon className="h-4 w-4" />
          </RailIcon>
        </div>
      </nav>
    </>
  );
}

function RailIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-8 w-8 place-items-center rounded-md text-dim transition-colors hover:bg-inset hover:text-accent"
    >
      {children}
    </a>
  );
}
