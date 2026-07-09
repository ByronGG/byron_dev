import { useLang } from "../context/LangContext.jsx";
import Section from "./Section.jsx";
import { ArrowIcon } from "./Icons.jsx";

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
              className="rounded border border-border bg-ink/60 px-2 py-0.5 font-mono text-[12px] text-comment"
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
