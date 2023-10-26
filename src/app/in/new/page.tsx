'use client'

import { NoteI, days } from '@/date/days'
import { format, getDate, getMonth, getYear } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { FiCheck, FiPlus } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { EditorContent, useEditor } from '@tiptap/react'
import { extensions } from '@/components/Editor/extensions'
import { MenuBar } from '@/components/Editor/MenuBar'
import { FloatingMenu } from '@/components/Editor/FloatingMenu'
import Loading from '@/components/Loading'
import LoadingScreen from '@/components/LoadingScreen'
import { postNote } from '@/tanstack/queries'

const page = ({ params }) => {
  const router = useRouter()
  let [title, setTitle] = useState('')
  let [note, setNote] = useState<NoteI | null>(null)
  let [richText, setRichText] = useState('')
  let [loading, setLoading] = useState(false)
  const { mutate: postNoteMutate, isPending } = postNote()

  let editor = useEditor({
    extensions: extensions,
    content: richText,
    editorProps: {
      attributes: {
        class:
          'editor w-full max-w-[calc(650px+1rem)] prose prose-emerald outline-none',
      },
    },
    onUpdate({ editor }) {
      setRichText(editor.getHTML())
    },
  })

  const createNewNote = async () => {
    let year = getYear(new Date())
    let month = getMonth(new Date()) + 1
    let date = getDate(new Date())

    setLoading(true)
    postNoteMutate({ richText, title, date, month, router, year })
  }

  useEffect(() => {
    days.forEach((day) => {
      day.notes.forEach((note) => {
        if (note._id === params.entry_id) {
          setNote(note)
          return
        }
      })
    })
  }, [params.entry_id])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  function getWords(data) {
    let wordArray = []

    // Iterate through the JSON data
    data.forEach((item) => {
      if (item.type === 'paragraph' && item.content) {
        item.content.forEach((contentItem) => {
          if (contentItem.type === 'text' && contentItem.text) {
            // Split the text into words using spaces as delimiters
            const words = contentItem.text.split(' ')
            wordArray.push([...words])
            // wordCount += words.length
          }
        })
      }
    })

    return wordArray.flat()
  }

  // useEffect(() => {

  // }, [])

  return (
    <div className='flex flex-col items-start w-full overflow-hidden'>
      <LoadingScreen open={isPending} />
      <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
        {format(new Date(), 'EEEE, MMMM dd, yyyy')}
        <div
          onClick={() => router.back()}
          className='absolute cursor-pointer group left-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'
        >
          <FiPlus className='rotate-45 ' />
        </div>
        <div className='absolute right-4 top-1/2 -translate-y-1/2 flex gap-2'>
          <div
            onClick={createNewNote}
            className='bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all cursor-pointer'
          >
            <FiCheck />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full h-full items-center'>
        {editor ? (
          <>
            <MenuBar editor={editor} />
            <div className='flex flex-col w-full items-center overflow-y-auto no-scroll max-h-full px-4'>
              <input
                type='text'
                className='pt-4 pb-2 w-full max-w-[calc(650px+1rem)] text-3xl font-bold placeholder:opacity-30 focus:outline-none'
                placeholder='Title'
                value={title}
                onChange={handleTitleChange}
              />
              <FloatingMenu editor={editor} />
              <EditorContent
                editor={editor}
                className='w-full max-w-[calc(650px+1rem)]'
              />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default page
