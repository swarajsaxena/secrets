'use client'

import { NoteI, days } from '@/date/days'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import { OutputData } from '@editorjs/editorjs'

let CustomEditor = dynamic(() => import('../../../components/CustomEditor'), {
  ssr: false,
})

const page = ({ params }) => {
  const [contentArray, setContentArray] = useState<string[]>([''])
  let [note, setNote] = useState<NoteI | null>(null)
  const [data, setData] = useState<OutputData>({
    time: 1697028946072,
    blocks: [
      {
        id: 'I7IpVSEQ8I',
        type: 'paragraph',
        data: {
          text: 'unpinwpibnwrb',
        },
      },
      {
        id: 'y1qoxjBGeu',
        type: 'paragraph',
        data: {
          text: 'wprbinwprbinwrpbinprnbldjfbdljbdljbn',
        },
      },
      {
        id: 'ordqC-K23v',
        type: 'header',
        data: {
          text: 'lsfjvnslfjvnljvnwlrjv',
          level: 2,
        },
      },
      {
        id: 'WscsK4y3bu',
        type: 'list',
        data: {
          style: 'ordered',
          items: ['lwkrvmwrv', 'wlrvwrlvm'],
        },
      },
      {
        id: 'oIUTcMwQAo',
        type: 'paragraph',
        data: {
          text: '<a href="http://github.com">link</a>',
        },
      },
      {
        id: 'uPENioA5Xj',
        type: 'header',
        data: {
          text: 'this is a heading wow',
          level: 2,
        },
      },
      {
        id: '6D90FznbG1',
        type: 'linkTool',
        data: {
          link: 'https://github.com/',
          meta: {},
        },
      },
      {
        id: 'LrpAcQWkQI',
        type: 'quote',
        data: {
          text: 'wruoowrugnwr',
          caption: 'wiugwirugwiurg',
          alignment: 'left',
        },
      },
      {
        id: 'f-H7uDvLP_',
        type: 'checklist',
        data: {
          items: [
            {
              text: 'worunworgnuwrg',
              checked: false,
            },
            {
              text: 'owrgnworug',
              checked: true,
            },
            {
              text: 'lkvnwv',
              checked: false,
            },
          ],
        },
      },
    ],
    version: '2.28.0',
  })

  useEffect(() => {
    days.forEach((day) => {
      day.notes.forEach((note) => {
        if (note.id === params.entry_id) {
          setNote(note)
          setContentArray([note.bodyText])
          return
        }
      })
    })
  }, [params.entry_id])

  useEffect(() => {
    console.log('data', data)
  }, [data])

  return (
    <div className='flex flex-col items-start w-full'>
      <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
        {format(new Date(), 'EEEE, MMMM dd, yyyy')}
        <div className='absolute cursor-pointer group left-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'>
          <FiPlus className='rotate-45 ' />
        </div>
        <div className='absolute cursor-pointer group right-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'>
          <FiMoreHorizontal className='' />
        </div>
      </div>

      {note ? (
        <div className='flex flex-col overflow-y-auto w-full h-full'>
          <div className='flex justify-center w-full border-b border-emerald-950/20'>
            <input
              type='text'
              className='p-4 w-full max-w-[calc(650px+2rem)] text-2xl font-bold placeholder:opacity-30 focus:outline-none'
              placeholder='Title'
              value={note.title}
            />
          </div>
          <CustomEditor
            data={data}
            onChange={setData}
            holder='editorjs-container'
          />
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  )
}

export default page
