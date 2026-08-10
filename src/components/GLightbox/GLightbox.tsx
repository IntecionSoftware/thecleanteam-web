'use client'

import { useEffect } from 'react'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'

type Props = {
  selector?: string
}

export const GLightboxComponent = ({
  selector = '.gallery-lightbox',
}: Props) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector,
    })

    return () => {
      lightbox.destroy()
    }
  }, [selector])

  return null
}