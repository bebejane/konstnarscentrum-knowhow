'use client';

import s from './LoginForm.module.scss';
import { getCsrfToken, signIn, useSession } from 'next-auth/react';
import { RevealText } from '@/components';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type LoginFormData = {
	username: string;
	password: string;
};

export function LoginForm() {
	const searchParams = useSearchParams();
	const [csrfToken, setCsrfToken] = useState<string | undefined>();
	const [error, setError] = useState<string | null>(null);
	const { status } = useSession();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({ defaultValues: { username: '', password: '' } });

	useEffect(() => {
		getCsrfToken().then((token) => setCsrfToken(token));
	}, []);

	useEffect(() => {
		searchParams.get('error') && setError('Användarnamn eller lösenord är felaktigt');
	}, [searchParams]);

	const onSubmitSignIn: SubmitHandler<LoginFormData> = async ({ username, password }) => {
		setError(null);
		const referer = searchParams.get('referer');

		await signIn('credentials', {
			callbackUrl: `${window.location.origin}${referer ?? ''}`,
			redirect: true,
			username,
			password,
		});
	};

	return (
		<div className={s.container}>
			{status === 'loading' ? (
				<Loader />
			) : status === 'authenticated' ? (
				<p className={s.logout}>
					Du är redan inloggad.
					<br />
					<Link href='/logga-ut'>
						<button disabled={isSubmitting}>Logga ut</button>
					</Link>
				</p>
			) : (
				<>
					<h1>
						<RevealText>Logga in</RevealText>
					</h1>
					<form
						className={s.form}
						method='post'
						action='/api/auth/callback/credentials'
						onSubmit={handleSubmit(onSubmitSignIn)}
					>
						<input name='csrfToken' type='hidden' value={csrfToken ?? ''} />
						<input
							{...register('username', { required: true })}
							placeholder='E-post...'
							name='username'
							type='email'
						/>
						<input
							{...register('password', { required: true })}
							placeholder={`Lösenord...`}
							name='password'
							type={'password'}
						/>

						<button disabled={isSubmitting}>Skicka</button>
						{error && (
							<p className={s.formError}>{`${typeof error === 'string' ? error : error}`}</p>
						)}
					</form>
				</>
			)}
		</div>
	);
}
