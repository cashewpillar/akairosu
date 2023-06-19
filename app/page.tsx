import { Metadata } from 'next'
import { DiamondOverlay } from '@/ui/diamond-overlay'

export const metadata: Metadata = {
  title: 'akairosu_ | Home',
  description: 'desc',
}

export default function Home() {
  
  return (
    <main className="relative h-full">
      <div>
        <DiamondOverlay />
      </div>
    </main>
  )
}
