// src/lib/pages.ts
import { cache } from 'react'
import type { Page, SiteSetting } from '@/payload-types'
import { getCachedPayload, getSettings } from './payload'

export const resolvePage = cache(
  async (locale: string, slugPath: string | null): Promise<Page | null> => {
    const payload = await getCachedPayload()

    if (!slugPath) {
      // Strona główna wskazana w Site Settings.
      const settings = (await getSettings(locale)) as SiteSetting
      const homepage = settings.homepage

      if (!homepage || typeof homepage !== 'object') {
        return null
      }

      return payload.findByID({
        collection: 'pages',
        id: homepage.id,
        locale: locale as 'pl' | 'en',
        depth: 2,
      })
    }

    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slugPath,
        },
      },
      locale: locale as 'pl' | 'en',
      depth: 2,
      limit: 1,
    })

    return result.docs[0] ?? null
  },
)