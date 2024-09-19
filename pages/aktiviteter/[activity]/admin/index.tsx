import withGlobalProps from "/lib/withGlobalProps";
import s from "./index.module.scss";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { ActivityDocument, AllApplicationsByActivityDocument } from "/graphql";
import { format } from "date-fns";
import { ActivityAdmin, Article } from "/components";
import { apiQueryAll, } from "/lib/utils";
import Link from "next/link";

export type Props = {
	activity: ActivityRecord,
	applications: ApplicationRecord[],
}

export default function ActivityAdminPage({ activity: {
	id,
	title,
	date,
	slug,
	dateEnd,
}, activity, applications }: Props) {

	const startDate = format(new Date(date), "d MMM y")
	const endDate = dateEnd ? format(new Date(dateEnd), "d MMM y") : undefined

	return (
		<>
			<Article id={id} title={`${title} - Admin`} className={s.article}>
				<h5 suppressHydrationWarning={true}>{startDate} - {endDate}</h5>
				<ActivityAdmin applications={applications} activity={activity} />
			</Article>
			<Link href={`/aktiviteter/${slug}`}>
				<button className="wide">Tillbaka till aktivitet</button>
			</Link>
		</>
	);
}

ActivityAdminPage.page = { crumbs: [{ slug: 'aktiviteter', title: 'Aktiviteter' }] } as PageProps


export const getServerSideProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

	const slug = context.params.activity;
	const { activity }: { activity: ActivityRecord } = await apiQuery(ActivityDocument, { variables: { slug }, preview: context.preview })

	if (!activity)
		return { notFound: true, revalidate }

	const { applications }: { applications: ApplicationRecord[] } = await apiQueryAll(AllApplicationsByActivityDocument, {
		variables: { activityId: activity.id },
		preview: context.preview
	})

	return {
		props: {
			...props,
			activity,
			applications,
			pageTitle: `${activity.title} - Admin`,
		}
	};
});