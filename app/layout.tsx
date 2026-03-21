import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: 'Vedika | Sanatan Dharma Research',
    template: '%s | Vedika'
  },
  description: siteConfig.description,
  openGraph: {
    title: 'Vedika',
    description: siteConfig.description,
    type: 'website'
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
