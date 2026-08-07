// src/app/(frontend)/[locale]/layout.tsx

import { notFound } from 'next/navigation'

import { getAnalyticsConfig, getConsentTexts } from '@intecion/ipal-kit'
import { Analytics } from '@intecion/ipal-kit/client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { libreFranklin, signika } from '@/fonts'
import { i18nConfig } from '@/i18n.config'
import { getConfiguredLocales } from '@/lib/locales'
import {
  getCachedPayload,
  getCompany,
  getFooter,
  getHeader,
  getSettings,
} from '@/lib/payload'

import '../styles.css'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const locales = await getConfiguredLocales()

  if (!locales.includes(locale)) {
    notFound()
  }

  const payload = await getCachedPayload()

  const [settings, header, footer, company] = await Promise.all([
  getSettings(locale),
  getHeader(),
  getFooter(),
  getCompany(),
])

  const privacyPage = (settings as { privacyPolicy?: unknown }).privacyPolicy

  await Promise.all([
    getConsentTexts({
      config: i18nConfig,
      locale,
      payload,
      privacyPolicy:
        privacyPage && typeof privacyPage === 'object'
          ? {
              page: privacyPage,
              label: 'Polityka prywatności',
            }
          : undefined,
    }),
    getAnalyticsConfig(payload),
  ])

  const analytics = await getAnalyticsConfig(payload)

  return (
    <body className={`${libreFranklin.variable} ${signika.variable}`}>
      <Header
        header={header}
        settings={settings}
        locale={locale}
      />

      {children}

      <Footer
    footer={footer}
    settings={settings}
    company={company}
  />

      <Analytics {...analytics} />
    </body>
  )
}

export async function generateStaticParams() {
  const locales = await getConfiguredLocales()

  return locales.map((locale) => ({
    locale,
  }))
}