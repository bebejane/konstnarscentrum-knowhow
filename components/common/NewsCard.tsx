import s from './NewsCard.module.scss'
import React from 'react'
import Link from 'next/link'
import { KCImage as Image } from '/components'
import { Card, ReadMore } from '/components'
import BalanceText from 'react-balance-text'
import { truncateParagraph } from '/lib/utils'
import { format } from 'date-fns'

export type NewsCardProps = {
  title: string,
  subtitle: string,
  label?: string,
  text: string,
  slug: string,
  date?: string
  image?: FileField
}

export default function NewsCard({ title, subtitle, date, text, slug, image, label }: NewsCardProps) {

  return (
    <Card className={s.card}>
      {image &&
        <Link href={slug}>
          <Image className={s.image} data={image.responsiveImage} />
          {label && <div className={s.label}><h5>{label}</h5></div>}
        </Link>
      }

      <h5 suppressHydrationWarning>
        {`${subtitle}${date ? ` • ${format(new Date(date), "d MMM").replace('.', '')}` : ''}`}
      </h5>
      <Link href={slug}>
        <BalanceText><h4>{title}</h4></BalanceText>
      </Link>
      <p className="mid">{truncateParagraph(text, 1, false)}</p>
      <ReadMore link={slug} regional={false} message='Läs mer'></ReadMore>
    </Card>
  )
}