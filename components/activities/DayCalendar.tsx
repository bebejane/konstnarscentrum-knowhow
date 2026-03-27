'use client';

import 'react-day-picker/style.css';
import s from './DayCalendar.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { isSameDay } from 'date-fns';
import { sv } from 'react-day-picker/locale';
import Link from 'next/link';

type DayCalendarProps = {
	className?: string;
	allActivities: AllActivitiesForCalendarQuery['allActivities'];
};

export default function DayCalendar({ className, allActivities }: DayCalendarProps) {
	const [selected, setSelected] = useState<Date>();

	return (
		<DayPicker
			animate
			mode='single'
			selected={selected}
			onSelect={setSelected}
			className={cn('small', s.calendar, className)}
			locale={sv}
			components={{
				DayButton: ({ day, modifiers }) => {
					const activities = allActivities.filter((activity) =>
						isSameDay(new Date(activity.date), day.date),
					);

					const pathname =
						activities.length === 0
							? null
							: activities.length === 1
								? `/aktiviteter/${activities[0].slug}`
								: `/aktiviteter`;

					const query =
						activities.length <= 1 ? null : { view: 'calendar', d: day.date.toISOString() };

					return (
						<Link href={{ pathname, query }}>
							<button className={cn(s.day, pathname && s.active)}>{day.date.getDate()}</button>
						</Link>
					);
				},
			}}
		/>
	);
}
