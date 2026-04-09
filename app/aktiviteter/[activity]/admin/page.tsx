import { apiQuery } from 'next-dato-utils/api';
import { ActivityDocument, AllApplicationsByActivityDocument } from '@/graphql';
import { format } from 'date-fns';
import { ActivityAdmin, Article, Breadcrumbs } from '@/components';
import { notFound, redirect, unauthorized } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import { sv } from 'date-fns/locale';

export type Props = {
	activity: ActivityRecord;
	applications: ApplicationRecord[];
};

export const dynamic = 'force-dynamic';

export default async function ActivityAdminPage({
	params,
}: PageProps<'/aktiviteter/[activity]/admin'>) {
	const { activity: slug } = await params;
	const session = await getSession();
	if (!session?.user) return redirect(`/logga-in?redirect=/aktiviteter/${slug}/admin`);

	const { activity } = await apiQuery(ActivityDocument, {
		variables: { slug },
	});

	if (!activity) return notFound();

	const { allApplications } = await apiQuery(AllApplicationsByActivityDocument, {
		all: true,
		variables: { activityId: activity.id },
	});

	const { id, date, dateEnd, title } = activity;
	const startDate = format(new Date(date), 'd MMM y', { locale: sv });
	const endDate = dateEnd ? format(new Date(dateEnd), 'd MMM y', { locale: sv }) : undefined;

	return (
		<>
			<Article title={`${title} - Admin`}>
				<h5 suppressHydrationWarning={true}>
					{startDate} - {endDate}
				</h5>
				<ActivityAdmin applications={allApplications} activity={activity} />
			</Article>
			<Link href={`/aktiviteter/${slug}`}>
				<button className='wide'>Tillbaka till aktivitet</button>
			</Link>
			<Breadcrumbs
				crumbs={[{ title: 'Aktiviteter', slug: '/aktiviteter' }, { title: 'Administrera' }]}
			/>
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/aktiviteter/[activity]/admin'>): Promise<Metadata> {
	const { activity: slug } = await params;
	const { activity, draftUrl } = await apiQuery(ActivityDocument, {
		variables: { slug },
	});

	if (!activity) return notFound();

	return buildMetadata({
		title: `Aktiviteter — ${activity.title} - Admin`,
		pathname: `/aktiviteter/${slug}/admin`,
	});
}
