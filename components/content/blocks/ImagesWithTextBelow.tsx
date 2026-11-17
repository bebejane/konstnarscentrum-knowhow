import { Image } from 'react-datocms';
import { Content } from '@/components';
import s from './ImagesWithTextBelow.module.scss';

type Props = {
	data: ImagesWithTextBelowRecord;
};

export default function ImagesWithTextBelow({ data: { kolumn } }: Props) {
	if (!kolumn.length) return null;

	return (
		<div className={s.container}>
			{kolumn.map(({ id, image, text }) => (
				<figure className={s.item} key={id}>
					{image?.responsiveImage && (
						<Image className={s.image} data={image.responsiveImage} objectFit='cover' />
					)}
					{text && (
						<figcaption className={s.text}>
							<Content content={text} />
						</figcaption>
					)}
				</figure>
			))}
		</div>
	);
}
