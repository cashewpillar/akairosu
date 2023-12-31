'use client'

import Image from 'next/image'
import type { ImageProps } from '@/utils/types'
import { ArtModal } from '@/ui/art-modal'
import { useState } from 'react'

export const Gallery = (
  {
    images, alt
  }:{
    images: ImageProps[],
    alt: string,
  }
) => {
  const [isOpen, setIsOpen] = useState(false)
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const onArtworkClick = (public_id: string) => {
    setIsOpen(true)
    setSelectedImgId(public_id)
  }
  const reduce_dimension = (num: number) => Math.round(num / 3)
  const [selectedImgId, setSelectedImgId] = useState('1')
  const screen_height = typeof window !== 'undefined' ? window.innerHeight * 0.95 : 0 // 95% of screen height for spacing
  
  return (
    <>
      <ArtModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <>
          {images.map(({ id, public_id, format, width, height, blurDataUrl }) => {
            const HQUrl = `https://res.cloudinary.com/${cloud_name}/image/upload/${public_id}.${format}`
            const aspect_ratio = width / height
            return (
              <Image
                key={id}
                src={HQUrl}
                placeholder='blur'
                blurDataURL={blurDataUrl}
                alt={alt}
                className={`rounded-lg ${public_id === selectedImgId ? '' : 'hidden'}`}
                width={screen_height*aspect_ratio}
                height={screen_height}
              />
            )
          })}
        </>
      </ArtModal>
      {images.map(({ id, public_id, format, width, height, blurDataUrl }) => {
        const aspect_ratio = width / height
        const crop_parameter = aspect_ratio > 1 ? 
          `c_fit,w_${reduce_dimension(width)}` : 
          `c_fit,h_${reduce_dimension(height)}`
        const url = `https://res.cloudinary.com/${cloud_name}/image/upload/${crop_parameter}/${public_id}.${format}`
        
        return (
          <div className="overflow-hidden rounded-lg" key={id}>
            <Image
              alt={alt}
              className="hover:scale-110 transition-all ease-in rounded-lg cursor-zoom-in"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              src={url}
              width={300*aspect_ratio}
              height={300}
              onClick={() => onArtworkClick(public_id)}
            />
          </div>
        )
      })}
    </>
  )
}