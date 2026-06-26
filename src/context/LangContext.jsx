import { createContext, useContext, useEffect, useState } from "react";
import { CONTENT } from "../content/content.js";

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "en";

const LangContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : DEFAULT_LANG;
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  const value = { lang, setLang, toggle, t: CONTENT[lang] };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
