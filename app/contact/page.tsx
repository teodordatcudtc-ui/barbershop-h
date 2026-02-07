import type { Metadata } from 'next';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapEmbed } from '@/components/contact/MapEmbed';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Barbershop H – Aleea Huedin 3, 077120 București. Telefon 0774 012 673. Programează o programare.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 lg:mb-16 max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-accent-secondary uppercase tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-text-muted text-lg">
            Programează o programare sau vizitează-ne la salon. Suntem aici pentru tine.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-10">
            <ContactInfo />
            <ContactForm />
          </div>
          <div className="lg:col-span-7">
            <MapEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
