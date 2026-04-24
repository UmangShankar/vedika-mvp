export const siteConfig = {
  name:        'Vedika',
  description: 'A content-first Sanatan Dharma research platform. Source-grounded, trust-first.',
  baseUrl:     process.env.NEXT_PUBLIC_BASE_URL ?? 'https://askvdika.com',
  nav: [
    { label: 'Research',  href: '/research'   },
    { label: 'Topics',    href: '/topics'     },
    { label: 'Texts',     href: '/texts'      },
    { label: 'Itihasa',   href: '/itihasa'    },
    { label: 'Darśanas',  href: '/darshanas'  },
    { label: 'Rishis',    href: '/rishis'     },
    { label: 'Glossary',  href: '/glossary'   },
    { label: 'Sources',   href: '/sources'    },
  ],
};
