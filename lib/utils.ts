import { isAfter, isBefore, format } from 'date-fns';
import { sv } from 'date-fns/locale';

export const pageSize = 10;
export const breakpoints = {
	mobile: 320,
	tablet: 740,
	desktop: 980,
	wide: 1441,
	navBreak: 1368,
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

export const formatDate = (date?: string | Date, short?: boolean) => {
	if (!date) return date;
	if (short) return format(new Date(date), 'dd MMM', { locale: sv });
	return format(new Date(date), 'dd MMMM yyyy', { locale: sv });
};

export const cleanObject = (obj: Record<string, any>) => {
	const o = { ...obj };
	Object.keys(o).forEach((key) => (o[key] === undefined || o[key] === null ? delete o[key] : null));
	return o;
};
