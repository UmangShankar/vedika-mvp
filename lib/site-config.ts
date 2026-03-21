export const siteConfig = {
  name: 'Vedika',
  description:
    'A content-first Sanatan Dharma research platform with AI layered in for guided exploration.',
  baseUrl: 'https://vedika.example',
  nav: [
    { href: '/research', label: 'Research Library' },
    { href: '/sources', label: 'Source Collections' },
    { href: '/ask-vedika', label: 'Ask Vedika (Beta)' }
  ]
};

export const featuredCollections = [
  {
    slug: 'veda-introductions',
    title: 'Veda Introductions',
    summary: 'Context-first guides for approaching primary Vedic literature responsibly.'
  },
  {
    slug: 'upanishad-themes',
    title: 'Upanishad Themes',
    summary: 'Structured topic pages with clear lineage context and related commentaries.'
  },
  {
    slug: 'itihasa-reading-paths',
    title: 'Itihasa Reading Paths',
    summary: 'Research paths that connect episodes, schools, and classical interpretive lenses.'
  }
];
