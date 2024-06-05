import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { ActivityDocument, AllActivitiesDocument } from "/graphql";
import { format } from "date-fns";
import { Article, MetaSection } from "/components";
import { getStaticPagePaths } from "/lib/utils";
import { DatoSEO } from "dato-nextjs-utils/components";
import Link from "next/link";

export type Props = {
	activity: ActivityRecord,
	region: Region
}

export default function Activity({ activity: {
	id,
	date,
	dateEnd,
	intro,
	title,
	content,
	image,
	category,
	blackHeadline,
	_seoMetaTags
} }: Props) {

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
						{ title: 'Datum', value: format(new Date(date), "d MMMM y") },
						{ title: 'Slutdatum', value: dateEnd ? format(new Date(dateEnd), "d MMMM y") : undefined },
					]}
				/>
			</Article>
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