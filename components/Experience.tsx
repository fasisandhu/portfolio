import { experience } from "@/content";
import SectionHead from "./SectionHead";

/** Splits a bullet so the outcome figures inside it can carry real weight. */
function withFigures(text: string, figures: string[] = []) {
  if (figures.length === 0) return text;

  const escaped = figures.map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));

  return parts.map((part, i) =>
    figures.includes(part) ? (
      <span key={i} className="figure">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHead label="Experience" />
        <ol>
          {experience.map((role, i) => (
            <li
              key={role.company}
              className="border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10 md:first:pt-0"
            >
              <div data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="grid gap-x-10 gap-y-3 md:grid-cols-[12rem_minmax(0,1fr)]">
                  <div>
                    <p
                      className={`mono text-[0.75rem] tracking-wide ${
                        role.current ? "text-text" : "text-dim"
                      }`}
                    >
                      {role.period}
                    </p>
                    <p className="mt-2 text-[0.8125rem] leading-snug text-dim">{role.place}</p>
                  </div>

                  <div>
                    <h3 className="text-[1.0625rem] font-semibold tracking-tight md:text-lg">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-[0.9375rem] text-muted">{role.company}</p>
                    <ul className="mt-4 max-w-[68ch] space-y-2.5">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-5 text-[0.9375rem] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.72em] h-px w-2.5 bg-line-strong"
                          />
                          {withFigures(point, role.figures)}
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
