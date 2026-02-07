import Link from 'next/link';

const links = [
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

const legal = [
  { href: '/legal/privacy', label: 'Confidențialitate' },
  { href: '/legal/terms', label: 'Termeni și condiții' },
];

export function Footer() {
  return (
    <footer
      className="bg-bg-elevated border-t border-white/5 mt-auto"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <Link
              href="/"
              className="font-heading font-semibold text-lg text-text hover:text-accent transition-colors"
            >
              Barbershop H
            </Link>
            <p className="mt-3 text-sm text-text-muted max-w-xs">
              Frizerie de calitate în București. Tunsori clasice, barbă și îngrijire.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xs uppercase tracking-widest text-accent mb-4">
              Navigare
            </h3>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs uppercase tracking-widest text-accent mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-text-muted space-y-1">
              <p>Aleea Huedin 3</p>
              <p>077120 București</p>
              <p>
                <a
                  href="tel:0774012673"
                  className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated rounded"
                >
                  0774 012 673
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Barbershop H. Toate drepturile rezervate.
          </p>
          <ul className="flex gap-6">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-text-muted hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
