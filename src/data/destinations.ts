import type { Destination } from "@/types";

/**
 * "Cucina internazionale veloce": each signature dish is a stamp on the
 * passport. Dishes come from the public menu; origins and coordinates are
 * real places, used as an editorial device.
 */
export const destinations: Destination[] = [
  {
    id: "smash",
    dish: "Smash burger",
    origin: "Bari, Picone",
    coords: "41.1076° N · 16.8621° E",
    line: "Il nostro timbro di casa. Carne schiacciata sulla piastra rovente, bordo croccante, cheddar che cola.",
    tone: "ketchup",
  },
  {
    id: "pastrami",
    dish: "Pastrami",
    origin: "Lower East Side, NYC",
    coords: "40.7150° N · 73.9843° W",
    line: "Dal deli newyorkese al bun e al toast. Tagliato alto, senza fare complimenti.",
    tone: "paper",
  },
  {
    id: "gyoza",
    dish: "Gyoza di verdure",
    origin: "Tokyo",
    coords: "35.6762° N · 139.6503° E",
    line: "Piastra, vapore, verdure grigliate. Il giro del mondo comincia da un raviolo.",
    tone: "pickle",
  },
  {
    id: "nachos",
    dish: "Nachos & guacamole",
    origin: "Città del Messico",
    coords: "19.4326° N · 99.1332° W",
    line: "Croccanti al centro del tavolo. Si allungano le mani, si fa amicizia.",
    tone: "mustard",
  },
  {
    id: "caciocavallo",
    dish: "Patatine caciocavallo & tartufo",
    origin: "Murge, Puglia",
    coords: "40.8250° N · 16.4000° E",
    line: "Il ritorno a casa. Caciocavallo e salsa al tartufo sulle patatine: la frontiera è questa.",
    tone: "ink",
  },
  {
    id: "cheesecake",
    dish: "NY Cheesecake",
    origin: "Brooklyn, NYC",
    coords: "40.6782° N · 73.9442° W",
    line: "L'ultimo timbro. C'è anche la versione Okay, per chi non sa scegliere.",
    tone: "paper",
  },
];
