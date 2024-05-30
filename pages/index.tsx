import s from "./index.module.scss";
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { LatestNewsDocument } from "/graphql";
import { Block, HomeGallery, MenuDesktop } from "/components";
import type { Menu } from "/lib/menu";

export type Props = {
	regionStart: RegionRecord
	menu: Menu
}

export default function Home({ regionStart, menu }: Props) {

	return (
		<div className={s.container}>
			START
		</div>
	);
}

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

	return {
		props: {
			...props,
		},
		revalidate
	}
})