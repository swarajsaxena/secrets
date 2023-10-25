import { NoteI } from '@/date/days'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Note = ({ note }: { note: NoteI }) => {
  useEffect(() => {
    document.getElementById('content' + note._id).innerHTML = note.content
  }, [note])

  return (
    <Link
      href={'/in/entry/' + note._id}
      className='w-full hover:bg-emerald-600 cursor-pointer group border border-emerald-950/20 p-4 rounded-md hover:border-transparent transition-all flex items-start gap-4 mb-4'
    >
      <div className='flex-[0.65] group-hover:text-emerald-50 h-full flex flex-col justify-between'>
        <div className='font-medium capitalize text-xl'>{note.title}</div>
        <div
          className='line-clamp-3 text-sm mt-auto capitalize'
          id={'content' + note._id}
        />
      </div>
      <div className='min-w-max ml-auto flex flex-col items-center p-2 bg-emerald-100 text-emerald-600 rounded-md'>
        <div className='font-bold uppercase'>
          {format(new Date(note.createdAt), 'MMM dd')}
        </div>
        <div className='font-bold uppercase'>
          {format(new Date(note.createdAt), 'yyyy')}
        </div>
        <div>{format(new Date(note.createdAt), 'EEEE')}</div>
      </div>
    </Link>
  )
}

export default Note
