import s from './CardContainer.module.scss';
import cn from 'classnames';
import React from 'react';

export type Props = {
	children?: React.ReactElement | React.ReactElement[];
	columns?: 2 | 3;
	className?: string;
	whiteBorder?: boolean;
};

export default function CardContainer({
	children,
	columns = 3,
	className,
	whiteBorder = false,
}: Props) {
	return (
		<ul className={cn(s.container, s[`col${columns}`], className, whiteBorder && s.whiteBorder)}>
			{children}
		</ul>
	);
}
