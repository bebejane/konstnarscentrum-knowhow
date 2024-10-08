
import s from './RelatedMemberNews.module.scss'
import React from 'react'
import Link from 'next/link'
import { StructuredContent } from '/components'
import { Article } from '/components'
import format from 'date-fns/format'

export type RelatedMemberNewsBlockProps = {
  data: {
    memberNews: MemberNewsRecord
  },
  onClick: Function
}

export default function RelatedMemberNews({ data: { memberNews }, data, onClick }: RelatedMemberNewsBlockProps) {
  const { id, content, blackHeadline } = memberNews
  return (

    <Article
      id={id}
      blackHeadline={blackHeadline}
      content={content}
    />
  )
}
