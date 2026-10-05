import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  align?: "start" | "split";
  className?: string;
};

/** Mono kicker + display title (+ optional intro). Used by every section. */
export function SectionHead({
  kicker,
  title,
  intro,
  id,
  as: Heading = "h2",
  align = "start",
  className,
}: SectionHeadProps) {
  return (
    <header className={cn(styles.head, styles[align], className)}>
      <p className={cn("mono", styles.kicker)}>
        <span className={styles.tick} aria-hidden="true" />
        {kicker}
      </p>
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {intro && <div className={styles.intro}>{intro}</div>}
    </header>
  );
}
