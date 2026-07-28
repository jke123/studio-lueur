import Link from "next/link";
import { ArrowLeft, Aperture } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <Aperture className="h-12 w-12 text-gold" strokeWidth={1.2} />
      <span className="mt-6 font-mono text-sm tracking-[0.3em] text-gold">
        404
      </span>
      <h1 className="mt-3 font-display text-4xl text-bone md:text-5xl">
        Hors champ.
      </h1>
      <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-bone/60">
        La page que vous cherchez n&apos;existe pas, ou a été déplacée hors du
        cadre. Revenez à l&apos;accueil pour continuer votre visite.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
      >
        <ArrowLeft className="h-4 w-4" /> Retour à l&apos;accueil
      </Link>
    </section>
  );
}
