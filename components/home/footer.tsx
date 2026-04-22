import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-100 pt-8 text-sm text-slate-700">
      <div className="grid gap-8 sm:grid-cols-3">
        <div className="space-y-2">
          <p className="font-semibold text-slate-900">ॐ Vedika</p>
          <p className="text-slate-600">A content-first Sanatan Dharma research platform. Source-grounded, trust-first.</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-slate-900">Explore</p>
          <nav className="flex flex-col gap-1">
            <Link href="/topics"   className="no-underline hover:text-amber-600">Topics</Link>
            <Link href="/texts"    className="no-underline hover:text-amber-600">Texts</Link>
            <Link href="/guides"   className="no-underline hover:text-amber-600">Guides</Link>
            <Link href="/glossary" className="no-underline hover:text-amber-600">Glossary</Link>
            <Link href="/essays"   className="no-underline hover:text-amber-600">Essays</Link>
            <Link href="/sources"  className="no-underline hover:text-amber-600">Sources</Link>
          </nav>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-slate-900">Tools</p>
          <nav className="flex flex-col gap-1">
            <Link href="/ask-vedika" className="no-underline hover:text-amber-600">Ask Vedika (Beta)</Link>
            <Link href="/research"   className="no-underline hover:text-amber-600">Research Library</Link>
          </nav>
        </div>
      </div>
      <div className="mt-8 border-t border-amber-100 pt-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Vedika — Built with care for Dharma</p>
      </div>
    </footer>
  );
}
