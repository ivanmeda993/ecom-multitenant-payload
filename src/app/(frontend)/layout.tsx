import React from 'react'
import './styles.css'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <NuqsAdapter>{children}</NuqsAdapter>
        </main>
      </body>
    </html>
  )
}
