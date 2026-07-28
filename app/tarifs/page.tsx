import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Les formules tarifaires de Studio Lueur, transparentes et sans surprise.",
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Tarifs
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-bone md:text-5xl">
        Des formules claires, adaptées à votre projet.
      </h1>
      <p className="mt-4 max-w-xl font-body text-bone/60">
        Chaque devis est personnalisé après un court échange sur vos besoins.
        Les montants ci-dessous sont indicatifs.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              plan.featured
                ? "border-gold bg-gradient-to-b from-gold/10 to-transparent"
                : "border-white/10"
            }`}
          >
            {plan.featured && (
              <span className="mb-4 inline-block w-fit rounded-full bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-950">
                Le plus choisi
              </span>
            )}
            <h2 className="font-display text-2xl text-bone">{plan.name}</h2>
            <p className="mt-2 font-body text-sm text-bone/60">
              {plan.description}
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-3xl text-bone">
                {plan.price}
              </span>
              {plan.unit && (
                <span className="font-mono text-sm text-bone/50">
                  {plan.unit}
                </span>
              )}
            </div>
            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="font-body text-sm text-bone/75">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-semibold transition-transform hover:scale-[1.02] ${
                plan.featured
                  ? "bg-gold text-ink-950"
                  : "border border-bone/20 text-bone hover:border-gold/50 hover:text-gold"
              }`}
            >
              Demander un devis
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
