import React from "react";
import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { ContactDocument } from "/graphql";
import { DatoMarkdown as Markdown } from "dato-nextjs-utils/components";
import { Card, RevealText } from "/components";

export type Props = {
	contactIntro: ContactIntroRecord,
	info: RegionRecord['info'],
	employees: EmployeeRecord[],
}

export type EmployeesByRegion = {
	employees: EmployeeRecord[]
}[]

export default function Employees({ contactIntro, employees }: Props) {

	const employeesByRegion = employees.reduce((acc, employee) => {
		const region = employee.region;
		const regionEmployees = acc.find(({ region: { id } }) => id === region.id);
		if (regionEmployees)
			regionEmployees.employees.push(employee);
		else
			acc.push({ region, employees: [employee] });

		return acc;
	}, [] as EmployeesByRegion).sort((a, b) => a.region.position > b.region.position ? 1 : -1);;


	return (
		<div className={s.container}>
			<h1><RevealText>Vår personal</RevealText></h1>
			<Markdown className="intro">
				{contactIntro.staff}
			</Markdown>
			{employeesByRegion.map(({ region, employees }, idx) =>
				<React.Fragment key={idx}>
					{employeesByRegion.length > 1 &&
						<h3>{region.name}</h3>
					}
					<ul>
						{employees.map(({ name, email, title }, idx) =>
							<Card key={idx} className={s.employee}>
								<p>{name}</p>
								<p className="mid">{title}</p>
								<p className="mid"><a href={`mailto:${email}`}>{email}</a></p>
							</Card>
						)}
					</ul>
				</React.Fragment>
			)}
		</div >
	);
}

Employees.page = { title: 'Anställda', crumbs: [{ title: 'Kontakt' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [ContactDocument] }, async ({ props, revalidate }: any) => {


	return {
		props: {
			...props,
		},
		revalidate
	};
});
