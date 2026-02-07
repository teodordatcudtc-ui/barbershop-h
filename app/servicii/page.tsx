import type { Metadata } from 'next';
import { services } from '@/data/services';
import { MotionServiceCard } from '@/components/servicii/ServiceCard';

export const metadata: Metadata = {
  title: 'Servicii',
  description:
    'Serviciile Barbershop H: tuns clasic, îngrijire barbă, tuns + barbă, tuns copil. Prețuri și durate la cerere.',
};

export default function ServiciiPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 lg:mb-16 max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-accent-secondary uppercase tracking-tight">
            Servicii
          </h1>
          <p className="mt-4 text-text-muted text-lg">
            Oferim tunsori clasice, îngrijire de barbă și pachete complete. Durata și prețurile le poți afla la salon sau prin contact.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <MotionServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
