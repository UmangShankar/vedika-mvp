import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  return (
    <header className="border-b border-amber-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight no-underline">
          Vedika
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="no-underline hover:text-saffron">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
