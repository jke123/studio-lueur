"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
} from "@/lib/data";

export default function GalleryClient() {
  const [filter, setFilter] = useState<GalleryCategory | "Tout">("Tout");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    filter === "Tout"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i + 1) % filtered.length
      ),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {(["Tout", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-5 py-2 font-body text-sm transition-colors ${
              filter === cat
                ? "border-gold bg-gold text-ink-950"
                : "border-white/15 text-bone/70 hover:border-gold/50 hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((img, i) => (
          <motion.button
            key={img.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveIndex(i)}
            className="aperture-corner group relative mb-4 block w-full overflow-hidden rounded-xl border border-white/5"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 rounded-full bg-ink-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold backdrop-blur-sm">
              {img.category}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && filtered[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              aria-label="Fermer"
              onClick={close}
              className="absolute right-6 top-6 text-bone/70 hover:text-gold"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              aria-label="Image précédente"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 text-bone/70 hover:text-gold md:left-8"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <motion.div
              key={filtered[activeIndex].id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[activeIndex].src}
                alt={filtered[activeIndex].alt}
                width={1400}
                height={1000}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
            <button
              aria-label="Image suivante"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 text-bone/70 hover:text-gold md:right-8"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
