import jwt from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';
import client from '/lib/client';

export { default as requireAuthentication } from './requireAuthentication';

export { validateEmail, validatePassword, validateSignUp } from './validate';

export const generateToken = async (email: string): Promise<any> => {
	return jwt.sign({ email }, process.env.JWT_PRIVATE_KEY, { expiresIn: 12000 });
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
