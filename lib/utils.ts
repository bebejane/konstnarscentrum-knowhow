import { isAfter, isBefore } from 'date-fns';

export const isServer = typeof window === 'undefined';

export const breakpoints = {
	mobile: 320,
	tablet: 740,
	desktop: 980,
	wide: 1441,
	navBreak: 1368,
};
export const pageSize = 10;

export const recordToSlug = (record: any): string => {
	let url: string;

	if (!record) {
		throw new Error('recordToSlug: Record  is empty');
	}

	if (typeof record === 'string') return record;

	const { __typename, slug, category } = record;

	switch (__typename) {
		case 'ActivityRecord':
			url = `/aktiviteter/${slug}`;
			break;
		case 'KnowledgeRecord':
			url = `/kunskapsbank/${category.slug}/${slug}`;
			break;
		case 'AboutRecord':
			url = `/om/${slug}`;
			break;
		default:
			throw Error(`${__typename} is unknown record slug!`);
	}

	return url;
};

export const activityStatus = (
	date: string,
	dateEnd: string,
): { value: string; label: string; order: number } => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const start = new Date(date);
	const end = !dateEnd ? start : new Date(dateEnd);
	const status = isAfter(today, end)
		? { value: 'past', label: 'Avslutat', order: -1 }
		: isBefore(today, start)
			? { value: 'upcoming', label: 'Kommande', order: 0 }
			: { value: 'present', label: 'Nu', order: 1 };
	return status;
};

export const randomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
