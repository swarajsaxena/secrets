import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export const getSession = async (req: NextRequest) => {
  const session = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if (session) {
    return {
      name: session.name,
      email: session.email,
      picture: session.picture,
    }
  } else {
    return {
      name: null,
      email: null,
      picture: null,
    }
  }
}
