'use client';

import s from './HomeGallery.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { RevealText } from '@/components';
import blobshape from 'blobshape';
import { useWindowSize } from 'rooks';
import { rInt, sleep } from 'next-dato-utils/utils';
import { DayCalendar } from '@/components';

export type Props = {
	slides: SlideRecord[];
	allActivities: AllActivitiesForCalendarQuery['allActivities'];
	editingUrl?: string | null;
};

const slideTime = 4000;

export default function HomeGallery({ slides, allActivities, editingUrl }: Props) {
	const [index, setIndex] = useState(0);
	const [mounted, setMounted] = useState(false);
	const [loaded, setLoaded] = useState({});
	const [size, setSize] = useState({ width: 0, height: 0 });
	const ref = useRef<HTMLUListElement | null>(null);
	const { innerWidth, innerHeight } = useWindowSize();

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(index + 1 > slides.length - 1 ? 0 : index + 1);
		}, slideTime);

		return () => clearInterval(interval);
	}, [index, slides]);

	useEffect(() => {
		if (ref.current === null) return;
		setSize({
			width: ref.current.clientWidth,
			height: ref.current.clientHeight,
		});
	}, [ref, innerWidth, innerHeight]);

	useEffect(() => {
		if (loaded.hasOwnProperty(slides[0].id)) setMounted(true);
	}, [loaded, slides]);

	return (
		<section className={cn(s.gallery)} id='home-gallery' data-datocms-content-link-url={editingUrl}>
			<ul ref={ref}>
				{slides
					.map((el) => ({ ...el, ...parseRecord(el.link) }))
					.map(({ id, headline, image, slug, type, blackText }, idx) => {
						const isCurrent = index === idx;
						const isNext = (index + 1 > slides.length - 1 ? 0 : index + 1) === idx;
						const maskId = `mask${idx}`;

						return (
							<li key={id}>
								<Link
									href={slug}
									className={cn(isCurrent ? s.current : isNext ? s.next : undefined)}
								>
									<header className={cn(blackText && s.blackText, !isCurrent && s.hide)}>
										<h5>{type}</h5>
										<h2>
											<RevealText start={index === idx}>{headline}</RevealText>
										</h2>
										<div className={s.fade} />
									</header>

									{image.responsiveImage && (
										<>
											<Image
												className={cn(s.image, isCurrent && s.pan)}
												data={image.responsiveImage}
												onLoad={() => setLoaded((s) => ({ ...s, [id]: true }))}
												imgStyle={isNext ? { clipPath: `url(#${maskId})` } : {}}
												placeholderClassName={s.image}
												priority={true}
												objectFit='cover'
												fadeInDuration={100}
											/>
											<Mask id={maskId} size={size} start={isNext} />
										</>
									)}
								</Link>
							</li>
						);
					})}
			</ul>
			<div className={s.calendar}>
				<DayCalendar className={s.picker} allActivities={allActivities} />
			</div>
		</section>
	);
}

const Mask = ({ id, size, start }: { id: string; size: any; start: boolean }) => {
	const numBlobs = 200;
	const animationTime = 1050;
	let timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!start) return;

		const paths = new Array(numBlobs).fill(0).map((e, idx) => {
			const { path } = blobshape({
				size: rInt(size.width * (idx / numBlobs), size.width * (idx / numBlobs)),
				growth: rInt(10, 20),
				edges: rInt(2, 4),
				seed: null,
			});
			return path;
		});

		const clipPath = document.getElementById(id);
		if (!clipPath) return;

		clipPath.innerHTML = '';

		const blobIt = async () => {
			for (let i = 0; timeoutRef.current && i < paths.length; i++) {
				const path = paths[i];
				clipPath.innerHTML += `<path d="${path}" transform="translate(${rInt(-200, size.width)},${rInt(-200, size.height)})"/>`;
				await sleep(animationTime / numBlobs);
			}
			await sleep(1000);
			clipPath.innerHTML = '';
		};

		timeoutRef.current = setTimeout(blobIt, slideTime - animationTime);

		return () => {
			timeoutRef.current && clearTimeout(timeoutRef.current);
		};
	}, [start, id, size]);

	return (
		<div className={s.mask}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${size.width} ${size.height}`}>
				<defs>
					<clipPath id={id}></clipPath>
				</defs>
			</svg>
		</div>
	);
};

const parseRecord = (record: any) => {
	if (!record) return { type: '', slug: '/' };
	const { __typename, slug } = record;

	switch (__typename) {
		case 'ActivityRecord':
			return { type: 'Aktivitet', slug: `/aktiviteter/${slug}`, headline: record.title };
		case 'AboutRecord':
			return { type: 'Om', slug: `/om/${slug}` };
		case 'KnowledgeRecord':
			return {
				type: 'Kunskapsbank',
				slug: `/kunskapsbank/${record.category?.slug}/${slug}`,
				headline: record.title,
			};
		default:
			return { type: '', slug: '/' };
	}
};
