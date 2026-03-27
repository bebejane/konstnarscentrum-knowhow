import { ContactPageDocument } from '@/graphql';
import { Article, Breadcrumbs } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';

export default async function Contact() {
	const { contactPage, draftUrl } = await apiQuery(ContactPageDocument);
	if (!contactPage) return notFound();
	const { title, image, intro, content } = contactPage;
	return (
		<>
			<Article image={image} title={title} text={intro} content={content} />
			<Breadcrumbs crumbs={[{ title: 'Kontakta oss' }]} />
			<DraftMode path={`/kontakta-oss`} url={draftUrl} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Kontakt oss',
		pathname: '/kontakt-oss',
	});
}
