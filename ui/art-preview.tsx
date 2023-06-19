'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export const ArtPreview = () => {
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const filters = {
        orange: "opacity(60%) invert(77%) sepia(10%) saturate(4276%) hue-rotate(315deg) brightness(100%) contrast(95%)",
        gray: "invert(94%) sepia(6%) saturate(132%) hue-rotate(201deg) brightness(89%) contrast(90%)",
        dark: "invert(6%) sepia(3%) saturate(2643%) hue-rotate(201deg) brightness(96%) contrast(91%)",
        light: "invert(100%) sepia(100%) saturate(0%) hue-rotate(19deg) brightness(103%) contrast(101%)"
    }

    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    
    return (
        <div className="w-full h-full">
            <Image
                src="/diamonds.png"
                alt="Diamond Overlay"
                className="invisible xl:visible object-contain object-right-bottom z-[3]"
                style={{filter: (theme === 'light' ? filters.gray : filters.orange)}}
                fill
            />
            <Image
                src="/screentones.png"
                alt="Overlay"
                className="invisible lg:visible object-cover object-left xl:object-[-100px] lg:object-[-300px] z-[2]"
                style={{filter: (theme === 'light' ? filters.light : filters.dark)}}
                fill
            />
            <Image
                src="/mercy-art.jpg"
                alt="Overwatch Mercy Art"
                className="z-[1] object-cover xl:object-[200px] lg:object-[10px] w-full h-full"
                fill
            />
        </div>
    )
}