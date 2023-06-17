import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'akairosu_ | Home',
  description: 'desc',
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
