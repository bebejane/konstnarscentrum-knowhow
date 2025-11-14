import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import s from './MemberForm.module.scss';
import cn from 'classnames';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { OnProgressInfo, SimpleSchemaTypes } from '@datocms/cma-client-browser';
import { buildClient } from '@datocms/cma-client-browser';
import { Loader } from '..';

const pick = (obj: any, keys) => Object.fromEntries(keys.filter((key) => key in obj).map((key) => [key, obj[key]]));

const uploadClient = buildClient({
	apiToken: process.env.NEXT_PUBLIC_UPLOADS_API_TOKEN,
	environment: process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT ?? 'main',
});

type ActivityRecord = {
	id: string;
};

type Props = {
	activity: ActivityRecord;
	show: boolean;
	setShow: (show: boolean) => void;
};

export type Upload = SimpleSchemaTypes.Upload;

type FormInputs = {
	email: string;
	kc_member: string;
	protected_identity?: string;
	education_three_years?: string;
	have_worked_three_years?: string;
	social?: string;
	first_name: string;
	last_name: string;
	address: string;
	postal_code: string;
	city?: string;
	pdf?: File | { upload_id: string; default_field_metadata: any };
	id: string;
	phone?: string;
	age?: string;
	sex?: string;
	country?: string;
	language?: string;
	url?: string;
	education?: string;
	mission?: string;
	work_category?: string;
};

type FormField = {
	id: keyof FormInputs;
	type: 'email' | 'hidden' | 'text' | 'textarea' | 'file' | 'checkbox' | 'select';
	label?: string;
	required?: string;
	pattern?: { value: RegExp; message: string };
	value?: string;
	options?: { id: string; value: string }[];
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MemberForm({ activity, show, setShow }: Props) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputs>();

	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [member, setMember] = useState<any | null>(null);
	const [loadingMember, setLoadingMember] = useState(false);
	const [loginLinkSent, setLoginLinkSent] = useState(false);
	const [loginFromLink, setLoginFromLink] = useState(false);
	const abortController = useRef(new AbortController());
	const { data: session, status } = useSession();

	const onSubmit: SubmitHandler<FormInputs> = async (data) => {
		setError(null);
		setSuccess(false);
		setLoading(true);

		abortController.current?.abort();
		abortController.current = new AbortController();

		try {
			const body = { member: data, id: activity.id };

			const res = await fetch('/api/activity/register', {
				method: 'POST',
				body: JSON.stringify(body),
				signal: abortController.current.signal,
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (res.status === 404) throw new Error('Du måste registrera dig först');

			const result = await res.json();

			if (res.status !== 200)
				throw new Error(`Något gick fel, försök igen senare. Error: ${result?.message ?? JSON.stringify(result)}`);

			reset();
			setSuccess(true);
			scrollToForm();
		} catch (e: any) {
			if (e.name === 'AbortError') return;
			setError(e.message);
		}
		setLoading(false);
	};

	const fetchMember = async () => {
		setLoadingMember(true);

		try {
			const res = await fetch(`/api/activity/member`, { cache: 'no-store' });
			if (res.status === 200) {
				const member = await res.json();
				setMember(member);
			}
		} catch (e: any) {
			console.log(e);
			setError(e.message);
		} finally {
			setLoadingMember(false);
		}
	};

	useEffect(() => {
		if (status === 'authenticated') fetchMember();
	}, [reset, status, show]);

	useEffect(() => {
		if (!member) return;
		reset(member);
		setSuccess(false);
		setError(null);
		setLoginLinkSent(false);
	}, [member, reset]);

	useEffect(() => {
		if (window.location.hash !== '#apply?login=1') return;

		setLoginFromLink(true);
		setShow(true);
		scrollToForm();
	}, [setShow]);

	const createUpload = useCallback(async (file: File, allTags: string[]): Promise<Upload> => {
		if (!file) return Promise.reject(new Error('Ingen fil vald'));

		return new Promise((resolve, reject) => {
			uploadClient.uploads
				.createFromFileOrBlob({
					fileOrBlob: file,
					filename: file.name,
					tags: allTags.concat(['upload']),
					default_field_metadata: {
						en: {
							alt: file.name,
							title: file.name,
							custom_data: {},
						},
					},
					onProgress: (info: OnProgressInfo) => {
						console.log(info);
					},
				})
				.then((u) => resolve(u))
				.catch(reject);
		});
	}, []);

	const scrollToForm = () => {
		setTimeout(() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
	};

	const handleLoginSuccess = () => {
		setLoginLinkSent(true);
		scrollToForm();
	};

	let fields: FormField[] = [
		{ id: 'id', type: 'hidden', value: activity.id },
		{
			id: 'email',
			type: 'email',
			label: 'E-post',
			required: 'E-post är obligatoriskt',
			pattern: { value: /\S+@\S+\.\S+/, message: 'Ogiltig e-postadress' },
		},
		{ id: 'first_name', type: 'text', label: 'Förnamn', required: 'Namn är obligatoriskt' },
		{ id: 'last_name', type: 'text', label: 'Efternamn', required: 'Efternamn är obligatoriskt' },
		{ id: 'address', type: 'text', label: 'Adress', required: 'Adress är obligatoriskt' },
		{ id: 'postal_code', type: 'text', label: 'Postnummer', required: 'Postnummer är obligatoriskt' },
		{ id: 'city', type: 'text', label: 'Stad', required: 'Stad är obligatoriskt' },
		{ id: 'phone', type: 'text', label: 'Telefon' },
		{ id: 'age', type: 'text', label: 'Ålder', required: 'Ålder är obligatoriskt' },
		{
			id: 'sex',
			type: 'select',
			label: 'Kön',
			required: 'Kön är obligatoriskt',
			options: [
				{ id: 'Kvinna', value: 'Kvinna' },
				{ id: 'Man', value: 'Man' },
				{ id: 'Annat', value: 'Annat' },
				{ id: 'Vill ej uppge', value: 'Vill ej uppge' },
			],
		},
		{ id: 'country', type: 'text', label: 'Födelseland', required: 'Födelseland är obligatoriskt' },
		{ id: 'language', type: 'text', label: 'Språk', required: 'Språk är obligatoriskt' },
		{ id: 'url', type: 'text', label: 'Webbplats (Krävs fullständig url med http://)' },
		{ id: 'social', type: 'textarea', label: 'Sociala medier' },
		{ id: 'protected_identity', type: 'checkbox', label: 'Jag har skyddad identitet' },
		{ id: 'kc_member', type: 'checkbox', label: 'Jag är medlem i Konstnärscentrum' },
		{ id: 'education_three_years', type: 'checkbox', label: 'Utbildad på konstnärlig högskola minst 3 år' },
		{
			id: 'have_worked_three_years',
			type: 'checkbox',
			label: 'Jag har arbetat längre än 3 år som professionell konstnär utan att ha gått konstnärlig högskola',
		},
	];

	return (
		<div id='apply' className={cn(s.container, show && s.show)}>
			{status !== 'authenticated' && !success && <MemberLogin onSuccess={handleLoginSuccess} />}
			{!success && !loginLinkSent && (
				<form className={s.form} onSubmit={handleSubmit(onSubmit)} autoComplete='new'>
					<p>
						{!loginFromLink ? (
							<>
								Är det första gången du anmäler intresse att delta i en aktivitet? Då vill vi veta lite om dig så vi kan
								sätta ihop en bra grupp.
								<br /> <a href='mailto:knowhow@konstnarscentrum.org'>Hör av dig till oss</a> om något är oklart.
							</>
						) : (
							<>
								Du har redan anmält dig till en kurs hos oss så vi har sparat dina uppgifter. Kontrollera att dom
								stämmer och klicka sen &quot;Skicka&quot; för att anmäla ditt intresse för denna kursen.
							</>
						)}
					</p>

					{fields.map(({ id, type, label, value, options, required, pattern }, idx) => {
						const title = (
							<label htmlFor={id}>
								{label}
								{required && <span className={s.required}>*</span>}
							</label>
						);
						return (
							<React.Fragment key={idx}>
								{type !== 'checkbox' && title}
								{type === 'textarea' ? (
									<textarea
										id={id}
										{...register(id, { required, pattern })}
										className={cn(errors[id] && s.error)}
										autoComplete='new'
										autoCorrect={'off'}
									/>
								) : type === 'select' ? (
									<select
										id={id}
										{...register(id, { required, pattern })}
										className={cn(errors[id] && s.error)}
										autoComplete='new'
									>
										<option value=''>Välj...</option>
										{options.map(({ id, value }) => (
											<option key={id} value={id}>
												{value}
											</option>
										))}
									</select>
								) : type === 'checkbox' ? (
									<div className={s.checkbox}>
										<input
											id={id}
											type={type}
											value={value}
											{...register(id, { required, pattern })}
											className={cn(errors[id] && s.error)}
											autoComplete='new'
										/>
										{title}
									</div>
								) : (
									<input
										id={id}
										type={type}
										value={value}
										{...register(id, { required, pattern })}
										className={cn(errors[id] && s.error)}
										autoComplete='new'
									/>
								)}
							</React.Fragment>
						);
					})}
					{error && <span className={s.error}>{error}</span>}
					<button type='submit' disabled={loading}>
						{loading ? <Loader /> : 'Skicka'}
					</button>
				</form>
			)}
			{success && !loginLinkSent && (
				<div className={s.success}>
					<p>
						Tack för din intresseanmälan!
						<br /> Vi kontaktar dig för bekräftelse om du har fått plats via mail.
					</p>
					<button
						onClick={() => {
							setShow(false);
							setSuccess(false);
							setError(null);
							setLoginLinkSent(false);
						}}
					>
						Stäng
					</button>
				</div>
			)}
		</div>
	);
}

type MemberLoginProps = {
	onSuccess: () => void;
};

function MemberLogin({ onSuccess }: MemberLoginProps) {
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [done, setDone] = useState(false);
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const { data: session, status } = useSession();

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		setSuccess(false);
		setLoading(true);
		setDone(false);

		const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
		const email = emailInput.value?.toLowerCase().trim();
		const callbackUrl = `${window.location.href.replace('#apply?login=1', '')}#apply?login=1`;

		try {
			const res = await signIn('email', {
				email,
				callbackUrl,
				redirect: false,
			});

			if (res?.error === 'EmailSignin')
				setError('E-postadressen är inte registrerad. Var vänlig registrera dig nedan först.');
			else {
				setSuccess(true);
				onSuccess();
			}
		} catch (e: any) {
			setError(e.message);
			setSuccess(false);
		}
		setLoading(false);
	};

	if (done) return null;

	return (
		<form onSubmit={handleLogin} className={cn(s.form)}>
			<p>
				Har du deltagit i våra aktiviteter innan och anmält dig via formuläret här på hemsidan? Då behöver du bara fylla
				i din mailadress för att anmäla dig nedan. <br />
				Om inte, anmäl dig med formuläret nedan.
			</p>
			<input
				type='email'
				value={email}
				onChange={({ target }) => setEmail(target.value)}
				name='email'
				placeholder={'E-post...'}
				disabled={loading}
			/>
			<button className={s.register} type='submit' disabled={loading}>
				{loading ? <Loader /> : 'Skicka inloggningslänk'}
			</button>
			{success && (
				<div className={s.success}>
					<span>Ett meddelande med din inloggningslänk har skickats till din e-postadress.</span>
					<button type='reset' onClick={() => setDone(true)}>
						Stäng
					</button>
				</div>
			)}
			{error && <span className={s.errorMessage}>{error}</span>}
		</form>
	);
}
