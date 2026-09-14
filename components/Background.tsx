import { allCertificationsUrl, certifications, education, resumes } from "@/content";
import { publicFileSize } from "@/lib/files";
import SectionHead from "./SectionHead";
import { ArrowUpRight } from "./icons";

export default function Background() {
  return (
    <section id="background" className="section">
      <div className="shell">
        <SectionHead label="Background" />

        <div data-reveal>
          <h3 className="text-[0.9375rem] font-medium tracking-tight">Résumé</h3>
          <ul className="mt-3">
            {resumes.map((resume) => {
              const size = publicFileSize(resume.file);
              return (
                <li key={resume.file} className="border-t border-line first:border-t-0">
                  <a
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
                  >
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-[0.9375rem] transition-colors group-hover:text-accent">
                        {resume.role}
                      </span>
                      <span className="text-[0.8125rem] text-dim">{resume.note}</span>
                    </span>
                    <span className="mono flex items-center gap-2.5 text-[0.75rem] text-dim">
                      {size ? `PDF · ${size}` : "PDF"}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-colors group-hover:text-accent" />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div data-reveal className="mt-10 grid gap-x-12 gap-y-8 md:mt-12 md:grid-cols-2">
          <div>
            <h3 className="text-[0.9375rem] font-medium tracking-tight">Education</h3>
            <p className="mt-3 text-[0.9375rem]">{education.degree}</p>
            <p className="mt-1 text-[0.9375rem] text-muted">{education.school}</p>
            <p className="mt-2 text-[0.8125rem] text-dim">
              {education.period} · {education.detail}
            </p>
          </div>

          <div>
            <h3 className="text-[0.9375rem] font-medium tracking-tight">Certifications</h3>
            <p className="mt-3 max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted">
              {certifications.length} Anthropic certificates, each independently verifiable:{" "}
              {certifications.map((cert, i) => (
                <span key={cert.url}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {cert.name}
                  </a>
                  {i < certifications.length - 1 ? " · " : "."}
                </span>
              ))}
            </p>
            <a
              href={allCertificationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[0.8125rem] text-dim transition-colors hover:text-accent"
            >
              All certifications
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
