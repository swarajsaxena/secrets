'use client'

import ProtectedRoute from '@/components/ProtectedRoute'
import { NoteI, days } from '@/date/days'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

const page = ({ params }) => {
  let [notes, setNotes] = useState<NoteI[]>([])

  useEffect(() => {
    const ar = []
    days.forEach((day) => {
      if (format(day.date, 'yyyy-MM-dd') === params.day) {
        setNotes(day.notes)
      }
    })
  }, [])

  return (
    <ProtectedRoute>
      <div className='flex flex-col items-start w-full'>
        <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
          {format(new Date(params.day), 'EEEE, MMMM dd, yyyy')}
          <Link
            href={'/in/new'}
            className='absolute cursor-pointer group right-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'
          >
            <FiPlus className='group-hover:scale-110 transition-all' />
          </Link>
        </div>
        <div className='flex flex-col items-start w-full justify-center p-4'>
          <div className='text-xl font-bold mt-4'>Entries</div>
          <div className='border-b border-emerald-950/20 w-full my-2 mb-4' />
          {notes.length !== 0 ? (
            notes.map((note, index) => (
              <React.Fragment key={index}>
                <Link
                  href={'/in/entry/' + note.id}
                  className='w-full hover:bg-emerald-600 cursor-pointer group border border-emerald-950/20 p-4 rounded-md hover:border-transparent transition-all flex items-start gap-4 mb-4'
                >
                  <div className='flex-[0.75] group-hover:text-emerald-50 h-full flex flex-col justify-between'>
                    <div className='font-medium capitalize text-xl'>
                      {note.title}
                    </div>
                    <div className='line-clamp-2 text-sm mt-auto'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit cupiditate consequuntur nisi id adipisci
                      laudantium, eius sed? Praesentium, labore eos.
                    </div>
                  </div>
                  <div className='min-w-max ml-auto flex flex-col items-center p-2 bg-emerald-100 text-emerald-600 rounded-md'>
                    <div className='font-bold uppercase'>
                      {format(note.dateEdited, 'MMM dd')}
                    </div>
                    <div className='font-bold uppercase'>
                      {format(note.dateEdited, 'yyyy')}
                    </div>
                    <div>{format(note.dateEdited, 'EEEE')}</div>
                  </div>
                </Link>
                {/* {index < notes.length - 1 && (
                  <div className='border-b border-emerald-950/20 w-full mx-4 my-2' />
                )} */}
              </React.Fragment>
            ))
          ) : (
            <div className='w-full py-10 text-center'>No Entries Found</div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default page
