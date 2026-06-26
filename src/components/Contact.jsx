import { useLang } from "../context/LangContext.jsx";
import { SOCIALS } from "../content/content.js";
import Section from "./Section.jsx";
import { SOCIAL_ICONS, ArrowIcon } from "./Icons.jsx";

export default function Contact() {
  const { t } = useLang();
  const { contact } = t;

  return (
    <Section id="contact" label={contact.label} heading={contact.heading}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
        <p className="max-w-md text-lg leading-relaxed text-text">
          {contact.body}
        </p>

        <ul className="space-y-3">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.id];
            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface/50 px-5 py-4 transition-colors hover:border-fn/50 hover:bg-surface"
                >
                  <span className="text-comment transition-colors group-hover:text-fn">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-sm text-strong">
                      {social.label}
                    </span>
                    <span className="font-mono text-xs text-comment">
                      {social.handle}
                    </span>
                  </span>
                  <ArrowIcon className="ml-auto h-4 w-4 -rotate-45 text-comment transition-all group-hover:translate-x-0.5 group-hover:text-fn" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
