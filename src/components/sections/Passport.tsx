"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { destinations } from "@/data/destinations";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stamp } from "@/components/ui/Stamp";
import styles from "./Passport.module.css";

/**
 * "Un menu col passaporto". On desktop the section pins and vertical scroll
 * drives the horizontal journey; on touch devices and with reduced motion
 * it is a native, swipeable scroll-snap row.
 */
export function Passport() {
  const wide = useMediaQuery("(min-width: 64rem)");
  const reduced = usePrefersReducedMotion();
  const pinned = wide && !reduced;

  const sectionRef = useScrollProgress<HTMLElement>("--p", "pinned", pinned);
  const trackRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || !pinned) return;

    const measure = () => {
      const distance = Math.max(track.scrollWidth - window.innerWidth, 0);
      section.style.setProperty("--distance", `${distance}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      section.style.removeProperty("--distance");
    };
  }, [pinned, sectionRef]);

  return (
    <section
      ref={sectionRef}
      className={cn(styles.passport, pinned && styles.pinned)}
      aria-labelledby="passport-title"
    >
      <div className={styles.sticky}>
        <div className={cn("container", styles.head)}>
          <SectionHead
            id="passport-title"
            kicker="Cucina internazionale veloce"
            title="Un menu col passaporto."
            intro="Ogni piatto arriva da un posto diverso. Tutti atterrano in Via Brancaccio, veloci e caldi."
            align="split"
          />
        </div>

        <ol
          role="list"
          ref={trackRef}
          className={styles.track}
          tabIndex={pinned ? undefined : 0}
          aria-label="Piatti e destinazioni"
        >
          {destinations.map((stop, index) => (
            <li
              key={stop.id}
              className={cn(styles.card, styles[stop.tone])}
              style={{ "--tilt": `${index % 2 === 0 ? -1.2 : 1.4}deg` } as CSSProperties}
            >
              <div className={cn("mono", styles.cardTop)}>
                <span>Visto n° {String(index + 1).padStart(2, "0")}</span>
                <span>Entrata · Bari</span>
              </div>
              <p className={cn("mono", styles.origin)}>
                {stop.origin}
                <span>{stop.coords}</span>
              </p>
              <h3 className={styles.dish}>{stop.dish}</h3>
              <p className={styles.line}>{stop.line}</p>
              <div className={styles.cardStamp}>
                <Stamp
                  text={`Approvato ✶ ${stop.origin} ✶ OKAY Bari ✶ `}
                  center={String(index + 1).padStart(2, "0")}
                  spin={false}
                />
              </div>
            </li>
          ))}
          <li className={cn(styles.card, styles.endCard)}>
            <p className={cn("mono", styles.cardTop)}>
              <span>Ultima pagina</span>
            </p>
            <p className={styles.dish}>Il resto del viaggio è nel menu.</p>
            <ButtonLink href="/menu" variant="ink" icon="arrow" iconPosition="end">
              Sfoglia il menu
            </ButtonLink>
          </li>
        </ol>

        <div className={cn("container", "mono", styles.hint)} aria-hidden="true">
          <span className={styles.hintTouch}>Scorri →</span>
          <span className={styles.hintProgress}>
            <span />
          </span>
        </div>
      </div>
    </section>
  );
}
