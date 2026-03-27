import s from './SectionHeader.module.scss';
import cn from 'classnames';
import { ReadMore } from '@/components';

export type SectionHeaderProps = {
	title: string;
	slug?: string;
	margin?: boolean;
};

export default function SectionHeader({ title, slug, margin }: SectionHeaderProps) {
	return (
		<header className={cn(s.header, margin && s.minusMargin)}>
			<h2>{title}</h2>
			{slug && <ReadMore link={slug} message='Visa alla'></ReadMore>}
		</header>
	);
}
