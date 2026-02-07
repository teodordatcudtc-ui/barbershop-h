'use client';

import { motion } from 'framer-motion';

const blocks = [
  {
    title: 'Misiunea noastră',
    content:
      'Să oferim tunsori și îngrijire de barbă de calitate într-un mediu relaxat, unde fiecare client pleacă mulțumit și cu încredere în imaginea proprie.',
  },
  {
    title: 'Viziunea',
    content:
      'Să rămânem punctul de referință pentru bărbații din zonă care apreciază serviciul clasic, curat și personalizat, într-un spațiu dedicat doar lor.',
  },
];

export function MissionVision() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="mission-heading" className="sr-only">
          Misiune și viziune
        </h2>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {blocks.map((block, i) => (
            <motion.article
              key={block.title}
              className="relative pl-8 border-l-2 border-accent/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-heading text-lg uppercase tracking-widest text-accent mb-4">
                {block.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{block.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
