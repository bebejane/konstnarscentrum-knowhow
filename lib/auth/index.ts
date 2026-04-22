import 'dotenv/config';
import type { AuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import DatoCMSAdapter from './datocms-adapter';
import { sendVerificationRequest } from '@/emails';

export const authOptions: AuthOptions = {
	session: {
		strategy: 'jwt',
		maxAge: 365 * (24 * 60 * 60), // 365 days
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
	pages: {
		signIn: '/logga-in',
		signOut: '/logga-ut',
	},
	callbacks: {
		session: async (params) => {
			const { session, user } = params;
			if (session.user && user) session.user.email = user?.email;
			return session;
		},
	},
	adapter: DatoCMSAdapter(),
	providers: [
		EmailProvider({
			server: {
				host: process.env.SMTP_HOST,
				port: Number(process.env.SMTP_PORT),
				auth: {
					user: process.env.POSTMARK_API_KEY,
					pass: process.env.POSTMARK_API_KEY,
				},
			},
			maxAge: 5 * 60,
			type: 'email',
			from: process.env.POSTMARK_FROM_EMAIL!,
			sendVerificationRequest,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					const { username: email, password } = credentials ?? {};
					const checkPassword =
						password === process.env.ADMIN_PASSWORD && email === process.env.ADMIN_EMAIL;

					if (!checkPassword) {
						console.error('not a valid password!');
						return null;
					}

					const session = {
						id: 'admin',
						name: 'admin',
						email: process.env.ADMIN_EMAIL,
					};

					return session;
				} catch (err) {
					console.error(err);
					return null;
				}
			},
		}),
	],
};

export const getSession = async () => getServerSession(authOptions);
