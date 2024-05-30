import s from "./[about].module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from "dato-nextjs-utils/api";
import { AboutDocument, AllAboutsDocument } from "/graphql";
import type { GetStaticProps } from 'next'
import { Article } from "/components";
import { useEffect } from "react";
import useStore from "/lib/store";
import { DatoSEO } from "dato-nextjs-utils/components";

type AboutProps = {
	about: AboutRecord
}

export default function About({ about: { id, title, image, intro, content, _seoMetaTags } }: AboutProps) {

	const [setImages, setImageId] = useStore((state) => [state.setImages, state.setImageId])

	useEffect(() => {
		//@ts-ignore
		const images = [image, ...content.blocks.filter(({ image }) => image).reduce((imgs, { image }) => imgs = imgs.concat(image), [])]
		setImages(images)
	}, [image, content, setImages])

	return (
		<>
			<DatoSEO title={title} description={intro} seo={_seoMetaTags} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image}
				text={intro}
				content={content}
				onClick={(imageId) => setImageId(imageId)}
			/>
		</>
	);
}

About.page = { crumbs: [{ title: 'Om' }] } as PageProps

export async function getStaticPaths() {
	const { abouts } = await apiQuery(AllAboutsDocument)
	const paths = abouts.map(({ slug }) => ({ params: { about: slug } }));

	return {
		paths,
		fallback: 'blocking',
	};
}

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

	const slug = context.params.about;
	const { about } = await apiQuery(AboutDocument, { variables: { slug }, preview: context.preview });

	if (!about)
		return { notFound: true, revalidate }

	return {
		props: {
			...props,
			about,
			pageTitle: about.title
		},
		revalidate
	};
});

