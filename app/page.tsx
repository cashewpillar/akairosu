import { Metadata } from 'next'
import { ArtPreview } from '@/ui/art-preview'

export const metadata: Metadata = {
  title: 'akairosu_',
  description: '🐐 garden goat phvtuber · art · live2d',
}

export default function Home() {
  
  return (
    <main className="relative h-full">
      <div>
        <ArtPreview />
      </div>
    </main>
  )
}
