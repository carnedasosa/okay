import { venue } from "@/data/venue";
import { cn } from "@/lib/cn";
import { formatDays, formatTimeRange, localPhone, telHref } from "@/lib/format";
import { ButtonLink } from "@/components/ui/Button";
import { DraftMark } from "@/components/ui/DraftMark";
import styles from "./Visit.module.css";

/** Closing call-to-action of the home: where, when, how to book. */
export function Visit() {
  return (
    <section className={cn(styles.visit, "grain")} aria-labelledby="visit-title">
      <div className={cn("container", styles.grid)}>
        <div>
          <p className={cn("mono", styles.kicker)}>Dove &amp; quando</p>
          <h2 id="visit-title" className={styles.title}>
            Via Brancaccio, <span>18</span>.
          </h2>
          <p className={styles.sub}>
            {venue.address.neighbourhood}, {venue.address.city}. Il resto lo fa la fame.
          </p>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt className="mono">Aperti</dt>
            <dd>
              {venue.hours.value.map((slot) => (
                <span key={slot.days.join()} className={styles.hoursLine}>
                  {formatDays(slot.days)} · {formatTimeRange(slot)}
                  <DraftMark
                    verified={venue.hours.verified}
                    note="Orari da confermare con il locale"
                  />
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="mono">Prenota</dt>
            <dd>
              <a href={telHref(venue.phone.value)}>{localPhone(venue.phone.value)}</a>
              <DraftMark verified={venue.phone.verified} />
            </dd>
          </div>
          <div>
            <dt className="mono">Indirizzo</dt>
            <dd>
              <address>
                {venue.address.street}, {venue.address.postalCode} {venue.address.city}
              </address>
            </dd>
          </div>
        </dl>

        <div className={styles.actions}>
          <ButtonLink href={telHref(venue.phone.value)} icon="phone" size="l">
            Chiama e prenota
          </ButtonLink>
          <ButtonLink href={venue.maps.google} variant="outline-light" icon="pin" size="l">
            Indicazioni
          </ButtonLink>
          <ButtonLink href="/info" variant="outline-light" icon="arrow" iconPosition="end" size="l">
            Tutte le info
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
