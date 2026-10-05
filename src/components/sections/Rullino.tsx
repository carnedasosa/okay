import { gallery } from "@/data/gallery";
import { venue } from "@/data/venue";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHead } from "@/components/ui/SectionHead";
import styles from "./Rullino.module.css";

export function Rullino() {
  return (
    <section id="rullino" className={styles.rullino} aria-labelledby="rullino-title">
      <div className="container">
        <SectionHead
          id="rullino-title"
          kicker={`Instagram · @${venue.social.instagram.handle}`}
          title="Il rullino."
          intro="Piatti, tavoli, facce note. Quello che succede da OKAY finisce qui, e sul nostro profilo."
          align="split"
        />
        <ul role="list" className={styles.grid}>
          {gallery.map((shot, index) => (
            <Reveal as="li" key={shot.id} className={styles[`s${index + 1}`]} delay={index % 3}>
              <PhotoSlot
                shot={shot}
                index={index}
                sizes="(min-width: 64rem) 30vw, (min-width: 48rem) 45vw, 90vw"
              />
            </Reveal>
          ))}
        </ul>
        <div className={styles.cta}>
          <ButtonLink href={venue.social.instagram.url} variant="ink" icon="instagram" size="l">
            Seguici su Instagram
          </ButtonLink>
          <p className="mono">Tagga @{venue.social.instagram.handle}: finisci nel rullino.</p>
        </div>
      </div>
    </section>
  );
}
