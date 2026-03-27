'use client';

import 'react-day-picker/style.css';
import s from './MonthCalendar.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { isSameDay } from 'date-fns';
import { sv } from 'react-day-picker/locale';
import Link from 'next/link';

type MonthCalendarProps = {
	className?: string;
	allActivities: AllActivitiesForCalendarQuery['allActivities'];
	initialDate: Date;
};

export default function MonthCalendar({
	className,
	allActivities,
	initialDate,
}: MonthCalendarProps) {
	const [selected, setSelected] = useState<Date>();

	return (
		<DayPicker
			animate
			mode='single'
			selected={selected}
			onSelect={setSelected}
			className={cn(s.calendar, className)}
			locale={sv}
			defaultMonth={initialDate}
			components={{
				DayButton: ({ day, modifiers }) => {
					const activities = allActivities.filter((activity) =>
						isSameDay(new Date(activity.date), day.date),
					);
					return (
						<div className={s.day}>
							<div className={s.date}>{day.date.getDate()}</div>
							<div className={s.activities}>
								{activities.map(({ id, slug, title }) => (
									<div key={id} className={s.activity}>
										<Link href={`/aktiviteter/${slug}`} className={cn(s.title, 'very-small')}>
											{title}
										</Link>
									</div>
								))}
							</div>
						</div>
					);
				},
			}}
		/>
	);
}
