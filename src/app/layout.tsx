import HeaderTravelin from '@/components/layout/header/header-travelin'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shadcn/Embla',
  description:
    'Projeto para praticar novo componente carousel do shadcn-ui que utiliza a biblioteca do embla-carousel com uma interface do dribble.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <HeaderTravelin />
        {children}
      </body>
    </html>
  )
}
