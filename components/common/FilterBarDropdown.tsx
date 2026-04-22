'use client';

import Link from 'next/link';
import s from './FilterBarDropdown.module.scss';
import cn from 'classnames';
import { useState } from 'react';

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
	const [open, setOpen] = useState<Record<string, boolean>>({});
	const [values, setValues] = useState<
		Record<string, FilterDropdownOption['items'][number] | null | undefined>
	>({});

	function isSelected(id: string) {
		return Object.keys(params).some((k) =>
			Array.isArray(params[k]) ? params[k].includes(id) : params[k] === id,
		);
	}

	function toggle(e: React.MouseEvent<HTMLSpanElement>) {
		const key = e.currentTarget.dataset.key as string;
		setOpen((prev) => ({ [key]: !prev[key] }));
	}

	function handleClick(e: React.MouseEvent<HTMLSpanElement>) {
		const key = e.currentTarget.dataset.key as string;
		const itemId = e.currentTarget.dataset.itemId as string;
		const item = options.find((el) => el.key === key)?.items.find((el) => el.id === itemId) ?? null;
		setValues((prev) => ({ ...prev, [key]: item }));
		setOpen({});
	}

	function getQuery(item?: FilterDropdownOption['items'][number]) {
		return Object.keys(params).reduce(
			(acc, k) => {
				acc[k] = options.some((o) => o.key === k)
					? params[k] === item?.id
						? null
						: (item?.id ?? null)
					: params[k];

				return acc;
			},
			{ ...params },
		);
	}
	return (
		<nav className={s.filter}>
			<ul>
				{options.map((opt, idx) => (
					<li key={idx}>
						<div className={s.label}>{opt.label}: </div>
						<div className={s.value}>
							<span className={cn(open[opt.key] && s.open)} onClick={toggle} data-key={opt.key}>
								{values[opt.key]?.label ?? 'Alla'}
							</span>
							<ul className={cn(s.options, open[opt.key] && s.open)}>
								{values[opt.key] && (
									<li>
										<Link
											prefetch={true}
											data-key={opt.key}
											href={{ pathname, query: getQuery() }}
											onClick={handleClick}
										>
											Alla
										</Link>
									</li>
								)}
								{opt.items.map((item, idx) => (
									<li key={idx} className={cn(isSelected(item.id) && s.selected)}>
										<Link
											prefetch={true}
											data-key={opt.key}
											data-item-id={item.id}
											onClick={handleClick}
											href={{ pathname, query: getQuery(item) }}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
			<div className={s.background}></div>
		</nav>
	);
}
