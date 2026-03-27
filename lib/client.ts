import { buildClient } from '@datocms/cma-client';

export const client = buildClient({
	apiToken: process.env.DATOCMS_API_TOKEN ?? process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN!,
	environment:
		process.env.DATOCMS_ENVIRONMENT ?? process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT ?? 'main',
});

const getUserByEmail = async (email: string) => {
	if (!email) return null;
	return (
		await client.items.list({
			page: { limit: 1 },
			filter: { type: 'member', fields: { email: { eq: email } } },
		})
	)?.[0];
};

const getUserById = async (id: string) => {
	if (!id) return null;
	return await client.items.find(id);
};
export default client;
export { buildClient, getUserByEmail, getUserById };
