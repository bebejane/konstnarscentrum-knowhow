import { isEmail } from 'next-dato-utils/utils';
import s from './MetaSection.module.scss';
import { IcsDownload } from '@/components/common/IcsDownload';

export type Props = {
	items: {
		title: string;
		value?: string;
		ics?: string | null;
	}[];
};

export default function MetaSection({ items = [] }: Props) {
	return (
		<section className={s.meta}>
			<table className='small'>
				<tbody>
					{items
						.filter(({ value, title }) => value && title)
						.map(({ title, value, ics }, idx) => (
							<tr key={idx}>
								<td>
									<span>{title}</span>
								</td>
								<td suppressHydrationWarning>
									{isEmail(value) ? (
										<a href={`mailto:${value}`}>E-post</a>
									) : ics ? (
										<IcsDownload event={ics} title={value} />
									) : (
										<>{value}</>
									)}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
}
