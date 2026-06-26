import { useLang } from "../context/LangContext.jsx";
import Section from "./Section.jsx";

export default function About() {
  const { t } = useLang();
  const { about } = t;

  return (
    <Section id="about" label={about.label} heading={about.heading}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-text">
          {about.body.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <aside className="self-start rounded-xl border border-border bg-surface/60 p-5 font-mono text-sm">
          <p className="text-comment">{"/*"}</p>
          <p className="my-1 pl-3 text-text">{about.funFact}</p>
          <p className="text-comment">{"*/"}</p>
        </aside>
      </div>
    </Section>
  );
}
