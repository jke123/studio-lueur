import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Découvrez les réalisations de Studio Lueur : mariages, campagnes corporate et lookbooks mode.",
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Portfolio
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-bone md:text-5xl">
        Chaque projet est une histoire complète.
      </h1>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {portfolioProjects.map((p) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="aperture-corner group block overflow-hidden rounded-2xl border border-white/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
                {p.category} · {p.client} · {p.year}
              </span>
              <h2 className="mt-2 font-display text-2xl text-bone">
                {p.title}
              </h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-bone/60">
                {p.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
