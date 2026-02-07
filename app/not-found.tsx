import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-heading text-6xl sm:text-8xl text-accent-secondary uppercase tracking-tight">
        404
      </h1>
      <p className="mt-4 text-text-muted text-lg">
        Pagina nu a fost găsită.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-6 py-3 border-2 border-accent text-accent font-heading text-sm uppercase tracking-widest hover:bg-accent hover:text-bg transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        Înapoi acasă
      </Link>
    </div>
  );
}
