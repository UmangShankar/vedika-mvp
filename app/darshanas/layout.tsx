import type { ReactNode } from 'react'
import { EB_Garamond, DM_Sans } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function DarshanasLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${ebGaramond.variable} ${dmSans.variable}`}>
      {children}
    </div>
  )
}
