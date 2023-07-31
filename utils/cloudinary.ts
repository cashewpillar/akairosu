import cloudinary from 'cloudinary'
import type { ImageProps } from '@/utils/types'
import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default cloudinary

export const getImages = async (
  folder: string
) => {
    // https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary
    
    const results = await cloudinary.v2.search
      .expression(`folder:${folder}/*`)
      .sort_by('width', 'asc')
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
      console.log(`${result.width / result.height} > ${result.width / result.height*300}`)
      i++
    }
  
    const blurImagePromises = results.resources.map((image: ImageProps) => {
      return getBase64ImageUrl(image)
    })
    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)
  
    for (let i = 0; i < reducedResults.length; i++) {
      reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
    }
  
    return reducedResults
}

export const getImage = async (
  folder: string
) => {
  const results = await cloudinary.v2.search
    .expression(`folder:${folder}/*`)
    .sort_by('created_at', 'desc')
    .max_results(1)
    .execute()
  const result = results.resources[0]
  const reducedResult: ImageProps = {
      id: 0,
      filename: result.filename,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    }
  const blurImagePromises = [getBase64ImageUrl(reducedResult),]
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  reducedResult.blurDataUrl = imagesWithBlurDataUrls[0]

  return reducedResult
}

export const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME