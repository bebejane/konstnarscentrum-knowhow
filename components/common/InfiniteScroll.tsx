'use client';

import { useEffect, useRef, useState } from 'react';

export type InfiniteScrollProps<ComponetProps> = {
	data: ComponetProps[];
	count: number;
	next(offset: number): Promise<ComponetProps[]>;
	children: React.JSXElementConstructor<ComponetProps>;
};

export function InfiniteScroll<ComponetProps>({
	data: _data,
	count,
	next,
	children: Component,
}: InfiniteScrollProps<ComponetProps>): React.ReactNode {
	const [data, setData] = useState<ComponetProps[]>(_data);
	const ref = useRef<HTMLDivElement | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function fetchMore() {
		if (data.length >= count && !loading) return;
		setLoading(true);
		setError(null);
		const newData = await next(data.length).catch((e) => {
			setError(e.message);
			return [];
		});
		setData((oldData) => [...oldData, ...newData]);
		setLoading(false);
	}

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) fetchMore();
				});
			},
			{ rootMargin: '0px 0px 100% 0px' },
		);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, data]);

	return (
		<>
			{data.map((item, index) => (
				<Component key={index} {...item} ref={index === data.length - 1 ? ref : null} />
			))}
			<div ref={ref} />
			{error && <div style={{ color: 'red', marginTop: '1em' }}>{error}</div>}
		</>
	);
}
