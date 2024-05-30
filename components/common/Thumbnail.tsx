import s from './Thumbnail.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { KCImage as Image } from '/components'
import React, { useEffect, useState, useRef } from 'react'
import useDevice from '/lib/hooks/useDevice'

export type Props = {
  image: FileField,
  slug: string,
  title: string,
  subtitle?: string,
  regional?: boolean
}

const speed = 0.07


export default function Thumbnail({ image, slug, title, subtitle, regional = true }: Props) {

  const [hover, setHover] = useState<undefined | boolean>(false);
  const [ratio, setRatio] = useState<number>(0)
  const { isDesktop } = useDevice()
  const horizontal = title.split('').slice((title.length * ratio))
  const vertical = title.split('').slice(0, Math.round(title.length * ratio))
  const readMore = subtitle || 'Visa'
  const more = readMore.split('').slice(readMore.length - (readMore.length * ratio))
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (typeof hover === 'undefined')
      return

    clearInterval(interval.current)

    interval.current = setInterval(() => {

      setRatio((ratio) => {
        const r = ratio += hover ? speed : -speed
        if (r < 0.0 || r > 1.0) {
          clearInterval(interval.current)
          return Math.max(0, Math.min(r, 1))
        }
        return r
      })
    }, 20)

    return () => clearInterval(interval.current)

  }, [hover])


  return (
    <Link
      className={s.thumbnail}
      href={slug}
      onMouseOver={() => isDesktop && setHover(true)}
      onMouseLeave={() => isDesktop && setHover(false)}
    >
      {image &&
        <Image
          data={image.responsiveImage}
          className={s.image}
          pictureClassName={cn(s.picture, hover && s.hover)}
          pictureStyle={{ left: hover ? '1.9rem' : 0 }}
          intersectionMargin="0px 0px 200% 0px"
        />
      }
      <span className={cn('mid', s.title, s.vertical)}>
        <span>{vertical.map((c, idx) =>
          <React.Fragment key={Math.random()}>{c}</React.Fragment>)}
        </span>
        <div className={s.fade}></div>
      </span>
      <span className={cn('mid', s.title, s.horizontal)}>
        <span className={s.first}>{horizontal.map(c => c)}</span>
        <span className={cn('mid', s.more, hover && s.hover)}>
          {more.map(c => c)}
        </span>
      </span>
    </Link>
  )
}