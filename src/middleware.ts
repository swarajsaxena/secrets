import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const session = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    if (session) {
      // console.log('User name:', session)
    } else {
      return Response.json({ message: 'unauthorised' })
    }
  } catch (error) {
    return Response.json({ message: error.message })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/new',
}
