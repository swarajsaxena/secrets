'use client'

import { NoteI, days } from '@/date/days'
import { format } from 'date-fns'
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

const page = () => {
  let [notes, setNotes] = useState<NoteI[]>([])
  const { data: session } = useSession()

  useEffect(() => {
    days.forEach((day) => {
      if (
        format(new Date(day.date), 'yyyy-MM-dd') ===
        format(new Date(), 'yyyy-MM-dd')
      ) {
        setNotes(day.notes)
      }
    })
  }, [])

  return (
    <>
      <div className='flex flex-col items-start w-full h-full'>
        <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
          Today • {format(new Date(new Date()), 'EEEE, MMMM dd, yyyy')}
          <div className='absolute cursor-pointer group right-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'>
            <FiPlus />
          </div>
        </div>
        <div className='flex flex-col items-start w-full justify-center p-4 h-full'>
          <div className='text-xl font-bold mx-4 mt-4'>Entries</div>
          <div className='border-b border-emerald-950/20 w-full mx-4 my-2' />
          {notes.length !== 0 ? (
            notes.map((note, index) => (
              <React.Fragment key={index}>
                <div className='w-full hover:bg-emerald-600 cursor-pointer border-0 hover:text-emerald-50 border-emerald-950/20 p-4 rounded-md hover:border-transparent transition-all'>
                  <div className='font-medium capitalize text-lg'>
                    {note.title}
                  </div>
                  <div className='line-clamp-1 text-sm'>{note.content}</div>
                  <div className='text-sm mt-4'>
                    {format(new Date(note.createdAt), 'EEE, MMM dd, yyyy')}
                  </div>
                </div>
                <div className='border-b border-emerald-950/20 w-full mx-4 my-2' />
              </React.Fragment>
            ))
          ) : (
            <div className='w-full flex-1 h-full grid place-items-center'>
              No Entries
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default page
