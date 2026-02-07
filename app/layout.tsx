import type { Metadata } from 'next';
import { Cormorant_Garamond, Oswald, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://barbershop-h.ro';

export const metadata: Metadata = {
  title: {
    default: 'Barbershop H | Frizerie București',
    template: '%s | Barbershop H',
  },
  description:
    'Barbershop H – frizerie de calitate în București. Tunsori clasice, barbă și îngrijire. Aleea Huedin 3.',
  keywords: ['barbershop', 'frizerie', 'București', 'tuns', 'barbă', 'Barbershop H'],
  authors: [{ name: 'Barbershop H' }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: siteUrl,
    siteName: 'Barbershop H',
    title: 'Barbershop H | Frizerie București',
    description: 'Frizerie de calitate în București. Tunsori clasice, barbă și îngrijire. Aleea Huedin 3.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbershop H | Frizerie București',
    description: 'Frizerie de calitate în București. Aleea Huedin 3.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${cormorant.variable} ${oswald.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-body">
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
