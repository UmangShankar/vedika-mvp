import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sandal: '#f5efe5',
        ink: '#1f2937',
        saffron: '#c86f2d'
      }
    }
  },
  plugins: []
};

export default config;
