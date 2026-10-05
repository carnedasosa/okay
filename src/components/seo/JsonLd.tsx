import { serializeJsonLd } from "@/lib/schema";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders structured data as recommended by the Next.js docs. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
