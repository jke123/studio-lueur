"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Loader d'ouverture — simule les lamelles d'un diaphragme d'objectif
 * qui s'ouvre pour révéler le site. C'est l'élément signature du design,
 * directement issu du vocabulaire visuel de la photographie.
 */
export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative flex items-center justify-center">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.span
                key={i}
                className="absolute h-16 w-1.5 origin-bottom bg-gold"
                style={{ rotate: `${i * (360 / 7)}deg` }}
                initial={{ scaleY: 0.15, opacity: 0.3 }}
                animate={{ scaleY: [0.15, 1, 0.15], opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
