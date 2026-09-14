import { skills } from "@/content";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHead label="Skills" />
        <div data-reveal>
          <dl>
            {skills.map((group) => (
              <div
                key={group.group}
                className="grid gap-x-10 gap-y-1.5 border-t border-line py-4 first:border-t-0 first:pt-0 md:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <dt className="text-[0.9375rem] font-medium tracking-tight">{group.group}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-muted">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
