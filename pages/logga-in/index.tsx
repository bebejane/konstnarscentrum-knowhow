import s from "./index.module.scss";
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { ClientSafeProvider, getCsrfToken, signIn, useSession } from "next-auth/react";
import { RevealText } from "/components";
import { useEffect, useState } from "react";
import { Loader } from "/components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export type Props = {
	csrfToken: string,
	providers: ClientSafeProvider[]
}

export default function Login({ providers }: Props) {

	const router = useRouter()
	const [csrfToken, setCsrfToken] = useState<string | undefined>()
	const [error, setError] = useState<string | null>(null)
	const { data, status } = useSession()
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

	useEffect(() => {
		getCsrfToken().then(token => setCsrfToken(token))
	}, [])

	useEffect(() => {
		router.query.error && setError("Användarnamn eller lösenord är felaktigt")
	}, [router]);

	const onSubmitSignIn = async ({ username, password }) => {

		setError(null)
		const referer = router.query.referer as string

		await signIn("credentials", {
			callbackUrl: `${window.location.origin}${referer ?? ''}`,
			redirect: true,
			username,
			password,
		});
	};

	return (
		<div className={s.container}>
			{status === 'loading' ? <Loader />
				:
				<>
					<h1><RevealText>Logga in</RevealText></h1>
					<p className="intro">Här kan du som administrator logga in.</p>
					<form
						className={s.form}
						method="post"
						action="/api/auth/callback/credentials"
						onSubmit={handleSubmit(onSubmitSignIn)}
					>
						<input name="csrfToken" type="hidden" value={csrfToken} />

						<input
							{...register("password", { required: true })}
							placeholder={`Lösenord...`}
							name="password"
							type={'password'}
						/>

						<button disabled={isSubmitting}>
							Login
						</button>
						{error &&
							<p className={s.formError}>
								{`${typeof error === 'string' ? error : error}`}
							</p>
						}
					</form>
				</>
			}
		</div>
	);
}

Login.page = { title: 'Logga in', regional: false, crumbs: [{ title: 'Logga in' }] } as PageProps

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {
	return {
		props,
		revalidate
	};
});
