import s from './page.module.scss';
import cn from 'classnames';
import {
	AllActivitiesDocument,
	AllActivitiesForCalendarDocument,
	AllActivityCategoriesDocument,
	AllKnowledgesFilterDocument,
	KnowledgeFiltersDocument,
} from '@/graphql';
import { activityStatus, pageSize } from '@/lib/utils';
import { CardContainer, NewsCard, FilterBar, RevealText, Breadcrumbs, Loader } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { createLoader, parseAsString, parseAsArrayOf } from 'nuqs/server';
import Link from 'next/link';
import { MonthCalendar } from '@/components';
import { DraftMode, InfiniteScroll } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import FilterBarDropdown from '@/components/common/FilterBarDropdown';

export type ActivityRecordWithStatus = ActivityRecord & {
	status: { value: string; label: string };
};

type NewsCardProps = React.ComponentProps<typeof NewsCard>;

const viewParams = {
	theme: parseAsArrayOf(parseAsString).withDefault([]),
	length: parseAsString,
	series: parseAsArrayOf(parseAsString).withDefault([]),
};

const loadSearchParams = createLoader(viewParams);

export const dynamic = 'auto';

export default async function KnowledgePage({ searchParams }: PageProps<'/kunskapsbank'>) {
	const params = await loadSearchParams(searchParams);
	const { theme, length, series } = params;
	const {
		allKnowledgeCategories,
		allKnowledgeLengths,
		allKnowledgeSeries,
		allKnowledgeThemes,
		draftUrl,
	} = await apiQuery(KnowledgeFiltersDocument);

	async function getKnowledges(skip: number) {
		'use server';
		const { allKnowledges } = await apiQuery(AllKnowledgesFilterDocument, {
			variables: { themeIds: theme, lengthId: length, seriesIds: series, skip },
		});

		return allKnowledges.map(({ title, intro, slug, image, category }) => ({
			title,
			slug: `/kunskapsbank/${category.slug}/${slug}`,
			image: image as FileField,
			label: '',
			text: intro,
			subtitle: category.category,
		}));
	}

	const knowledges = await getKnowledges(0);

	return (
		<>
			<div className={s.container}>
				<h1>
					<RevealText>Kunskapsbank</RevealText>
				</h1>
				<FilterBar
					pathname={'/kunskapsbank'}
					params={{ theme, length, series }}
					options={allKnowledgeThemes.map(({ id, title }) => ({
						id,
						label: title,
						key: 'theme',
					}))}
					className={s.filter}
				/>
				<FilterBarDropdown
					pathname={'/kunskapsbank'}
					params={{ theme, length, series }}
					options={[
						{
							key: 'series',
							label: 'Serie',
							items: allKnowledgeSeries.map(({ id, title }) => ({
								id,
								label: title,
							})),
						},
						{
							key: 'length',
							label: 'Längd',
							items: allKnowledgeLengths.map(({ id, title }) => ({
								id,
								label: title,
							})),
						},
					]}
				/>
				<CardContainer columns={2} className={s.activities} key={`${theme}`}>
					<InfiniteScroll
						id={`knowledge-${theme}`}
						initial={knowledges}
						params={params}
						next={getKnowledges}
					>
						{NewsCard}
					</InfiniteScroll>
				</CardContainer>
				{knowledges.length === 0 && <div className={s.nomatches}>Inga träffar...</div>}
			</div>
			<Breadcrumbs crumbs={[{ title: 'Kunskapsbank' }]} />
			<DraftMode path={`/kunskapsbank`} url={draftUrl} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Kunskapsbank',
		pathname: '/kunskapsbank',
	});
}
