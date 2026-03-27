import { apiQuery } from 'next-dato-utils/api';
import { AboutDocument, AllAboutsDocument } from '@/graphql';
import { Article, Breadcrumbs } from '@/components';
import { notFound } from 'next/navigation';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

export default async function About({ params }: PageProps<'/om/[about]'>) {
	const { about: slug } = await params;
	const { about, draftUrl } = await apiQuery(AboutDocument, { variables: { slug } });
	if (!about) return notFound();
	const { title, image, intro, content } = about;
	return (
		<>
			<Article title={title} image={image} text={intro} content={content} />
			<Breadcrumbs crumbs={[{ title: 'Om' }]} />
			<DraftMode path={`/om/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams() {
	const { allAbouts } = await apiQuery(AllAboutsDocument, { all: true });
	return allAbouts.map(({ slug }) => ({ about: slug }));
}

export async function generateMetadata({ params }: PageProps<'/om/[about]'>): Promise<Metadata> {
	const { about: slug } = await params;
	const { about } = await apiQuery(AboutDocument, { variables: { slug } });
	if (!about) return notFound();

	return buildMetadata({
		title: `Om — ${about.title}`,
		pathname: `/om/${slug}`,
	});
}
