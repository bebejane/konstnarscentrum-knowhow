import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import useApiQuery from "/lib/hooks/useApiQuery";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { AllPresentKnowledgesDocument, AllPastAndFutureKnowledgesDocument, AllKnowledgeCategoriesDocument } from "/graphql";
import { format } from "date-fns";
import { pageSize, apiQueryAll } from "/lib/utils";
import { CardContainer, NewsCard, FilterBar, RevealText, Loader } from '/components'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type KnowledgeRecordWithStatus = KnowledgeRecord & { status: { value: string, label: string } }
export type Props = {
	presentKnowledges: KnowledgeRecord[],
	knowledges: KnowledgeRecord[],
	knowledgeCategories: KnowledgeCategoryRecord[]
	date: string
	pagination: Pagination
}

export default function Knowledges({ presentKnowledges, knowledges: knowledgesFromProps, knowledgeCategories, date, pagination }: Props) {

	const [knowledgesCategoryId, setKnowledgesCategoryId] = useState<string | string[] | undefined>()

	const { data: { knowledges }, loading, error, nextPage, page } = useApiQuery<{ knowledges: KnowledgeRecord[] }>(AllPastAndFutureKnowledgesDocument, {
		initialData: { knowledges: knowledgesFromProps, pagination },
		variables: { first: pageSize, date },
		pageSize
	});

	const { inView, ref } = useInView({ triggerOnce: true, rootMargin: '0px 0px 2000px 0px' })

	useEffect(() => {
		if (inView && !page.end && !loading) nextPage()
	}, [inView, page, loading, nextPage])

	const allNews = [...presentKnowledges, ...knowledges]
		.filter(({ category }) => knowledgesCategoryId ? knowledgesCategoryId === category?.id : true)

	return (
		<>
			<h1><RevealText>Kunskapsbank</RevealText></h1>
			<FilterBar
				multi={false}
				options={knowledgeCategories.map(({ id, category }) => ({ label: category, id }))}
				onChange={(id) => setKnowledgesCategoryId(id)}
			/>

			<CardContainer columns={2} className={s.knowledges} key={`${page.no}-${knowledgesCategoryId}`}>
				{allNews.length > 0 ? allNews.map((el, idx) => {
					const { id, title, intro, slug, image, category } = el
					return (
						<NewsCard
							key={id}
							title={title}
							subtitle={`${category.category}`}
							label={''}
							text={intro}
							image={image}
							slug={`/kunskapsbank/${slug}`}
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

Knowledges.page = { title: 'Aktuellt', crumbs: [{ title: 'Kunskapsbank' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [AllKnowledgeCategoriesDocument] }, async ({ props, revalidate, context }: any) => {

	const page = parseInt(context.params?.page) || 1;
	const isFirstPage = page === 1
	const date = format(new Date(), 'yyyy-MM-dd')

	let { presentKnowledges } = await apiQuery(AllPresentKnowledgesDocument, { variables: { date } });
	let { knowledges, pagination } = await apiQueryAll(AllPastAndFutureKnowledgesDocument, { variables: { date } });

	let start = (isFirstPage ? 0 : (page - 1) * pageSize)
	let end = isFirstPage ? pageSize : ((pageSize * (page)))

	const count = knowledges.length

	knowledges = knowledges
		.map(el => ({ ...el, status: '' }))
		.slice(start, end)

	presentKnowledges = presentKnowledges
		.map(el => ({ ...el, status: '' }))
		.sort((a, b) => a.status.order > b.status.order ? -1 : 1)

	if (!knowledges.length && !presentKnowledges.length)
		return { notFound: true }

	return {
		props: {
			...props,
			presentKnowledges,
			knowledges,
			date,
			pagination: { ...pagination, page, size: pageSize, count }
		},
		revalidate
	};
});