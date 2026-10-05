import type { Venue } from "@/types";

/**
 * Single source of truth for the venue.
 *
 * Research notes (October 2026), see docs/RESEARCH.md for the full log:
 * - name, address, Instagram, Linktree and the OkayBari app are consistent
 *   across every source found;
 * - phone numbers and opening hours differ between sources: they are marked
 *   `verified: false` until the owner confirms them.
 */
export const venue: Venue = {
  name: "OKAY Bari Social Food Club",
  shortName: "OKAY",
  tagline: "Cucina internazionale veloce",
  description:
    "Social food club a Bari, quartiere Picone. Smash burger, pastrami, gyoza, nachos e cheesecake: cucina internazionale veloce, in sala, da asporto o a domicilio con l'app OkayBari.",
  category: "Social food club",
  cuisine: ["Internazionale", "Americana", "Burger", "Street food"],
  priceRange: {
    value: "€€",
    verified: false,
    source: "Sluurpy / TripAdvisor: 20–30 € a persona",
  },
  address: {
    street: "Via Francesco Maria Brancaccio, 18",
    postalCode: "70124",
    city: "Bari",
    region: "BA",
    country: "IT",
    neighbourhood: "Picone",
  },
  geo: { lat: 41.1075962, lng: 16.8620555 },
  phone: {
    value: "+39 327 476 3717",
    verified: false,
    source: 'Bio Instagram / snippet Sluurpy ("per prenotazioni o per ordinare")',
  },
  phoneAlt: {
    value: "+39 351 341 2463",
    verified: false,
    source: "Scheda TripAdvisor",
  },
  email: { value: null, verified: false, source: "Non trovata" },
  whatsapp: { value: null, verified: false, source: "Non trovato" },
  hours: {
    value: [
      {
        days: ["Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "19:00",
        closes: "24:00",
      },
    ],
    verified: false,
    source:
      "Google/Instagram (mer–sab 19–24). TripAdvisor riporta 18–24 tutti i giorni, altre schede mer–dom 18–24 con pranzo il sabato.",
  },
  social: {
    instagram: {
      handle: "okay.bari",
      url: "https://www.instagram.com/okay.bari/",
    },
    linktree: "https://linktr.ee/okay.bari",
    tiktok: null,
    facebook: null,
  },
  ordering: {
    appName: "OkayBari",
    ios: "https://apps.apple.com/it/app/okaybari/id6741151017",
    android: "https://play.google.com/store/apps/details?id=com.seeyoufood.okaybari",
    web: {
      value: "https://www.okaybari.store/",
      verified: false,
      source: 'Indicizzato con il claim "Cucina internazionale veloce"',
    },
  },
  maps: {
    google:
      "https://www.google.com/maps/search/?api=1&query=OKAY+Bari+Social+Food+Club%2C+Via+Francesco+Maria+Brancaccio+18%2C+70124+Bari",
    apple: "https://maps.apple.com/place?place-id=ID4CF36F3AFA99CEC",
  },
  reservations: {
    value: "phone",
    verified: false,
    source: "Bio Instagram: prenotazioni e ordini al telefono",
  },
};
