'use client';

import s from './Breadcrumbs.module.scss';
import cn from 'classnames';
import { useStore, useShallow } from '@/lib/store';
import Link from 'next/link';
import React from 'react';

export type Props = {
	crumbs?: {
		title: string;
		slug?: string;
	}[];
};

export default function Breadcrumbs({ crumbs: _crumbs }: Props) {
	const [showSearch, showMenu] = useStore(
		useShallow((state) => [state.showSearch, state.showMenu]),
	);

	if (showSearch) return null;

	const crumbs = [{ title: 'Hem', slug: '/' }, ...(_crumbs ?? [])];

	return (
		<div className={cn(s.container, 'mid', !showMenu && s.show)}>
			{crumbs?.map(({ slug, title }, idx) => (
				<React.Fragment key={idx}>
					{!slug ? <span>{title}</span> : <Link href={slug}>{title}</Link>}
					{idx + 1 < crumbs.length && <>&nbsp;›&nbsp;</>}
				</React.Fragment>
			))}
		</div>
	);
}
