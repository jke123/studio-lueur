import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mariage, portrait, corporate, événementiel, mode — les prestations de Studio Lueur.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Services
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-bone md:text-5xl">
        Un service pour chaque instant qui compte.
      </h1>

      <div className="mt-16 divide-y divide-white/5 border-y border-white/5">
        {services.map((s) => (
          <div
            key={s.title}
            className="grid gap-6 py-10 md:grid-cols-[1fr_2fr_auto] md:items-center"
          >
            <h2 className="font-display text-2xl text-bone">{s.title}</h2>
            <p className="font-body text-sm leading-relaxed text-bone/65">
              {s.description}
              <span className="mt-2 block font-mono text-[11px] text-gold/70">
              </span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-body text-sm text-bone/70 hover:text-gold"
            >
              Réserver <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/tarifs"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
        >
          Voir les tarifs
        </Link>
      </div>
    </section>
  );
}
