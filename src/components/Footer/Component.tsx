import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/Icon/Icon'
import type { Icon as IconType } from '@/payload-types'

import type { Company, Footer as FooterType, Navigation, Page, SiteSetting } from '@/payload-types'

type Props = {
  footer: FooterType
  settings: SiteSetting
  company: Company
}

export const Footer = ({ footer, settings, company }: Props) => {
  const navigation =
    typeof footer.navigation === 'object' ? (footer.navigation as Navigation) : null

  const privacyPage =
    settings.privacyPolicy && typeof settings.privacyPolicy === 'object'
      ? settings.privacyPolicy
      : null

  return (
    <footer>
      <div className="footer-container footer-grid">
        {/* Logo */}

        <div className="footer-logo">
          {typeof settings.logo === 'object' && settings.logo?.url && (
            <Image
              src={settings.logo.url}
              alt={settings.logo.alt ?? settings.siteName}
              width={180}
              height={60}
            />
          )}
        </div>

        {/* Kontakt */}

        <div>
          <h2 className="headline-h3">Kontakt</h2>

          <ul className="footer-list">
            <li className="font-semibold">{settings.siteName}</li>

            {footer.contactDetails.includes('phone') && (
              <li>
                <Link
                  href={`tel:${company.phone.value.replace(/\s+/g, '')}`}
                  className="footer-contact-item"
                >
                  <Icon icon={company.phone.icon as IconType} />
                  <span>{company.phone.value}</span>
                </Link>
              </li>
            )}

            {footer.contactDetails.includes('email') && (
              <li>
                <Link href={`mailto:${company.email.value}`} className="footer-contact-item">
                  <Icon icon={company.email.icon as IconType} />
                  <span>{company.email.value}</span>
                </Link>
              </li>
            )}

            {footer.contactDetails.includes('address') && (
              <li>
                {company.address.link ? (
                  <Link
                    href={company.address.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-item"
                  >
                    <Icon icon={company.address.icon as IconType} />
                    <span>{company.address.value}</span>
                  </Link>
                ) : (
                  <div className="footer-contact-item">
                    <Icon icon={company.address.icon as IconType} />
                    <span>{company.address.value}</span>
                  </div>
                )}
              </li>
            )}

            {privacyPage && (
              <li>
                <Link href={`/${privacyPage.slug}`}>Polityka prywatności</Link>
              </li>
            )}
          </ul>
        </div>

        {/* Menu */}

        <div>
          <h2 className="headline-h3">Oferta</h2>

          <ul className="footer-list">
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
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-container">
          <p>
            © {new Date().getFullYear()} {settings.siteName}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
