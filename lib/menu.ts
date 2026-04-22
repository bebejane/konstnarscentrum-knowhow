import { apiQuery } from 'next-dato-utils/api';
import { AllAboutsMenuDocument, AllKnowledgeCategoriesDocument } from '@/graphql';

export type Menu = MenuItem[];

export type MenuItem = {
	type: string;
	index?: boolean;
	label: string;
	slug: string;
	external?: boolean;
	sub?: MenuItem[];
};

const base: Menu = [
	{ type: 'about', label: 'Om', slug: '/om' },
	{ type: 'activity', label: 'Aktiviteter', slug: '/aktiviteter', index: true, sub: [] },
	{ type: 'knowledge', label: 'Kunskapsbank', slug: '/kunskapsbank', index: true, sub: [] },
	{ type: 'Lexikon', label: 'Lexikon', slug: '/lexicon', index: true, sub: [] },
	{ type: 'contact', label: 'Kontakt', slug: '/kontakta-oss', index: true, sub: [] },
	{ type: 'in-english', label: 'In English', slug: '/english', index: true, sub: [] },
];

export const buildMenu = async () => {
	const { allAbouts } = await apiQuery(AllAboutsMenuDocument, { all: true, stripStega: true });
	const { allKnowledgeCategories } = await apiQuery(AllKnowledgeCategoriesDocument, {
		all: true,
		stripStega: true,
	});

	const menu = base.map((item) => {
		let sub: MenuItem[] | undefined;
		switch (item.type) {
			case 'about':
				sub = allAbouts.map((el) => ({ type: 'about', label: el.title, slug: `/om/${el.slug}` }));
				break;
			default:
				break;
		}
		return { ...item, sub: sub ? sub : item.sub };
	});

	return menu;
};
