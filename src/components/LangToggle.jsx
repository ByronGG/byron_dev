import { useLang } from "../context/LangContext.jsx";

// Language switch styled as a terminal flag: --lang [EN·ES].
export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <span className="hidden text-comment sm:inline">--lang</span>
      <div
        className="flex overflow-hidden rounded-md border border-border bg-surface"
        role="group"
        aria-label="Language"
      >
        {["en", "es"].map((code) => {
          const active = lang === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={active}
              className={`px-2.5 py-1 uppercase tracking-wide transition-colors ${
                active
                  ? "bg-fn/15 text-fn"
                  : "text-comment hover:text-text"
              }`}
            >
              {code}
            </button>
          );
        })}
      </div>
    </div>
  );
}
