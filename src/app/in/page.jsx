'use client'

import Loading from '@/components/Loading'
import { format } from 'date-fns'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getNotesForOneDay } from '@/tanstack/queries'
import Note from '@/components/day/Note'

const page = () => {
  const {
    isPending,
    error,
    data: notes,
    isFetching,
    isLoading,
  } = getNotesForOneDay(format(new Date(), 'yyy-MM-dd'))

  // return <>hello</>

  return (
    <>
      <div className='flex flex-col items-start w-full h-full'>
        <div className='relative flex items-center w-full justify-center p-5 px-4 border-b border-emerald-950/20'>
          <div className='text-xl font-bold mt-4 absolute left-4 top-1/2 -translate-y-full'>
            Entries
          </div>
          Today • {format(new Date(new Date()), 'EEEE, MMMM dd, yyyy')}
          <Link
            href={'/in/new'}
            className='absolute cursor-pointer group right-4 top-1/2 -translate-y-1/2 bg-emerald-50 hover:bg-emerald-100 p-2 text-emerald-700 text-xl rounded-md transition-all'
          >
            <FiPlus />
          </Link>
        </div>
        <div className='flex flex-col items-start w-full justify-start p-4 max-h-full overflow-y-auto no-scroll pb-10'>
          {!(isFetching || isPending || isLoading) ? (
            error ? (
              <div className='w-full p-4 bg-red-100 text-red-800 font-medium'>
                {error.message}
              </div>
            ) : notes && notes.length !== 0 ? (
              notes.map((note, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.2,
                  }}
                  className='w-full'
                  key={index}
                >
                  <Note
                    note={note}
                    key={index}
                  />
                </motion.div>
              ))
            ) : (
              <Link
                href={'/in/new'}
                className='px-8 py-8 text-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 flex gap-2 items-center w-full justify-center rounded-md'
              >
                Create An Entry
                <FiPlus />
              </Link>
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
