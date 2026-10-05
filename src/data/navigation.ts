import type { NavItem } from "@/types";
import { getUpcomingEvents } from "@/lib/events";

const base: NavItem[] = [
  { label: "Menu", href: "/menu" },
  { label: "Il club", href: "/#club" },
  { label: "Rullino", href: "/#rullino" },
  { label: "A casa", href: "/#a-casa" },
  { label: "Dove & quando", href: "/info" },
];

/** "Serate" appears only when there is at least one event in the data. */
export const navigation: NavItem[] =
  getUpcomingEvents().length > 0
    ? [...base.slice(0, 2), { label: "Serate", href: "/#serate" }, ...base.slice(2)]
    : base;
