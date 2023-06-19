import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project 2',
  description: '',
}

export default function Home() {
  return (
    <main className="relative h-full grid place-content-center">
      <div>
        <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span>Project 2</span>
      </div>
    </main>
  )
}
