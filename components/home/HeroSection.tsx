'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section
      className="relative min-h-[42vh] sm:min-h-[55vh] lg:min-h-[90vh] flex items-center overflow-hidden pt-20 pb-10 sm:pb-14 lg:pb-0"
      aria-label="Secțiune principală"
    >
      {/* Background: pune în /public/hero-bg.jpg (sau hero-bg.webp) imaginea ta – se afișează automat */}
      <div
        className="absolute inset-0 bg-bg bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='1' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.p
            className="font-display text-accent text-base sm:text-xl tracking-wide mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frizerie de cartier
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-accent-secondary leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            BARBERSHOP H
          </motion.h1>
          <motion.p
            className="mt-3 sm:mt-6 text-text-muted text-sm sm:text-lg lg:text-xl max-w-xl leading-relaxed line-clamp-3 sm:line-clamp-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            În inima Bucureștiului, oferim tunsori clasice, îngrijire de barbă și o atmosferă dedicată bărbaților care apreciază detaliul și tradiția.
          </motion.p>
          <motion.div
            className="mt-5 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-accent text-accent font-heading text-sm uppercase tracking-widest hover:bg-accent hover:text-bg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
            >
              Programează-te
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
