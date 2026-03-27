'use client';

import s from './Search.module.scss';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import SearchIcon from '@/public/images/search.svg';
import CloseIcon from '@/public/images/close.svg';
import { Image } from 'react-datocms';
import Link from 'next/link';
import Loader from '@/components/common/Loader';
import { Markdown } from 'next-dato-utils/components';
import { useStore, useShallow } from '@/lib/store';
import { usePathname } from 'next/navigation';
import { SearchResult } from '@/app/api/search/route';
import { useTheme } from 'next-themes';
import Icon from '@/components/common/Icon';

export default function Search() {
	const pathame = usePathname();
	const [open, setOpen] = useState<boolean>(false);
	const [showSearch, setShowSearch] = useStore(
		useShallow((state) => [state.showSearch, state.setShowSearch]),
	);
	const [results, setResults] = useState<SearchResult | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [query, setQuery] = useState<string | undefined>('');
	const { theme } = useTheme();
	const ref = useRef<HTMLInputElement | null>(null);
	const abortController = useRef<AbortController | null>(null);
	const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const siteSearch = async (query?: string) => {
		if (!query) return;
		const variables = {
			q: query
				? `${query
						.split(' ')
						.filter((el) => el)
						.join('|')}`
				: undefined,
		};

		if (
			!Object.keys(variables).filter(
				(k: string) => variables[k as keyof typeof variables] !== undefined,
			).length
		)
			return;

		setResults(null);
		setLoading(true);
		setError(null);

		abortController.current?.abort(new DOMException('signal timed out', 'AbortError'));
		abortController.current = new AbortController();

		fetch('/api/search', {
			body: JSON.stringify(variables),
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			signal: abortController.current.signal,
		})
			.then(async (res) => {
				if (res.status === 200) {
					const results = await res.json();
					setResults(results);
				} else {
					setError(new Error('Det uppstod ett fel vid sökning. Försök igen senare.'));
				}
				setLoading(false);
			})
			.catch((err) => {
				if (err.name === 'AbortError') return;
				setError(err);
			});
	};

	useEffect(() => {
		if (open) {
			ref.current?.focus();
		} else {
			setResults(null);
			setQuery('');
			setShowSearch(false);
		}
	}, [open]);

	useEffect(() => {
		setOpen(false);
	}, [pathame]);

	useEffect(() => {
		setOpen(showSearch);
	}, [showSearch]);

	useEffect(() => {
		setLoading(true);
		setResults(null);
		searchTimeoutRef.current && clearTimeout(searchTimeoutRef.current);
		searchTimeoutRef.current = setTimeout(() => siteSearch(query), 350);
	}, [query]);

	return (
		<>
			{theme !== 'dark' && (
				<nav className={cn(s.search, open && s.open)}>
					<div className={s.wrap} onClick={() => setOpen(!open)}>
						<Icon src={SearchIcon} />
					</div>
				</nav>
			)}

			<div className={cn(s.searchBar, open && s.show, query && s.full)}>
				{query && (
					<div className={s.results}>
						<header>
							<nav>Sökresultat: &quot;{query}&quot;</nav>
						</header>
						<div className={s.matches}>
							{results && Object.keys(results).length > 0 ? (
								Object.keys(results).map((type, idx) => (
									<ul key={idx}>
										{results[type]?.map(({ category, title, text, image, slug }, i) => (
											<li key={i}>
												<div className={s.text}>
													<h5>{category}</h5>
													<h4>
														<Link href={slug}>{title}</Link>
													</h4>
													<Link href={slug}>
														<Markdown content={text} />
													</Link>
												</div>
												{image?.responsiveImage && (
													<figure>
														<Link href={slug}>
															<Image
																className={s.image}
																data={image.responsiveImage}
																objectFit='contain'
															/>
														</Link>
													</figure>
												)}
											</li>
										))}
									</ul>
								))
							) : loading ? (
								<div className={s.loader}>
									<Loader invert={true} />
								</div>
							) : (
								<>Inga träffar för: &quot;{query}&quot;</>
							)}
							{error && (
								<div className={s.error}>
									<p>{typeof error === 'string' ? error : error.message}</p>
									<button onClick={() => setError(null)}>Stäng</button>
								</div>
							)}
						</div>
					</div>
				)}
				<div className={s.bar}>
					<div className={s.icon}>
						<Icon src={SearchIcon} />
					</div>
					<input
						ref={ref}
						type='text'
						placeholder='Sök...'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<div className={cn(s.close, s.icon)} onClick={() => setOpen(!open)}>
						<Icon src={CloseIcon} nofill={true} />
					</div>
				</div>
			</div>
		</>
	);
}
