import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion.js";

// Types out `text` character by character. When reduced motion is requested,
// the full text is shown immediately and marked done.
export function useTypewriter(text, { speed = 55, startDelay = 350 } = {}) {
  const reduced = usePrefersReducedMotion();
  const [output, setOutput] = useState(reduced ? text : "");
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setOutput(text);
      setDone(true);
      return;
    }

    setOutput("");
    setDone(false);

    let i = 0;
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, reduced]);

  return { output, done };
}
