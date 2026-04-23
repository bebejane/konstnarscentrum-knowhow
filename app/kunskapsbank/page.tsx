import s from './page.module.scss';
import { AllKnowledgesFilterDocument, KnowledgeFiltersDocument } from '@/graphql';
import { CardContainer, NewsCard, FilterBar, RevealText, Breadcrumbs, Loader } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { createLoader, parseAsString } from 'nuqs/server';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import FilterBarDropdown from '@/components/common/FilterBarDropdown';

const viewParams = {
	theme: parseAsString,
	length: parseAsString,
	category: parseAsString,
	series: parseAsString,
};

const loadSearchParams = createLoader(viewParams);

export const dynamic = 'auto';

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
			themeIds: theme ? [allKnowledgeThemes.find(({ title }) => title === theme)?.id] : [],
			categoryId: category
				? allKnowledgeCategories.find(({ category: c }) => c === category)?.id
				: undefined,
			lengthId: length ? allKnowledgeLengths.find(({ title }) => title === length)?.id : undefined,
			seriesIds: series ? [allKnowledgeSeries.find(({ title }) => title === series)?.id] : [],
			first: 500,
			skip,
		};

		//console.log(variables);
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
						id: title,
						label: title,
						key: 'theme',
					}))}
					className={s.filter}
				/>
				<FilterBarDropdown
					pathname={'/kunskapsbank'}
					params={{ category, theme, length, series }}
					options={[
						{
							key: 'category',
							label: 'Kategori',
							items: allKnowledgeCategories.map(({ id, category }) => ({
								id: category,
								label: category,
							})),
						},
						{
							key: 'series',
							label: 'Serie',
							items: allKnowledgeSeries.map(({ id, title }) => ({
								id: title,
								label: title,
							})),
						},
						{
							key: 'length',
							label: 'Längd',
							items: allKnowledgeLengths.map(({ id, title }) => ({
								id: title,
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
