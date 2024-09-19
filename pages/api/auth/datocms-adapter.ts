import type { Adapter } from "next-auth/adapters"
import { buildClient } from "@datocms/cma-client"

const getUserByEmail = async (client, email) => {
  return (await client.items.list({ filter: { type: 'member', fields: { email: { eq: email } } } }))?.[0]
}

export default function DatoCMSAdapter(): Adapter {

  const datocms = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN, environment: process.env.DATOCMS_ENVIRONMENT })

  return {
    async createUser(user) {
      console.log('createUser', user)
      return
    },
    async getUser(id) {
      console.log('getUser', id)
      return (await datocms.items.list({ type: 'member', fields: { id: { eq: id } } }))?.[0]
    },
    async getUserByEmail(email) {
      console.log('getUserByEmail', email)
      return getUserByEmail(datocms, email)
    },
    async updateUser(user) {
      return await getUserByEmail(datocms, user.email)
    },
    async deleteUser(userId) {

      return
    },
    async linkAccount(account) {
      console.log('linkAccount', account)
      return
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return
    },
    async createSession({ sessionToken, userId, expires }) {
      console.log('createSession', sessionToken, userId, expires)
      return
    },
    async getSessionAndUser(sessionToken) {
      console.log('getSessionAndUser', sessionToken)
      return
    },
    async updateSession({ sessionToken }) {
      console.log('updateSession', sessionToken)
      return
    },
    async deleteSession(sessionToken) {
      return
    },
    async createVerificationToken(params) {
      const { identifier: email, token, expires } = params
      let user = await getUserByEmail(datocms, email)

      if (user) {
        console.log('user', user)
        user = await datocms.items.update(user.id, { auth: JSON.stringify(params) })
        return user.auth
      }
      //else
      //return throw new Error('User not found!')

    },
    async useVerificationToken(params) {
      console.log('useVerificationToken', params)

      const { identifier: email, token } = params
      const user = await getUserByEmail(datocms, email)
      const auth = user ? JSON.parse(user.auth) : null

      if (auth?.token === token) {
        console.log('token matched', user.auth, token)
        return auth
      }
      return
    },
  }
} 