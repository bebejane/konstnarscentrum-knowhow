import { client } from '@/lib/client';

export const POST = async (req: Request) => {
	try {
		const { id, approvalStatus } = await req.json();
		const application = await client.items.find(id);

		if (!application) {
			return new Response('error', {
				status: 404,
				statusText: 'Anmälan hittades ej',
				headers: { 'content-type': 'application/json' },
			});
		}

		const updatedApplication = await client.items.update(id, { approval_status: approvalStatus });

		return new Response(JSON.stringify(updatedApplication), {
			headers: { 'content-type': 'application/json' },
		});
	} catch (err) {
		console.log(err);
		return new Response(JSON.stringify(err), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		});
	}
};
