import Image from 'next/image'
import { RichText } from '@/components/RichText'

import { LinkButton } from '@/components/LinkButton/LinkButton'
import type { AboutBlock as AboutBlockType, Media } from '@/payload-types'

type Props = AboutBlockType & {
  locale?: string
}

export const About = ({ layout, heading, content, image, button, locale }: Props) => {
  const media = image as Media | null

  return (
    <section id="about" className="bg-white">
      <div
        className={`site-container about-grid ${layout === 'right' ? 'about-grid-reverse' : ''}`}
      >
        <div className="about-content">
          <h2 className="headline-h2">{heading}</h2>

          <RichText data={content} className="rich-text mt-10" />

          {button?.[0] && <LinkButton {...button[0]} appearance="secondary" locale={locale} />}
        </div>

        <figure className="about-image">
          {media?.url && (
            <Image src={media.url} alt={media.alt ?? heading} width={800} height={800} />
          )}
        </figure>
      </div>
    </section>
  )
}
