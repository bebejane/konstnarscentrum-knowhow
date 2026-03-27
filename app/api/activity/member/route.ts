import { getSession } from '@/lib/auth';
import { getUserByEmail } from '@/lib/client';

export const GET = async (req: Request) => {
	const session = await getSession();
	const email = session?.user?.email;
	if (!email) return new Response('Unauthorized', { status: 401 });

	const member = await getUserByEmail(email);

	if (!member) {
		return new Response('Member not found', { status: 404 });
	}

	return new Response(JSON.stringify(member), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};
