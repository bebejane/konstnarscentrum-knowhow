import s from "./index.module.scss";
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { LatestActivitiesDocument, StartDocument } from "/graphql";
import { Block, HomeGallery } from "/components";
import { format } from "date-fns";

export type Props = {
	start: StartRecord
}

export default function Home({ start }: Props) {

	return (
		<div className={s.container}>
			<div className={cn(s.gallery, s.margins)}>
				<HomeGallery slides={start.gallery} />
			</div>
			<div className={s.margins}>
				{start.sections?.map((block, idx) =>
					<Block key={idx} record={start} data={block} />
				)}
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

	const { start, activities }: {
		start: StartRecord
		activities: ActivityRecord[]
	} = await apiQuery([LatestActivitiesDocument, StartDocument], {
		variables: { date: format(new Date(), 'yyyy-MM-dd') },
		preview: context.preview
	});

	return {
		props: {
			...props,
			start: {
				...start,
				sections: start?.sections.map((section) => ({
					...section,
					activities: section.__typename === 'LatestActivityRecord' ? activities : null
				})) || null
			}
		},
		revalidate
	}
})