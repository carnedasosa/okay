import { cn } from "@/lib/cn";
import styles from "./Receipt.module.css";

type ReceiptProps = {
  number: string;
  lines: Array<{ qty: number; label: string }>;
  total: string;
  className?: string;
};

/**
 * The "comanda": an order ticket printed by the kitchen. Used as the hero
 * visual and reusable elsewhere (e.g. a daily special).
 */
export function Receipt({ number, lines, total, className }: ReceiptProps) {
  return (
    <figure className={cn(styles.receipt, className)} aria-label={`Comanda numero ${number}`}>
      <div className={styles.paper}>
        <p className={styles.head}>
          <span>OKAY · Social Food Club</span>
          <span>Via Brancaccio 18 · Bari</span>
        </p>
        <p className={styles.meta}>
          <span>Comanda</span>
          <span>N° {number}</span>
        </p>
        <p className={styles.meta}>
          <span>Tavolo</span>
          <span>il tuo</span>
        </p>
        <hr className={styles.rule} />
        <ul role="list" className={styles.lines}>
          {lines.map((line) => (
            <li key={line.label}>
              <span>{line.qty}×</span>
              <span>{line.label}</span>
              <span>ok</span>
            </li>
          ))}
        </ul>
        <hr className={styles.rule} />
        <p className={styles.total}>
          <span>Totale</span>
          <span>{total}</span>
        </p>
        <div className={styles.barcode} aria-hidden="true" />
        <p className={styles.thanks}>Grazie. Torna presto.</p>
      </div>
    </figure>
  );
}
