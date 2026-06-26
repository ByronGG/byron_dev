import { useLang } from "../context/LangContext.jsx";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-5 font-mono text-xs text-comment sm:flex-row sm:px-8">
        <span>© {year} Luis Alardin</span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  );
}
