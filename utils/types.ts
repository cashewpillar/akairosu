// https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary

/* eslint-disable no-unused-vars */
export interface ImageProps {
    id: number
    height: number
    width: number
    public_id: string
    format: string
    blurDataUrl?: string
}