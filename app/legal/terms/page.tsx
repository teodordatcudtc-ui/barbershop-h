import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termeni și condiții',
  description: 'Termeni și condiții de utilizare site Barbershop H.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Acasă
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/legal/terms" className="text-text" aria-current="page">
                Termeni și condiții
              </Link>
            </li>
          </ol>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl text-accent-secondary uppercase tracking-tight">
          Termeni și condiții
        </h1>
        <p className="mt-2 text-text-muted">Ultima actualizare: februarie 2025</p>

        <div className="mt-10 prose prose-invert prose-sm max-w-none text-text-muted space-y-6">
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              1. Acceptarea termenilor
            </h2>
            <p>
              Accesând și folosind site-ul Barbershop H (barbershop-h), acceptați acești termeni și condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              2. Serviciile
            </h2>
            <p>
              Site-ul prezintă informații despre serviciile Barbershop H (frizerie). Prețurile și disponibilitatea pot varia și pot fi confirmate la salon sau prin telefon. Programările făcute prin site sau telefon sunt supuse confirmării.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              3. Conținut și drepturi
            </h2>
            <p>
              Conținutul site-ului (texte, imagini, logo) aparține Barbershop H sau partenerilor săi și este protejat. Nu este permisă copierea sau redistribuirea fără acord.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              4. Limitarea răspunderii
            </h2>
            <p>
              Barbershop H nu răspunde pentru daune indirecte rezultate din utilizarea site-ului sau a informațiilor de pe acesta. Informațiile sunt oferite „ca atare” și pot fi actualizate fără notificare prealabilă.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              5. Contact
            </h2>
            <p>
              Pentru întrebări legate de termeni: Aleea Huedin 3, 077120 București, 0774 012 673.
            </p>
          </section>
        </div>

        <p className="mt-10">
          <Link
            href="/contact"
            className="text-accent hover:underline font-heading text-sm uppercase tracking-widest"
          >
            Contact
          </Link>
          {' · '}
          <Link
            href="/legal/privacy"
            className="text-accent hover:underline font-heading text-sm uppercase tracking-widest"
          >
            Confidențialitate
          </Link>
        </p>
      </div>
    </div>
  );
}
