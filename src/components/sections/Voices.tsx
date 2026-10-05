import { reviews, reviewThemes } from "@/data/reviews";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Voices.module.css";

export function Voices() {
  const [headline] = reviews.filter((review) => review.verbatim);
  if (!headline) return null;

  return (
    <section className={styles.voices} aria-labelledby="voices-title">
      <div className={cn("container", styles.inner)}>
        <h2 id="voices-title" className={cn("mono", styles.kicker)}>
          Dicono di noi
        </h2>

        <Reveal as="figure" className={styles.quote}>
          <blockquote cite={headline.url}>
            <p>
              <span aria-hidden="true" className={styles.mark}>
                «
              </span>
              {headline.quote}
              <span aria-hidden="true" className={styles.mark}>
                »
              </span>
            </p>
          </blockquote>
          <figcaption className="mono">
            {headline.url ? (
              <a href={headline.url} target="_blank" rel="noopener noreferrer">
                {headline.source}
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </a>
            ) : (
              headline.source
            )}
          </figcaption>
        </Reveal>

        <div className={styles.themes}>
          <p className={styles.themesLabel}>Nelle recensioni tornano sempre:</p>
          <ul role="list" className={styles.chips}>
            {reviewThemes.map((theme, index) => (
              <Reveal as="li" key={theme} variant="stamp" delay={index}>
                {theme}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
