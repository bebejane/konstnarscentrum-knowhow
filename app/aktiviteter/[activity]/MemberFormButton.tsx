'use client';

import s from './MemberFormButton.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { MemberForm } from '@/components';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

type MemberFormButtonProps = {
	activity: ActivityQuery['activity'];
};

export default function MemberFormButton({ activity }: MemberFormButtonProps) {
	const [showMemberForm, setShowMemberForm] = useState(false);
	const { data: session } = useSession();
	const isAdmin = session?.user?.name === 'admin';

	useEffect(() => {
		if (showMemberForm)
			setTimeout(
				() =>
					document
						.getElementById('member-form-button')
						?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
				100,
			);
	}, [showMemberForm]);

	if (!activity) return null;

	return (
		<>
			<button
				id='member-form-button'
				data-toggled={showMemberForm}
				className={cn(s.apply, 'wide')}
				onClick={() => setShowMemberForm(!showMemberForm)}
			>
				Anmäl dig
			</button>
			<MemberForm activity={activity} show={showMemberForm} setShow={setShowMemberForm} />
			{isAdmin && (
				<Link href={`/aktiviteter/${activity.slug}/admin`} prefetch={true}>
					<button className='wide'>Administrera</button>
				</Link>
			)}
		</>
	);
}
