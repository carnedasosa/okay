import type { Metadata } from "next";
import { extras, menu, menuUpdatedAt } from "@/data/menu";
import { venue } from "@/data/venue";
import { cn } from "@/lib/cn";
import { formatPrice, telHref } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, menuJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { DraftMark } from "@/components/ui/DraftMark";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Menu",
  description:
    "Il menu di OKAY Bari: smash burger, Truffle Smash, pastrami bun e toast, gyoza di verdure, nachos, patatine caciocavallo e tartufo, cheesecake. Anche da asporto e a domicilio.",
  path: "/menu",
});

const tagLabels = {
  firma: "Firma",
  veg: "Veg",
  piccante: "Piccante",
  "da condividere": "Da condividere",
} as const;

export default function MenuPage() {
  // A section without dishes would print a title over nothing: skip it, and
  // its tab, until the data has items.
  const sections = menu.filter((section) => section.items.length > 0);

  return (
    <>
      <section className={cn(styles.hero, "grain")} aria-labelledby="menu-title">
        <div className="container">
          <h1 id="menu-title" className={styles.title}>
            Il menu<span>.</span>
          </h1>
          <p className={styles.lead}>
            Dalla piastra al tavolo, dagli Stati Uniti a Tokyo passando per la Puglia. Scegli,
            condividi, ripeti.
          </p>
        </div>
      </section>

      {sections.length > 0 && (
        <nav className={styles.tabs} aria-label="Sezioni del menu">
          <ul role="list" className="container">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className={cn("container", styles.board)}>
        {siteConfig.draftMarkers && (
          <p className={cn("mono prose", styles.draftNote)} role="note">
            <span aria-hidden="true">●</span> Bozza: piatti e prezzi ricostruiti dalle schede
            pubbliche ({menuUpdatedAt}). Da confermare con il locale prima della pubblicazione.
          </p>
        )}

        {sections.length === 0 && (
          <div className={styles.empty} role="status">
            <h2>Il menu si sta scrivendo.</h2>
            <p>
              Stiamo aggiornando piatti e prezzi. Nel frattempo chiamaci o passa in Via Brancaccio:
              in sala te lo raccontiamo a voce.
            </p>
          </div>
        )}

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={styles.section}
            aria-labelledby={`${section.id}-title`}
          >
            <header className={styles.sectionHead}>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <p className={cn("mono", styles.tagline)}>{section.tagline}</p>
              {section.note && <p className={styles.note}>{section.note}</p>}
            </header>

            <ul role="list" className={styles.items}>
              {section.items.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.id}
                  className={styles.item}
                  delay={index % 4}
                  variant="fade"
                >
                  <div className={styles.itemRow}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    {item.price !== undefined && (
                      <>
                        <span className={styles.leader} aria-hidden="true" />
                        <p className={styles.price}>
                          <span className="sr-only">Prezzo: </span>
                          {formatPrice(item.price)}
                          <span aria-hidden="true">€</span>
                          <span className="sr-only"> euro</span>
                          <DraftMark verified={item.verified} note="Prezzo da confermare" />
                        </p>
                      </>
                    )}
                  </div>
                  {item.description && <p className={styles.itemDesc}>{item.description}</p>}
                  {item.tags && item.tags.length > 0 && (
                    <ul role="list" className={styles.tags}>
                      {item.tags.map((tag) => (
                        <li key={tag} className={styles[`tag-${tag.replace(/\s/g, "-")}`]}>
                          {tagLabels[tag]}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </ul>

            {section.id === "smash" && extras.length > 0 && (
              <p className={cn("mono prose", styles.extras)}>
                Extra:{" "}
                {extras.map((extra) => `${extra.name} +${formatPrice(extra.price)} €`).join(" · ")}
              </p>
            )}
          </section>
        ))}

        <aside className={styles.order} aria-labelledby="order-title">
          <h2 id="order-title">Fame adesso?</h2>
          <p>
            Ordina a domicilio o da asporto con l&apos;app {venue.ordering.appName}, oppure
            chiamaci.
          </p>
          <div className={styles.orderActions}>
            <ButtonLink href={venue.ordering.ios} variant="ink" icon="apple">
              App Store
            </ButtonLink>
            <ButtonLink href={venue.ordering.android} variant="ink" icon="play">
              Google Play
            </ButtonLink>
            <ButtonLink href={telHref(venue.phone.value)} variant="paper" icon="phone">
              Chiama
            </ButtonLink>
          </div>
          <p className="mono prose">
            Allergeni e intolleranze: chiedi allo staff, ti diciamo tutto su ogni piatto.
          </p>
        </aside>
      </div>

      <JsonLd
        data={[
          menuJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
          ]),
        ]}
      />
    </>
  );
}
