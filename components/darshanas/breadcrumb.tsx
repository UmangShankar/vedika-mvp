import Link from 'next/link'

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-caption text-ink-faint py-3 px-8 bg-white border-b border-[rgba(192,120,40,0.12)]">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink-faint/40">›</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-ink-light transition-colors no-underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink-light">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
