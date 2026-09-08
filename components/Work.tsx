import Image from "next/image";
import { projects, type Project } from "@/content";
import DemoLogin from "./DemoLogin";
import SectionHead from "./SectionHead";
import { ArrowUpRight, GitHubIcon } from "./icons";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHead label="Work" note="three systems, all deployed" />
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div key={project.slug} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-5 sm:p-7">
      <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span className="dot-static" aria-hidden="true" />
            <span className="label text-accent">Live</span>
            <span aria-hidden="true" className="text-line-strong">
              ·
            </span>
            <span className="mono text-[0.6875rem] tracking-wide text-dim">{project.domain}</span>
          </div>

          <h3 className="display-sm mt-4">{project.name}</h3>
          <p className="mono mt-2 text-[0.8125rem] text-muted">{project.kicker}</p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          {project.demo && (
            <div className="mt-5">
              <DemoLogin user={project.demo.user} pass={project.demo.pass} />
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {project.repos.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GitHubIcon className="h-4 w-4" />
                {repo.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} at ${project.host}`}
          className="frame group order-first lg:order-none"
        >
          <div className="frame-bar">
            <span aria-hidden="true" className="flex shrink-0 gap-1.5">
              <i className="block h-2 w-2 rounded-full border border-line-strong" />
              <i className="block h-2 w-2 rounded-full border border-line-strong" />
              <i className="block h-2 w-2 rounded-full border border-line-strong" />
            </span>
            <span className="mono flex-1 truncate text-center text-[0.6875rem] text-dim transition-colors group-hover:text-accent">
              {project.host}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-dim transition-colors group-hover:text-accent" />
          </div>
          <div className="frame-shot">
            <Image
              src={project.shot}
              alt={project.shotAlt}
              fill
              sizes="(min-width: 1024px) 33rem, (min-width: 640px) 90vw, 100vw"
            />
          </div>
        </a>
      </div>
    </article>
  );
}
