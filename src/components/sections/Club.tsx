import { clubRules } from "@/data/club";
import { venue } from "@/data/venue";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Wordmark } from "@/components/ui/Wordmark";
import styles from "./Club.module.css";

export function Club() {
  return (
    <section id="club" className={cn(styles.club, "grain")} aria-labelledby="club-title">
      <div className={cn("container", styles.grid)}>
        <div className={styles.intro}>
          <SectionHead
            id="club-title"
            kicker="Social food club"
            title={
              <>
                Un club.
                <br />
                Senza buttafuori.
              </>
            }
            intro="Il nome dice «club», ma l'unico requisito è avere fame. Si mangia veloce, si sta bene, si condivide. Il resto è nel regolamento."
          />

          <Reveal variant="stamp" className={styles.cardWrap}>
            <div
              className={styles.card}
              role="img"
              aria-label="Tessera socio OKAY: nome, chiunque abbia fame. Valida finché c'è fame."
            >
              <div className={styles.cardHead} aria-hidden="true">
                <Wordmark withClaim />
                <span className="mono">Tessera socio</span>
              </div>
              <dl className={styles.cardBody} aria-hidden="true">
                <div>
                  <dt className="mono">Nome</dt>
                  <dd>Chiunque abbia fame</dd>
                </div>
                <div>
                  <dt className="mono">N°</dt>
                  <dd>018</dd>
                </div>
                <div>
                  <dt className="mono">Sede</dt>
                  <dd>{venue.address.street.replace("Francesco Maria", "F. M.")}</dd>
                </div>
                <div>
                  <dt className="mono">Valida</dt>
                  <dd>Finché c&apos;è fame</dd>
                </div>
              </dl>
              <div className={styles.chip} aria-hidden="true" />
            </div>
          </Reveal>
        </div>

        <ol role="list" className={styles.rules}>
          {clubRules.map((rule, index) => (
            <Reveal as="li" key={rule.id} className={styles.rule} delay={index % 3}>
              <span className={styles.ruleNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.ruleTitle}>{rule.title}</h3>
                <p className={styles.ruleBody}>{rule.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
