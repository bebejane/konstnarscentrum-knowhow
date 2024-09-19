
import { getServerSession } from "next-auth"
import { Session } from 'next-auth'
import { authOptions } from '/pages/api/auth/[...nextauth]'
import { NextApiResponse, NextApiRequest } from 'next'

export default function withAuthentication(callback: AuthenticationHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions)
    if (!session?.user)
      return res.status(401).send('Unauthorized')

    return callback(req, res, session);
  };
};

export type AuthenticationHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
) => void
