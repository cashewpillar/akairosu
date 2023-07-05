import type { Metadata, NextPage } from 'next'
import type { ImageProps } from '@/utils/types'
import { getImages } from '@/utils/cloudinary'
import { Gallery } from '@/ui/gallery'
// import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'

export const metadata: Metadata = {
  title: 'Illustrations',
  description: ''
}

const Home: NextPage = async () => {
  const images: ImageProps[] = await getImages('akairosu/illustrations')
  const alt = 'Illustrations by @akairosu_'

  return (
    <main className="relative h-full p-4">
      <div className="flex flex-wrap gap-2 h-[95%] absolute overflow-y-auto justify-center">
        <Gallery images={images} alt={alt} />
      </div>
    </main>
  )
}

export default Home