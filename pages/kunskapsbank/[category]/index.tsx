import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import useApiQuery from "/lib/hooks/useApiQuery";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { AllPresentKnowledgesDocument, AllPastAndFutureKnowledgesDocument, AllKnowledgeCategoriesDocument } from "/graphql";
import { format } from "date-fns";
import { pageSize, apiQueryAll, getStaticPagePaths } from "/lib/utils";
import { CardContainer, NewsCard, RevealText, Loader } from '/components'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type KnowledgeRecordWithStatus = KnowledgeRecord & { status: { value: string, label: string } }
export type Props = {
	presentKnowledges: KnowledgeRecord[],
	knowledges: KnowledgeRecord[],
	knowledgeCategories: KnowledgeCategoryRecord[]
	date: string
	pagination: Pagination
	category: KnowledgeCategoryRecord
}

export default function Knowledges({ category, presentKnowledges, knowledges: knowledgesFromProps, knowledgeCategories, date, pagination }: Props) {

	const { data: { knowledges }, loading, error, nextPage, page } = useApiQuery<{ knowledges: KnowledgeRecord[] }>(AllPastAndFutureKnowledgesDocument, {
		initialData: { knowledges: knowledgesFromProps, pagination },
		variables: { first: pageSize, date },
		pageSize
	});

	const { inView, ref } = useInView({ triggerOnce: true, rootMargin: '0px 0px 2000px 0px' })

	useEffect(() => {
		if (inView && !page.end && !loading) nextPage()
	}, [inView, page, loading, nextPage])

	const allKnowledges = [...presentKnowledges, ...knowledges]

	return (
		<>
			<h1><RevealText>{category.category}</RevealText></h1>

			<CardContainer columns={2} className={s.knowledges} key={`${page.no}-${category.id}`}>
				{allKnowledges.length > 0 ? allKnowledges.map((el, idx) => {
					const { id, title, intro, slug, image, category } = el
					return (
						<NewsCard
							key={id}
							title={title}
							subtitle={`${category.category}`}
							label={''}
							text={intro}
							image={image}
							slug={`/kunskapsbank/${category.slug}/${slug}`}
						/>
					)
				}) :
					<div className={s.nomatches}>
						Mer information kommer här i augusti.
					</div>
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

Knowledges.page = { title: 'Kunskapsbank', crumbs: [{ title: 'Kunskapsbank' }] } as PageProps

export async function getStaticPaths() {
	const paths = await getStaticPagePaths(AllKnowledgeCategoriesDocument, 'category')
	return paths
}

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [AllKnowledgeCategoriesDocument] }, async ({ props, revalidate, context }: any) => {

	const { knowledgeCategories } = props as { knowledgeCategories: KnowledgeCategoryRecord[] }
	const category = knowledgeCategories.find(el => el.slug === context.params?.category)
	const categoryId = category?.id

	const page = parseInt(context.params?.page) || 1;
	const isFirstPage = page === 1
	const date = format(new Date(), 'yyyy-MM-dd')

	let { presentKnowledges } = await apiQuery(AllPresentKnowledgesDocument, { variables: { date, categoryId } });
	let { knowledges, pagination } = await apiQueryAll(AllPastAndFutureKnowledgesDocument, { variables: { date, categoryId } });

	let start = (isFirstPage ? 0 : (page - 1) * pageSize)
	let end = isFirstPage ? pageSize : ((pageSize * (page)))

	const count = knowledges.length

	knowledges = knowledges
		.map(el => ({ ...el, status: '' }))
		.slice(start, end)

	presentKnowledges = presentKnowledges
		.map(el => ({ ...el, status: '' }))
		.sort((a, b) => a.status.order > b.status.order ? -1 : 1)

	return {
		props: {
			...props,
			presentKnowledges,
			knowledges,
			date,
			category,
			pagination: { ...pagination, page, size: pageSize, count }
		},
		revalidate
	};
});