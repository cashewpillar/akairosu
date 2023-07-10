import { demos } from '@/lib/demos'

export function getMetadataDescription(
  slug: string
) {
  const match = demos.find(item => item.slug === slug)
  return match?.desc || ''
}

export function getMetadataTitle(
  slug: string
) {
  const match = demos.find(item => item.slug === slug)
  return match?.name || ''
}