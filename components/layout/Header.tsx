'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-white/5"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link
            href="/"
            className="font-heading font-semibold text-xl tracking-tight text-text hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label="Barbershop H – Pagina principală"
          >
            Barbershop H
          </Link>

          <nav
            className="hidden md:flex items-center gap-10"
            aria-label="Navigație principală"
          >
            {navItems.map((item, i) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <span key={item.href} className="relative flex items-center gap-1">
                  {i === 0 && (
                    <span
                      className="absolute -left-4 w-2 h-px bg-accent/60"
                      aria-hidden
                    />
                  )}
                  <Link
                    href={item.href}
                    className={`font-heading text-sm uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                      isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {i === navItems.length - 1 && (
                    <span
                      className="absolute -right-4 w-2 h-px bg-accent/60"
                      aria-hidden
                    />
                  )}
                </span>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-text-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Închide meniul' : 'Deschide meniul'}
          >
            <span className="sr-only">{mobileOpen ? 'Închide' : 'Meniu'}</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-bg-elevated"
          >
            <nav
              className="px-4 py-6 flex flex-col gap-4"
              aria-label="Navigație mobilă"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading text-sm uppercase tracking-widest ${
                      isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
