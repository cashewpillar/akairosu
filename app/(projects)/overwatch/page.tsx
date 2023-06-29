import type { Metadata, NextPage } from 'next'
import type { ImageProps } from '@/utils/types'
import cloudinary from '@/utils/cloudinary'
import Image from 'next/image'
// import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'

export const metadata: Metadata = {
  title: 'Overwatch Artworks',
  description: ''
}

const Home: NextPage = async () => {
  const images: ImageProps[] = await getImages()
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const reduce = (num: number) => Math.round(num / 3)

  return (
    <main className="relative h-full p-4">
      <div className="flex flex-wrap gap-2 h-[95%] absolute overflow-y-auto">
        {images.map(({ id, public_id, format, width, height, filename }) => {
          const aspect_ratio = width / height
          const crop_parameter = aspect_ratio > 1 ? `c_fit,w_${reduce(width)}` : `c_fit,h_${reduce(height)}`
          
          return (
          <div key={id}>
            <Image
              alt="Overwatch fanart by @akairosu_"
              className="rounded-lg"
              // placeholder="blur"
              // blurDataURL={blurDataUrl}
              src={`https://res.cloudinary.com/${cloud_name}/image/upload/${crop_parameter}/${public_id}.${format}`}
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

const getImages = async () => {
  // https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary
  
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()
  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      filename: result.filename,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  // const blurImagePromises = results.resources.map((image: ImageProps) => {
  //   return getBase64ImageUrl(image)
  // })
  // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  // for (let i = 0; i < reducedResults.length; i++) {
  //   reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  // }

  return reducedResults
}