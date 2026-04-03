import { apiQuery } from 'next-dato-utils/api';
import { KnowledgeDocument, AllKnowledgesDocument } from '@/graphql';
import { Article, Breadcrumbs, MetaSection } from '@/components';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

//export const dynamic = 'auto';

export default async function Knowledge({
	params,
}: PageProps<'/kunskapsbank/[category]/[knowledge]'>) {
	const { knowledge: slug } = await params;
	const { knowledge, draftUrl } = await apiQuery(KnowledgeDocument, {
		variables: { slug },
	});

	if (!knowledge) return notFound();

	const { title, intro, image, blackHeadline, content, category } = knowledge;

	return (
		<>
			<Article
				image={image}
				title={title}
				text={intro}
				blackHeadline={blackHeadline}
				content={content}
			>
				<MetaSection items={[{ title: 'Kategori', value: category.category }]} />
			</Article>
			<Link href={`/kunskapsbank/${category.slug}`}>
				<button className='wide'>Tillbaka till översikt</button>
			</Link>
			<Breadcrumbs
				crumbs={[{ title: category.category, slug: `/kunskapsbank/${category.slug}` }]}
			/>
			<DraftMode path={`/kunskapsbank/${category.slug}/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams() {
	const { allKnowledges } = await apiQuery(AllKnowledgesDocument, { all: true });
	return allKnowledges.map(({ slug: knowledge }) => ({
		knowledge,
	}));
}

export async function generateMetadata({
	params,
}: PageProps<'/kunskapsbank/[category]/[knowledge]'>): Promise<Metadata> {
	const { knowledge: slug } = await params;
	const { knowledge } = await apiQuery(KnowledgeDocument, {
		variables: { slug },
	});

	if (!knowledge) return notFound();

	return buildMetadata({
		title: `Kunskapsbank — ${knowledge.title}`,
		pathname: `/kunskapsbank/${knowledge.category.slug}/${slug}`,
	});
}
