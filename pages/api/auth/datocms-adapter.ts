//@ts-nocheck
import type { Adapter } from 'next-auth/adapters';
import { default as client, getUserByEmail, getUserById } from '/lib/client';

export default function DatoCMSAdapter(): Adapter {
	return {
		async createUser(user) {
			console.log('createUser', user);
			return;
		},
		async getUser(id) {
			console.log('getUser', id);
			return (
				await client.items.list({ page: { limit: 1 }, filter: { type: 'member', fields: { id: { eq: id } } } })
			)?.[0];
		},
		async getUserByEmail(email) {
			console.log('getUserByEmail', email);
			return getUserByEmail(email);
		},
		async updateUser(user) {
			console.log('update user', user);
			return await getUserById(user?.id);
		},
		async deleteUser(userId) {
			return;
		},
		async linkAccount(account) {
			console.log('linkAccount', account);
			return;
		},
		async unlinkAccount({ providerAccountId, provider }) {
			return;
		},
		async createSession({ sessionToken, userId, expires }) {
			console.log('createSession', sessionToken, userId, expires);
			return;
		},
		async getSessionAndUser(sessionToken) {
			console.log('getSessionAndUser', sessionToken);
			return;
		},
		async updateSession({ sessionToken }) {
			console.log('updateSession', sessionToken);
			return;
		},
		async deleteSession(sessionToken) {
			return;
		},
		async createVerificationToken(params) {
			const { identifier: email, token, expires } = params;
			let user = await getUserByEmail(email);

			if (user) {
				console.log('user', user);
				user = await client.items.update(user.id, { auth: JSON.stringify(params) });
				return user.auth;
			}
		},
		async useVerificationToken(params) {
			console.log('useVerificationToken', params);

			const { identifier: email, token } = params;
			const user = await getUserByEmail(email);
			const auth = user ? JSON.parse(user.auth) : null;

			if (auth?.token === token) {
				console.log('token matched');
				return auth;
			}
			return;
		},
	};
}
