import Link from 'next/link';
import s from './FilterBar.module.scss';
import cn from 'classnames';

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

	return (
		<nav className={cn(s.filter, className)}>
			<ul>
				{options.map((opt, idx) => (
					<li key={idx} className={cn(isSelected(opt.id) && s.selected)}>
						<Link
							href={{
								pathname,
								query: Object.keys(params).reduce(
									(acc, k) => {
										acc[k] = options.some((o) => o.key === k)
											? params[k] === opt.id
												? null
												: opt.id
											: params[k];

										return acc;
									},
									{ ...params },
								),
							}}
							prefetch={true}
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
