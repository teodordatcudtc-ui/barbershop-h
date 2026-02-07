import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Serviciu' };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

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
              <Link href="/servicii" className="hover:text-accent transition-colors">
                Servicii
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-text" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        <h1 className="font-heading text-4xl sm:text-5xl text-accent-secondary uppercase tracking-tight">
          {service.title}
        </h1>
        {(service.duration || service.price) && (
          <p className="mt-4 text-accent/90">
            {[service.duration, service.price].filter(Boolean).join(' · ')}
          </p>
        )}
        <div className="mt-8 prose prose-invert max-w-none">
          <p className="text-text-muted text-lg leading-relaxed">
            {service.description}
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-heading text-sm uppercase tracking-widest hover:bg-accent hover:text-bg transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Programează
          </Link>
          <Link
            href="/servicii"
            className="inline-flex items-center text-text-muted hover:text-accent font-heading text-sm uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          >
            ← Toate serviciile
          </Link>
        </div>
      </div>
    </div>
  );
}
