import s from './page.module.scss';
import cn from 'classnames';
import {
	AllActivitiesDocument,
	AllActivitiesForCalendarDocument,
	AllActivityCategoriesDocument,
} from '@/graphql';
import { activityStatus, pageSize } from '@/lib/utils';
import { CardContainer, NewsCard, FilterBar, RevealText, Breadcrumbs } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { createLoader, parseAsString } from 'nuqs/server';
import Link from 'next/link';
import { MonthCalendar } from '@/components';
import { InfiniteScroll } from '@/components/common/InfiniteScroll';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';

export type ActivityRecordWithStatus = ActivityRecord & {
	status: { value: string; label: string };
};

type NewsCardProps = React.ComponentProps<typeof NewsCard>;

const viewParams = {
	view: parseAsString.withDefault('list'),
	category: parseAsString,
	d: parseAsString,
};

const loadSearchParams = createLoader(viewParams);

export default async function Activities({ params, searchParams }: PageProps<'/aktiviteter'>) {
	const { view, category, d } = await loadSearchParams(searchParams);
	const { allActivityCategories, draftUrl } = await apiQuery(AllActivityCategoriesDocument);
	const categoryId = allActivityCategories.find((el) => el.category === category)?.id;
	const { allActivities: allActivitiesForCalendar } = await apiQuery(
		AllActivitiesForCalendarDocument,
		{
			all: true,
			variables: { categoryId },
		},
	);

	async function getActivities(
		skip: number,
	): Promise<{ activities: NewsCardProps[]; count: number }> {
		'use server';
		const {
			allActivities,
			_allActivitiesMeta: { count },
		} = await apiQuery(AllActivitiesDocument, {
			variables: { categoryId, first: pageSize, skip },
		});

		return {
			activities: allActivities
				.filter(({ category }) => (categoryId ? categoryId === category?.id : true))
				.map((el) => ({ ...el, status: activityStatus(el.date, el.dateEnd) }))
				.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
				.sort((a, b) => (a.status.value === 'past' ? 1 : -1))
				.sort((a, b) => {
					if (a.status.value === 'past' && b.status.value === 'past')
						return new Date(a.date) > new Date(b.date) ? -1 : 1;
					return 0;
				})
				.map(({ id, title, intro, slug, image, category, date, dateEnd }) => ({
					title,
					slug: `/aktiviteter/${slug}`,
					image: image as FileField,
					date,
					label: activityStatus(date, dateEnd).label,
					past: activityStatus(date, dateEnd).value === 'past',
					text: intro,
					subtitle: category.category ?? '',
				})),
			count,
		};
	}

	const { activities, count } = await getActivities(0);

	return (
		<>
			<div className={s.container}>
				<h1>
					<RevealText>Aktiviteter</RevealText>
				</h1>
				<FilterBar
					pathname={'/aktiviteter'}
					params={{ view, category }}
					options={allActivityCategories.map(({ category }) => ({
						label: category,
						id: category,
					}))}
				/>
				{view === 'list' && (
					<>
						<CardContainer columns={2} className={s.activities} key={`${categoryId}`}>
							<InfiniteScroll<NewsCardProps>
								count={count}
								data={activities}
								next={async (offset) => {
									'use server';
									return (await getActivities(offset)).activities;
								}}
							>
								{NewsCard}
							</InfiniteScroll>
						</CardContainer>
						{activities.length === 0 && <div className={s.nomatches}>Inga träffar...</div>}
					</>
				)}
				{view == 'calendar' && (
					<MonthCalendar
						key={categoryId}
						className={s.activities}
						allActivities={allActivitiesForCalendar}
						initialDate={new Date(d ?? '')}
					/>
				)}
			</div>
			<Link
				className={s.view}
				href={{
					pathname: '/aktiviteter',
					query: { view: view === 'list' ? 'calendar' : 'list' },
				}}
			>
				<button className={cn('small', s.toggle)}>
					{view === 'list' ? 'Visa kalender' : 'Visa lista'}
				</button>
			</Link>
			<Breadcrumbs crumbs={[{ title: 'Aktiviteter' }]} />
			<DraftMode path={`/aktiviteter`} url={draftUrl} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Aktiviteter',
		pathname: '/aktiviteter',
	});
}
