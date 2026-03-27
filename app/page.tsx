import { apiQuery } from 'next-dato-utils/api';
import {
	AllActivitiesForCalendarDocument,
	LatestActivitiesDocument,
	StartDocument,
} from '@/graphql';
import { Block, HomeGallery } from '@/components';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { DraftMode } from 'next-dato-utils/components';

export default async function Home() {
	const { start, draftUrl } = await apiQuery(StartDocument);
	const { allActivities } = await apiQuery(LatestActivitiesDocument, {
		variables: { date: format(new Date(), 'yyyy-MM-dd') },
	});

	const { allActivities: allActivitiesForCalendar } = await apiQuery(
		AllActivitiesForCalendarDocument,
		{
			all: true,
		},
	);

	const sections = start?.sections.map((section) => ({
		...section,
		activities: section.__typename === 'LatestActivityRecord' ? allActivities : null,
	}));

	if (!start) return notFound();

	return (
		<>
			<div>
				<HomeGallery
					slides={start.gallery as SlideRecord[]}
					allActivities={allActivitiesForCalendar}
					editingUrl={start.gallery?.[0]?._editingUrl}
				/>
				{sections?.map((block, idx) => (
					<Block key={idx} data={block} />
				))}
			</div>
			<DraftMode path={`/`} url={draftUrl} />
		</>
	);
}
