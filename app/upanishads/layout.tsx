import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upaniṣad Nakṣatra — The Constellation',
  description: 'Explore all 13 principal Upanishads through an interactive constellation. Key passages in Devanagari, scene setting, the four Mahavakyas, philosophical threads, and commentary.',
};

export default function UpanishadsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
