'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CtaBlock() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-accent-secondary/5" aria-hidden />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          id="cta-heading"
          className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest text-accent-secondary mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pregătit pentru o experiență nouă?
        </motion.h2>
        <motion.p
          className="text-text-muted text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Programează o programare sau vizitează-ne la Aleea Huedin 3, București.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accent text-accent font-heading text-sm uppercase tracking-widest hover:bg-accent hover:text-bg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
