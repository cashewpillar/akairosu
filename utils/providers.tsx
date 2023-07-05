'use client'

import { ThemeProvider } from 'next-themes'
import { RouterEvents } from './router-events'

export function Providers({
    children,
  }: {
    children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme='light'>
      {children}
      <RouterEvents />
    </ThemeProvider>
  )
}