'use client'

import Loading from '@/components/Loading'
import Note from '@/components/day/Note'
import { NoteI, days } from '@/date/days'
import axios from 'axios'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { motion } from 'framer-motion'

const page = ({ params }) => {
  let [notes, setNotes] = useState<NoteI[]>([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get(`/api/getDay?day=${params.day}`)
      setNotes(response.data.notes)
      setLoading(false)
    }
    fetchNotes()
  }, [])

  return (
    <>
      <div className='flex flex-col items-start w-full max-h-screen'>
        <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
          <div className='text-xl font-bold mt-4 absolute left-4 top-1/2 -translate-y-full'>
            Entries
          </div>
          {format(new Date(params.day), 'EEEE, MMMM dd, yyyy')}
          <Link
            href={'/in/new'}
            className='absolute cursor-pointer group right-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'
          >
            <FiPlus className='group-hover:scale-110 transition-all' />
          </Link>
        </div>
        <div className='flex flex-col items-start w-full justify-start p-4 max-h-full overflow-y-auto no-scroll pb-10'>
          {!loading ? (
            notes && notes.length !== 0 ? (
              notes.map((note, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.2,
                  }}
                  className='w-full'
                >
                  <Note
                    note={note}
                    key={index}
                  />
                </motion.div>
              ))
            ) : (
              <div>No Entries..</div>
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  )
}

export default page
