'use client'

import type { ImageProps } from '@/utils/types'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArtModal } from './art-modal'

export const ArtPreview = (
    {
        bgImage, alt
    }:{
        bgImage: ImageProps,
        alt: string,
    }
) => {
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const filters = {
        orange: "opacity(60%) invert(77%) sepia(10%) saturate(4276%) hue-rotate(315deg) brightness(100%) contrast(95%)",
        gray: "invert(94%) sepia(6%) saturate(132%) hue-rotate(201deg) brightness(89%) contrast(90%)",
        dark: "invert(6%) sepia(3%) saturate(2643%) hue-rotate(201deg) brightness(96%) contrast(91%)",
        light: "invert(100%) sepia(100%) saturate(0%) hue-rotate(19deg) brightness(103%) contrast(101%)"
    }
    const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const url = `https://res.cloudinary.com/${cloud_name}/image/upload/${bgImage.public_id}.${bgImage.format}`
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    
    return (
        <div className="relative w-full h-full">
            <ArtModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <Image 
                    placeholder='blur' 
                    blurDataURL={bgImage.blurDataUrl} 
                    src={url} 
                    alt={alt} 
                    className="object-contain" 
                    fill 
                />
            </ArtModal>
            {imageLoaded && (
                <Image
                    placeholder='blur' 
                    blurDataURL={bgImage.blurDataUrl}
                    src={url}
                    alt={alt}
                    className="cursor-zoom-in object-cover xl:object-[200px] lg:object-[10px] w-full h-full"
                    onClick={() => setIsOpen(true)}
                    fill
                />
            )}
            <Image
                src="/screentone_fade_v4.svg"
                alt="Overlay"
                className="pointer-events-none transition-colors duration-300 invisible lg:visible object-cover object-left xl:object-[-120px] lg:object-[-300px]"
                onLoadingComplete={() => setImageLoaded(true)}
                style={{
                    filter: (theme === 'light' ? filters.light : filters.dark),
                }}
                fill
            />
            {imageLoaded && (
                <Image
                    src="/diamonds.svg"
                    alt="Diamond Overlay"
                    className="pointer-events-none transition-colors duration-300 invisible xl:visible object-contain object-right-bottom"
                    style={{
                        filter: (theme === 'light' ? filters.gray : filters.orange),
                    }}
                    fill
                />
            )}
        </div>
    )
}