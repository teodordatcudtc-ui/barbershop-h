'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export function ServicesTeaser() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2
            id="services-heading"
            className="font-heading text-3xl sm:text-4xl uppercase tracking-widest text-accent-secondary"
          >
            Servicii
          </h2>
          <Link
            href="/servicii"
            className="font-heading text-sm uppercase tracking-widest text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          >
            Toate serviciile →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 3).map((service, i) => (
            <motion.article
              key={service.slug}
              className="group border border-white/10 rounded-sm p-6 lg:p-8 bg-bg-elevated/50 hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-heading text-lg uppercase tracking-wider text-text group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted line-clamp-2">
                {service.shortDescription}
              </p>
              {(service.duration || service.price) && (
                <p className="mt-3 text-sm text-accent/90">
                  {[service.duration, service.price].filter(Boolean).join(' · ')}
                </p>
              )}
              <Link
                href={`/servicii/${service.slug}`}
                className="mt-4 inline-block font-heading text-xs uppercase tracking-widest text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated rounded"
              >
                Detalii →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
