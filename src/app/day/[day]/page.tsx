'use client'

import { NoteI, days } from '@/date/days'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

const page = ({ params }) => {
  let [notes, setNotes] = useState<NoteI[]>([])

  useEffect(() => {
    const ar = []
    days.forEach((day) => {
      if (format(day.date, 'yyyy-MM-dd') === params.day) {
        setNotes(day.notes)
        console.log(day.notes)
      }
    })
  }, [])

  return (
    <div className='flex flex-col items-start w-full'>
      <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
        {format(new Date(params.day), 'EEEE, MMMM dd, yyyy')}
        <div className='absolute cursor-pointer group right-4 top-1/2 -translate-y-1/2 bg-emerald-500 p-2 text-white rounded-md'>
          <FiPlus className='group-hover:scale-110 transition-all' />
        </div>
      </div>
      <div className='flex flex-col items-start w-full justify-center p-4'>
        <div className='text-xl font-bold mx-4 mt-4'>Entries</div>
        <div className='border-b border-emerald-950/20 w-full mx-4 my-2' />
        {notes.length !== 0 ? (
          notes.map((note, index) => (
            <React.Fragment key={index}>
              <div className='w-full hover:bg-emerald-600 cursor-pointer border-0 hover:text-emerald-50 border-emerald-950/20 p-4 rounded-md hover:border-transparent transition-all'>
                <div className='font-medium capitalize text-lg'>
                  {note.title}
                </div>
                <div className='line-clamp-1 text-sm'>{note.bodyText}</div>
                <div className='text-sm mt-4'>
                  {format(note.dateEdited, 'EEE, MMM dd, yyyy')}
                </div>
              </div>
              <div className='border-b border-emerald-950/20 w-full mx-4 my-2' />
            </React.Fragment>
          ))
        ) : (
          <div className='w-full py-10 text-center'>No Entries Found</div>
        )}
      </div>
    </div>
  )
}

export default page
