import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions, Session } from 'next-auth';
import NextAuth from 'next-auth'
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email';
import DatoCMSAdapter from './datocms-adapter';
import { getUserByEmail } from '/lib/client';
import { sendVerificationRequest } from "./postmark"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 365 * (24 * 60 * 60), // 365 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: '/logga-in',
    signOut: '/logga-ut',
  },
  callbacks: {
    session: async (params) => {
      const { session, user } = params;
      if (session.user && user)
        session.user.email = user?.email;
      return session;
    },

  },
  adapter: DatoCMSAdapter(),
  providers: [
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.POSTMARK_API_KEY,
          pass: process.env.POSTMARK_API_KEY,
        },
      },
      maxAge: 5 * 60,
      type: 'email',
      from: process.env.SMTP_FROM,
      sendVerificationRequest,

    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        try {
          console.log('authorize', credentials)
          const { username: email, password } = credentials
          const checkPassword = password === process.env.ADMIN_PASSWORD && email === process.env.ADMIN_EMAIL;

          if (!checkPassword) {
            console.error('not a valid password!')
            return null
          }

          const session = {
            id: 'admin',
            name: 'admin',
            email: process.env.ADMIN_EMAIL,
          }

          return session
        } catch (err) {
          console.error(err)
          return null
        }
      }
    })

  ]
}

const handler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
export default handler