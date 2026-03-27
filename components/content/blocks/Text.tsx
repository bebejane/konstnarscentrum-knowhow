import s from './Text.module.scss';
import { Markdown } from 'next-dato-utils/components';
import { ReadMore } from '@/components';

export type TextBlockProps = {
	data: TextRecord;
};

export default function Text({ data: { text, headline, link } }: TextBlockProps) {
	return (
		<div className={s.container}>
			{headline && <h2>{headline}</h2>}
			<h3>
				<Markdown className={s.text} content={text} />
			</h3>
			<ReadMore link={link} message='Läs mer' />
		</div>
	);
}
