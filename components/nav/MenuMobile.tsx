import s from './MenuMobile.module.scss'
import cn from 'classnames'
import { useStore } from '/lib/store'
import { Twirl as Hamburger } from "hamburger-react";
import React, { useEffect, useRef, useState } from 'react';
import type { Menu, MenuItem } from '/lib/menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useScrollInfo } from 'dato-nextjs-utils/hooks';
import useDevice from '/lib/hooks/useDevice';
import { useTheme } from 'next-themes';

export type MenuMobileProps = { items: Menu, home: boolean }

const englishMenuItem: MenuItem = {
	type: 'language',
	label: 'English',
	slug: '/english',
	index: true
}

export default function MenuMobile({ items, home }: MenuMobileProps) {

	const router = useRouter()
	const { theme, setTheme } = useTheme()
	const isHome = router.asPath === '/'
	const { scrolledPosition } = useScrollInfo()
	const [selected, setSelected] = useState<MenuItem | undefined>();
	const [showRegions, setShowRegions] = useState<boolean>(false);
	const { isDesktop } = useDevice()
	const [showMenuMobile, setShowMenuMobile, invertedMenu, setInvertedMenu, setShowSearch] = useStore((state) => [state.showMenuMobile, state.setShowMenuMobile, state.invertedMenu, state.setInvertedMenu, state.setShowSearch])
	const regionsRef = useRef<HTMLLIElement | null>(null)


	const handleSearch = (e) => {
		setShowSearch(true)
		setShowMenuMobile(false)
	}

	useEffect(() => {
		if (!isHome || isDesktop)
			return setInvertedMenu(false)
		setInvertedMenu(!showMenuMobile)

	}, [isDesktop, isHome, scrolledPosition, setInvertedMenu, showMenuMobile])

	useEffect(() => {
		if (showMenuMobile)
			setTheme('light')
	}, [showMenuMobile, setTheme])

	useEffect(() => {
		if (!items || !items.length) return


		const menuItem = items.find(({ slug, sub }) => slug === router.asPath || sub?.find(({ slug }) => slug === router.asPath))

		if (!menuItem) return

		const item = menuItem.slug === router.asPath ? menuItem : menuItem.sub?.find(({ slug }) => slug === router.asPath)
		item && setSelected(item)
	}, [router, items])

	useEffect(() => {
		setShowMenuMobile(false)
	}, [setShowMenuMobile, router.pathname])

	return (
		<>
			<div className={s.hamburger}>
				<Hamburger
					toggled={showMenuMobile}
					onToggle={setShowMenuMobile}
					color={invertedMenu || (theme === 'dark' && !showMenuMobile) ? '#ffffff' : '#121212'}
					duration={0.5}
					label={"Menu"}
					size={24}
				/>
			</div>
			<div className={cn(s.mobileMenu, showMenuMobile && s.show)}>
				<nav>
					<ul className={s.nav}>
						{items.map((item, idx) =>
							<React.Fragment key={idx}>
								<li
									data-slug={item.slug}
									className={cn(selected?.type === item.type && s.selected)}
									onClick={() => setSelected(selected?.type === item.type ? undefined : item)}
								>
									{item.index ?
										<Link href={item.slug}>
											{item.label}
										</Link>
										:
										<>{item.label}</>
									}
								</li>
								{item.type === selected?.type && !item.index &&
									item.sub?.map(({ slug, label }, idx) =>
										<li className={cn(slug === router.asPath && s.selectedSub)} key={`sub-${idx}`}>
											<Link href={slug}>
												{label}
											</Link>
										</li>
									)
								}
							</React.Fragment>
						)}
					</ul>
					<ul className={s.footer}>
						<li onClick={handleSearch}>
							Sök
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}
