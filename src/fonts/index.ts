import { Libre_Franklin, Signika } from 'next/font/google'

export const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-body',
})

export const signika = Signika({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-heading',
})