import { cn } from "@/lib/cn";
import styles from "./Wordmark.module.css";

type WordmarkProps = {
  className?: string;
  /** Shows "Social Food Club" under the name. */
  withClaim?: boolean;
};

/**
 * Typographic wordmark, a stand-in until the official logo files are
 * provided (replace the markup with the SVG, keep the accessible name).
 */
export function Wordmark({ className, withClaim = false }: WordmarkProps) {
  return (
    <span className={cn(styles.wordmark, className)}>
      <span className={styles.name}>
        OKAY
        <span className={styles.dot} aria-hidden="true">
          .
        </span>
      </span>
      {withClaim && <span className={styles.claim}>Social Food Club</span>}
    </span>
  );
}
