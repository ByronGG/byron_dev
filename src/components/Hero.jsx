import { useLang } from "../context/LangContext.jsx";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { ArrowIcon } from "./Icons.jsx";

// Signature element: a terminal window that "boots up" by typing `whoami`,
// then prints the profile as command output. The page's thesis.
export default function Hero() {
  const { t, lang } = useLang();
  const { hero } = t;

  // Re-key the typewriter per language so it re-types on switch.
  const { output, done } = useTypewriter(hero.command, { speed: 110});

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <p className="mb-5 font-mono text-sm text-kw">
        <span className="text-comment">const</span> dev{" "}
        <span className="text-comment">=</span>{" "}
        <span className="text-str">"available for work"</span>
      </p>

      <div className="overflow-hidden rounded-xl border border-border bg-surface/80 shadow-[var(--shadow-panel)] backdrop-blur-sm">
        {/* terminal title bar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </span>
          <span className="ml-2 font-mono text-xs text-comment">
            luis@portfolio: ~
          </span>
        </div>

        {/* terminal body */}
        <div className="p-5 font-mono text-sm leading-relaxed sm:p-7 sm:text-[15px]">
          <div className="flex items-center">
            <span className="text-str">luis@portfolio</span>
            <span className="text-comment">:</span>
            <span className="text-kw">~</span>
            <span className="text-comment">$&nbsp;</span>
            <span className="text-strong" key={lang}>
              {output}
            </span>
            {!done && <span className="blink ml-0.5 text-fn">▍</span>}
          </div>

          {done && (
            <div className="reveal is-visible mt-4 space-y-1.5 pl-0 sm:pl-2">
              <h1 className="font-sans text-3xl font-semibold tracking-tight text-strong sm:text-5xl">
                {hero.name}
              </h1>
              {hero.roleLines.map((line) => (
                <p key={line} className="text-comment">
                  <span className="text-kw">{"> "}</span>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {done && (
        <div className="reveal is-visible mt-8 max-w-2xl">
          <p className="text-lg text-text sm:text-xl">{hero.tagline}</p>
          <p className="mt-3 font-mono text-sm text-comment">
            <span className="text-fn">●</span> {hero.stat}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-fn px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              {hero.ctaPrimary}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-kw/60 hover:text-strong"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
