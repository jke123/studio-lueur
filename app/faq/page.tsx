import type { Metadata } from "next";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions fréquentes sur les prestations de Studio Lueur.",
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        FAQ
      </span>
      <h1 className="mt-3 font-display text-4xl text-bone md:text-5xl">
        Questions fréquentes
      </h1>
      <div className="mt-14">
        <FaqAccordion />
      </div>
    </section>
  );
}
