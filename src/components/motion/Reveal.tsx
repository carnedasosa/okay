"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";
import styles from "./Reveal.module.css";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger step (0, 1, 2…), multiplied by 80ms. */
  delay?: number;
  variant?: "rise" | "fade" | "stamp" | "slide";
  id?: string;
};

/**
 * Entry animation on first appearance. Content is visible without JS
 * (the hidden state only applies under `.js`) and with reduced motion.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  variant = "rise",
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(styles.reveal, styles[variant], inView && styles.visible, className)}
      style={{ "--reveal-delay": `${delay * 80}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
