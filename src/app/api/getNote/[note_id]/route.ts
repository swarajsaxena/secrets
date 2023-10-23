import connectDB from '@/db'
import { Note } from '@/model/model'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const session = await getToken({
      req: req,
      secret: process.env.NEXTAUTH_SECRET,
    })

    const url = req.url.split('/')
    const noteId = url[url.length - 1]

    const note = await Note.findById(noteId).exec()

    if (note) {
      return Response.json({ note })
    } else {
      return Response.json({ error: 'Note not found' }, { status: 404 })
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
