import s from './BackgroundImage.module.scss';

export type BackgroundImageProps = {
	image: FileField;
};

export default function BackgroundImage({ image }: BackgroundImageProps) {
	return (
		<div className={s.background} style={{ '--background': `url(${image?.url}?w=1000)` }}></div>
	);
}
