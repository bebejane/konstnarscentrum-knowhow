import withGlobalProps from "/lib/withGlobalProps";
import s from "./index.module.scss";
import cn from "classnames";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { ActivityDocument, AllActivitiesDocument } from "/graphql";
import { format } from "date-fns";
import { Article, MemberForm, MetaSection } from "/components";
import { getStaticPagePaths } from "/lib/utils";
import { DatoSEO } from "dato-nextjs-utils/components";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export type Props = {
	activity: ActivityRecord,
}

export default function Activity({ activity: {
	id,
	date,
	dateEnd,
	intro,
	slug,
	title,
	content,
	image,
	category,
	blackHeadline,
	showForm,
	_seoMetaTags
}, activity }: Props) {

	const startDate = format(new Date(date), "d MMMM y")
	const endDate = dateEnd ? format(new Date(dateEnd), "d MMMM y") : undefined
	const [showMemberForm, setShowMemberForm] = useState(false)
	const { data: session } = useSession()
	const isAdmin = session?.user?.name === 'admin'

	return (
		<>
			<DatoSEO title={title} description={intro} seo={_seoMetaTags} />
			<Article
				id={id}
				image={image}
				title={title}
				text={intro}
				blackHeadline={blackHeadline}
				content={content}
			>
				<MetaSection
					items={[
						{ title: 'Kategori', value: category.category },
						{ title: 'Datum', value: startDate },
						{ title: 'Slutdatum', value: endDate !== startDate ? endDate : undefined },
					]}
				/>
			</Article>
			{showForm &&
				<>
					<button
						data-toggled={showMemberForm}
						className={cn(s.apply, "wide")}
						onClick={() => setShowMemberForm(!showMemberForm)}
					>
						Anmäl dig
					</button>
					<MemberForm activity={activity} show={showMemberForm} setShow={setShowMemberForm} />
					{isAdmin &&
						<Link href={`/aktiviteter/${slug}/admin`} prefetch={true}>
							<button className="wide">Administrera</button>
						</Link>
					}
				</>
			}
			<Link href={'/aktiviteter'}>
				<button className="wide">Tillbaka till översikt</button>
			</Link>
		</>
	);
}

Activity.page = { crumbs: [{ slug: 'aktiviteter', title: 'Aktiviteter' }] } as PageProps

export async function getStaticPaths() {
	return getStaticPagePaths(AllActivitiesDocument, 'activity')
}

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

	const slug = context.params.activity;
	const { activity }: { activity: ActivityRecord } = await apiQuery(ActivityDocument, { variables: { slug }, preview: context.preview })

	if (!activity)
		return { notFound: true, revalidate }

	return {
		props: {
			...props,
			activity,
			pageTitle: activity.title
		},
		revalidate
	};
});