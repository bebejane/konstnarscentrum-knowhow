import Link from 'next/link';
import s from './FilterBar.module.scss';
import cn from 'classnames';
import { cleanObject } from '@/lib/utils';

type FilterOption = {
	key: string;
	id: string;
	label: string;
};

type Props = {
	options: FilterOption[];
	params: Record<string, string | string[] | null>;
	pathname: string;
	className?: string;
};

export default function FilterBar({ options = [], params, pathname, className }: Props) {
	function isSelected(id: string) {
		return Object.keys(params).some((k) =>
			Array.isArray(params[k]) ? params[k].includes(id) : params[k] === id,
		);
	}

	function getQuery(opt: FilterOption) {
		return cleanObject(
			Object.keys(params).reduce(
				(acc, k) => {
					acc[k] = options.some((o) => o.key === k)
						? opt.id === params[k]
							? null
							: opt.id
						: params[k];
					return acc;
				},
				{ ...params },
			),
		);
	}

	return (
		<nav className={cn(s.filter, className)}>
			<ul>
				{options.map((opt, idx) => (
					<li key={idx} className={cn(isSelected(opt.id) && s.selected)}>
						<Link
							prefetch={true}
							href={{
								pathname,
								query: getQuery(opt),
							}}
						>
							{opt.label}
						</Link>
					</li>
				))}
			</ul>
			<div className={s.background}></div>
		</nav>
	);
}
