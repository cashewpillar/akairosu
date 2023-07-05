// https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary

// import imagemin from 'imagemin'
// import imageminJpegtran from 'imagemin-jpegtran'
import { encode, decode } from 'blurhash'
import sharp from 'sharp'
import type { ImageProps } from './types'

const cache = new Map<ImageProps, string>()

export default async function getBase64ImageUrl(
  image: ImageProps
): Promise<string> {
  let url = cache.get(image)
  if (url) {
    return url
  }
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
  )
  const buffer = await response.arrayBuffer()
  // const minified = await imagemin.buffer(Buffer.from(buffer), {
  //   plugins: [imageminJpegtran()],
  // })

  // url = `data:image/jpeg;base64,${Buffer.from(minified).toString('base64')}`
  // cache.set(image, url)
  // return url

  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({
      resolveWithObject: true
  });
  const encoded = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);
  const decoded = decode(encoded, info.width, info.height);
  const imgBuffer = await sharp(Buffer.from(decoded), {
    raw: {
      channels: 4,
      width: info.width,
      height: info.height,
    },
  })
    .jpeg({
      overshootDeringing: true,
      quality: 40,
    })
    .toBuffer();
  url = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`
  cache.set(image, url)
  return url
}
