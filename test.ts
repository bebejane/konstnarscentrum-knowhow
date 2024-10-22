import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import { buildClient } from '@datocms/cma-client'
const client = buildClient({
  apiToken: process.env.DATOCMS_API_TOKEN,
  environment: process.env.DATOCMS_ENVIRONMENT ?? 'main'
})

const getUserByEmail = async (email: string) => {
  return (await client.items.list({ page: { limit: 1 }, filter: { type: 'member', fields: { email: { eq: email } } } }))?.[0]
}

const main = async () => {
  const user = await getUserByEmail('kootasu@hotmail.com')
  console.log(user)
}
main()