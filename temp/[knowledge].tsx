import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { KnowledgeDocument, AllKnowledgesDocument } from "/graphql";
import { Article, MetaSection, StructuredContent } from "/components";
import { getStaticPagePaths } from "/lib/utils";
import { DatoSEO } from "dato-nextjs-utils/components";
import Link from "next/link";

export type Props = {
	knowledge: KnowledgeRecord,
	region: Region
}

export default function Knowledge({ knowledge: {
	id,
	intro,
	title,
	content,
	image,
	category,
	blackHeadline,
	_seoMetaTags
}, knowledge }: Props) {

	return (
		<>
			<DatoSEO title={title} description={intro} seo={_seoMetaTags} />
			<Article
				id={id}
				image={image}
				title={title}
				text={intro}
				blackHeadline={blackHeadline}
			>
				<MetaSection
					items={[
						{ title: 'Kategori', value: category.category }
					]}
				/>
				<StructuredContent id={id} record={knowledge} content={content} />
			</Article>
			<Link href={'/kunskapsbank'}>
				<button className="wide">Tillbaka till översikt</button>
			</Link>
		</>
	);
}

Knowledge.page = { crumbs: [{ slug: 'kunskapsbank', title: 'Kunskapsbank' }] } as PageProps

export async function getStaticPaths() {
	return getStaticPagePaths(AllKnowledgesDocument, 'knowledge')
}

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

	const slug = context.params.knowledge;
	const { knowledge }: { knowledge: KnowledgeRecord } = await apiQuery(KnowledgeDocument, { variables: { slug }, preview: context.preview })

	if (!knowledge)
		return { notFound: true, revalidate }

	return {
		props: {
			...props,
			knowledge,
			pageTitle: knowledge.title
		},
		revalidate
	};
});