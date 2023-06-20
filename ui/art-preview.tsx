'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArtModal } from './art-modal'

export const ArtPreview = (
    {
        src, alt
    }:{
        src: string,
        alt: string
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

    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    
    return (
        <div className="relative w-full h-full">
            <ArtModal isOpen={isOpen} setIsOpen={setIsOpen} src={src} alt={alt} />
            <Image
                src={src}
                alt={alt}
                className="cursor-zoom-in object-cover xl:object-[200px] lg:object-[10px] w-full h-full"
                onClick={() => setIsOpen(true)}
                fill
            />
            <Image
                src="/screentones.svg"
                alt="Overlay"
                className="pointer-events-none transition-colors duration-300 invisible lg:visible object-cover object-left xl:object-[-100px] lg:object-[-300px]"
                style={{
                    filter: (theme === 'light' ? filters.light : filters.dark),
                }}
                fill
                />
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