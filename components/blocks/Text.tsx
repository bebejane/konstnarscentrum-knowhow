import s from './Text.module.scss'
import React from 'react'
import Link from 'next/link';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import ReadMore from '../common/ReadMore';

export type TextBlockProps = {
  data: TextRecord
}

export default function Text({ data: { text, headline, link } }: TextBlockProps) {

  return (
    <div className={s.container}>
      {headline &&
        <h2>{headline}</h2>
      }
      <h3>
        <Markdown className={s.text}>
          {text}
        </Markdown>
      </h3>
      <ReadMore link={link} message='Läs mer' regional={false}></ReadMore>
    </div>
  )
}