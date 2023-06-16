import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Artist Name is a digital artist who likes drawing cute animals.',
}

export default function Home() {
  return (
    <div className="relative flex place-items-center">
      <Image
        src="/rabbit.png"
        alt="Rabbit"
        width={214}
        height={300}
      />
    </div>
  )
}
