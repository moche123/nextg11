import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Routes } from '@/utils/routes.list'
import { Navigator } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJs Ceti',
  description: 'Pagina destinada para estudiantes CETI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="container mx-auto">
          <Navigator pathNames={[Routes.HOME,Routes.CHARACTERES,Routes.ABOUT]}></Navigator>
          {children}
        </div>
      </body>
    </html>
  )
}
