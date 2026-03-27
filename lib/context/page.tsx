'use client';

import { useContext, createContext } from 'react';

export type PageMetaProps = {
	crumbs?: { title: string; slug: string }[];
};

const initialState: PageMetaProps = {
	crumbs: undefined,
};

export const PageContext = createContext(initialState);

export type PageProviderProps = {
	children: React.ReactElement;
	value: PageMetaProps;
};

// Context provider
export const PageProvider = ({ children, value }: PageProviderProps) => {
	return (
		<PageContext.Provider value={{ ...initialState, ...value }}>{children}</PageContext.Provider>
	);
};
// usePage hook
export const usePage = (): PageMetaProps => {
	return useContext(PageContext);
};
