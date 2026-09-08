import { experience } from "@/content";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHead label="Experience" note="finance · healthcare · infrastructure" />
        <ol>
          {experience.map((role, i) => (
            <li
              key={role.company}
              className="border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10 md:first:pt-0"
            >
              <div data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="grid gap-x-10 gap-y-4 md:grid-cols-[12rem_minmax(0,1fr)]">
                  <div>
                    <div className="flex items-center gap-2">
                      {role.current && <span className="dot-static" aria-hidden="true" />}
                      <span className={`label ${role.current ? "text-accent" : ""}`}>
                        {role.period}
                      </span>
                    </div>
                    <p className="mono mt-2.5 text-[0.75rem] leading-snug text-dim">{role.place}</p>
                  </div>

                  <div>
                    <h3 className="text-[1.0625rem] font-semibold tracking-tight md:text-lg">
                      {role.title}
                    </h3>
                    <p className="mono mt-1.5 text-[0.8125rem] text-muted">{role.company}</p>
                    <ul className="mt-4 space-y-2.5">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-5 text-[0.9375rem] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.72em] h-px w-2.5 bg-line-strong"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
