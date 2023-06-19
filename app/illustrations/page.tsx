import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Illustrations',
  description: '',
}

export default function Home() {
  return (
    <main className="relative h-full grid place-content-center">
      <div>
        <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span>Illustrations</span>
      </div>
    </main>
  )
}
