'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Service } from '@/data/services';

export function MotionServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      className="group border border-white/10 rounded-sm p-6 lg:p-8 bg-bg-elevated/50 hover:border-accent/30 transition-colors flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <h2 className="font-heading text-xl uppercase tracking-wider text-text group-hover:text-accent transition-colors">
        {service.title}
      </h2>
      <p className="mt-2 text-text-muted flex-1">{service.shortDescription}</p>
      {(service.duration || service.price) && (
        <p className="mt-3 text-sm text-accent/90">
          {[service.duration, service.price].filter(Boolean).join(' · ')}
        </p>
      )}
      <Link
        href={`/servicii/${service.slug}`}
        className="mt-4 inline-block font-heading text-sm uppercase tracking-widest text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated rounded"
      >
        Detalii serviciu →
      </Link>
    </motion.article>
  );
}
