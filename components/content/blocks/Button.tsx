import s from './Button.module.scss';
import Link from 'next/link';
import { isEmail } from 'next-dato-utils/utils';

export type ButtonBlockProps = { data: ButtonRecord; onClick: Function };

export default function Button({ data: { text, url }, onClick }: ButtonBlockProps) {
	url = url?.trim();
	if (isEmail(url) && !url?.startsWith('mailto:')) url = `mailto:${url}`;
	return (
		<Link className={s.button} href={url}>
			<button>{text}</button>
		</Link>
	);
}
