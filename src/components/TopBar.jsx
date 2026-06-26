import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext.jsx";
import LangToggle from "./LangToggle.jsx";

const NAV_IDS = ["about", "skills", "experience", "projects", "contact"];

// Fixed editor-style chrome: window dots + file name on the left, section
// "tabs" and the language flag on the right.
export default function TopBar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-ink/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </span>
          <span className="font-mono text-sm text-text">
            <span className="text-comment">~/</span>luis-alardin
          </span>
        </a>

        <div className="flex items-center gap-4">
          <nav
            aria-label="Sections"
            className="hidden items-center gap-1 font-mono text-sm md:flex"
          >
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-md px-2.5 py-1 text-comment transition-colors hover:bg-surface hover:text-text"
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <LangToggle />
        </div>
      </div>
    </header>
  );
}
