import type { MetadataRoute } from "next";
import { venue } from "@/data/venue";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: venue.name,
    short_name: venue.shortName,
    description: venue.description,
    start_url: "/",
    display: "standalone",
    background_color: "#15130F",
    theme_color: "#15130F",
    lang: "it",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
