'use client'

import { useEffect } from 'react'

type Props = {
  selector?: string
}

export const GLightboxComponent = ({
  selector = '.gallery-lightbox',
}: Props) => {
  useEffect(() => {
    const initLightbox = async () => {
      const { default: GLightbox } = await import('glightbox')

      const lightbox = GLightbox({
        selector,
      })

      return lightbox
    }

    let lightbox: Awaited<ReturnType<typeof initLightbox>>

    initLightbox().then((instance) => {
      lightbox = instance
    })

    return () => {
      lightbox?.destroy()
    }
  }, [selector])

  return null
}