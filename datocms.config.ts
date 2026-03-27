import { apiQuery } from 'next-dato-utils/api';
import {
	DatoCmsConfig,
	getItemApiKey,
	getUploadReferenceRoutes,
	getItemReferenceRoutes,
} from 'next-dato-utils/config';
import { MetadataRoute } from 'next';
import { SiteDocument, SitemapDocument } from '@/graphql';

export function getRoute(item: any, _apiKey?: string): string {
	const apiKey = _apiKey ?? getItemApiKey(item);
	if (!apiKey) throw new Error('No api key found');

	const { slug, category } = item.attributes ?? item;

	switch (apiKey) {
		case 'start':
		case 'footer':
			return `/`;
		case 'about':
			return `/om/${slug}`;
		case 'in_english':
			return `/english`;
		case 'contact_page':
			return `/kontakta-oss`;
		case 'activity':
			return `/aktiviteter/${slug}`;
		case 'knowledge':
			return `/kunskapsbank/${category.slug}/${slug}`;
		default:
			throw new Error('No route found for apiKey: ' + apiKey);
	}
}

export default {
	route: async (item) => getRoute(item) ?? null,
	routes: {
		start: async (item) => [getRoute(item, 'start')],
		footer: async (item) => [getRoute(item, 'footer')],
		about: async (item) => [getRoute(item), 'about', ...(await getItemReferenceRoutes(item.id))],
		in_english: async (item) => [getRoute(item, 'in_english')],
		contact_page: async (item) => [getRoute(item, 'contact_page')],
		activity: async (item) => [
			getRoute(item, 'activity'),
			'/',
			'/aktiviteter',
			...(await getItemReferenceRoutes(item.id)),
		],
		knowledge: async (item) => [
			getRoute(item, 'knowledge'),
			'/',
			'/kunskapsbank',
			...(await getItemReferenceRoutes(item.id)),
		],
		upload: async ({ id }) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		const { allAbouts, allActivities, allKnowledges } = await apiQuery(SitemapDocument, {
			all: true,
			includeDrafts: false,
		});

		const staticRoutes = ['/', '/kontakta-oss', '/in-english', '/bli-medlem', '/logga-in'].map(
			(p) => ({
				url: `${process.env.NEXT_PUBLIC_SITE_URL}${p}`,
				lastModified: new Date().toISOString(),
				changeFrequency: p === '/' ? 'daily' : 'weekly',
				priority: p === '/' ? 1 : 0.8,
			}),
		);
		const dynmicRoutes = allAbouts
			.map(({ slug, _updatedAt }) => ({
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/om/${slug}`,
				lastModified: new Date(_updatedAt).toISOString(),
				changeFrequency: 'monthly',
				priority: 0.8,
			}))
			.concat(
				allActivities.map(({ slug, _updatedAt }) => ({
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/aktiviteter/${slug}`,
					lastModified: new Date(_updatedAt).toISOString(),
					changeFrequency: 'monthly',
					priority: 0.8,
				})),
			)
			.concat(
				allKnowledges.map(({ slug, _updatedAt }) => ({
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/kunskapsbank/${slug}`,
					lastModified: new Date(_updatedAt).toISOString(),
					changeFrequency: 'monthly',
					priority: 0.8,
				})),
			);
		return [...staticRoutes, ...dynmicRoutes] as MetadataRoute.Sitemap;
	},
	manifest: async () => {
		const { _site: site } = await apiQuery(SiteDocument);

		return {
			name: site.globalSeo?.fallbackSeo?.title as string,
			short_name: site.globalSeo?.fallbackSeo?.title as string,
			description: site.globalSeo?.fallbackSeo?.description as string,
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#000000',
			icons: [
				{
					src: '/favicon.ico',
					sizes: 'any',
					type: 'image/x-icon',
				},
			],
		} satisfies MetadataRoute.Manifest;
	},
	robots: async () => {
		return {
			rules: {
				userAgent: '*',
				allow: '/',
				disallow: ['/api', '/logga-in', '/logga-ut'],
			},
		};
	},
} satisfies DatoCmsConfig;
