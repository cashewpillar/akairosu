import type { Metadata, NextPage } from 'next'
import type { ImageProps } from '@/utils/types'
import { ArtPreview } from '@/ui/art-preview'
import { getImage } from '@/utils/cloudinary'
import { getMetadataDescription } from '@/utils/getMetadata'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'akairosu_',
  description: getMetadataDescription(''),
}

const Home: NextPage = async () => {
  const bgImage: ImageProps = await getImage('akairosu/about')
  
  return (
    <main className="overflow-hidden relative h-full">
      <ArtPreview bgImage={bgImage} alt="Overwatch Mercy Art" />
      {/* 
        div element is for overlaying object-fitted art preview above 
        so that it is unclickable where the screentones are present
      */}
      <div className="absolute top-0 left-[-12%] bg-none xl:w-8/12 lg:w-9/12 h-full skew-x-[167deg]"></div>
      <div className="absolute top-0 left-0 h-full xl:w-4/12 w-1/2 px-4 lg:py-24 py-8 ">
        <div className="flex flex-col gap-4 uppercase text-sm bg-zinc-100/60 dark:bg-zinc-800/30 text-center items-center p-20 w-full h-full rounded-lg">
          <span>
            hallu there! call me aka~ 
          </span>
          <span>
            i do freelance work and art streams. 
          </span>
          <Image 
            src="/aka.gif"
            alt="pixel aka"
            width={50}
            height={50}
          />
          <span>
            i mainly focus on illustration, animation, and live2d work!
          </span>
        </div>
      </div>
    </main>
  )
}

export default Home