'use client';

import cn from 'classnames';
import styles from './ReadMore.module.scss';
import Link from 'next/link';
import { useTheme } from 'next-themes';

type Props = {
	message?: string;
	link?: string | null;
	invert?: boolean;
};

export default function ReadMore({ message, link, invert = false }: Props) {
	const { theme } = useTheme();

	if (!link) return null;

	return (
		<Link href={link} className={cn(styles.more, 'small', invert && styles.invert)}>
			<div className={cn(styles.square)} data-theme={theme} suppressHydrationWarning />
			<span data-theme={theme} suppressHydrationWarning>
				{message}
			</span>
		</Link>
	);
}
