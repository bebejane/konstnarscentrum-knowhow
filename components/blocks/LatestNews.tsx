import s from './LatestNews.module.scss'
import cn from 'classnames'
import React from 'react'
import format from 'date-fns/format'
import Link from 'next/link'
import { CardContainer, Card, NewsCard, SectionHeader } from '/components'

export type LatestNewsBlockProps = {
  data: LatestNewsRecord & {
    news: NewsRecord[]
  }
}

export default function LatestNews({ data: { news } }: LatestNewsBlockProps) {
  //console.log(data);

  return (
    <section className={s.container}>
      <SectionHeader title="Nyheter" slug={"/nyheter"} margin={true} regional={true}
      />
      <CardContainer columns={2}>
        {news.map(({ id, region, intro, slug, title, createdAt }, idx) =>
          <NewsCard
            key={idx}
            title={title}
            subtitle={`${format(new Date(createdAt), "d MMMM y")} • ${region.name}`}
            text={intro}
            slug={`/nyheter/${slug}`}
            regionName={region.name}
          />
        )}
      </CardContainer>
    </section>
  )
}