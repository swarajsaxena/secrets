import connectDB from '@/db'
import { Note, User } from '@../../../src/model/model'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'
import { v4 as uid } from 'uuid'
import { format } from 'date-fns'

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const session = await getToken({
      req: req,
      secret: process.env.NEXTAUTH_SECRET,
    })

    const { title, content, monthYear, date } = await req.json()
    const user = await User.findOne({ emailId: session.email }).exec()
    const newNote = new Note({ title, content })
    await newNote.save()

    if (!user) {
      console.log('user exists')

      // Create a new user instance
      const newUser = new User({
        days: [{ date, monthYear, notes: [newNote.id] }],
        emailId: session.email,
        username: session.name,
      })

      // Save the new user to the database
      await newUser.save()

      return Response.json({
        message: 'user created.',
        noteId: newNote.id,
      })
    } else {
      console.log("user doesn't exists")

      const days = user.days

      days.forEach((day) => {
        if (
          Number(day.monthYear[0]) === monthYear[0] &&
          Number(day.monthYear[1]) === monthYear[1]
        ) {
          day.notes.push(newNote.id)
          // console.log(days)
        }
      })

      const updatedUser = User.findByIdAndUpdate(user._id, { days }).exec()

      return Response.json({
        message: 'user exists.',
        noteId: newNote.id,
        updatedUser,
      })
    }
  } catch (error) {
    return Response.json({ error: error.message })
  }
}
