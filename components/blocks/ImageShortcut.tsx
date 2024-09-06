import s from './ImageShortcut.module.scss'
import cn from 'classnames'
import React from 'react'
import { KCImage as Image } from '/components'
import ReadMore from '../common/ReadMore'

export type ImageShortcutBlockProps = {
  data: ImageShortcutRecord
}

export default function ImageShortcut({ data: { headline, image, link, text, blackHeadline } }: ImageShortcutBlockProps) {

  return (
    <section className={s.container}>
      <figure>
        {image &&
          <Image
            className={s.image}
            data={image.responsiveImage}
            objectFit={'cover'}
            intersectionMargin="0px 0px 200% 0px"
          />
        }
        <figcaption>
          <div className={s.fade}></div>
          <h2 className={cn(blackHeadline && s.black)}>
            {headline}
          </h2>
          <p className={cn(blackHeadline && s.black, "intro")}>{text}</p><br />
          <ReadMore link={link} message={link === '/english' ? 'Read more' : 'Läs mer'} external={true} regional={false} invert={blackHeadline ? false : true} />
        </figcaption>
      </figure>
    </section >
  )
}