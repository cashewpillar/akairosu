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
    const screen_height = typeof window !== 'undefined' ? window.innerHeight * 0.95 : 0 // 95% of screen height for spacing
    const bg_aspect_ratio = bgImage.width / bgImage.height

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
                    className="rounded-lg" 
                    width={screen_height*bg_aspect_ratio}
                    height={screen_height}
                />
            </ArtModal>
            <Image
            placeholder='blur' 
                blurDataURL={bgImage.blurDataUrl}
                src={url}
                alt={alt}
                className="lg:brightness-100 dark:brightness-[40%] brightness-50 cursor-zoom-in object-cover xl:object-[200px] lg:object-[10px] w-full h-full"
                onClick={() => setIsOpen(true)}
                fill
            />
            {/* <Image
                src="/screentone_fade.svg"
                alt="Overlay"
                className="gradient-mask pointer-events-none transition-colors duration-300 invisible lg:visible object-cover object-left"
                style={{
                    filter: (theme === 'light' ? filters.light : filters.dark),
                }}
                fill
            /> */}
            <div className="skew-x-[167deg] lg:visible invisible pointer-events-none bg-gradient-to-r from-white dark:from-zinc-900 from-50% absolute top-0 left-[-12%] w-full h-full"></div>
            <Image
            src="/diamonds.svg"
            alt="Diamond Overlay"
            className="pointer-events-none transition-colors duration-300 invisible xl:visible object-contain object-right-bottom"
            style={{
                    filter: (theme === 'light' ? filters.gray : filters.orange),
                }}
                fill
            />
        </div>
    )
}