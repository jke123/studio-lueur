import type { Metadata } from "next";
import Image from "next/image";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "À propos",
  description: `L'histoire, les valeurs et l'équipe de ${studio.name}.`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        À propos
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-bone md:text-5xl">
        L&apos;histoire de {studio.name}
      </h1>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5">
          <Image
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000&q=80"
            alt="Photographe de Studio Lueur en séance"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          {studio.story.map((p, i) => (
            <p key={i} className="font-body leading-relaxed text-bone/70">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Nos valeurs
        </h2>
        <div className="mt-6 grid gap-8 border-t border-white/5 pt-8 sm:grid-cols-2">
          {studio.values.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl text-bone">{v.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-bone/60">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          L&apos;équipe
        </h2>
        <div className="mt-6 grid gap-8 border-t border-white/5 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {studio.team.map((member) => (
            <div key={member.name}>
              <h3 className="font-display text-lg text-bone">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-gold/80">
                {member.role}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-bone/60">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
