import localFont from "next/font/local";

/**
 * Self-hosted fonts (no runtime request to Google): both are OFL licensed,
 * see src/assets/fonts/LICENSE-*.
 *
 * Bricolage Grotesque — variable (wght 200–800, wdth 75–100, opsz 12–96):
 *   condensed + heavy for the display type, regular width for body copy.
 * IBM Plex Mono — the voice of the receipt: labels, prices, stamps.
 */
export const bricolage = localFont({
  src: "../assets/fonts/BricolageGrotesque-Variable.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
  preload: true,
  declarations: [{ prop: "font-stretch", value: "75% 100%" }],
  fallback: ["system-ui", "Arial"],
});

export const plexMono = localFont({
  src: [
    { path: "../assets/fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400" },
    { path: "../assets/fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "Menlo", "monospace"],
});
