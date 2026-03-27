import s from './Logo.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export default function Logo() {
	return (
		<div className={cn(s.logo)}>
			<Link href='/'>
				Know
				<br />
				<span>–</span>How
			</Link>
		</div>
	);
}
