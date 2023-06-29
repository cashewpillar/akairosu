import type { Metadata, NextPage } from 'next'
import type { ImageProps } from '@/utils/types'
import { getImages, reduce_dimension } from '@/utils/cloudinary'

import Image from 'next/image'
// import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'

export const metadata: Metadata = {
  title: 'Overwatch Artworks',
  description: ''
}

const Home: NextPage = async () => {
  const images: ImageProps[] = await getImages('overwatch')
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <main className="relative h-full p-4">

      <div className="flex flex-wrap gap-2 h-[95%] absolute overflow-y-auto justify-center">
        {images.map(({ id, public_id, format, width, height, filename }) => {
          const aspect_ratio = width / height
          const crop_parameter = aspect_ratio > 1 ? 
            `c_fit,w_${reduce_dimension(width)}` : 
            `c_fit,h_${reduce_dimension(height)}`
          const url = `https://res.cloudinary.com/${cloud_name}/image/upload/${crop_parameter}/${public_id}.${format}`
          
          return (
          <div key={id}>
            <Image
              alt="Overwatch fanart by @akairosu_"
              className="rounded-lg"
              // placeholder="blur"
              // blurDataURL={blurDataUrl}
              src={url}
              width={300*aspect_ratio}
              height={300}
            />
          </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home