import { NextResponse, NextRequest } from 'next/server'
import { getSession } from './utils/getSession'

export async function middleware(request: NextRequest) {
  try {
    const { email } = await getSession(request)
    console.log('url:', request.url)

    const url = new URL(request.url)

    if (!email && url.pathname.includes('/in')) {
      return NextResponse.redirect(new URL('/', request.url))
    } else if (email && url.pathname === '/') {
      return NextResponse.redirect(new URL('/in', request.url))
    }

    if (url.pathname.includes('/api')) {
      if (!email) {
        return NextResponse.json({ message: 'unauthorized' })
      }
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: error.message })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/in',
    '/in/new',
    '/in/entry/[entry_id]',
    '/in/day/[day]',
    '/api/new',
    '/api/getNote/[note_id]',
    '/api/getDays',
    '/api/getDay/[day]',
  ],
}
