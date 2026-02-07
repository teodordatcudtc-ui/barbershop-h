'use client';

import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Interior' },
  { id: 2, title: 'Stații' },
  { id: 3, title: 'Detaliu' },
  { id: 4, title: 'Atmosferă' },
  { id: 5, title: 'Serviciu' },
  { id: 6, title: 'Finisare' },
];

export function GalleryGrid() {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4"
      aria-label="Galerie imagini"
    >
      {items.map((item, i) => (
        <motion.figure
          key={item.id}
          className="relative overflow-hidden rounded-sm bg-bg-elevated border border-white/10 aspect-[4/3]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <div className="absolute inset-0 bg-accent-secondary/20 flex items-center justify-center text-accent/60 font-display text-sm md:text-base">
            {item.title}
          </div>
          <figcaption className="sr-only">{item.title}</figcaption>
        </motion.figure>
      ))}
    </section>
  );
}
