import s from './page.module.scss';
import { AllKnowledgesFilterDocument, KnowledgeFiltersDocument } from '@/graphql';
import { CardContainer, NewsCard, FilterBar, RevealText, Breadcrumbs, Loader } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { createLoader, parseAsString, parseAsArrayOf } from 'nuqs/server';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import FilterBarDropdown from '@/components/common/FilterBarDropdown';

const viewParams = {
	theme: parseAsArrayOf(parseAsString).withDefault([]),
	length: parseAsString,
	category: parseAsString,
	series: parseAsArrayOf(parseAsString).withDefault([]),
};

const loadSearchParams = createLoader(viewParams);

export const dynamic = 'force-dynamic';

export default async function KnowledgePage({ searchParams }: PageProps<'/kunskapsbank'>) {
	const params = await loadSearchParams(searchParams);
	const { category, theme, length, series } = params;
	const {
		allKnowledgeCategories,
		allKnowledgeLengths,
		allKnowledgeSeries,
		allKnowledgeThemes,
		draftUrl,
	} = await apiQuery(KnowledgeFiltersDocument);

	async function getKnowledges(skip: number) {
		'use server';

		const variables = {
			themeIds: theme || [],
			categoryId: category || undefined,
			lengthId: length || undefined,
			seriesIds: series || [],
			first: 500,
			skip,
		};
		console.log(variables);
		const { allKnowledges } = await apiQuery(AllKnowledgesFilterDocument, {
			variables,
		});

		return allKnowledges.map(({ id, title, intro, slug, image, category }) => ({
			id,
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
					params={{ category, theme, length, series }}
					options={allKnowledgeThemes.map(({ id, title }) => ({
						id,
						label: title,
						key: 'theme',
					}))}
					className={s.filter}
				/>
				<FilterBarDropdown
					pathname={'/kunskapsbank'}
					params={{ theme, category, length, series }}
					options={[
						{
							key: 'category',
							label: 'Kategori',
							items: allKnowledgeCategories.map(({ id, category }) => ({
								id,
								label: category,
							})),
						},
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
				<CardContainer columns={2} className={s.activities} key={JSON.stringify(params)}>
					{knowledges.map((item) => (
						<NewsCard key={item.id} {...item} />
					))}
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
