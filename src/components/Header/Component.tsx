import Image from 'next/image'
import Link from 'next/link'

import { LinkButton } from '@/components/LinkButton'
import { MobileMenu } from './MobileMenu'

import type { Header as HeaderType, Icon, Navigation, Page, SiteSetting } from '@/payload-types'

type Props = {
  header: HeaderType
  settings: SiteSetting
  locale: string
}

export const Header = ({ header, settings }: Props) => {
  const navigation =
    typeof header.navigation === 'object' ? (header.navigation as Navigation) : null

  return (
    <header className="header">
      <div className="container flex h-24 items-center">
        {/* Logo */}

        <Link href="/" className="header-logo shrink-0" aria-label={settings.siteName}>
          {typeof settings.logo === 'object' && settings.logo?.url && (
            <Image
              src={settings.logo.url}
              alt={settings.logo.alt ?? settings.siteName}
              width={180}
              height={60}
            />
          )}
        </Link>

        {/* Desktop navigation */}

        <nav className="hidden flex-1 justify-center lg:flex" aria-label="Główna nawigacja">
          <ul className="header-menu">
            {navigation?.items?.map((item) => {
              const page = typeof item.page === 'object' ? (item.page as Page) : null

              const href = page?.slug ? `/${page.slug}${item.anchor ?? ''}` : (item.anchor ?? '#')

              return (
                <li key={item.id}>
                  <Link href={href}>{item.label || page?.title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header-cta">
          {header.button?.[0] && (
            <LinkButton {...header.button[0]} icon={header.button[0].icon as Icon} />
          )}
        </div>

        <MobileMenu navigation={navigation} button={header.button} />
      </div>
    </header>
  )
}
