import { skills } from "@/content";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHead label="Skills" note="what I reach for day to day" />
        <div data-reveal>
          <dl>
            {skills.map((group) => (
              <div
                key={group.group}
                className="grid gap-x-10 gap-y-3 border-t border-line py-5 first:border-t-0 first:pt-0 md:grid-cols-[12rem_minmax(0,1fr)]"
              >
                <dt className="label pt-1.5">{group.group}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
