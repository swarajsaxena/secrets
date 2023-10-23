import connectDB from '@/db'
import { Note, User } from '@../../../src/model/model'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'
import { DayI } from '@/date/days'
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
      const days: DayI[] = user.days

      const day = days.find((day) => {
        return new Date(day.date).getDate() === new Date(date).getDate()
      })

      if (day) {
        day.notes.push(newNote.id)
      } else {
        days.push({ date, monthYear, notes: [newNote._id] })
      }

      User.findByIdAndUpdate(user._id, { days }).exec()
      await newNote.save()

      return Response.json({
        message: 'user exists.',
        noteId: newNote.id,
        days,
      })
    }
  } catch (error) {
    return Response.json({ error: error.message })
  }
}
