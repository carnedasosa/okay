import { siteConfig } from "@/lib/site";
import styles from "./DraftMark.module.css";

type DraftMarkProps = {
  verified: boolean;
  note?: string;
};

/**
 * Small marker next to data that the owner still has to confirm.
 * Rendered only while NEXT_PUBLIC_DRAFT_MARKERS is not "false".
 */
export function DraftMark({ verified, note = "Dato da confermare con il locale" }: DraftMarkProps) {
  if (verified || !siteConfig.draftMarkers) return null;
  return (
    <span className={styles.mark} title={note}>
      <span className="sr-only">{note}</span>
    </span>
  );
}
