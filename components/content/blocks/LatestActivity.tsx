import s from './LatestActivity.module.scss';
import { CardContainer, NewsCard, SectionHeader } from '@/components';

export type LatestActivityBlockProps = {
	data: LatestActivityRecord & {
		activities: ActivityRecord[];
	};
};

export default function LatestActivity({ data: { activities } }: LatestActivityBlockProps) {
	return (
		<section className={s.container} suppressHydrationWarning>
			<SectionHeader title='Aktuella aktiviteter' slug={'/aktiviteter'} margin={true} />
			<CardContainer columns={2}>
				{activities?.map(({ title, intro, slug, image, category }, idx) => (
					<NewsCard
						key={idx}
						title={title}
						subtitle={`${category.category}`}
						text={intro}
						image={image}
						slug={`/aktiviteter/${slug}`}
					/>
				))}
			</CardContainer>
		</section>
	);
}
