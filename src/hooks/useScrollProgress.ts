"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Writes the scroll progress of an element (0 → 1 while it travels through
 * the viewport) into a CSS custom property, without React re-renders.
 *
 * - "through": 0 when the top enters the bottom of the viewport,
 *   1 when the bottom leaves the top.
 * - "pinned": 0 when the top reaches the top of the viewport,
 *   1 when the bottom reaches the bottom (for sticky scenes).
 */
export function useScrollProgress<T extends HTMLElement>(
  property: string,
  mode: "through" | "pinned" = "through",
  enabled = true,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw =
        mode === "pinned"
          ? -rect.top / Math.max(rect.height - vh, 1)
          : (vh - rect.top) / (rect.height + vh);
      const progress = Math.min(1, Math.max(0, raw));
      node.style.setProperty(property, progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      node.style.removeProperty(property);
    };
  }, [property, mode, enabled]);

  return ref;
}
