'use client';

import s from './ImageGallery.module.scss';
import { useCallback, useState, useRef, useEffect } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import { useWindowSize } from 'rooks';
import useStore, { useShallow } from '@/lib/store';

export type ImageGalleryBlockProps = {
	id: string;
	images: FileField[];
	onClick?: Function;
	editable?: boolean;
};

export default function ImageGallery({
	id,
	images,
	onClick,
	editable = false,
}: ImageGalleryBlockProps) {
	const swiperRef = useRef<Swiper | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const [index, setIndex] = useState(0);
	const [arrowMarginTop, setArrowMarginTop] = useState(0);
	const { innerHeight, innerWidth } = useWindowSize();
	const [setImageId] = useStore(useShallow((state) => [state.setImageId]));

	const calculatePositions = useCallback(() => {
		if (!arrowRef.current || !containerRef.current) return;
		const maxImageHeight = Array.from(
			containerRef.current.querySelectorAll<HTMLImageElement>('picture>img'),
		).reduce((prev, img) => (img.clientHeight > prev ? img.clientHeight : prev), 0);
		setArrowMarginTop(maxImageHeight / 2 - arrowRef.current.clientHeight / 2);
	}, []);

	useEffect(() => {
		calculatePositions();
	}, [innerHeight, innerWidth]);

	return (
		<div className={s.gallery} data-editable={editable} ref={containerRef}>
			<div className={s.fade} />
			<SwiperReact
				id={`${id}-swiper-wrap`}
				className={s.swiper}
				loop={true}
				noSwiping={false}
				simulateTouch={true}
				slidesPerView='auto'
				initialSlide={index}
				onSlideChange={({ realIndex }) => setIndex(realIndex)}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
			>
				{images.map(
					(item, idx) =>
						item.responsiveImage && (
							<SwiperSlide key={idx} className={s.slide}>
								<figure id={`${id}-${item.id}`} onClick={() => setImageId(item.id)}>
									<Image
										data={item.responsiveImage}
										className={s.image}
										imgClassName={s.picture}
										placeholderClassName={s.picture}
										objectFit={'cover'}
										onLoad={calculatePositions}
										priority={true}
									/>
									<figcaption>
										{item.title && <Markdown allowedElements={['em', 'p']} content={item.title} />}
									</figcaption>
								</figure>
							</SwiperSlide>
						),
				)}
			</SwiperReact>
			{images.length > 3 && (
				<div
					ref={arrowRef}
					className={s.next}
					style={{ top: `${arrowMarginTop}px`, display: arrowMarginTop ? 'flex' : 'none' }}
					onClick={() => swiperRef.current?.slideNext()}
				>
					→
				</div>
			)}
		</div>
	);
}
