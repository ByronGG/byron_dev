import { useLang } from "../context/LangContext.jsx";
import { SKILL_GROUPS } from "../content/content.js";
import Section from "./Section.jsx";

// Token-role → static Tailwind classes (kept whole so the JIT picks them up).
const ROLE_CLASSES = {
  kw: "border-kw/25 bg-kw/10 text-kw hover:border-kw/60",
  str: "border-str/25 bg-str/10 text-str hover:border-str/60",
  fn: "border-fn/25 bg-fn/10 text-fn hover:border-fn/60",
};

export default function Skills() {
  const { t } = useLang();
  const { skills } = t;

  return (
    <Section id="skills" label={skills.label} heading={skills.heading}>
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.id}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-comment">
              {skills.groups[group.id]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`cursor-default rounded-md border px-2.5 py-1 font-mono text-[13px] transition-colors ${ROLE_CLASSES[group.role]}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
