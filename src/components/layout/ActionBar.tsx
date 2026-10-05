import Link from "next/link";
import { venue } from "@/data/venue";
import { telHref } from "@/lib/format";
import { Icon } from "@/components/ui/Icon";
import styles from "./ActionBar.module.css";

/**
 * Mobile/tablet bottom bar: the three things people do from a phone.
 * Hidden on desktop, where the header CTA is always visible.
 */
export function ActionBar() {
  return (
    <nav className={styles.bar} aria-label="Azioni rapide">
      <a href={telHref(venue.phone.value)} className={styles.primary}>
        <Icon name="phone" size={18} />
        <span>Prenota</span>
      </a>
      <Link href="/#a-casa" className={styles.item}>
        <Icon name="bag" size={18} />
        <span>Ordina</span>
      </Link>
      <a href={venue.maps.google} className={styles.item} target="_blank" rel="noopener noreferrer">
        <Icon name="pin" size={18} />
        <span>Mappa</span>
        <span className="sr-only"> (si apre in una nuova scheda)</span>
      </a>
    </nav>
  );
}
