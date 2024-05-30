import React from "react";
import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { RegionMetaDocument, ContactDocument } from "/graphql";
import { DatoMarkdown as Markdown } from "dato-nextjs-utils/components";
import { Card, RevealText } from "/components";
import { usePage } from "/lib/context/page";

export type Props = {
	contactIntro: ContactIntroRecord,
	info: RegionRecord['info'],
	boardMembers: BoardRecord[],
	region: Region
}

export type BoardMembersByRegion = {
	boardMembers: BoardRecord[]
	region: RegionRecord
}[]

export default function BoardMembers({ boardMembers, contactIntro }: Props) {

	const boardMembersByRegion = boardMembers.reduce((acc, employee) => {
		const region = employee.region;
		const regionboardMembers = acc.find(({ region: { id } }) => id === region.id);
		if (regionboardMembers) {
			regionboardMembers.boardMembers.push(employee);
		} else {

			acc.push({
				region,
				boardMembers: [employee]
			});
		}
		return acc;
	}, [] as BoardMembersByRegion).sort((a, b) => a.region.position > b.region.position ? 1 : -1);

	return (
		<div className={s.container}>
			<h1><RevealText>Styrelse</RevealText></h1>
			<Markdown className="intro">
				{contactIntro.board}
			</Markdown>
			{boardMembersByRegion.map(({ region, boardMembers }, idx) =>
				<React.Fragment key={idx}>
					{boardMembersByRegion.length > 1 &&
						<h3>{region.name}</h3>
					}
					<ul>
						{boardMembers.map(({ name, email, title }, idx) =>
							<Card key={idx} className={s.board}>
								<p>
									<a href={`mailto:${email}`}>{name}</a>
									{title}
								</p>
							</Card>
						)}
					</ul>
				</React.Fragment>
			)}
		</div >
	);
}



BoardMembers.page = { title: 'Styrelse', crumbs: [{ title: 'Kontakt' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [ContactDocument] }, async ({ props, revalidate, context }: any) => {

	const regionId = props.region.global ? undefined : props.region.id;
	const { region: { info }, boardmembers: boardMembers } = await apiQuery(RegionMetaDocument, { variables: { regionId } });

	return {
		props: {
			...props,
			info,
			boardMembers
		},
		revalidate
	};
});
