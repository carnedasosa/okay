import { venue } from "@/data/venue";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/format";
import { PunctuationCycle } from "@/components/motion/PunctuationCycle";
import { ButtonLink } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/Stamp";
import { Receipt } from "./Receipt";
import styles from "./Hero.module.css";

const order = [
  { qty: 1, label: "Bacon burger double" },
  { qty: 1, label: "Pastrami toast" },
  { qty: 1, label: "Patatine caciocavallo & tartufo" },
  { qty: 1, label: "Gyoza di verdure" },
  { qty: 2, label: "Cheesecake" },
];

export function Hero() {
  return (
    <section className={cn(styles.hero, "grain")} aria-labelledby="hero-title">
      <div className={cn("container", styles.inner)}>
        <p className={cn("mono", styles.topline)}>
          <span>Social Food Club</span>
          <span aria-hidden="true">✶</span>
          <span>Bari · {venue.address.neighbourhood}</span>
          <span aria-hidden="true" className={styles.hideSm}>
            ✶
          </span>
          <span className={styles.hideSm}>Via Brancaccio 18</span>
        </p>

        <h1 id="hero-title" className={styles.title}>
          <span className={styles.question}>«Dove mangiamo stasera?»</span>
          <span className={styles.mega}>
            <span className={styles.word}>OKAY</span>
            <PunctuationCycle />
          </span>
          <span className="sr-only">Bari Social Food Club</span>
        </h1>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            <p className={styles.lead}>
              Smash burger, pastrami, gyoza, nachos. <strong>Cucina internazionale veloce</strong>{" "}
              in Via Brancaccio 18, e la risposta alla domanda di ogni sera.
            </p>
            <div className={styles.actions}>
              <ButtonLink href={telHref(venue.phone.value)} icon="phone" size="l">
                Prenota un tavolo
              </ButtonLink>
              <ButtonLink
                href="/menu"
                variant="outline-light"
                icon="arrow"
                iconPosition="end"
                size="l"
              >
                Il menu
              </ButtonLink>
            </div>
          </div>

          <div className={styles.ticket}>
            <Receipt number="018" lines={order} total="OKAY." />
            <div className={styles.stamp}>
              <Stamp text="Social food club ✶ Bari ✶ cucina internazionale veloce ✶ " center="OK" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
