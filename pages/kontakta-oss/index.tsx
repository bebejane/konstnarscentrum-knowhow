import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { ContactPageDocument } from "/graphql";
import { StructuredContent } from "/components";
import { Image } from "react-datocms";

export type Props = {
	contactPage: ContactPageRecord
}

export default function Contact({ contactPage: { id, title, image, showImage, intro, content, slug }, contactPage }: Props) {

	return (
		<div className={s.container}>
			<h1>{title}</h1>
			{image?.responsiveImage && <Image data={image.responsiveImage} />}
			<p>{intro}</p>
			<StructuredContent id={id} record={contactPage} content={content} />
		</div>
	);
}

Contact.page = { title: 'Kontakt', crumbs: [{ title: 'Kontakt' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [ContactPageDocument] }, async ({ props, revalidate, context }: any) => {

	return {
		props,
		revalidate
	}
})