import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { ipalKit, panelSmtpAdapter } from '@intecion/ipal-kit'
import { i18nConfig } from '@/i18n.config'
import { Pages } from '@/collections/Pages'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

import { Icons } from './collections/Icons'

import { Pricing } from '@/globals/Pricing'
import { Company } from '@/globals/Company'
import { Contact } from '@/globals/Contact'

import { Navigation } from '@/collections/Navigation'
import { Header } from '@/globals/Header'
import { Footer } from '@/globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Icons, Pages, Navigation],
  globals: [Pricing, Company, Contact, Header, Footer],
  email: panelSmtpAdapter(),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    ipalKit({
      i18n: i18nConfig,
      access: { authCollection: 'users' },
      pages: { slug: 'pages' },
      seo: { collections: ['pages'] },
      forms: { redirectRelationships: ['pages'] },
    }),
  ],
})
