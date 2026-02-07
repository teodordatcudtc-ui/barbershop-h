import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description: 'Politica de confidențialitate Barbershop H – cum folosim datele tale.',
};

export default function PrivacyPage() {
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
              <Link href="/legal/privacy" className="text-text" aria-current="page">
                Confidențialitate
              </Link>
            </li>
          </ol>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl text-accent-secondary uppercase tracking-tight">
          Politica de confidențialitate
        </h1>
        <p className="mt-2 text-text-muted">Ultima actualizare: februarie 2025</p>

        <div className="mt-10 prose prose-invert prose-sm max-w-none text-text-muted space-y-6">
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              1. Datele pe care le colectăm
            </h2>
            <p>
              Barbershop H poate colecta date pe care ni le furnizați voluntar prin formularul de contact (nume, email, telefon, mesaj) sau prin apeluri telefonice, exclusiv în scopul răspunsului la solicitări și al programărilor.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              2. Utilizarea datelor
            </h2>
            <p>
              Folosim datele doar pentru a răspunde la mesaje, pentru programări și pentru comunicări legate de serviciile noastre. Nu vindem și nu închiriem datele către terți în scopuri de marketing.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              3. Drepturile tale
            </h2>
            <p>
              Poți solicita accesul, rectificarea sau ștergerea datelor pe care ni le-ai furnizat, contactându-ne la datele afișate pe site (telefon, adresă).
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg uppercase tracking-wider text-text mt-8 mb-2">
              4. Cookie-uri
            </h2>
            <p>
              Site-ul poate folosi cookie-uri tehnice necesare funcționării (ex. preferințe). Nu folosim cookie-uri de publicitate sau de urmărire terță parte fără consimțământ.
            </p>
          </section>
          <p className="mt-10">
            Pentru întrebări despre confidențialitate: Aleea Huedin 3, 077120 București, 0774 012 673.
          </p>
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
            href="/legal/terms"
            className="text-accent hover:underline font-heading text-sm uppercase tracking-widest"
          >
            Termeni și condiții
          </Link>
        </p>
      </div>
    </div>
  );
}
