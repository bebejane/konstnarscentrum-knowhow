'use client';

import s from './LoginForm.module.scss';
import { signIn } from 'next-auth/react';
import { RevealText } from '@/components';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

type LoginFormData = {
	username: string;
	password: string;
};

export function LoginForm() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({ defaultValues: { username: '', password: '' } });

	useEffect(() => {
		searchParams.get('error') && setError('Användarnamn eller lösenord är felaktigt');
	}, [searchParams]);

	const onSubmitSignIn: SubmitHandler<LoginFormData> = async ({ username, password }) => {
		setError(null);
		const redirect = searchParams.get('redirect');
		const callbackUrl = `${window.location.origin}${redirect ?? ''}`;

		await signIn('credentials', {
			redirect: false,
			username,
			password,
		}).then((res) => {
			if (res?.error) {
				setError(res.error);
			} else {
				router.push(callbackUrl);
			}
		});
	};

	return (
		<div className={s.container}>
			<h1>
				<RevealText>Logga in</RevealText>
			</h1>
			<form
				className={s.form}
				method='post'
				action='/api/auth/callback/credentials'
				onSubmit={handleSubmit(onSubmitSignIn)}
			>
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
				{error && <p className={s.formError}>{`${typeof error === 'string' ? error : error}`}</p>}
			</form>
		</div>
	);
}
