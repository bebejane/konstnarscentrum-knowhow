import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import useApiQuery from "/lib/hooks/useApiQuery";
import { GetStaticProps } from "next";
import { AllActivityCategoriesDocument, AllActivitiesDocument } from "/graphql";
import { format } from "date-fns";
import { pageSize, apiQueryAll, activityStatus } from "/lib/utils";
import { CardContainer, NewsCard, FilterBar, RevealText, Loader } from '/components'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type ActivityRecordWithStatus = ActivityRecord & { status: { value: string, label: string } }
export type Props = {

	activities: ActivityRecordWithStatus[],
	activityCategories: ActivityCategoryRecord[]
	date: string
	pagination: Pagination
}

export default function Activities({ activities: activitiesFromProps, activityCategories, date, pagination }: Props) {

	const [activitiesCategoryId, setActivitiesCategoryId] = useState<string | string[] | undefined>()

	let { data: { activities }, loading, error, nextPage, page } = useApiQuery<{ activities: ActivityRecordWithStatus[] }>(AllActivitiesDocument, {
		initialData: { activities: activitiesFromProps, pagination },
		variables: { first: pageSize, date },
		pageSize
	});

	const { inView, ref } = useInView({ triggerOnce: true, rootMargin: '0px 0px 2000px 0px' })

	useEffect(() => {
		if (inView && !page.end && !loading) nextPage()
	}, [inView, page, loading, nextPage])

	activities = activities
		.map(el => ({ ...el, status: activityStatus(el.date, el.dateEnd) }))
		.filter(({ category }) => activitiesCategoryId ? activitiesCategoryId === category?.id : true)
		.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1)
		.sort((a, b) => a.status.value === 'past' ? 1 : -1)
		.sort((a, b) => {
			if (a.status.value === 'past' && b.status.value === 'past')
				return new Date(a.date) > new Date(b.date) ? -1 : 1
			return 0
		})

	console.log(activities.length)
	return (
		<>
			<h1><RevealText>Aktiviteter</RevealText></h1>
			<FilterBar
				multi={false}
				options={activityCategories.map(({ id, category }) => ({ label: category, id }))}
				onChange={(id) => setActivitiesCategoryId(id)}
			/>

			<CardContainer columns={2} className={s.activities} key={`${page.no}-${activitiesCategoryId}`}>
				{activities.length > 0 ? activities.map((el, idx) => {
					const { id, date, title, intro, slug, image, category, createdAt } = el
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

	//let { presentActivities } = await apiQuery(AllPresentActivitiesDocument, { variables: { date } });
	let { activities, pagination } = await apiQueryAll(AllActivitiesDocument, { variables: { date } });

	let start = (isFirstPage ? 0 : (page - 1) * pageSize)
	let end = isFirstPage ? pageSize : ((pageSize * (page)))

	const count = activities.length

	activities = activities
		.map(el => ({ ...el, status: activityStatus(el.date, el.dateEnd) }))
		.slice(start, end)


	if (!activities.length)
		return { notFound: true }

	return {
		props: {
			...props,
			activities,
			date,
			pagination: { ...pagination, page, size: pageSize, count }
		},
		revalidate
	};
});