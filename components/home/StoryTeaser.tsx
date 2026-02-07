'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function StoryTeaser() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg-elevated"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Asymmetric: logo left, content right */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <motion.div
              className="w-40 h-40 rounded-full border-2 border-accent/30 flex items-center justify-center bg-bg/50"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              aria-hidden
            >
              <span className="font-heading font-bold text-4xl text-accent-secondary">H</span>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <h2
              id="story-heading"
              className="font-heading text-accent-secondary text-3xl sm:text-4xl uppercase tracking-widest mb-6"
            >
              Povestea noastră
            </h2>
            <motion.p
              className="font-display text-2xl sm:text-3xl text-text mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Pe scurt: suntem aici pentru tine.
            </motion.p>
            <motion.p
              className="text-text-muted text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Barbershop H este locul unde tradiția frizeriei clasice se întâlnește cu un serviciu atent la detalii. Fiecare vizită contează – de la tuns la barbă și îngrijire. Ne găsești pe Aleea Huedin 3, într-un ambient relaxat, dedicat bărbaților.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/despre-noi"
                className="inline-block font-heading text-sm uppercase tracking-widest text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated rounded"
              >
                Citește mai mult →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
