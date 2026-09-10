import { profile, titleBlock } from "@/content";
import { ArrowRight, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="shell scroll-mt-24 pt-10 pb-14 md:pt-16 md:pb-16">
      <h1 className="rise masthead" style={{ animationDelay: "40ms" }}>
        <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <span className="mono text-[0.9375rem] font-medium tracking-tight text-text">
            {profile.name}
          </span>
          <span aria-hidden="true" className="hidden text-line-strong sm:inline">
            /
          </span>
          <span className="mono text-[0.9375rem] text-muted">{profile.role}</span>
        </span>
        <span className="label text-accent">{profile.badge}</span>
      </h1>

      <p className="rise display mt-12 max-w-[46rem] md:mt-16" style={{ animationDelay: "110ms" }}>
        <span className="text-muted">{profile.taglineLead}</span>{" "}
        {profile.taglineClaim}
      </p>

      <p
        className="rise mt-7 max-w-2xl text-[0.9375rem] leading-relaxed text-muted"
        style={{ animationDelay: "180ms" }}
      >
        {profile.subline}
      </p>

      <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "250ms" }}>
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
        className="rise mt-9 flex flex-wrap items-center gap-x-7 gap-y-3"
        style={{ animationDelay: "320ms" }}
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

      <dl className="rise titleblock mt-14 md:mt-16" style={{ animationDelay: "390ms" }}>
        {titleBlock.map((item) => (
          <div key={item.label}>
            <dt className="label">{item.label}</dt>
            <dd className="mono mt-2.5 text-[0.8125rem] leading-snug text-text">{item.value}</dd>
          </div>
        ))}
      </dl>
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
