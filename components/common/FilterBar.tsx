import Link from 'next/link';
import s from './FilterBar.module.scss';
import cn from 'classnames';

type FilterOption = {
	id: string;
	label: string;
};

type Props = {
	options: FilterOption[];
	params: {
		view: string;
		category?: string | null;
	};
	pathname: string;
};

export default function FilterBar({ options = [], params, pathname }: Props) {
	return (
		<nav className={s.filter}>
			<ul>
				<li>Visa:</li>
				{options.map((opt, idx) => (
					<li key={idx} className={cn(params.category === opt.id && s.selected)}>
						<Link
							href={{
								pathname,
								query: { ...params, category: params.category === opt.id ? null : opt.id },
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
