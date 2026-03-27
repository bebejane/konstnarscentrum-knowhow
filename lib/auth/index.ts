import jwt from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';
import { client } from '@/lib/client';
import type { AuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
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

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions);

export { getSession };

export const generateToken = async (email: string): Promise<any> => {
	return jwt.sign({ email }, process.env.JWT_PRIVATE_KEY!, { expiresIn: 12000 });
};
export const hashPassword = async (password: string): Promise<string> => {
	return hash(password, 12);
};
export const comparePassword = async (password: string, password2: string): Promise<boolean> => {
	return compare(password, password2);
};
export const findUser = async (email: string): Promise<any | null> => {
	if (!email) throw new Error('E-post adress är tom');

	const users = await client.items.list({
		page: { limit: 1 },
		filter: {
			type: 'member',
			fields: {
				email: {
					matches: { pattern: email, caseSensitive: false },
				},
			},
		},
	});
	return users[0] ?? null;
};
