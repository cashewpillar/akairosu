'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export const DiamondOverlay = () => {
    const { theme, setTheme } = useTheme()
    const filters = {
        brown: "invert(70%) sepia(43%) saturate(620%) hue-rotate(333deg) brightness(92%) contrast(84%)",
        gray: "invert(94%) sepia(6%) saturate(132%) hue-rotate(201deg) brightness(89%) contrast(90%)"
    }

    return (
        <Image
          src="/diamonds.png"
          alt="Diamond Overlay"
          className="absolute right-0 pt-10"
          style={{objectFit: "contain", 
                  objectPosition: "right bottom",
                  filter: theme === 'dark' ? filters.brown : filters.gray}}
          fill
        />
    )
}