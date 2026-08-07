// src/lib/locales.ts
import { cache } from 'react'
import config from '@/payload.config'

export const getConfiguredLocales = cache(async (): Promise<string[]> => {
  const payloadConfig = await config
  return payloadConfig.localization ? payloadConfig.localization.locales.map((l) => l.code) : []
})