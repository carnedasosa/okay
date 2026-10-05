import { events } from "@/data/events";
import type { VenueEvent } from "@/types";

/** Events that have not ended yet, soonest first. Evaluated at build time. */
export function getUpcomingEvents(now: Date = new Date()): VenueEvent[] {
  return events
    .filter((event) => new Date(event.endDate ?? event.startDate) >= now)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

const dateFormatter = new Intl.DateTimeFormat("it-IT", {
  weekday: "short",
  day: "numeric",
  month: "long",
  timeZone: "Europe/Rome",
});

const timeFormatter = new Intl.DateTimeFormat("it-IT", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Rome",
});

export function formatEventDate(iso: string): { date: string; time: string } {
  const date = new Date(iso);
  return { date: dateFormatter.format(date), time: timeFormatter.format(date) };
}
