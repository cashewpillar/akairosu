'use client'

import { ThemeProvider } from 'next-themes'
import { RouterEvents } from './router-events'
import { SessionProvider } from 'next-auth/react'

export function Providers({
    children,
  }: {
    children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme='light'>
        {children}
        <RouterEvents />
      </ThemeProvider>
    </SessionProvider>
  )
}