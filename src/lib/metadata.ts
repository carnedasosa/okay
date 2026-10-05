import type { Metadata } from "next";
import { venue } from "@/data/venue";

type PageMeta = {
  title?: string;
  description: string;
  path: string;
};

/** Per-page metadata with canonical + OpenGraph + Twitter kept in sync. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = title ? `${title} · ${venue.shortName} Bari` : undefined;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      ...(fullTitle ? { title: fullTitle } : {}),
      description,
      url: path,
    },
    twitter: {
      ...(fullTitle ? { title: fullTitle } : {}),
      description,
    },
  };
}
