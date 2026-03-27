'use client';

import s from './Video.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'rooks';
import Youtube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import { Markdown } from 'next-dato-utils/components';

export type VideoBlockProps = {
	data: VideoRecord;
};

export default function Video({ data }: VideoBlockProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [height, setHeight] = useState(360);
	const { innerWidth, innerHeight } = useWindowSize();

	useEffect(() => {
		if (!ref.current) return;
		setHeight((ref.current?.clientWidth / 16) * 9);
	}, [innerWidth, innerHeight, data]); // Set to 16:9

	if (!data || !data.video) return null;

	const { provider, providerUid, title } = data.video;
	const style = { height: `${height}px`, width: '100%' };

	return (
		<section className={s.video} ref={ref}>
			{provider === 'youtube' ? (
				<Youtube
					opts={{
						playerVars: {
							autoplay: false,
							controls: 0,
							rel: 0,
						},
					}}
					videoId={providerUid}
					className={s.player}
					style={style}
				/>
			) : provider === 'vimeo' ? (
				<Vimeo video={providerUid} className={s.player} style={style} />
			) : null}
			{title && (
				<div className={s.caption}>
					<figcaption>
						<Markdown allowedElements={['em', 'p']} content={title} />
					</figcaption>
				</div>
			)}
		</section>
	);
}
