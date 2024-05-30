import s from './SectionHeader.module.scss'
import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { ReadMore } from 'components'

export type SectionHeaderProps = {
  title: string,
  slug?: string,
  margin?: boolean;
  regional?: boolean
}

export default function SectionHeader({ title, slug, margin, regional = true }: SectionHeaderProps) {

  return (
    <header className={cn(s.header, margin && s.minusMargin)}>
      <h2>{title}</h2>
      {slug &&
        <ReadMore link={slug} regional={regional} message='Visa alla'></ReadMore>
      }
    </header>
  )
}