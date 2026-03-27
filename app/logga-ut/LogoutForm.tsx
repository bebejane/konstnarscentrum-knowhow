'use client';

import s from './LogoutForm.module.scss';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

export function LogoutForm() {
	useEffect(() => {
		signOut({ callbackUrl: `${window.location.origin}/logga-in` });
	}, []);

	return <div className={s.logout}>Loggar ut...</div>;
}
