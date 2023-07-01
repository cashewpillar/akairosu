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
    const [src, setSrc] = useState('')
    const onArtworkClick = (src: string) => {
        setSrc(src)
        setIsOpen(true)
    }
    const reduce_dimension = (num: number) => Math.round(num / 3)
    
    return (
        <>
            <ArtModal isOpen={isOpen} setIsOpen={setIsOpen} src={src} alt={alt} />
            {images.map(({ id, public_id, format, width, height, filename }) => {
                const aspect_ratio = width / height
                const crop_parameter = aspect_ratio > 1 ? 
                    `c_fit,w_${reduce_dimension(width)}` : 
                    `c_fit,h_${reduce_dimension(height)}`
                const url = `https://res.cloudinary.com/${cloud_name}/image/upload/${crop_parameter}/${public_id}.${format}`
                
                return (
                    <div key={id}>
                        <Image
                            alt={alt}
                            className="rounded-lg cursor-zoom-in"
                            // placeholder="blur"
                            // blurDataURL={blurDataUrl}
                            src={url}
                            width={300*aspect_ratio}
                            height={300}
                            onClick={() => onArtworkClick(url)}
                        />
                    </div>
                )
            })}
        </>
    )
}