'use client';

import s from './MenuMobile.module.scss';
import cn from 'classnames';
import { useShallow, useStore } from '@/lib/store';
import { Twirl as Hamburger } from 'hamburger-react';
import React, { useEffect, useRef, useState } from 'react';
import type { Menu, MenuItem } from '@/lib/menu';
import Link from 'next/link';
import { useScrollInfo } from 'next-dato-utils/hooks';
import useDevice from '@/lib/hooks/useDevice';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export type MenuMobileProps = { items: Menu };

const englishMenuItem: MenuItem = {
	type: 'language',
	label: 'English',
	slug: '/english',
	index: true,
};

export default function MenuMobile({ items }: MenuMobileProps) {
	const pathname = usePathname();
	const isHome = pathname === '/';
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const { scrolledPosition } = useScrollInfo();
	const [selected, setSelected] = useState<MenuItem | undefined>();
	const { isDesktop } = useDevice();
	const [showMenuMobile, setShowMenuMobile, invertedMenu, setInvertedMenu, setShowSearch] =
		useStore(
			useShallow((state) => [
				state.showMenuMobile,
				state.setShowMenuMobile,
				state.invertedMenu,
				state.setInvertedMenu,
				state.setShowSearch,
			]),
		);

	const handleClick = () => [setShowMenuMobile(false)];
	const handleSearch = (e: React.MouseEvent) => {
		setShowSearch(true);
		setShowMenuMobile(false);
	};

	useEffect(() => {
		if (!isHome || isDesktop) return setInvertedMenu(false);

		setInvertedMenu(!showMenuMobile);
	}, [isDesktop, isHome, scrolledPosition, setInvertedMenu, showMenuMobile]);

	useEffect(() => {
		if (showMenuMobile) setTheme('light');
	}, [showMenuMobile, setTheme]);

	useEffect(() => {
		if (!items || !items.length) return;

		const menuItem = items.find(
			({ slug, sub }) => slug === pathname || sub?.find(({ slug }) => slug === pathname),
		);

		if (!menuItem) return;

		const item =
			menuItem.slug === pathname ? menuItem : menuItem.sub?.find(({ slug }) => slug === pathname);
		item && setSelected(item);
	}, [pathname, items]);

	useEffect(() => {
		setShowMenuMobile(false);
		setMounted(true);
	}, [pathname]);

	return (
		<>
			<div className={s.hamburger}>
				{mounted && (
					<Hamburger
						toggled={showMenuMobile}
						onToggle={setShowMenuMobile}
						color={invertedMenu || (theme === 'dark' && !showMenuMobile) ? '#ffffff' : '#121212'}
						duration={0.5}
						label={'Menu'}
						size={24}
					/>
				)}
			</div>
			<div className={cn(s.mobileMenu, showMenuMobile && s.show)}>
				<nav>
					<ul className={s.nav}>
						{items.map((item, idx) => (
							<React.Fragment key={idx}>
								<li
									data-slug={item.slug}
									className={cn(selected?.type === item.type && s.selected)}
									onClick={() => setSelected(selected?.type === item.type ? undefined : item)}
								>
									{item.index ? (
										<Link href={item.slug} onClick={handleClick}>
											{item.label}
										</Link>
									) : (
										<>{item.label}</>
									)}
								</li>
								{item.type === selected?.type &&
									!item.index &&
									item.sub?.map(({ slug, label }, idx) => (
										<li className={cn(slug === pathname && s.selectedSub)} key={`sub-${idx}`}>
											<Link href={slug} onClick={handleClick}>
												{label}
											</Link>
										</li>
									))}
							</React.Fragment>
						))}
					</ul>
					<ul className={s.footer}>
						<li onClick={handleSearch}>Sök</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
