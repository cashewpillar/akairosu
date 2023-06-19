import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project 1',
  description: '',
}

export default function Home() {
  return (
    <main className="relative h-full">
      <div>
        <Image
          src="/rabbit.png"
          alt="Rabbit"
          width={214}
          height={300}
        />
      </div>
    </main>
  )
}
