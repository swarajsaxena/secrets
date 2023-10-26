import connectDB from '@/db'
import { Note } from '@../../../src/model/model'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const { title, content, noteId } = await req.json()
    const note = await Note.findByIdAndUpdate(noteId, { title, content })

    return Response.json(
      {
        message: 'updated',
        note,
      },
      { status: 200 }
    )
  } catch (error) {
    return Response.json({ error: error.message })
  }
}
