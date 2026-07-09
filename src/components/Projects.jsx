import { useLang } from "../context/LangContext.jsx";
import { SKILL_ROLES } from "../content/content.js";
import Section from "./Section.jsx";
import { ArrowIcon } from "./Icons.jsx";

// Token-role → chip color classes, matching the Skills grid. Kept as whole
// class strings so Tailwind's JIT detects them. A tech that isn't listed as a
// skill (no role) falls back to the neutral chip.
const TECH_ROLE_CLASSES = {
  kw: "border-kw/25 bg-kw/10 text-kw",
  str: "border-str/25 bg-str/10 text-str",
  fn: "border-fn/25 bg-fn/10 text-fn",
  op: "border-op/25 bg-op/10 text-op",
  at: "border-at/25 bg-at/10 text-at",
  ty: "border-ty/25 bg-ty/10 text-ty",
};
const TECH_FALLBACK = "border-border bg-ink/60 text-comment";

function ProjectCard({ project, index }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface/50 transition-colors hover:border-kw/50">
      {/* editor-style file header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5 font-mono text-xs">
        <span className="text-comment">
          {String(index + 1).padStart(2, "0")}_
          <span className="text-text">
            {project.name.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </span>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} (opens in a new tab)`}
            className="inline-flex items-center gap-1 text-comment transition-colors hover:text-fn"
          >
            live
            <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
          </a>
        ) : (
          <span className="text-comment transition-colors group-hover:text-fn">
            ●
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-strong">{project.name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-text">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className={`rounded border px-2 py-0.5 font-mono text-[12px] transition-colors ${
                TECH_ROLE_CLASSES[SKILL_ROLES[tech]] ?? TECH_FALLBACK
              }`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const { projects } = t;

  return (
    <Section id="projects" label={projects.label} heading={projects.heading}>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.items.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
