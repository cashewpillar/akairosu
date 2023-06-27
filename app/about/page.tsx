import Image from 'next/image'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: '',
}

const Home: NextPage = () => {
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

export default Home