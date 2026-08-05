import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Aperture } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  studio,
  services,
  portfolioProjects,
  testimonials,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Accueil",
  description: studio.tagline,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Portrait de mariage en lumière dorée"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 md:px-10">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            <Aperture className="h-4 w-4" />
            <span>f/1.8 · ISO 400 · Abomey-Calavi, Bénin</span>
          </div>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[1.05] text-bone md:text-7xl">
            {studio.tagline}
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-bone/70 md:text-lg">
            Studio Lueur photographie mariages, portraits, marques et
            collections mode depuis {studio.founded}, avec une exigence
            constante&nbsp;: chaque image doit mériter d&apos;être regardée
            encore dans vingt ans.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Voir le portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-7 py-3.5 font-body text-sm font-semibold text-bone transition-colors hover:border-gold/50 hover:text-gold"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="h-10 w-px animate-pulse bg-gold/50" />
        </div>
      </section>

      {/* Stats */}
      <RevealSection className="border-y border-white/5 bg-ink-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
          {studio.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 font-body text-sm text-bone/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Services preview */}
      <RevealSection className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Prestations
            </span>
            <h2 className="mt-3 max-w-lg font-display text-3xl text-bone md:text-4xl">
              Cinq univers, une même exigence de lumière.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-body text-sm text-bone/70 hover:text-gold"
          >
            Tous les services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col justify-between bg-ink-950 p-6 transition-colors hover:bg-ink-900"
            >
              <div>
                <h3 className="font-display text-lg text-bone">{s.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-bone/60">
                  {s.description}
                </p>
              </div>
              <p className="mt-6 font-mono text-[11px] text-gold/70">
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Portfolio preview */}
      <RevealSection className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Réalisations
            </span>
            <h2 className="mt-3 max-w-lg font-display text-3xl text-bone md:text-4xl">
              Des projets pensés comme des histoires.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-body text-sm text-bone/70 hover:text-gold"
          >
            Tout le portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {portfolioProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="aperture-corner group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/5"
            >
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  {p.category} · {p.year}
                </span>
                <h3 className="mt-2 font-display text-xl text-bone">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </RevealSection>

      {/* Testimonials */}
      <RevealSection className="border-y border-white/5 bg-ink-900">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Témoignages
          </span>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.author}>
                <p className="font-display text-lg italic leading-relaxed text-bone/85">
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </p>
                <p className="mt-4 font-mono text-xs text-gold/80">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="mx-auto max-w-7xl px-6 py-28 text-center md:px-10">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl text-bone md:text-5xl">
          Racontons ensemble votre prochain moment important.
        </h2>
        <div className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Prendre contact
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
