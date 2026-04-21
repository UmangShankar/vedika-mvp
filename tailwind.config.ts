import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        sandal: {
          DEFAULT: '#F5EFE5',
          50:  '#FDFAF6',
          100: '#F5EFE5',
          200: '#EDE0CC',
          300: '#DEC9A8',
        },
        // Primary accent — saffron/gold
        saffron: {
          DEFAULT: '#C07828',
          50:  '#FEF7ED',
          100: '#FDECD3',
          200: '#F9D09A',
          300: '#F4AD58',
          400: '#EF8C28',
          500: '#C07828',
          600: '#9A5E1C',
          700: '#744612',
          800: '#4E2E0A',
          900: '#2A1804',
        },
        // Deep text
        ink: {
          DEFAULT: '#1C1208',
          light:   '#4A3B28',
          muted:   '#7A6A56',
          faint:   '#A89880',
        },
        // Semantic — lotus/vermillion for callouts
        lotus: {
          DEFAULT: '#C0392B',
          light:   '#FBEAEA',
          border:  '#F5C6C6',
        },
        // Semantic — calm teal for informational
        dharma: {
          DEFAULT: '#2D7A6F',
          light:   '#E8F5F3',
          border:  '#A8D8D2',
        },
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
      },
      fontSize: {
        'display-lg': ['3rem',    { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display':    ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading':    ['1.375rem',{ lineHeight: '1.3',  letterSpacing: '-0.005em', fontWeight: '600' }],
        'subheading': ['1.125rem',{ lineHeight: '1.4',  fontWeight: '500' }],
        'body-lg':    ['1.0625rem',{ lineHeight: '1.75' }],
        'body':       ['1rem',    { lineHeight: '1.7' }],
        'body-sm':    ['0.9375rem',{ lineHeight: '1.65' }],
        'caption':    ['0.8125rem',{ lineHeight: '1.5' }],
        'label':      ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '500' }],
        'overline':   ['0.6875rem',{ lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '720px',
        'wide':    '960px',
        'full-w':  '1200px',
      },
      borderRadius: {
        'sm':  '4px',
        'md':  '8px',
        'lg':  '12px',
        'xl':  '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(28,18,8,0.06), 0 1px 2px rgba(28,18,8,0.04)',
        'card-md': '0 4px 12px rgba(28,18,8,0.08), 0 1px 3px rgba(28,18,8,0.04)',
        'card-lg': '0 8px 24px rgba(28,18,8,0.10), 0 2px 6px rgba(28,18,8,0.04)',
      },
      borderColor: {
        DEFAULT: 'rgba(192,120,40,0.18)',
        warm:    'rgba(192,120,40,0.30)',
        strong:  'rgba(192,120,40,0.50)',
      },
    },
  },
  plugins: [],
};

export default config;
