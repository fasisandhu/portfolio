import { allCertificationsUrl, certifications, education } from "@/content";
import SectionHead from "./SectionHead";
import { ArrowRight, ArrowUpRight, CheckIcon } from "./icons";

export default function Background() {
  return (
    <section id="background" className="section">
      <div className="shell">
        <SectionHead label="Background" note="degree + verified certificates" />

        <div data-reveal>
          <div className="card flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 p-5 sm:p-6">
            <div>
              <span className="label">Education</span>
              <h3 className="mt-3 text-[1.0625rem] font-semibold tracking-tight md:text-lg">
                {education.degree}
              </h3>
              <p className="mono mt-1.5 text-[0.8125rem] text-muted">{education.school}</p>
            </div>
            <div className="md:text-right">
              <span className="label">{education.period}</span>
              <p className="mono mt-3 text-[0.8125rem] text-muted">{education.detail}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <div className="mb-5 flex items-center gap-5">
            <span className="label text-text">Certifications</span>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <li key={cert.url}>
                <div data-reveal className="h-full" style={{ transitionDelay: `${i * 50}ms` }}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex h-full flex-col justify-between p-4 transition-colors hover:border-accent-line"
                  >
                    <div>
                      <span className="label">
                        {cert.issuer} · {cert.year}
                      </span>
                      <h3 className="mt-3 text-[0.9375rem] font-medium leading-snug tracking-tight">
                        {cert.name}
                      </h3>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="label flex items-center gap-1.5 text-accent">
                        <CheckIcon className="h-3 w-3" />
                        Verified
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-dim transition-colors group-hover:text-accent" />
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={allCertificationsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mono mt-5 inline-flex items-center gap-2 text-[0.8125rem] text-muted transition-colors hover:text-accent"
          >
            All certifications
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
