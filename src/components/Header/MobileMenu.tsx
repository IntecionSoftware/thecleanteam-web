'use client'

import { useEffect, useState } from 'react'

import { LinkButton } from '@/components/LinkButton'

import type {
  Header,
  Navigation,
} from '@/payload-types'

type Props = {
  navigation: Navigation | null
  button: Header['button']
  locale: string
}

export const MobileMenu = ({
  navigation,
  button,
  locale
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <>
      <button
        className={`header-toggle ml-auto lg:hidden ${isOpen ? 'active' : ''}`}
        type="button"
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          className="icon-menu"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>

        <svg
          className="icon-close"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      </button>

      <nav
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        aria-label="Menu mobilne"
      >
        <span className="text-2xl text-center font-bold text-dark">
          Menu
        </span>

        <ul className="mobile-menu-list">
          {navigation?.items?.map((item) => {
            const page =
              typeof item.page === 'object'
                ? item.page
                : null

            const href = page?.slug
  ? `/${locale}/${page.slug}${item.anchor ?? ''}`
  : item.anchor ?? '#'

            return (
              <li key={item.id}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label || page?.title}
                </a>
              </li>
            )
          })}
        </ul>

        {button?.[0] && (
          <div className="mobile-menu-cta">
            <LinkButton {...button[0]} locale={locale} />
          </div>
        )}
      </nav>

      <div
        className={`mobile-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}