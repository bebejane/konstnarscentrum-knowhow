'use client';

import Link from 'next/link';
import s from './FilterBarDropdown.module.scss';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { sortSwedish } from 'next-dato-utils/utils';
import { useOutsideClickRef } from 'rooks';
import { Modal } from 'next-dato-utils/components';
import { useWindowSize } from 'usehooks-ts';

type FilterDropdownOption = {
	key: string;
	label: string;
	items: {
		id: string;
		label: string;
	}[];
};

type Props = {
	options: FilterDropdownOption[];
	params: Record<string, string | string[] | null>;
	pathname: string;
};

export default function FilterBarDropdown({ options = [], params, pathname }: Props) {
	const [dropdown, setDrowpdown] = useState<FilterDropdownOption | null>();
	const [dropdownStyles, setDrowpdownStyles] = useState<React.CSSProperties | null>(null);
	const [filterScrollPosition, setFilterScrollPosition] = useState<number>(0);
	const [values, setValues] = useState<
		Record<string, FilterDropdownOption['items'][number] | null | undefined>
	>({});
	const { width, height } = useWindowSize();

	const [ref] = useOutsideClickRef(() => {
		setDrowpdown(null);
	});

	function isSelected(id: string) {
		return Object.keys(params).some((k) =>
			Array.isArray(params[k]) ? params[k].includes(id) : params[k] === id,
		);
	}

	function toggle(e: React.MouseEvent<HTMLSpanElement>) {
		const key = e.currentTarget.dataset.key as string;
		const dropdown = options.find((el) => el.key === key) ?? null;
		setDrowpdown((d) => (d?.key === dropdown?.key ? null : dropdown));
	}

	function handleClick(e: React.MouseEvent<HTMLSpanElement>) {
		e.preventDefault();
		const key = e.currentTarget.dataset.key as string;
		const itemId = e.currentTarget.dataset.itemId as string;
		const item = options.find((el) => el.key === key)?.items.find((el) => el.id === itemId) ?? null;
		setValues((prev) => ({ ...prev, [key]: item }));
		setDrowpdown(null);
	}

	function getQuery(item?: FilterDropdownOption['items'][number]) {
		const baseQuery = Object.keys(params).reduce(
			(acc, k) => {
				if (!options.some((o) => o.key === k)) {
					acc[k] = params[k];
				}
				return acc;
			},
			{} as Record<string, string | string[] | null>,
		);

		if (!item) {
			return baseQuery;
		}

		const option = options.find((o) => o.items.some((i) => i.id === item.id));
		if (!option) {
			return baseQuery;
		}

		const key = option.key;
		const currentValue = params[key];

		if (Array.isArray(currentValue)) {
			return {
				...baseQuery,
				[key]: currentValue.includes(item.id)
					? currentValue.filter((id) => id !== item.id)
					: [...currentValue, item.id],
			};
		}

		return {
			...baseQuery,
			[key]: currentValue === item.id ? null : item.id,
		};
	}

	useEffect(() => {
		if (dropdown) {
			const el = document.getElementById(dropdown.key);

			if (!el) return setDrowpdownStyles(null);
			const bounds = el.getBoundingClientRect();

			setDrowpdownStyles({
				top: `calc(${bounds.top + bounds.height + 1}px + 1em)`,
				left: bounds.left,
			});
		}
	}, [dropdown, width, height, filterScrollPosition]);

	return (
		<>
			<nav className={s.filter} ref={ref}>
				<ul onScroll={(e) => setFilterScrollPosition(e.currentTarget.scrollLeft)}>
					{options.map((opt, idx) => (
						<li key={idx}>
							<div className={s.label}>{opt.label}: </div>
							<div id={opt.key} className={s.value}>
								<button
									className={cn(dropdown?.key === opt.key && s.open)}
									onClick={toggle}
									data-key={opt.key}
								>
									{values[opt.key]?.label ?? 'Alla'}
								</button>
							</div>
						</li>
					))}
				</ul>
				<div className={s.background}></div>
			</nav>
			{dropdown && (
				<Modal>
					<ul className={cn(s.dropdown, dropdown && s.open)} style={dropdownStyles ?? undefined}>
						{values[dropdown.key] && (
							<li>
								<Link
									prefetch={true}
									data-key={dropdown.key}
									href={{ pathname, query: getQuery() }}
									onClick={handleClick}
								>
									Alla
								</Link>
							</li>
						)}
						{sortSwedish(dropdown.items, 'label').map((item, idx) => (
							<li key={idx} className={cn(isSelected(item.id) && s.selected)}>
								<Link
									prefetch={true}
									data-key={dropdown.key}
									data-item-id={item.id}
									onClick={handleClick}
									href={{ pathname, query: getQuery(item) }}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</Modal>
			)}
		</>
	);
}
