'use client'

import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { FiCloudOff, FiPlus, FiRefreshCw, FiUploadCloud } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import MoreOptions from '@/components/entry/MoreOptions'
import Link from 'next/link'
import { EditorContent, useEditor } from '@tiptap/react'
import Loading from '@/components/Loading'
import { extensions } from '@/components/Editor/extensions'
import { MenuBar } from '@/components/Editor/MenuBar'
import { FloatingMenu } from '@/components/Editor/FloatingMenu'
import { getNote, updateNote } from '@/tanstack/queries'

const page = ({ params }) => {
  const { mutate: updateNoteMutate, isPending, isSuccess } = updateNote()
  const { entry_id } = params
  const router = useRouter()
  let [timeoutId, setTimeoutId] = useState(null)
  let [isSyncing, setIsSyncing] = useState(false)
  let [wordCount, setWordCount] = useState<number>(0)
  let [charCount, setCharCount] = useState<number>(0)

  const { data: note, isFetching, isLoading, error } = getNote(entry_id)
  let [title, setTitle] = useState<string>()

  const callAPI = (content: string) => {
    // Clear the previous timeout (if any)
    setIsSyncing(true)
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    // Set a new timeout for 1 second
    const newTimeoutId = setTimeout(() => {
      // Call the function to send data to the API here
      // console.log('aye' + newTimeoutId)
      updateNoteMutate({
        content,
        title: title ? title : note.title,
        noteId: note._id,
      })

      setIsSyncing(false)
    }, 2000)
    setTimeoutId(newTimeoutId)
  }

  let editor = useEditor(
    {
      extensions: extensions,
      content: note?.content,
      editorProps: {
        attributes: {
          class:
            'editor w-full max-w-[calc(650px+1rem)] prose prose-emerald outline-none h-full',
        },
      },
      onUpdate({ editor }) {
        setWordCount(getWords(editor.getJSON().content).length)
        setCharCount(getWords(editor.getJSON().content).join('').length)
        callAPI(editor.getHTML())
      },
    },
    [note]
  )

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    callAPI(editor.getHTML())
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

  useEffect(() => {
    if (editor) {
      setWordCount(getWords(editor.getJSON().content).length)
      setCharCount(getWords(editor.getJSON().content).join('').length)
    }
  }, [editor])
  return (
    <>
      <div className='flex flex-col items-start w-full overflow-hidden'>
        {!(isFetching || isLoading) ? (
          error ? (
            <div>{error.message}</div>
          ) : (
            note && (
              <>
                <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
                  {format(new Date(note.createdAt), 'EEEE, MMMM dd, yyyy')}
                  <div
                    onClick={() => router.back()}
                    className='absolute cursor-pointer group left-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'
                  >
                    <FiPlus className='rotate-45 ' />
                  </div>
                  <div className='absolute right-4 top-1/2 -translate-y-1/2 flex gap-2'>
                    <div
                      title={isSyncing ? 'Syncing' : 'Synced'}
                      className='bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'
                    >
                      {isSyncing ? (
                        isSuccess ? (
                          <FiUploadCloud />
                        ) : (
                          <FiCloudOff />
                        )
                      ) : (
                        <FiRefreshCw />
                      )}
                    </div>
                    <MoreOptions
                      wordCount={wordCount}
                      charCount={charCount}
                    />
                    <Link
                      href={'/in/new'}
                      className='cursor-pointer group  bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'
                    >
                      <FiPlus className='group-hover:scale-110 transition-all' />
                    </Link>
                  </div>
                </div>

                <div className='flex flex-col w-full h-full items-center'>
                  <MenuBar editor={editor} />
                  <div className='flex flex-col w-full items-center overflow-y-auto no-scroll max-h-full px-4 min-h-[75%]'>
                    <input
                      type='text'
                      className='py-4 w-full max-w-[calc(650px+1rem)] text-3xl font-bold placeholder:opacity-30 focus:outline-none'
                      placeholder='Title'
                      value={note.title}
                      onChange={handleTitleChange}
                    />
                    <FloatingMenu editor={editor} />
                    <EditorContent
                      editor={editor}
                      className='w-full max-w-[calc(650px+1rem)] min-h-[100%]'
                    />
                  </div>
                </div>
              </>
            )
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}

export default page
