import { useReveal } from "../hooks/useReveal.js";

// Section wrapper: a "// label" eyebrow (the comment-token signature), a
// heading, and a scroll-reveal container. Spacing lives here so sections
// stay consistent.
export default function Section({ id, label, heading, children, className = "" }) {
  const { ref, visible } = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} scroll-mt-24 border-t border-border/70 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        {label && (
          <p className="mb-3 font-mono text-sm text-comment">
            <span className="text-comment/70">{"// "}</span>
            {label}
          </p>
        )}
        {heading && (
          <h2 className="mb-10 max-w-2xl text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
            {heading}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
