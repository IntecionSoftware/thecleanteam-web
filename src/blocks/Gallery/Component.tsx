import Image from 'next/image'

import { GLightboxComponent } from '@/components/GLightbox/GLightbox'

import type { Gallery as GalleryProps, Media } from '@/payload-types'

type Props = GalleryProps

export const Gallery = ({ heading, images }: Props) => {
  return (
    <section className="gallery">
      <div className="site-container">
        <h2 className="headline-h2">
          {heading}
        </h2>

        <div className="gallery-grid">
          {images.map((image) => {
            const media =
              typeof image === 'object'
                ? (image as Media)
                : null

            if (!media?.url) return null

            return (
              <a
                key={media.id}
                href={media.url}
                className="gallery-lightbox gallery-item"
              >
                <Image
                  src={media.url}
                  alt={media.alt ?? ''}
                  width={media.width ?? 800}
                  height={media.height ?? 800}
                  className="h-full w-full object-cover"
                />
              </a>
            )
          })}
        </div>

        <GLightboxComponent />
      </div>
    </section>
  )
}