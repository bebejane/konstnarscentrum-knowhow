import { getUserByEmail } from '/lib/client';
import withAuthentication from '/lib/auth/withAuthentication';

export const config = {
  runtime: 'nodejs',
  maxDuration: 60
}


const handler = withAuthentication(async (req, res, session) => {

  console.log('member retrieve', session?.user?.email, session)
  const email = session.user.email
  const member = await getUserByEmail(email)

  if (!member) {
    return res.status(404).send('Member not found')
  }

  return res.json(member)
})

export default handler