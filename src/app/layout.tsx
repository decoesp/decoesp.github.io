import type { Metadata } from 'next'
import { Jost, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'André Filho | Software Engineer',
    template: '%s | André Filho',
  },
  description: 'Desenvolvedor Front-End e Cloud com experiência em React, Next.js, TypeScript e AWS.',
  keywords: ['Desenvolvedor Front-End', 'Desenvolvedor Cloud', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'André Filho' }],
  creator: 'André Filho',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://decoesp.github.io',
    siteName: 'André Filho',
    title: 'André Filho | Software Engineer',
    description: 'Desenvolvedor Front-End e Cloud com experiência em React, Next.js, TypeScript e AWS.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'André Filho | Software Engineer',
    description: 'Desenvolvedor Front-End e Cloud',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${jost.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
