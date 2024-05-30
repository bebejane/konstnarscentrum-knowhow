import s from './Pager.module.scss'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export type PagerProps = {
  pagination: Pagination,
  onInView?: (inView: boolean) => void
  slug: string
}

export default function Pager({ onInView, pagination: { count, page: paginationPage, size }, slug }: PagerProps) {

  const pages = new Array(Math.ceil(count / size)).fill(0).map((p, idx) => idx + 1);
  const { inView, ref } = useInView({})

  useEffect(() => onInView?.(inView), [inView])

  if (pages.length <= 1)
    return null

  return (
    <nav className={s.container} ref={ref}>
      <ul>
        {pages.map((p, idx) =>
          <li key={idx}>
            {paginationPage === p ? <>{p}</> : <Link href={`${slug}/sida/${p}`}>{p}</Link>}
          </li>
        )}
      </ul>
    </nav>
  )
}