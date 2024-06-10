import s from './Content.module.scss'
import cn from 'classnames'
import React from 'react'
import { usePage } from '/lib/context/page'

export type ContentProps = {
	children: React.ReactNode,
	noMargins: boolean
}

export default function Content({ children, noMargins }: ContentProps) {

	const page = usePage()
	console.log('noMargins', noMargins)

	return (
		<main id="content" className={s.content}>
			<article className={cn(noMargins && s.nomargins, page.noBottom && s.nobottom)}>
				{children}
			</article>
		</main>
	)
}