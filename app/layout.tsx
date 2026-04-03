import '@/styles/index.scss';
import 'swiper/css';
import 'rc-tooltip/assets/bootstrap_white.css';
import s from './layout.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { FooterDocument, SiteDocument } from '@/graphql';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { DraftModeContentLink } from 'next-dato-utils/components';
import { Footer, FullscreenGallery, Logo, MenuDesktop, MenuMobile, Search } from '@/components';
import { buildMenu } from '@/lib/menu';
import { ThemeProvider } from 'next-themes';
import { getSession } from '@/lib/auth';
import SessionProvider from '@/lib/auth/SessionProvider';

export const dynamic = 'force-static';

export default async function RootLayout({ children, params }: LayoutProps<'/'>) {
	const menu = await buildMenu();
	const { footer } = await apiQuery(FooterDocument, { tags: ['footer'] });

	return (
		<html lang={'sv-SE'} suppressHydrationWarning>
			<body id='root' className='root'>
				<ThemeProvider defaultTheme='light' themes={['light', 'dark']} enableSystem={false}>
					<MenuMobile items={menu} />
					<MenuDesktop items={menu} />
					<div className={s.layout}>
						<Logo />
						<main id='content' className={s.content}>
							<article>{children}</article>
						</main>
						<Search />
					</div>
					<Footer menu={menu} footer={footer} />
					<FullscreenGallery />
				</ThemeProvider>

				<DraftModeContentLink color='#ff4400' />
			</body>
		</html>
	);
}

export async function generateMetadata({}: LayoutProps<'/'>): Promise<Metadata> {
	const {
		_site: { globalSeo, faviconMetaTags },
	} = await apiQuery(SiteDocument);
	const siteName = globalSeo?.siteName ?? '';

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
		icons: faviconMetaTags.map(({ attributes: { rel, sizes, type, href: url } }) => ({
			rel,
			url,
			sizes,
			type,
		})) as Icon[],
		...(await buildMetadata({
			title: {
				template: `${siteName} — %s`,
				default: siteName ?? '',
			},
			pathname: '/',
			description: globalSeo?.fallbackSeo?.description?.substring(0, 157),
			image: globalSeo?.fallbackSeo?.image as FileField,
		})),
	};
}

export type BuildMetadataProps = {
	title?: string | any;
	description?: string | null | undefined;
	pathname?: string;
	image?: FileField | null | undefined;
};

export async function buildMetadata({
	title,
	description,
	pathname,
	image,
}: BuildMetadataProps): Promise<Metadata> {
	description = !description
		? ''
		: description.length > 160
			? `${description.substring(0, 157)}...`
			: description;

	const url = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname ?? ''}`;

	return {
		title,
		alternates: {
			canonical: url,
		},
		description,
		openGraph: {
			title,
			description,
			url,
			images: image
				? [
						{
							url: `${image?.url}?w=1200&h=630&fit=fill&q=80`,
							width: 800,
							height: 600,
							alt: title,
						},
						{
							url: `${image?.url}?w=1600&h=800&fit=fill&q=80`,
							width: 1600,
							height: 800,
							alt: title,
						},
						{
							url: `${image?.url}?w=790&h=627&fit=crop&q=80`,
							width: 790,
							height: 627,
							alt: title,
						},
					]
				: undefined,
			locale: 'sv_SE',
			type: 'website',
		},
	};
}
