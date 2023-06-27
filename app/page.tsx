import { Metadata, NextPage } from 'next'
import { ArtPreview } from '@/ui/art-preview'

export const metadata: Metadata = {
  title: 'akairosu_',
  description: '🐐 garden goat phvtuber · art · live2d',
}

const Home: NextPage = () => {
  return (
    <main className="overflow-hidden relative h-full">
      <ArtPreview src="/mercy-art.jpg" alt="Overwatch Mercy Art" />
      {/* 
        div element is for overlaying object-fitted art preview above 
        so that it is unclickable where the screentones are present
      */}
      <div className="absolute top-0 left-[-12%] bg-none xl:w-8/12 lg:w-9/12 h-full skew-x-[167deg]"></div>
    </main>
  )
}

export default Home