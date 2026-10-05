import type { VenueEvent } from "@/types";

/**
 * No public event (DJ set, serate, collaborazioni) was found during research,
 * so the list is empty and the events section is not rendered.
 *
 * To publish an event add an entry here: the home section, the navigation
 * entry and the schema.org `Event` markup appear automatically. Past events
 * are filtered out at build time.
 *
 * Example:
 * {
 *   id: "smash-night-2026-11",
 *   title: "Smash Night",
 *   startDate: "2026-11-14T20:00:00+01:00",
 *   description: "Una sera, un burger fuori menu.",
 *   free: true,
 * }
 */
export const events: VenueEvent[] = [];
