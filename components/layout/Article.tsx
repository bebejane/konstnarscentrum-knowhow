'use client';

import s from './Article.module.scss';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { Markdown } from 'next-dato-utils/components';
import { Content, RevealText } from '@/components';
import { Image } from 'react-datocms';
import BalanceText from 'react-balance-text';
import { useScrollInfo } from 'next-dato-utils/hooks';
import useStore, { useShallow } from '@/lib/store';

export type ArticleProps = {
	children?: React.ReactNode | React.ReactNode[];
	title?: string;
	blackHeadline?: boolean;
	text?: string;
	image?: FileField | any;
	showImage?: boolean;
	content?: any;
	noBottom?: boolean;
	className?: string;
};

export default function Article({
	children,
	title,
	blackHeadline = false,
	text,
	image,
	content,
	showImage = true,
	className,
}: ArticleProps) {
	const haveImage = image?.responsiveImage !== undefined;
	const { scrolledPosition } = useScrollInfo();
	const [hideCaption, setHideCaption] = useState(false);
	const [setImageId, setImages] = useStore(
		useShallow((state) => [state.setImageId, state.setImages]),
	);

	useEffect(() => {
		const images = [image];
		content?.blocks?.forEach((el: any) => {
			console.log(el.image);
			el.__typename === 'ImageRecord' && images.push(el.image);
			el.__typename === 'ImageGalleryRecord' && images.push.apply(images, el.images);
		});
		setImages(images.filter((el) => el).flat() as FileField[]);
	}, []);

	useEffect(() => {
		setHideCaption(scrolledPosition > 100);
	}, [scrolledPosition]);

	return (
		<div className={cn(s.article, 'article', className)}>
			{showImage && (
				<header>
					{title && (
						<h1
							className={cn(
								s.title,
								haveImage && s.absolute,
								(blackHeadline || !haveImage) && s.black,
							)}
						>
							<RevealText>
								<BalanceText>{title}</BalanceText>
							</RevealText>
							{haveImage && <div className={s.fade}></div>}
						</h1>
					)}

					{haveImage && (
						<>
							<figure onClick={() => setImageId(image?.id)}>
								<>
									<Image
										className={s.image}
										data={image.responsiveImage}
										objectFit='cover'
										placeholderClassName={s.placeholder}
									/>
									<figcaption className={cn(hideCaption && s.hide)}>
										<Markdown content={image.title} />
									</figcaption>
								</>
							</figure>
							<div
								className={s.colorBg}
								style={{ backgroundColor: image?.responsiveImage?.bgColor ?? undefined }}
							/>
						</>
					)}
				</header>
			)}
			{text && <Markdown className='intro' disableBreaks={true} content={text} />}
			{children}
			{content && <Content content={content} />}
		</div>
	);
}
