import Link from 'next/link'

import { Icon } from '@/components/Icon/Icon'
import type { Icon as IconType, Page } from '@/payload-types'

type Props = {
  label: string
  appearance: 'primary' | 'secondary'
  linkType: 'page' | 'anchor'

  page?: number | Page | null
  anchor?: string | null
  newTab?: boolean | null

  showIcon?: boolean | null
  icon?: number | IconType | null

  locale?: string
}

export const LinkButton = ({
  label,
  appearance,
  linkType,
  page,
  anchor,
  newTab,
  showIcon,
  icon,
  locale,
}: Props) => {
  const href =
    linkType === 'page'
      ? typeof page === 'object' && page?.slug
        ? `/${locale ?? 'pl'}/${page.slug}`
        : '#'
      : anchor || '#'

  const resolvedIcon = typeof icon === 'object' ? icon : null

  return (
    <Link
      href={href}
      className={appearance === 'primary' ? 'button-primary' : 'button-secondary'}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {label}

      {showIcon && resolvedIcon && <Icon icon={resolvedIcon} />}
    </Link>
  )
}