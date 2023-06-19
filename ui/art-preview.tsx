'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export const ArtPreview = () => {
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const filters = {
        brown: "invert(70%) sepia(43%) saturate(620%) hue-rotate(333deg) brightness(92%) contrast(84%)",
        gray: "invert(94%) sepia(6%) saturate(132%) hue-rotate(201deg) brightness(89%) contrast(90%)",
        dark: "invert(6%) sepia(3%) saturate(2643%) hue-rotate(201deg) brightness(96%) contrast(91%)",
        light: "invert(100%) sepia(100%) saturate(0%) hue-rotate(19deg) brightness(103%) contrast(101%)"
    }

    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    
    return (
        <>
            <Image
                src="/diamonds.png"
                alt="Diamond Overlay"
                className="absolute z-[3]"
                style={{objectFit: "contain", 
                        objectPosition: "right bottom",
                        filter: theme === 'dark' ? filters.brown : filters.gray}}
                fill
            />
            <Image
                src="/overlay.png"
                alt="Overlay"
                className="absolute z-[2]"
                style={{objectFit: "contain", 
                        objectPosition: "left bottom",
                        filter: theme === 'dark' ? filters.dark : filters.light}}
                fill
            />
            <Image
                src="/mercy-art.jpg"
                alt="Overwatch Mercy Art"
                className="z-[1]"
                style={{objectFit: "contain", 
                        objectPosition: "right bottom"}}
                fill
            />
        </>
    )
}