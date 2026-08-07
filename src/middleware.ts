// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createLocaleMiddleware } from '@intecion/ipal-kit/next/middleware'
import { i18nConfig } from '@/i18n.config'

const localeMiddleware = createLocaleMiddleware({ config: i18nConfig })

export function middleware(request: NextRequest) {
  const result = localeMiddleware(request)
  if (result.type === 'next') return NextResponse.next()

  const response = NextResponse.redirect(result.location)
  response.cookies.set(result.cookie.name, result.cookie.value)
  return response
}

// INLINE, nie import — Next analizuje ten obiekt statycznie i nie wykonuje
// importów. Importowana stała zostanie zignorowana, middleware złapie /admin
// i /_next, i wszystko zwróci 500.
export const config = {
  matcher: ['/((?!api|admin|_next|.*\\..*).*)'],
}