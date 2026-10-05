"use client";

import { useSyncExternalStore } from "react";
import type { Weekday } from "@/types";

const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "Europe/Rome",
});

// Re-check every minute so a page left open past midnight moves on.
function subscribe(callback: () => void) {
  const timer = window.setInterval(callback, 60_000);
  return () => window.clearInterval(timer);
}

/**
 * Today's weekday in Bari's time zone. null on the server and during
 * hydration: the page is prerendered, so "today" only exists in the browser.
 */
export function useToday(): Weekday | null {
  return useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()) as Weekday,
    () => null,
  );
}
