'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      <div className="absolute inset-0 bg-bg-elevated" aria-hidden />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bg to-transparent" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            className="font-display text-accent text-lg tracking-wide mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Barbershop H
          </motion.p>
          <motion.h1
            id="about-hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-accent-secondary uppercase tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Despre noi
          </motion.h1>
          <motion.p
            className="mt-6 text-text-muted text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Suntem o frizerie de cartier care pune accent pe calitate, atmosferă și relația cu clienții. Fiecare vizită este tratată cu aceeași atenție la detalii.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
