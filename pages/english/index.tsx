import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { InEnglishDocument } from "/graphql";
import { StructuredContent } from "/components";

export type Props = {
	inEnglish: InEnglishRecord
}

export default function InEnglish({ inEnglish: { id, title, content }, inEnglish }: Props) {

	return (
		<div className={s.container}>
			<h1>{title}</h1>
			<StructuredContent id={id} record={inEnglish} content={content} />
		</div>
	);
}

InEnglish.page = { title: 'In English', crumbs: [{ title: 'English' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [InEnglishDocument] }, async ({ props, revalidate, context }: any) => {

	return {
		props,
		revalidate
	}
})