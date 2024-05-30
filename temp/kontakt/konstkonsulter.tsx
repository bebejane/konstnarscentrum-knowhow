import React from "react";
import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { AllConsultantsDocument, ContactDocument } from "/graphql";
import { DatoMarkdown as Markdown } from "dato-nextjs-utils/components";
import { Card, RevealText } from "/components";

export type Props = {
	contactIntro: ContactIntroRecord,
	info: RegionRecord['info'],
	employees: EmployeeRecord[],
	region: Region
	consultants: ConsultantRecord[] | undefined
}

export type EmployeesByRegion = {
	employees: EmployeeRecord[]
	region: RegionRecord
}[]

export default function ArtConsultants({ consultants, contactIntro, employees }: Props) {

	return (
		<div className={s.container}>
			<h1><RevealText>Kontakta våra konstkonsulter</RevealText></h1>
			<Markdown className="intro">
				{contactIntro.consultant}
			</Markdown>
			<h3>Konstkonsulter</h3>
			<ul>
				{consultants.map(({ id, name, title, email }, i) =>
					<Card key={id} className={s.consultant}>
						<p>{name}</p>
						<p className="mid">{title}</p>
						<p className="mid"><a href={`mailto:${email}`}>{email}</a></p>
					</Card>
				)}
			</ul>
		</div>
	);
}

ArtConsultants.page = { title: 'Konstkonsulter', crumbs: [{ title: 'Kontakt' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [ContactDocument] }, async ({ props, revalidate, context }: any) => {

	const { consultants } = await apiQuery(AllConsultantsDocument);

	return {
		props: {
			...props,
			consultants
		},
		revalidate
	};
});
