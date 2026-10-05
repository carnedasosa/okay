import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  align?: "start" | "split";
  className?: string;
};

/** Display title (+ optional intro). The heading carries the section on its own. */
export function SectionHead({
  title,
  intro,
  id,
  as: Heading = "h2",
  align = "start",
  className,
}: SectionHeadProps) {
  return (
    <header className={cn(styles.head, styles[align], className)}>
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {intro && <div className={styles.intro}>{intro}</div>}
    </header>
  );
}
