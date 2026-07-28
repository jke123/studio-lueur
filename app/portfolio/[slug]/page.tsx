import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { portfolioProjects } from "@/lib/data";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      images: [{ url: project.cover }],
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = portfolioProjects.findIndex(
    (p) => p.slug === params.slug
  );
  const nextProject =
    portfolioProjects[(currentIndex + 1) % portfolioProjects.length];

  return (
    <article>
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-12 md:px-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-body text-sm text-bone/70 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Retour au portfolio
          </Link>
          <span className="mt-6 block font-mono text-xs uppercase tracking-[0.3em] text-gold">
            {project.category} · {project.client} · {project.year}
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-bone md:text-6xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:px-10">
        <div>
          <h2 className="font-display text-2xl text-bone">L&apos;histoire</h2>
          <p className="mt-4 font-body leading-relaxed text-bone/70">
            {project.story}
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {project.images.map((src, i) => (
              <div
                key={src}
                className={`aperture-corner relative overflow-hidden rounded-xl border border-white/5 ${
                  i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} — photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 border-l-2 border-gold pl-6">
            <p className="font-display text-xl italic leading-relaxed text-bone/85">
              &laquo;&nbsp;{project.testimonial.quote}&nbsp;&raquo;
            </p>
            <p className="mt-3 font-mono text-xs text-gold/80">
              {project.testimonial.author}
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Objectifs
            </h3>
            <ul className="mt-4 space-y-3">
              {project.objectives.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="font-body text-sm text-bone/75">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Résultat
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-bone/75">
              {project.result}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-body text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Démarrer un projet similaire
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5">
        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="group flex items-center justify-between px-6 py-10 md:px-10"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Projet suivant
            </span>
            <h3 className="mt-2 font-display text-2xl text-bone">
              {nextProject.title}
            </h3>
          </div>
          <ArrowRight className="h-6 w-6 text-bone/50 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
        </Link>
      </div>
    </article>
  );
}
