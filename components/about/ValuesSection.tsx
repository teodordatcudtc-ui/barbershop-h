'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Calitate',
    content:
      'Folosim produse de încredere și tehnici care rezistă în timp. Fiecare tuns și fiecare barbă sunt făcute cu același nivel de atenție.',
  },
  {
    title: 'Atmosferă',
    content:
      'Spațiul este gândit pentru bărbați care apreciază liniștea și un serviciu fără grabă. Veniți să vă simțiți bine, nu doar să ieșiți tuns.',
  },
  {
    title: 'Relație',
    content:
      'Încurajăm vizitele regulate și cunoaștem preferințele clienților noștri. Un barbershop de cartier înseamnă și o echipă cu care te înțelegi.',
  },
  {
    title: 'Tradiție',
    content:
      'Respectăm meseria clasică de frizer: tunsori precise, contur de barbă îngrijit și un ritual pe care îl prețuim la fel de mult ca rezultatul final.',
  },
];

export function ValuesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="values-heading"
          className="font-heading text-3xl sm:text-4xl uppercase tracking-widest text-accent-secondary mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Valorile noastre
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {values.map((item, i) => (
            <motion.article
              key={item.title}
              className="border border-white/10 rounded-sm p-6 lg:p-8 bg-bg-elevated/50 hover:border-accent/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-heading text-lg uppercase tracking-wider text-accent mb-3">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.content}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
