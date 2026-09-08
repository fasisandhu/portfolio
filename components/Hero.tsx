import { glance, profile } from "@/content";
import { ArrowRight, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="shell scroll-mt-24 pt-14 pb-16 md:pt-24 md:pb-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <div>
          <p className="rise pill" style={{ animationDelay: "40ms" }}>
            <span className="dot" />
            {profile.badge}
          </p>

          <h1
            className="rise mt-7 flex flex-wrap items-baseline gap-x-2.5 gap-y-1"
            style={{ animationDelay: "100ms" }}
          >
            <span className="mono text-[0.9375rem] font-medium tracking-tight text-text">
              {profile.name}
            </span>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            <span className="mono text-[0.9375rem] text-muted">{profile.role}</span>
          </h1>

          <p className="rise display mt-6" style={{ animationDelay: "160ms" }}>
            {profile.tagline}
          </p>

          <p
            className="rise mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted"
            style={{ animationDelay: "220ms" }}
          >
            {profile.subline}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "280ms" }}>
            <a href="#work" className="btn btn-primary">
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              <MailIcon className="h-4 w-4" />
              Email me
            </a>
          </div>

          <ul
            className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ animationDelay: "340ms" }}
          >
            <HeroLink href={profile.github} icon={<GitHubIcon className="h-4 w-4" />}>
              GitHub
            </HeroLink>
            <HeroLink href={profile.linkedin} icon={<LinkedInIcon className="h-4 w-4" />}>
              LinkedIn
            </HeroLink>
            <HeroLink href={`mailto:${profile.email}`} icon={<MailIcon className="h-4 w-4" />}>
              {profile.email}
            </HeroLink>
          </ul>
        </div>

        {/* Spec sheet: the ten-second answer to "who is this and can they work with us". */}
        <aside className="rise card overflow-hidden" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
            <span className="dot-static" aria-hidden="true" />
            <span className="label">At a glance</span>
          </div>
          <dl>
            {glance.map((row) => (
              <div
                key={row.key}
                className="flex items-baseline gap-4 border-b border-line px-4 py-2.5 last:border-b-0"
              >
                <dt className="label w-12 shrink-0">{row.key}</dt>
                <dd
                  className={`mono text-[0.75rem] leading-snug ${
                    row.accent ? "text-accent" : "text-text"
                  }`}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

function HeroLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mono inline-flex items-center gap-2 text-[0.8125rem] text-muted transition-colors hover:text-accent"
      >
        <span className="text-dim">{icon}</span>
        {children}
      </a>
    </li>
  );
}
