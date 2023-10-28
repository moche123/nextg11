import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About title',
  description: 'Page targered to about',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-blue-900 text-white p-4">
        {children}
    </div>
  )
}
