import { useLang } from "../context/LangContext.jsx";
import Section from "./Section.jsx";

export default function Experience() {
  const { t } = useLang();
  const { experience } = t;

  return (
    <Section id="experience" label={experience.label} heading={experience.heading}>
      <div className="space-y-8">
        {experience.roles.map((role) => (
          <article
            key={role.title}
            className="rounded-xl border border-border bg-surface/50 p-6 sm:p-8"
          >
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-strong">{role.title}</h3>
              <span className="rounded-md border border-str/30 bg-str/10 px-2.5 py-0.5 font-mono text-xs text-str">
                {role.period}
              </span>
            </div>
            <ul className="space-y-3">
              {role.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-text">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kw" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        <p className="font-mono text-sm text-comment">
          <span className="text-comment/70">{"// "}</span>
          {experience.goals}
        </p>
      </div>
    </Section>
  );
}
