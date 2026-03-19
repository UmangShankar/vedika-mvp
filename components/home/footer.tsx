import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-100 pt-8 text-sm text-slate-700">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>Vedika — a content-first Sanatan Dharma research platform.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href="/research" className="no-underline hover:text-saffron">
            Research
          </Link>
          <Link href="/sources" className="no-underline hover:text-saffron">
            Sources
          </Link>
          <Link href="/ask-vedika" className="no-underline hover:text-saffron">
            Ask Vedika (Beta)
          </Link>
        </nav>
      </div>
    </footer>
  );
}
