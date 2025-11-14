import { getUserByEmail } from '/lib/client';
import withAuthentication from '/lib/auth/withAuthentication';

export const config = {
	runtime: 'nodejs',
	maxDuration: 5,
};

const handler = withAuthentication(async (req, res, session) => {
	const email = session.user.email;
	const member = await getUserByEmail(email);

	if (!member) {
		return res.status(401).send('Member not found');
	}

	return res.json(member);
});

export default handler;
