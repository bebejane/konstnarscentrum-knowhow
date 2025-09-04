import s from './ImageShortcutDouble.module.scss'
import cn from 'classnames'
import React from 'react'
import { KCImage as Image } from '/components'
import ReadMore from '../common/ReadMore'

export type ImageShortcutDoubleBlockProps = {
  data: ImageShortcutDoubleRecord
}

export default function ImageShortcutDouble({ data: { shortcuts } }: ImageShortcutDoubleBlockProps) {

  return (
    <section className={s.container}>
      {shortcuts.map(({ image, headline, text, link, blackHeadline }, idx) =>
        <figure key={idx}>
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
            <p className={cn(blackHeadline && s.black, "mid")}>{text}</p><br />
            <ReadMore link={link} message={link === '/english' ? 'Read more' : 'Läs mer'} external={true} regional={false} invert={blackHeadline ? false : true} />
          </figcaption>
        </figure>
      )}
    </section >
  )
}