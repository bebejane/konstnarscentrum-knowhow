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
	const [values, setValues] = useState<Record<string, string | null>>({});

	function isSelected(id: string) {
		return Object.keys(params).some((k) =>
			Array.isArray(params[k]) ? params[k].includes(id) : params[k] === id,
		);
	}

	function toggle(e: React.MouseEvent<HTMLSpanElement>) {
		const key = e.currentTarget.dataset.key as string;
		setOpen((prev) => ({ [key]: !prev[key] }));
	}

	function setValue(key: string, value: string | null) {
		setValues((prev) => ({ ...prev, [key]: value }));
	}

	return (
		<nav className={s.filter}>
			<ul>
				{options.map((opt, idx) => (
					<li key={idx}>
						<div className={s.label}>{opt.label}: </div>
						<div className={s.value}>
							<span className={cn(open[opt.key] && s.open)} onClick={toggle} data-key={opt.key}>
								{values[opt.key] ?? 'Alla'}
							</span>
							<ul className={cn(s.options, open[opt.key] && s.open)}>
								{opt.items.map((item, idx) => (
									<li key={idx} className={cn(isSelected(item.id) && s.selected)}>
										<Link
											prefetch={true}
											onClick={() => setOpen({})}
											href={{
												pathname,
												query: Object.keys(params).reduce(
													(acc, k) => {
														acc[k] = options.some((o) => o.key === k)
															? params[k] === item.id
																? null
																: item.id
															: params[k];

														return acc;
													},
													{ ...params },
												),
											}}
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
