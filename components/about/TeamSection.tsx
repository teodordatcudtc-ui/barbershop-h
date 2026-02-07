'use client';

import { motion } from 'framer-motion';

export function TeamSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg-elevated"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="team-heading"
          className="font-heading text-3xl sm:text-4xl uppercase tracking-widest text-accent-secondary mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Echipa
        </motion.h2>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Echipa Barbershop H este formată din frizeri pasionați, cu experiență în tunsori clasice și îngrijirea bărbei. Lucrăm împreună pentru a oferi un serviciu constant și plăcut la fiecare vizită.
          </p>
          <p className="text-text-muted leading-relaxed">
            Ne poți vizita oricând la Aleea Huedin 3 pentru a ne cunoaște și a discuta despre ce stil ți se potrivește. Așteptăm cu plăcere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
