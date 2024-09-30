import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import useApiQuery from "/lib/hooks/useApiQuery";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { AllPresentActivitiesDocument, AllPastAndFutureActivitiesDocument, AllActivityCategoriesDocument } from "/graphql";
import { format } from "date-fns";
import { pageSize, apiQueryAll, activityStatus } from "/lib/utils";
import { CardContainer, NewsCard, FilterBar, RevealText, Loader } from '/components'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type ActivityRecordWithStatus = ActivityRecord & { status: { value: string, label: string } }
export type Props = {
	presentActivities: ActivityRecordWithStatus[],
	activities: ActivityRecordWithStatus[],
	activityCategories: ActivityCategoryRecord[]
	date: string
	pagination: Pagination
}

export default function Activities({ presentActivities, activities: activitiesFromProps, activityCategories, date, pagination }: Props) {

	const [activitiesCategoryId, setActivitiesCategoryId] = useState<string | string[] | undefined>()

	let { data: { activities }, loading, error, nextPage, page } = useApiQuery<{ activities: ActivityRecordWithStatus[] }>(AllPastAndFutureActivitiesDocument, {
		initialData: { activities: activitiesFromProps, pagination },
		variables: { first: pageSize, date },
		pageSize
	});

	const { inView, ref } = useInView({ triggerOnce: true, rootMargin: '0px 0px 2000px 0px' })

	useEffect(() => {
		if (inView && !page.end && !loading) nextPage()
	}, [inView, page, loading, nextPage])

	const allNews = [...presentActivities, ...activities]
		.map(el => ({ ...el, status: activityStatus(el.date, el.dateEnd) }))
		.filter(({ category }) => activitiesCategoryId ? activitiesCategoryId === category?.id : true)
		.sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1)
		.sort((a, b) => a.status.value === 'past' ? 1 : -1)

	return (
		<>
			<h1><RevealText>Aktiviteter</RevealText></h1>
			<FilterBar
				multi={false}
				options={activityCategories.map(({ id, category }) => ({ label: category, id }))}
				onChange={(id) => setActivitiesCategoryId(id)}
			/>

			<CardContainer columns={2} className={s.activities} key={`${page.no}-${activitiesCategoryId}`}>
				{allNews.length > 0 ? allNews.map((el, idx) => {
					const { id, date, title, intro, slug, image, category } = el
					return (
						<NewsCard
							key={id}
							title={title}
							subtitle={`${category.category}`}
							date={date}
							label={activityStatus(el.date, el.dateEnd).label}
							text={intro}
							image={image}
							slug={`/aktiviteter/${slug}`}
						/>
					)
				}) : <div className={s.nomatches}>Inga träffar...</div>
				}
			</CardContainer>
			{!page.end &&
				<div ref={ref} className={s.loader} key={`page-${page.no}`}>
					{loading && <Loader />}
				</div>
			}
			{error &&
				<div className={s.error}><>Error: {error.message || error}</></div>
			}
		</>
	);
}

Activities.page = { title: 'Aktuellt', crumbs: [{ title: 'Aktuellt' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [AllActivityCategoriesDocument] }, async ({ props, revalidate, context }: any) => {

	const page = parseInt(context.params?.page) || 1;
	const isFirstPage = page === 1
	const date = format(new Date(), 'yyyy-MM-dd')

	let { presentActivities } = await apiQuery(AllPresentActivitiesDocument, { variables: { date } });
	let { activities, pagination } = await apiQueryAll(AllPastAndFutureActivitiesDocument, { variables: { date } });

	let start = (isFirstPage ? 0 : (page - 1) * pageSize)
	let end = isFirstPage ? pageSize : ((pageSize * (page)))

	const count = activities.length

	activities = activities
		.map(el => ({ ...el, status: activityStatus(el.date, el.dateEnd) }))
		.slice(start, end)

	presentActivities = presentActivities
		.map(el => ({ ...el, status: activityStatus(el.date, el.dateEnd) }))
		.sort((a, b) => a.status.order > b.status.order ? -1 : 1)

	if (!activities.length && !presentActivities.length)
		return { notFound: true }

	return {
		props: {
			...props,
			presentActivities,
			activities,
			date,
			pagination: { ...pagination, page, size: pageSize, count }
		},
		revalidate
	};
});