import s from './Content.module.scss'
import cn from 'classnames'
import React from 'react'
import { usePage } from '/lib/context/page'

export type ContentProps = {
	children: React.ReactNode,
	noMargins?: boolean
	noBottom?: boolean
}

export default function Content({ children, noMargins = false }: ContentProps) {

	const page = usePage()
	console.log(noMargins)
	return (
		<main id="content" className={cn(s.content, noMargins && s.noMargins, page.noBottom && s.noBottom)}>
			<article>
				{children}
			</article>
		</main>
	)
}