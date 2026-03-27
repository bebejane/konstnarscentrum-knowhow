import { apiQuery } from 'next-dato-utils/api';
import { AllKnowledgeCategoriesDocument, AllKnowledgesByCategoryDocument } from '@/graphql';
import { pageSize } from '@/lib/utils';
import { Breadcrumbs, CardContainer, NewsCard, RevealText } from '@/components';
import { notFound } from 'next/navigation';
import { InfiniteScroll } from '@/components/common/InfiniteScroll';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

type NewsCardProps = React.ComponentProps<typeof NewsCard>;

export default async function Knowledges({ params }: PageProps<'/kunskapsbank/[category]'>) {
	const { category: slug } = await params;
	const { allKnowledgeCategories, draftUrl } = await apiQuery(AllKnowledgeCategoriesDocument, {
		all: true,
	});
	const category = allKnowledgeCategories.find((el) => el.slug === slug);
	const categoryId = category?.id;

	if (!category || !categoryId) return notFound();

	async function getKnowledges(skip: number): Promise<{ news: NewsCardProps[]; count: number }> {
		'use server';
		const {
			allKnowledges,
			_allKnowledgesMeta: { count },
		} = await apiQuery(AllKnowledgesByCategoryDocument, {
			variables: { categoryId, first: pageSize, skip },
		});

		return {
			news: allKnowledges.map(({ id, title, intro, slug, image, category }) => ({
				title,
				slug: `/kunskapsbank/${category.slug}/${slug}`,
				image: image as FileField,
				label: '',
				text: intro,
				subtitle: category.category,
			})),
			count,
		};
	}

	const { news, count } = await getKnowledges(0);

	return (
		<>
			<h1>
				<RevealText>{category.category}</RevealText>
			</h1>
			<CardContainer columns={2}>
				<InfiniteScroll<NewsCardProps>
					count={count}
					data={news}
					next={async (offset) => {
						'use server';
						return (await getKnowledges(offset)).news;
					}}
				>
					{NewsCard}
				</InfiniteScroll>
			</CardContainer>
			<Breadcrumbs crumbs={[{ title: category.category }]} />
			<DraftMode path={`/kunskapsbank/${category.slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams() {
	const { allKnowledgeCategories } = await apiQuery(AllKnowledgeCategoriesDocument, { all: true });
	return allKnowledgeCategories.map(({ slug: category }) => ({ category }));
}

export async function generateMetadata({
	params,
}: PageProps<'/kunskapsbank/[category]'>): Promise<Metadata> {
	const { category: slug } = await params;
	const { allKnowledgeCategories, draftUrl } = await apiQuery(AllKnowledgeCategoriesDocument, {
		all: true,
	});
	const category = allKnowledgeCategories.find((el) => el.slug === slug);

	if (!category) return notFound();

	return buildMetadata({
		title: `Kunskapsbank — ${category.category}`,
		pathname: `/kunskapsbank/${slug}`,
	});
}
