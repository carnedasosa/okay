import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={cn(styles.wrap, "grain")} aria-labelledby="nf-title">
      <div className="container">
        <h1 id="nf-title" className={styles.title}>
          Not okay<span>.</span>
        </h1>
        <p className={cn("mono", styles.code)}>Errore 404 · comanda non trovata</p>
        <p className={styles.lead}>Questa pagina non è nel menu. Torniamo a cose più buone?</p>
        <div className={styles.actions}>
          <ButtonLink href="/" icon="arrow" iconPosition="end">
            Torna alla home
          </ButtonLink>
          <ButtonLink href="/menu" variant="outline-light">
            Il menu
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
