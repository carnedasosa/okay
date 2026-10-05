"use client";

import type { CSSProperties, ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import styles from "./SmashAnatomy.module.css";

type Layer = {
  id: string;
  label: string;
  /** Position in the exploded stack: negative goes up. */
  offset: number;
  /** y of the label tag in the SVG. */
  tagY: number;
  art: ReactNode;
};

const BUN = "#EFA94A";
const BUN_DARK = "#C97F22";
const PATTY = "#4A2A1A";
const PATTY_CRUST = "#2B170D";
const CHEDDAR = "#F07A12";
const BACON = "#B8220F";
const PICKLE = "#4F7F5C";
const SAUCE = "#F6DFA8";

const patty = (y: number) => (
  <>
    <path
      d={`M44 ${y + 4} Q44 ${y} 60 ${y} H340 Q356 ${y} 356 ${y + 4} L360 ${y + 26} Q360 ${y + 34} 344 ${y + 34} H56 Q40 ${y + 34} 40 ${y + 26} Z`}
      fill={PATTY}
      className={styles.ol}
    />
    <path
      d={`M48 ${y + 6} C90 ${y + 2}, 120 ${y + 12}, 160 ${y + 5} S250 ${y + 12}, 300 ${y + 4} S350 ${y + 8}, 352 ${y + 6}`}
      stroke={PATTY_CRUST}
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {[70, 118, 170, 214, 262, 310].map((x, i) => (
      <circle key={x} cx={x} cy={y + 20 + (i % 2) * 6} r="2.4" fill={PATTY_CRUST} />
    ))}
  </>
);

const cheddar = (y: number) => (
  <path
    d={`M36 ${y} H364 L360 ${y + 8} L330 ${y + 8} L322 ${y + 24} L312 ${y + 8} L230 ${y + 8} L222 ${y + 30} L212 ${y + 8} L120 ${y + 8} L112 ${y + 20} L104 ${y + 8} L40 ${y + 8} Z`}
    fill={CHEDDAR}
    className={styles.ol}
  />
);

const layers: Layer[] = [
  {
    id: "bun-top",
    label: "Bun morbido",
    offset: -3,
    tagY: 70,
    art: (
      <>
        <path d="M40 112 Q36 40 200 34 Q364 40 360 112 Z" fill={BUN} className={styles.ol} />
        <path d="M40 112 Q40 104 52 102 H348 Q360 104 360 112 Z" fill={BUN_DARK} />
        {[
          [120, 66, -20],
          [168, 54, 10],
          [214, 58, -8],
          [262, 66, 18],
          [146, 84, 4],
          [236, 84, -14],
          [300, 86, 8],
          [96, 92, -6],
        ].map(([cx, cy, r]) => (
          <ellipse
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            rx="6"
            ry="2.6"
            fill="#F8ECCF"
            transform={`rotate(${r} ${cx} ${cy})`}
          />
        ))}
      </>
    ),
  },
  {
    id: "sauce",
    label: "Salsa baconnaise",
    offset: -2,
    tagY: 118,
    art: (
      <path
        d="M44 114 C80 124, 100 110, 140 120 S220 110, 260 121 S330 112, 356 116 L356 122 C320 128, 290 120, 250 127 S170 120, 130 127 S70 120, 44 124 Z"
        fill={SAUCE}
        className={styles.ol}
      />
    ),
  },
  {
    id: "pickles",
    label: "Pickles",
    offset: -1.2,
    tagY: 132,
    art: (
      <>
        {[96, 168, 240, 306].map((cx) => (
          <g key={cx}>
            <ellipse cx={cx} cy="132" rx="26" ry="6" fill={PICKLE} className={styles.ol} />
            <ellipse cx={cx} cy="131" rx="18" ry="3.4" fill="#86B07A" />
          </g>
        ))}
      </>
    ),
  },
  {
    id: "onion",
    label: "Cipolla",
    offset: -0.4,
    tagY: 141,
    art: (
      <path
        d="M56 141 C110 136, 150 146, 200 140 S300 146, 344 140"
        stroke="#EDE4F0"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="26 10"
      />
    ),
  },
  {
    id: "bacon",
    label: "Bacon croccante",
    offset: 0.4,
    tagY: 152,
    art: (
      <>
        <path
          d="M46 148 C80 140, 110 158, 150 148 S220 140, 256 150 S320 158, 354 147 L354 157 C320 167, 290 158, 256 160 S190 152, 150 158 S82 151, 46 158 Z"
          fill={BACON}
          className={styles.ol}
        />
        <path
          d="M54 152 C90 146, 116 158, 150 152 S220 146, 256 154 S320 158, 348 151"
          stroke="#F3A08F"
          strokeWidth="2"
          fill="none"
        />
      </>
    ),
  },
  {
    id: "cheddar-1",
    label: "Cheddar fuso",
    offset: 1.2,
    tagY: 166,
    art: cheddar(162),
  },
  {
    id: "patty-1",
    label: "Smash n°1",
    offset: 2,
    tagY: 190,
    art: patty(172),
  },
  {
    id: "cheddar-2",
    label: "Altro cheddar",
    offset: 2.8,
    tagY: 210,
    art: cheddar(206),
  },
  {
    id: "patty-2",
    label: "Smash n°2",
    offset: 3.6,
    tagY: 234,
    art: patty(216),
  },
  {
    id: "bun-bottom",
    label: "Bun, sotto",
    offset: 4.4,
    tagY: 266,
    art: (
      <>
        <path
          d="M42 252 H358 Q362 252 360 262 L354 280 Q350 290 336 290 H64 Q50 290 46 280 L40 262 Q38 252 42 252 Z"
          fill={BUN}
          className={styles.ol}
        />
        <path d="M42 252 H358 L356 258 H44 Z" fill={BUN_DARK} />
      </>
    ),
  },
];

const SPREAD = 26; // px per offset unit at full explosion

export function SmashAnatomy() {
  const reduced = usePrefersReducedMotion();
  const ref = useScrollProgress<HTMLElement>("--p", "through", !reduced);

  return (
    <section
      ref={ref}
      className={cn(styles.section, reduced && styles.static)}
      aria-labelledby="smash-title"
    >
      <div className={cn("container", styles.grid)}>
        <SectionHead
          className={styles.head}
          id="smash-title"
          kicker="Il piatto firma"
          title="Anatomia di uno smash."
          intro={
            <p>
              La carne va sulla piastra rovente e viene <em>schiacciata</em>: bordo croccante e
              caramellato, cuore succoso. Questo è il Bacon Burger Double, strato per strato.
            </p>
          }
        />
        <div className={styles.text}>
          <ol role="list" className={styles.legend}>
            {layers.map((layer, index) => (
              <li key={layer.id}>
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                {layer.label}
              </li>
            ))}
          </ol>
          <ButtonLink href="/menu#smash" variant="ink" icon="arrow" iconPosition="end">
            Tutti gli smash
          </ButtonLink>
        </div>

        <figure className={styles.figure}>
          <svg
            viewBox="0 -110 470 545"
            className={styles.svg}
            role="img"
            aria-labelledby="smash-svg-title"
          >
            <title id="smash-svg-title">
              Illustrazione esplosa del Bacon Burger Double: bun, salsa baconnaise, pickles,
              cipolla, bacon, cheddar e due hamburger smash.
            </title>
            <ellipse cx="200" cy="300" rx="170" ry="12" className={styles.shadow} />
            {layers.map((layer, index) => (
              <g
                key={layer.id}
                className={styles.layer}
                style={{ "--shift": `${layer.offset * SPREAD}px` } as CSSProperties}
              >
                {layer.art}
                <g className={styles.tag}>
                  <line x1="372" x2="404" y1={layer.tagY} y2={layer.tagY} />
                  <circle cx="420" cy={layer.tagY} r="13" />
                  <text x="420" y={layer.tagY} textAnchor="middle" dominantBaseline="central">
                    {String(index + 1).padStart(2, "0")}
                  </text>
                </g>
              </g>
            ))}
          </svg>
        </figure>
      </div>
    </section>
  );
}
