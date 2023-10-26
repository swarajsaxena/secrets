'use client'

import Loading from '@/components/Loading'
import Note from '@/components/day/Note'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { getNotesForOneDay } from '@/tanstack/queries'
import Error from '@/components/Error'

const page = ({ params }) => {
  const {
    isPending,
    error,
    data: notess,
    isFetching,
    isLoading,
  } = getNotesForOneDay(params.day)

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
          {!(isFetching || isPending || isLoading) ? (
            error ? (
              <Error message={error.message} />
            ) : notess && notess.length !== 0 ? (
              notess.map((note, index) => (
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
