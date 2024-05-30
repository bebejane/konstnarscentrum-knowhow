import s from './MenuDesktop.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import { useStore } from '/lib/store'
import { useScrollInfo } from 'dato-nextjs-utils/hooks'
import type { Menu, MenuItem } from '/lib/menu'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export type MenuDesktopProps = { items: Menu, home: boolean }

export default function MenuDesktop({ items, home }: MenuDesktopProps) {

	const menuRef = useRef<HTMLDivElement | null>(null);
	const subRef = useRef<HTMLDivElement | null>(null);
	const menuBarRef = useRef<HTMLUListElement | null>(null);
	const { theme } = useTheme()
	const router = useRouter()
	const [paddingLeft, setPaddingLeft] = useState<string>('0px')
	const [selected, setSelected] = useState<MenuItem | undefined>()
	const [showMenu, setShowMenu] = useStore((state) => [state.showMenu, state.setShowMenu])
	const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition, viewportHeight, documentHeight } = useScrollInfo()
	const isNearBottom = scrolledPosition + viewportHeight > (documentHeight - (viewportHeight * 0.5))

	const isActive = (item: MenuItem, parent: boolean = false): boolean => {
		const slugs = [item.slug]

		if (parent) {
			return slugs.find(s => router.asPath.startsWith(s)) !== undefined
		}
		return slugs.includes(router.asPath)
	}

	useEffect(() => { // Toggle menu bar on scroll

		const menuTop = menuRef.current.getBoundingClientRect().top

		if (menuTop > 0 || isNearBottom || (scrolledPosition < 100 && showMenu))
			return

		setShowMenu((isScrolledUp && !isPageBottom) || (isPageTop))
	}, [scrolledPosition, documentHeight, viewportHeight, isPageBottom, isPageTop, isScrolledUp, setShowMenu, menuRef]);

	useEffect(() => {
		if (typeof selected === 'undefined')
			return

		const isAtBottom = menuRef.current.getBoundingClientRect().bottom >= viewportHeight
		const el = document.querySelector<HTMLUListElement>(`[data-menu-type="${selected.type}"]`)
		const ul = menuRef.current.querySelector<HTMLUListElement>(`ul.${s.show}`)
		const bounds = el.getBoundingClientRect()

		setPaddingLeft(`${bounds.left}px`)

		if (isAtBottom && ul) {
			const paddingTop = parseInt(getComputedStyle(ul).paddingTop)
			const paddingBottom = parseInt(getComputedStyle(ul).paddingBottom)
			window.scrollTo({ top: subRef.current.clientHeight - menuBarRef.current.clientHeight - paddingTop + paddingBottom, behavior: 'smooth' })
		}

	}, [selected, viewportHeight])

	useEffect(() => {
		setSelected(undefined)
		setShowMenu(true)
	}, [router])

	return (
		<>
			<nav id="menu" ref={menuRef} className={cn(s.menu, showMenu && s.show)} data-theme={theme}>
				<ul
					className={s.nav}
					ref={menuBarRef}
					onMouseLeave={() => setSelected(undefined)}
				>
					{items.map((item, idx) =>
						<li
							key={idx}
							data-menu-type={item.type}
							className={cn(isActive(item, true) && s.active)}
							onMouseEnter={() => setSelected(item)}
						>
							{item.index ?
								<Link href={item.slug}>
									{item.label}
								</Link>
								:
								<>{item.label}</>
							}
						</li>
					)}
				</ul>
				<div className={s.background} ref={subRef} style={{ paddingLeft }}>
					{items.map((item, i) => {
						return (
							<ul
								key={i}
								data-sub-type={item.type}
								className={cn(s.sub, selected?.type === item.type && !selected.index && s.show)}
								onMouseLeave={() => setSelected(undefined)}
								onMouseEnter={() => setSelected(item)}
							>
								{item.sub?.map((item, idx) =>
									<li key={idx} className={cn(isActive(item) && s.active)}>
										<Link href={item.slug}>
											{item.label}
										</Link>
									</li>
								)}
							</ul>
						)
					})}
				</div>
			</nav>
		</>
	)
}
