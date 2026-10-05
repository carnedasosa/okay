import { useId } from "react";
import { cn } from "@/lib/cn";
import styles from "./Stamp.module.css";

type StampProps = {
  text: string;
  center?: string;
  className?: string;
  spin?: boolean;
};

/**
 * Circular rubber stamp with text on a path. Purely decorative.
 * The ring and the centre are separate layers so that only the ring spins,
 * as a composited CSS transform (no SVG repaint per frame).
 */
export function Stamp({ text, center = "OK", className, spin = true }: StampProps) {
  const id = useId().replace(/:/g, "");
  return (
    <span className={cn(styles.stamp, className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className={cn(styles.ring, spin && styles.spin)} focusable="false">
        <defs>
          <path id={`c${id}`} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className={styles.text}>
          <textPath href={`#c${id}`} startOffset="0" textLength="462">
            {text}
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 200 200" className={styles.face} focusable="false">
        <circle cx="100" cy="100" r="96" className={styles.line} />
        <circle cx="100" cy="100" r="54" className={styles.line} />
        <text
          x="100"
          y="100"
          className={styles.center}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {center}
        </text>
      </svg>
    </span>
  );
}
