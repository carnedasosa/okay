import { cn } from "@/lib/cn";
import styles from "./Marquee.module.css";

type MarqueeProps = {
  words: string[];
  tone?: "ketchup" | "mustard" | "ink";
  reverse?: boolean;
  tilt?: boolean;
  label?: string;
};

/**
 * Infinite ticker, pure CSS. The list is rendered twice for a seamless loop;
 * the copy is hidden from assistive tech, which reads the label once.
 */
export function Marquee({
  words,
  tone = "ketchup",
  reverse = false,
  tilt = true,
  label,
}: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul role="list" className={styles.row} aria-hidden={hidden || undefined}>
      {words.map((word) => (
        <li key={word}>
          {word}
          <span className={styles.sep} aria-hidden="true">
            ✶
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(styles.marquee, styles[tone], reverse && styles.reverse, tilt && styles.tilt)}
      role="region"
      aria-label={label ?? words.join(", ")}
    >
      <div className={styles.track}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
