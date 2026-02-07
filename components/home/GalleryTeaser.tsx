'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const teaserImages = [
  { id: 1, title: 'Interior' },
  { id: 2, title: 'Atmosferă' },
  { id: 3, title: 'Serviciu' },
];

export function GalleryTeaser() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg"
      aria-labelledby="galerie-teaser-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2
            id="galerie-teaser-heading"
            className="font-heading text-3xl sm:text-4xl uppercase tracking-widest text-accent-secondary"
          >
            Galerie
          </h2>
          <Link
            href="/galerie"
            className="font-heading text-sm uppercase tracking-widest text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          >
            Vezi toate fotografiile →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {teaserImages.map((item, i) => (
            <motion.div
              key={item.id}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-bg-elevated border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="absolute inset-0 bg-accent-secondary/20 flex items-center justify-center">
                <span className="text-accent/70 font-display text-lg">{item.title}</span>
              </div>
              <Link
                href="/galerie"
                className="absolute inset-0 flex items-center justify-center bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                aria-label={`Vezi ${item.title} în galerie`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
