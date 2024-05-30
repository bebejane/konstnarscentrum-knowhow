import s from './SelectedMember.module.scss'
import React from 'react'
import { CardContainer, Card, Thumbnail, BackgroundImage } from '/components'
import SectionHeader from '../layout/SectionHeader'

export type SelectedMemberBlockProps = {
  data: SelectedMemberRecord
}

export default function SelectedMember({ data: { selectedMembers } }: SelectedMemberBlockProps) {

  return (
    <section className={s.container}>
      <SectionHeader
        title="Upptäck konstnärer"
        slug={"/anlita-oss/hitta-konstnar"}
        regional={true}
        margin={true}
      />
      <CardContainer columns={3} whiteBorder={true}>
        {selectedMembers?.map(({ firstName, lastName, image, slug }, idx) =>
          <Card key={idx}>
            <Thumbnail
              title={`${firstName} ${lastName}`}
              image={image}
              slug={`/anlita-oss/hitta-konstnar/${slug}`}
              regional={false}
            />
          </Card>
        )}
      </CardContainer>
      <BackgroundImage image={selectedMembers?.[0]?.image}></BackgroundImage>
    </section>
  )
}