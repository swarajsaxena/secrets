import { DayI, NoteI, groupedByMonth } from '@/date/days'
import axios from 'axios'
import { format } from 'date-fns'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Note from './ListView/Note'

function ListView({ days }: { days: DayI[] }) {
  let [groupMonth, setGroupMonth] = useState(groupedByMonth(days))

  return (
    <div
      id='rows'
      className='flex flex-col gap-4 overflow-y-scroll no-scroll pb-12'
    >
      {Object.keys(groupMonth).map((key, index) => {
        const notesForTheMonth = groupMonth[key]
        const [month, year] = key.split(',')

        return (
          <div className='flex flex-col gap-2'>
            <div className='pl-6 my-2 py-2 bg-emerald-50 text-emerald-700 font-semibold text-xl'>
              {format(new Date(`${year}-${parseInt(month) + 1}-01`), 'MMM YYY')}
            </div>
            <Note notesForTheMonth={notesForTheMonth} />
          </div>
        )
      })}
    </div>
  )
}

export default ListView
