import connectDB from '@/db'
import { Note, User } from '@/model/model'
import { getSession } from '@/utils/getSession'
import { format } from 'date-fns'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const {
      nextUrl: { searchParams },
    } = req

    const noteIds = searchParams.get('noteIds').split(',')
    const { email } = await getSession(req)
    const user = await User.findOne({ emailId: email }).exec()

    if (user) {
      const notes = await Note.find({ _id: { $in: noteIds } }).exec()
      if (noteIds) {
        return Response.json({ notes }, { status: 200 })
      }
      return Response.json({ notes: [] }, { status: 200 })
    } else {
      return Response.json({ error: 'No user' }, { status: 404 })
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
