import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galerie plein écran de Studio Lueur — mariage, portrait, corporate, événementiel et mode.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Galerie
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-bone md:text-5xl">
        Un aperçu de nos univers.
      </h1>
      <p className="mt-4 max-w-xl font-body text-bone/60">
        Filtrez par catégorie, ouvrez une image en plein écran et naviguez au
        clavier avec les flèches gauche et droite.
      </p>
      <div className="mt-12">
        <GalleryClient />
      </div>
    </section>
  );
}
