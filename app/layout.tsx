//import './globals.css'
import './globals.scss'
import type { Metadata } from 'next'
import { Encode_Sans_Semi_Expanded } from 'next/font/google';

const font = Encode_Sans_Semi_Expanded({ weight: '400', subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
