import { InEnglishDocument } from '@/graphql';
import { Breadcrumbs, Content } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

export default async function InEnglish() {
	const { inEnglish, draftUrl } = await apiQuery(InEnglishDocument);

	if (!inEnglish) return notFound();

	return (
		<>
			<div>
				<h1>{inEnglish.title}</h1>
				<Content content={inEnglish.content} />
			</div>
			<Breadcrumbs crumbs={[{ title: 'In English' }]} />
			<DraftMode path={`/english`} url={draftUrl} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'In English',
		pathname: '/english',
	});
}
