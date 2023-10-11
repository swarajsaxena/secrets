import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import Link from 'next/link'

export interface CalendarProps {
  monthStarting: Date
  notesDates?: Date[]
}

const Calendar = ({ monthStarting, notesDates = [] }: CalendarProps) => {
  const x = format(monthStarting, 'MMM-yyyy')

  monthStarting = parse(x, 'MMM-yyyy', new Date())

  const [currentMonth, setCurrentMonth] = useState(
    format(monthStarting, 'MMM-yyyy')
  )

  const firstDayCurrentMonth = currentMonth

  const startOfCurrentMonthWeek = startOfWeek(
    startOfMonth(parse(currentMonth, 'MMM-yyyy', monthStarting))
  )
  const endOfCurrentMonthWeek = endOfWeek(
    endOfMonth(parse(currentMonth, 'MMM-yyyy', monthStarting))
  )

  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonthWeek,
    end: endOfCurrentMonthWeek,
  })

  return (
    <div className='capitalize flex flex-col w-max'>
      <div className='grid grid-cols-7 place-items-center w-max'>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(
          (day: string, index: number) => (
            <div
              key={index}
              className='grid w-10 m-1 text-center place-items-center aspect-square opacity-50'
            >
              {day}
            </div>
          )
        )}
        {daysInMonth.map((day, index) => {
          const dayIsToday = isToday(day)
          const dayIsOfSameMonth = !isSameMonth(
            day,
            new Date(firstDayCurrentMonth)
          )
          const isafter = isAfter(day, new Date())

          const noteExist =
            notesDates.find((date) => {
              date.setHours(0o0)
              date.setMinutes(0o0)

              return format(date, 'dd mm yy') === format(day, 'dd mm yy')
            }) === undefined
              ? false
              : true

          return (
            <Link
              href={`/day/${format(day, 'yyyy-MM-dd')}`}
              className={twMerge(
                'grid w-10 m-1 text-center place-items-center aspect-square rounded-md hover:bg-emerald-100 hover:text-emerald-700  transition-all text-base opacity-80 relative font-medium',
                dayIsOfSameMonth && 'opacity-0',
                noteExist &&
                  'bg-emerald-600 text-white hover:bg-emerald-800 hover:text-white font-normal cursor-pointer',
                isafter && 'opacity-25 pointer-events-none cursor-not-allowed'
              )}
              key={index}
            >
              {format(day, 'd')}
              {dayIsToday && (
                <div className='w-[6px] h-[6px] rounded-full bg-emerald-500 absolute -bottom-1 left-1/2 -translate-x-1/2' />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
