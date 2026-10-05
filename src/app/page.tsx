import { marqueeWords } from "@/data/club";
import { Club } from "@/components/sections/Club";
import { Delivery } from "@/components/sections/Delivery";
import { Events } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Passport } from "@/components/sections/Passport";
import { Rullino } from "@/components/sections/Rullino";
import { SmashAnatomy } from "@/components/sections/SmashAnatomy";
import { Visit } from "@/components/sections/Visit";
import { Voices } from "@/components/sections/Voices";

/**
 * Home narrative:
 * the question (hero) → what's on the plate (passport) → the signature
 * (smash) → the people (club) → proof (voices) → the vibe (rullino)
 * → at home (delivery) → [nights, when announced] → come by (visit).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        words={marqueeWords}
        label="Smash, pastrami, gyoza, nachos, caciocavallo e tartufo, cheesecake, birre, asporto, delivery"
      />
      <Passport />
      <SmashAnatomy />
      <Club />
      <Voices />
      <Marquee
        words={["Tagga @okay.bari", "Social food club", "Bari", "Picone"]}
        tone="mustard"
        reverse
        label="Tagga @okay.bari"
      />
      <Rullino />
      <Delivery />
      <Events />
      <Visit />
    </>
  );
}
