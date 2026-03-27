import { Session } from 'next-auth';
import { NextApiResponse, NextApiRequest } from 'next';
import { getSession } from '@/lib/auth/auth';

export default function withAuthentication(callback: AuthenticationHandler) {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		const session = await getSession();
		if (!session?.user) return res.status(401).send('Unauthorized');

		return callback(req, res, session);
	};
}

export type AuthenticationHandler = (
	req: NextApiRequest,
	res: NextApiResponse,
	session: Session,
) => void;
