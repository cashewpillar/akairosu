import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'akairosu_ | Home',
  description: 'desc',
}

export default function Home() {
  return (
    <main className="relative h-full">
      <div>
        <Image
          src="/diamonds.png"
          alt="Diamond Overlay"
          className="absolute right-0 pt-10"
          style={{objectFit: "contain", 
                  objectPosition: "right bottom",
                  filter: "invert(94%) sepia(6%) saturate(132%) hue-rotate(201deg) brightness(89%) contrast(90%)"}}
                  // filter: "invert(70%) sepia(43%) saturate(620%) hue-rotate(333deg) brightness(92%) contrast(84%)"}}
          fill
        />
        
      </div>
    </main>
  )
}
