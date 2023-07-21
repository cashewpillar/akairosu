import type { Metadata, NextPage } from 'next'
import type { ImageProps } from '@/utils/types'
import { ArtPreview } from '@/ui/art-preview'
import { getImage } from '@/utils/cloudinary'
import { getMetadataDescription } from '@/utils/getMetadata'

export const metadata: Metadata = {
  title: 'akairosu_',
  description: getMetadataDescription(''),
}

const Home: NextPage = async () => {
  const bgImage: ImageProps = await getImage('akairosu/about')
  
  return (
    <main className="overflow-hidden relative h-full">
      <ArtPreview bgImage={bgImage} alt="Illustration by @akairosu_" />
      {/* 
        div element is for overlaying object-fitted art preview above 
        so that it is unclickable where the screentones are present
      */}
      <div className="absolute top-0 left-[-12%] bg-none xl:w-8/12 lg:w-9/12 h-full skew-x-[167deg]"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-full xl:w-7/12 lg:w-1/2 w-full lg:pl-12 lg:pr-28 px-20 lg:py-16 py-8">
        <div className="text-akairosu-white lg:text-zinc-900 dark:lg:text-akairosu-white flex flex-col place-content-center text-sm text-center leading-loose xl:px-20 w-full h-full rounded-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fuga veniam. Placeat beatae quis accusamus, in quae libero adipisci, cum cumque rerum dignissimos nam cupiditate, assumenda necessitatibus. Perferendis, eaque ipsum?
        </div>
      </div>
    </main>
  )
}

export default Home