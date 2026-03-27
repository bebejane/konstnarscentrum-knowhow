import * as postmark from 'postmark';
import { client } from '@/lib/client';
import { render } from '@react-email/components';
import KnowHowEmail, { KKVEmailProps } from './KnowHowEmail';
import { Activity, Member } from '@/types/datocms-cma';
import { Item } from '@datocms/cma-client/dist/types/generated/ApiTypes';

const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_API_KEY as string);

const defaultOptions = {
	From: process.env.POSTMARK_FROM_EMAIL as string,
	To: process.env.POSTMARK_FROM_NAME as string,
};

export async function sendEmail({
	to,
	subject,
	html,
	text,
}: {
	to: string;
	subject: string;
	html: string;
	text: string;
}) {
	try {
		const res = await postmarkClient.sendEmail({
			...defaultOptions,
			HtmlBody: html,
			TextBody: text,
			Subject: subject,
			To: to,
		});

		if (res.ErrorCode) throw new Error(res.Message, { cause: res.ErrorCode });
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export const sendActivityRegistration = async (email: string, activity: Item<Activity>) => {
	try {
		if (!email) throw new Error('E-post adress är obligatorisk');
		if (!activity) throw new Error('Aktivitet saknas');

		const member = (
			await client.items.list<Member>({
				page: { limit: 1 },
				filter: { type: 'member', fields: { email: { eq: email } } },
			})
		)?.[0];

		if (!member) throw new Error('Du är ej registrerad som medlem än.');

		const props: KKVEmailProps = {
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/aktiviteter/${activity.slug}`,
			name: member.first_name ?? '',
			text: `Hej, nu är du anmäld till ${activity.title} på KnowHow. Klicka på knappen nedan för mer information om aktiviteten`,
			button: 'Gå till aktiviteten',
		};

		return sendEmail({
			html: await render(<KnowHowEmail {...props} />),
			text: await render(<KnowHowEmail {...props} />, { plainText: true }),
			subject: 'Tack för din anmälan!',
			to: member.email as string,
		});
	} catch (error) {
		console.log(error);
		throw new Error((error as Error).message ?? error);
	}
};

export const sendVerificationRequest = async (params: {
	identifier: string;
	url: string;
	provider: { from: string };
}) => {
	let {
		identifier: email,
		url,
		provider: { from },
	} = params;

	try {
		const member = (
			await client.items.list<Member>({
				page: { limit: 1 },
				filter: { type: 'member', fields: { email: { eq: email } } },
			})
		)?.[0];

		if (!member)
			throw new Error('Du är ej registrerad som medlem än. Var god fyll i formuläret nedan.');

		const props: KKVEmailProps = {
			url,
			name: member.first_name ?? '',
			text: 'Hej, du kan logga in och hämta dina sparade uppgifter genom att klicka på knappen nedan',
		};

		return sendEmail({
			html: await render(<KnowHowEmail {...props} />),
			text: await render(<KnowHowEmail {...props} />, { plainText: true }),
			subject: 'Logga in på KnowHow',
			to: member.email as string,
		});
	} catch (error) {
		console.log(error);
		throw new Error((error as Error).message ?? error);
	}
};
