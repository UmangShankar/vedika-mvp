// Strip any BOM (U+FEFF) that Windows tools can prepend to env var values
const rawBase = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.askvedika.com';
const baseUrl = rawBase.charCodeAt(0) === 0xFEFF ? rawBase.slice(1) : rawBase;

export const siteConfig = {
  name:        'Vedika',
  description: 'A content-first Sanatan Dharma research platform. Source-grounded, trust-first.',
  baseUrl,
  nav: [
    { label: 'Purāṇas',        href: '/puranas'   },
    { label: 'Learning Paths',  href: '/guides/learning-paths', activeMatch: '/guides' },
    { label: 'Traditions',      href: '/traditions' },
    { label: 'Sources',         href: '/sources'   },
    { label: 'Research',        href: '/research'  },
  ],
};
