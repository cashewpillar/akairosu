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
      <div className="invisible absolute top-0 left-0 h-full xl:w-7/12 w-1/2 pl-12 pr-28 lg:py-16 py-8 ">
        {/* bg-zinc-100/60 dark:bg-zinc-800/30  */}
        <div className="flex flex-col gap-4 text-sm text-justify leading-loose px-20 w-full h-full rounded-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fuga veniam. Placeat beatae quis accusamus, in quae libero adipisci, cum cumque rerum dignissimos nam cupiditate, assumenda necessitatibus. Perferendis, eaque ipsum?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fuga veniam. Placeat beatae quis accusamus, in quae libero adipisci, cum cumque rerum dignissimos nam cupiditate, assumenda necessitatibus. Perferendis, eaque ipsum?
          {/* <Image 
            src="/aka.gif"
            alt="pixel aka"
            width={50}
            height={50}
          /> */}
        </div>
      </div>
    </main>
  )
}

export default Home