import { buildClient } from '@datocms/cma-client';
import { get } from 'http';
import withAuthentication from '/lib/auth/withAuthentication';

export const config = {
  runtime: 'nodejs',
  maxDuration: 60
}

const client = buildClient({
  apiToken: process.env.DATOCMS_API_TOKEN,
  environment: process.env.DATOCMS_ENVIRONMENT
});

const getUserByEmail = async (client, email) => {
  return (await client.items.list({ filter: { type: 'member', fields: { email: { eq: email } } } }))?.[0]
}

const handler = withAuthentication(async (req, res, session) => {

  const email = session.user.email
  const member = await getUserByEmail(client, email)

  if (!member) {
    return res.status(404).send('Member not found')
  }

  return res.json(member)
})

export default handler