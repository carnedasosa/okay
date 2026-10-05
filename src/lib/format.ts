import type { OpeningSlot, Weekday } from "@/types";

export const weekdays: Weekday[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const dayLabels: Record<Weekday, { short: string; long: string }> = {
  Monday: { short: "lun", long: "Lunedì" },
  Tuesday: { short: "mar", long: "Martedì" },
  Wednesday: { short: "mer", long: "Mercoledì" },
  Thursday: { short: "gio", long: "Giovedì" },
  Friday: { short: "ven", long: "Venerdì" },
  Saturday: { short: "sab", long: "Sabato" },
  Sunday: { short: "dom", long: "Domenica" },
};

export function dayLabel(day: Weekday, variant: "short" | "long" = "long"): string {
  return dayLabels[day][variant];
}

/** "+39 327 476 3717" -> "tel:+393274763717" */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** "+39 327 476 3717" -> "https://wa.me/393274763717" */
export function whatsappHref(phone: string, text?: string): string {
  const number = phone.replace(/\D/g, "");
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${number}${query}`;
}

/** "+39 327 476 3717" -> "327 476 3717" for compact display. */
export function localPhone(phone: string): string {
  return phone.replace(/^\+39\s?/, "");
}

export function formatTimeRange(slot: OpeningSlot): string {
  return `${slot.opens}–${slot.closes}`;
}

/** Compact range: ["Wednesday".."Saturday"] -> "mer–sab". */
export function formatDays(days: Weekday[]): string {
  const sorted = [...days].sort((a, b) => weekdays.indexOf(a) - weekdays.indexOf(b));
  const groups: Weekday[][] = [];
  for (const day of sorted) {
    const last = groups.at(-1);
    if (last && weekdays.indexOf(day) - weekdays.indexOf(last.at(-1)!) === 1) {
      last.push(day);
    } else {
      groups.push([day]);
    }
  }
  return groups
    .map((group) =>
      group.length > 2
        ? `${dayLabel(group[0], "short")}–${dayLabel(group.at(-1)!, "short")}`
        : group.map((day) => dayLabel(day, "short")).join(", "),
    )
    .join(", ");
}

/** One row per weekday; `ranges` is empty when closed. */
export function weeklySchedule(slots: OpeningSlot[]): Array<{ day: Weekday; ranges: string[] }> {
  return weekdays.map((day) => ({
    day,
    ranges: slots.filter((slot) => slot.days.includes(day)).map(formatTimeRange),
  }));
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}
