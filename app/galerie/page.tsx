import type { Metadata } from 'next';
import { GalleryGrid } from '@/components/galerie/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Galerie Barbershop H – atmosferă, interior și momente din salon. Frizerie București, Aleea Huedin 3.',
};

export default function GaleriePage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 lg:mb-16 max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-accent-secondary uppercase tracking-tight">
            Galerie
          </h1>
          <p className="mt-4 text-text-muted text-lg">
            Atmosfera și spațiul Barbershop H – unde tradiția întâlnește confortul.
          </p>
        </header>
        <GalleryGrid />
      </div>
    </div>
  );
}
