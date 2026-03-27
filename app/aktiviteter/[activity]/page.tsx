import { apiQuery } from 'next-dato-utils/api';
import { ActivityDocument, AllActivitiesDocument } from '@/graphql';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import { Article, Breadcrumbs, MetaSection } from '@/components';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MemberFormButton from '@/app/aktiviteter/[activity]/MemberFormButton';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import { toZonedTime } from 'date-fns-tz';

import * as ics from 'ics';
import { formatDate } from '@/lib/utils';

export default async function Activity({ params }: PageProps<'/aktiviteter/[activity]'>) {
	const { activity: slug } = await params;
	const { activity, draftUrl } = await apiQuery(ActivityDocument, {
		variables: { slug },
	});

	if (!activity) return notFound();

	const { id, date, dateEnd, intro, title, content, image, category, blackHeadline } = activity;
	const icsEvent = await generateIcs(activity);

	return (
		<>
			<Article
				image={image}
				title={title}
				text={intro}
				blackHeadline={blackHeadline}
				content={content}
			>
				<MetaSection
					items={[
						{ title: 'Kategori', value: category.category },
						{ title: 'Datum', value: formatDate(date) },
						{ title: 'Slutdatum', value: formatDate(dateEnd) },
						{
							title: 'Tips',
							value: icsEvent ? 'Lägg till i din kalender' : undefined,
							ics: icsEvent,
						},
					]}
				/>
			</Article>
			<MemberFormButton activity={activity} />
			<Link href={'/aktiviteter'}>
				<button className='wide'>Tillbaka till översikt</button>
			</Link>
			<Breadcrumbs crumbs={[{ title: 'Aktiviteter', slug: '/aktiviteter' }]} />
			<DraftMode path={`/aktiviteter/${slug}`} url={draftUrl} />
		</>
	);
}

async function generateIcs({
	slug,
	title,
	intro,
	date,
	dateEnd,
}: NonNullable<ActivityQuery['activity']>): Promise<string | null> {
	const event: ics.EventAttributes = {
		start: toZonedTime(date, 'Europe/Stockholm').getTime(),
		end: toZonedTime(dateEnd, 'Europe/Stockholm').getTime(),
		title,
		description: intro,
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/aktiviteter/${slug}`,
		categories: ['KnowHow'],
		status: 'CONFIRMED',
		organizer: { name: 'KnowHow', email: `knowhow@konstnarscentrum.org` },
	};

	const icsEvent = await ics.createEventsAsync([event]);
	if (icsEvent.error) return null;
	return icsEvent.value;
}

export async function generateStaticParams() {
	const { allActivities } = await apiQuery(AllActivitiesDocument, { all: true });
	return allActivities.map(({ slug: activity }) => ({ activity }));
}

export async function generateMetadata({
	params,
}: PageProps<'/aktiviteter/[activity]'>): Promise<Metadata> {
	const { activity: slug } = await params;
	const { activity, draftUrl } = await apiQuery(ActivityDocument, {
		variables: { slug },
	});

	if (!activity) return notFound();

	return buildMetadata({
		title: `Aktiviteter — ${activity.title}`,
		pathname: `/aktiviteter/${slug}`,
	});
}
