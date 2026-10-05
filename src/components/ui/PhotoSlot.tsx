import Image from "next/image";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";
import type { GalleryShot } from "@/types";
import styles from "./PhotoSlot.module.css";

type PhotoSlotProps = {
  shot: GalleryShot;
  index?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renders the real photo when `shot.src` exists. Otherwise an art-directed
 * placeholder: brand colour, film-frame number and the brief describing the
 * photo that must replace it. The brief is visible only in draft mode.
 */
export function PhotoSlot({
  shot,
  index,
  sizes = "(min-width: 64rem) 33vw, 90vw",
  priority = false,
  className,
}: PhotoSlotProps) {
  const frame = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <figure
      className={cn(styles.slot, styles[shot.tone], !shot.src && "grain", className)}
      style={{ aspectRatio: shot.ratio }}
    >
      {shot.src ? (
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={shot.alt}>
          <span className={styles.crop} aria-hidden="true" />
          <span className={styles.glyph} aria-hidden="true">
            OK
          </span>
          {siteConfig.draftMarkers && (
            <span className={cn("mono", styles.brief)} aria-hidden="true">
              Foto: {shot.brief}
            </span>
          )}
        </div>
      )}
      {frame && (
        <figcaption className={cn("mono", styles.frame)} aria-hidden="true">
          {frame}
          <span>A</span>
        </figcaption>
      )}
    </figure>
  );
}
