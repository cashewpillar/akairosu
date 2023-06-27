import type { Metadata, NextPage } from 'next'
import type { ImageProps } from '@/utils/types'
import cloudinary from '@/utils/cloudinary'
import Image from 'next/image'
// import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'

export const metadata: Metadata = {
  title: 'Illustrations',
  description: ''
}

const Home: NextPage = async () => {
  const images: ImageProps[] = await getImages()

  return (
    <main className="relative h-full grid place-content-center">
      <div className="flex h-full w-full">
        {/* <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span>Illustrations</span> */}
        {images.map(({ id, public_id, format, height, width }) => (
          <div key={id}>
            <Image
              alt="Overwatch fanart by @akairosu_"
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              // placeholder="blur"
              // blurDataURL={blurDataUrl}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
              width={width / 7}
              height={height / 7}
            />
          </div>
          ))}
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