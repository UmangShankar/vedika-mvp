import Link from 'next/link';

const navLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Topics',   href: '/topics' },
  { label: 'Texts',    href: '/texts' },
  { label: 'Guides',   href: '/guides' },
  { label: 'Sources',  href: '/sources' },
];

const legalLinks = [
  { label: 'About',   href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms',   href: '/terms' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-warm bg-sandal-200">
      <div className="mx-auto max-w-full-w px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1.5 no-underline">
              <span className="devanagari text-sm text-saffron-500">ॐ</span>
              <span className="font-serif text-[18px] font-semibold text-ink">Vedika</span>
            </Link>
            <p className="mt-2 text-body-sm text-ink-muted">
              A content-first Sanatan Dharma research platform. Source-grounded, trust-first.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="text-overline text-saffron-500">Explore</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-ink-light no-underline hover:text-saffron-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div>
            <p className="text-overline text-saffron-500">About</p>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-ink-light no-underline hover:text-saffron-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-caption text-ink-faint">Content-first. Source-grounded.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-warm pt-6 sm:flex-row">
          <p className="text-caption text-ink-faint">
            © {new Date().getFullYear()} Vedika. All rights reserved.
          </p>
          <p className="text-caption text-ink-faint">Built with care for Dharma</p>
        </div>
      </div>
    </footer>
  );
}
