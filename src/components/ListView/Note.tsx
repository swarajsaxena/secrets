import { DayI } from '@/date/days'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import Loading from '../Loading'
import { getNotesForMonth } from '@/tanstack/queries'

const Note = ({ notesForTheMonth }: { notesForTheMonth: DayI[] }) => {
  // let [notes, setNotes] = useState<NoteI[]>([])

  const {
    isFetching,
    isLoading,
    data: notes,
    error,
  } = getNotesForMonth(notesForTheMonth)

  return !(isFetching || isLoading) ? (
    <>
      {notes.length > 0 &&
        notes.map((note) => (
          <Link
            href={'/in/entry/' + note._id}
            key={note._id}
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
