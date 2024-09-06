import s from './LatestActivity.module.scss'
import React from 'react'
import { CardContainer, NewsCard, SectionHeader } from '/components'

export type LatestActivityBlockProps = {
  data: LatestActivityRecord & {
    activities: ActivityRecord[]
  }
}

export default function LatestActivity({ data: { activities } }: LatestActivityBlockProps) {

  return (
    <section className={s.container}>
      <SectionHeader title="Aktuella aktiviteter" slug={"/aktiviteter"} margin={true} regional={true} />
      <CardContainer columns={2}>
        {activities.map(({ title, intro, slug, image, category }, idx) =>
          <NewsCard
            key={idx}
            title={title}
            subtitle={`${category.category}`}
            text={intro}
            image={image}
            slug={`/aktiviteter/${slug}`}
          />
        )}
      </CardContainer>
    </section>
  )
}