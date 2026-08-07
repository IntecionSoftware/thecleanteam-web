'use client'

import { useEffect, useState } from 'react'

type Props = {
  icon?: {
    url?: string | null
  } | null
}

export const Icon = ({ icon }: Props) => {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    if (!icon?.url) return

    const loadSvg = async () => {
      const response = await fetch(icon.url!)

      let data = await response.text()

      data = data.replace(
        '<svg',
        '<svg fill="currentColor"',
      )

      setSvg(data)
    }

    loadSvg()
  }, [icon?.url])

  if (!svg) {
    return null
  }

  return (
    <span
      className="icon"
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: svg,
      }}
    />
  )
}