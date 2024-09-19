import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 365 * (24 * 60 * 60), // 365 days
  },
  pages: {
    signIn: '/logga-in',
    signOut: '/',
    //error: '/konstnar/konto/auth?type=error', // Error code passed in query string as ?error=    
    //verifyRequest: '/auth/verify-request', // (used for check email message)    
    //newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)  }
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // if(account.type !== 'credentials' && !(await findUser(user.email)))
      // throw new Error('Access denied. Please registered for your account first.')
      return true
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        try {

          const { username: email, password } = credentials
          const isDev = process.env.NODE_ENV === 'development'
          const checkPassword = isDev ? true : password === process.env.ADMIN_PASSWORD;

          if (!checkPassword) {
            console.error('not a valid password!')
            return null
          }

          // Login passed, return user. 
          // Any object returned will be saved in `user` property of the JWT
          const session = {
            id: 'admin',
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