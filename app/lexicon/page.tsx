import s from './page.module.scss';
import { AllLexiconsDocument } from '@/graphql';
import { Article, Breadcrumbs, Content } from '@/components';
import { ToolTip } from '@/components';
import { sortSwedish } from 'next-dato-utils/utils';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';

export default async function Lexicons() {
	const { allLexicons, lexiconText, draftUrl } = await apiQuery(AllLexiconsDocument, { all: true });

	return (
		<>
			<Article title={'Lexikon'}>
				<Content content={lexiconText?.intro} className={'intro'} />
				<ul className={s.words}>
					{sortSwedish(allLexicons, 'word').map((l) => (
						<li key={l.id}>
							<ToolTip lexicon={l as LexiconRecord}>{l.word}</ToolTip>
						</li>
					))}
				</ul>
			</Article>
			<Breadcrumbs crumbs={[{ title: 'Lexicon' }]} />
			<DraftMode path={`/lexicon`} url={draftUrl} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Lexicon',
		pathname: '/lexicon',
	});
}
