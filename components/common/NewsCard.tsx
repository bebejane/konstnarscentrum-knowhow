'use client';

import s from './NewsCard.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { Card, ReadMore } from '@/components';
import BalanceText from 'react-balance-text';
import { format } from 'date-fns';
import { truncateParagraph } from 'next-dato-utils/utils';

export type NewsCardProps = {
	title: string;
	subtitle: string;
	label?: string;
	text: string;
	slug: string;
	date?: string;
	image?: FileField | null | any;
	past?: boolean;
};

export default function NewsCard({
	title,
	subtitle,
	date,
	text,
	slug,
	image,
	label,
	past,
}: NewsCardProps) {
	return (
		<Card className={cn(s.card, past && s.past)}>
			{image && image.responsiveImage && (
				<Link href={slug}>
					<Image className={s.image} data={image.responsiveImage} />
					{label && (
						<div className={s.label}>
							<h5>{label}</h5>
						</div>
					)}
				</Link>
			)}
			<h5 suppressHydrationWarning>
				{`${subtitle}${date ? ` • ${format(new Date(date), 'd MMM').replace('.', '')}` : ''}`}
			</h5>
			<Link href={slug}>
				<BalanceText>
					<h4>{title}</h4>
				</BalanceText>
			</Link>
			<p className='mid' data-datocms-content-link-source={text}>
				{truncateParagraph(text, 1, false)}
			</p>
			<ReadMore link={slug} message='Läs mer'></ReadMore>
		</Card>
	);
}
