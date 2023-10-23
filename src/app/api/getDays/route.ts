import connectDB from '@/db'
import { User } from '@/model/model'
import { getSession } from '@/utils/getSession'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { email } = await getSession(req)
    const user = await User.findOne({ emailId: email }).exec()

    if (user) {
      return Response.json({ days: user.days }, { status: 200 })
    } else {
      return Response.json({ error: 'No Days' }, { status: 404 })
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
