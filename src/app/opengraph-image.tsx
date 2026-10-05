import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { venue } from "@/data/venue";

export const alt =
  "OKAY Bari Social Food Club · Cucina internazionale veloce, Via Brancaccio 18, Bari";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [display, mono] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/og/bricolage-grotesque-latin-800-normal.woff")),
    readFile(join(process.cwd(), "src/assets/og/ibm-plex-mono-latin-500-normal.woff")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 64px",
        background: "#15130F",
        color: "#F3EDE1",
        fontFamily: "Mono",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 3 }}
      >
        <span>SOCIAL FOOD CLUB · BARI</span>
        <span style={{ color: "#F5B21B" }}>VIA BRANCACCIO 18</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontFamily: "Display", fontSize: 40, color: "#F5B21B" }}>
          «Dove mangiamo stasera?»
        </span>
        <div
          style={{
            display: "flex",
            fontFamily: "Display",
            fontSize: 300,
            lineHeight: 0.85,
            letterSpacing: -14,
          }}
        >
          OKAY<span style={{ color: "#CC2914" }}>.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          letterSpacing: 2,
        }}
      >
        <span>SMASH · PASTRAMI · GYOZA · NACHOS</span>
        <span
          style={{
            background: "#CC2914",
            color: "#F3EDE1",
            padding: "10px 20px",
            borderRadius: 999,
          }}
        >
          {venue.tagline.toUpperCase()}
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Display", data: display, weight: 800, style: "normal" },
        { name: "Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
