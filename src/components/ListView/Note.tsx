import { DayI, NoteI } from '@/date/days'
import axios from 'axios'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { setupCache } from 'axios-cache-interceptor'
import Loading from '../Loading'

const Note = ({ notesForTheMonth }: { notesForTheMonth: DayI[] }) => {
  let [notes, setNotes] = useState<NoteI[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get(
        `/api/getNotes?noteIds=${notesForTheMonth
          .map((noteForTheDay) => noteForTheDay.notes)
          .flat()
          .join(',')}`
      )
      setNotes(response.data.notes)
      // setLoading(false)
    }
    fetchNotes()
  }, [])

  return notes.length > 0 ? (
    <>
      {notes.map((note) => (
        <Link
          href={'/in/entry/' + note._id}
          className='hover:bg-emerald-600 cursor-pointer border hover:text-emerald-50 p-4 mx-2 rounded-md hover:border-transparent transition-all border-emerald-950/20 text-gray-700'
        >
          <div className='font-bold capitalize text-lg'>{note.title}</div>
          <div className='line-clamp-2 text-sm'>
            {note.content ?? (
              <>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat a consequuntur neque earum, eos architecto quae ex
                impedit et in.
              </>
            )}
          </div>
          {/* {console.log(note)} */}
          <div className='text-sm mt-4 font-medium'>
            {format(new Date(note.createdAt), 'EEE, MMM dd, yyyy')}
          </div>
        </Link>
      ))}
    </>
  ) : (
    <Loading />
  )
}

export default Note
