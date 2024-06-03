import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { ContactPageDocument } from "/graphql";
import { Article } from "/components";

export type Props = {
	contactPage: ContactPageRecord
}

export default function Contact({ contactPage: { id, title, image, showImage, intro, content, slug }, contactPage }: Props) {

	return (
		<Article
			id={id}
			image={image}
			title={title}
			text={intro}
			content={content}
		/>
	);
}

Contact.page = { title: 'Kontakt', crumbs: [{ title: 'Kontakt' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [ContactPageDocument] }, async ({ props, revalidate, context }: any) => {

	return {
		props,
		revalidate
	}
})