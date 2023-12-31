import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/utils/providers'
import { GlobalNav } from '@/ui/global-nav'
import { ThemeChanger } from '@/ui/theme-changer'
import { getMetadataDescription } from '@/utils/getMetadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'akairosu_',
  description: getMetadataDescription(''),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="h-screen bg-white dark:bg-zinc-900 dark:text-akairosu-white flex">
            <GlobalNav />
            <div className="flex flex-col">
              <div className="z-10 transition-colors duration-300 invisible lg:visible w-screen h-10 border-b-4 bg-zinc-200 dark:bg-akairosu-white border-zinc-300 dark:border-akairosu-brown"></div>
              <div className="lg:pl-80 w-full h-full">
                <div className="p-5 pt-48 lg:p-0 w-full h-full">
                  {/* had to add lg:left-auto to make it work both sides */}
                  <ThemeChanger className="fixed lg:bottom-14 lg:top-auto lg:right-10 lg:left-auto left-3 top-3 z-10" />
                  {children}
                </div>
              </div>
              <div className="z-10 bottom-0 transition-colors duration-300 invisible lg:visible w-screen h-10 bg-zinc-200 dark:bg-akairosu-white border-t-4 border-zinc-300 dark:border-akairosu-brown"></div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
