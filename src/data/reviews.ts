import type { Review } from "@/types";

/**
 * Only verbatim quotes are printed as quotes. Everything else is summarised
 * as "what people mention most" and never attributed to a specific person.
 */
export const reviews: Review[] = [
  {
    id: "ta-best-smash",
    quote: "Miglior smash burger in assoluto",
    source: "Titolo di una recensione su TripAdvisor",
    url: "https://www.tripadvisor.it/ShowUserReviews-g187874-d32858582-r1008745831-Okay_Bari_Social_Food_Club-Bari_Province_of_Bari_Puglia.html",
    verbatim: true,
  },
];

/** Recurring themes in public reviews (TripAdvisor, aggregators). */
export const reviewThemes = [
  "Gli smash burger",
  "Il pastrami toast",
  "Le patatine caciocavallo & tartufo",
  "Lo staff giovane e attento",
  "Il servizio veloce",
  "L'atmosfera da diner",
];
