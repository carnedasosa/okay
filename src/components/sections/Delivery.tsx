import { venue } from "@/data/venue";
import { cn } from "@/lib/cn";
import { localPhone, telHref } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { DraftMark } from "@/components/ui/DraftMark";
import { Stamp } from "@/components/ui/Stamp";
import styles from "./Delivery.module.css";

const steps = [
  { id: "app", title: "Scarica OkayBari", body: "L'app ufficiale, per iOS e Android." },
  {
    id: "scegli",
    title: "Scegli il giro del mondo",
    body: "Smash, pastrami, gyoza, nachos, dolci.",
  },
  {
    id: "ritira",
    title: "Delivery o asporto",
    body: "Te lo portiamo, oppure passi tu in Via Brancaccio.",
  },
];

export function Delivery() {
  return (
    <section id="a-casa" className={cn(styles.delivery, "grain")} aria-labelledby="delivery-title">
      <div className={cn("container", styles.grid)}>
        <div className={styles.copy}>
          <h2 id="delivery-title" className={styles.title}>
            Divano?
            <br />
            <span>Okay.</span>
          </h2>
          <p className={styles.lead}>
            Delivery e asporto: la stessa cucina, dove vuoi tu. Ordina con l&apos;app{" "}
            {venue.ordering.appName} o chiamaci: prepariamo, impacchettiamo, partiamo.
          </p>
          <div className={styles.actions}>
            <ButtonLink href={venue.ordering.ios} variant="ink" icon="apple" size="l">
              App Store
            </ButtonLink>
            <ButtonLink href={venue.ordering.android} variant="ink" icon="play" size="l">
              Google Play
            </ButtonLink>
          </div>
          <p className={cn("mono", styles.phone)}>
            Oppure al telefono:{" "}
            <a href={telHref(venue.phone.value)}>{localPhone(venue.phone.value)}</a>
            <DraftMark verified={venue.phone.verified} />
          </p>
        </div>

        <ol role="list" className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal as="li" key={step.id} className={styles.step} delay={index}>
              <span className={styles.stepIndex} aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </Reveal>
          ))}
          <li className={styles.stamp} aria-hidden="true">
            <Stamp text="Caldo ✶ veloce ✶ okay ✶ caldo ✶ veloce ✶ okay ✶ " center="GO" />
          </li>
        </ol>
      </div>

      <div className={cn("container", styles.merch)}>
        <p>
          <strong>Ti è piaciuto? Indossalo.</strong> Le t-shirt OKAY sono nel nostro Linktree.
        </p>
        <ButtonLink
          href={venue.social.linktree}
          variant="outline-light"
          icon="arrow"
          iconPosition="end"
        >
          Merch
        </ButtonLink>
      </div>
    </section>
  );
}
