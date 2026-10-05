"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import styles from "./PunctuationCycle.module.css";

const marks = ["?", ".", "!"] as const;

/**
 * "OKAY?" → "OKAY." → "OKAY!": the name is the answer to the question.
 * Decorative (aria-hidden); stays on "." with reduced motion.
 */
export function PunctuationCycle({ interval = 1900 }: { interval?: number }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % marks.length), interval);
    return () => window.clearInterval(timer);
  }, [reduced, interval]);

  const mark = reduced ? "." : marks[index];

  return (
    <span className={styles.slot} aria-hidden="true">
      <span key={mark} className={styles.mark} data-mark={mark}>
        {mark}
      </span>
    </span>
  );
}
