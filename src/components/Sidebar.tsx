'use client'

import { calculateMonthsBetween, days, groupedByMonth } from '@/date/days'
import { addMonths, format, getMonth, getYear } from 'date-fns'
import React, { useEffect, useMemo, useState } from 'react'
import Calendar from './Calendar'
import { FiCalendar, FiList } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import ListView from './ListView'
import CalendarView from './CalendarView'

const Sidebar = () => {
  let [view, setView] = useState(0)
  const firstMonth = getMonth(days[0].date)
  const lastMonthMyUse = getMonth(days[days.length - 1].date)
  const [monthsBetween, setMonthsBetween] = useState(
    calculateMonthsBetween(days[0].date, days[days.length - 1].date)
  )

  // Get the current date
  const currentDate = new Date()

  // Check if the last month is the current month
  const lastMonth = monthsBetween[monthsBetween.length - 1]
  let isLastMonthCurrentMonth =
    lastMonth.year === getYear(currentDate) &&
    lastMonth.month === getMonth(currentDate)

  const months = useMemo(() => {
    const m = []
    const currentDateX = new Date()

    for (let index = firstMonth; index <= lastMonthMyUse; index++) {
      const day = new Date(currentDateX)
      day.setMonth(index)
      m.push(day)
    }

    return m
  }, [firstMonth, lastMonthMyUse])

  useEffect(() => {
    const doc = document.getElementById('calendars')
    const rows = document.getElementById('rows')
    if (doc) doc.scrollTop = doc.scrollHeight
    if (rows) rows.scrollTop = rows.scrollHeight

    if (!isLastMonthCurrentMonth) {
      let updatedMonthsBetween = [...monthsBetween] // Create a new array

      while (!isLastMonthCurrentMonth) {
        const previousMonth =
          updatedMonthsBetween[updatedMonthsBetween.length - 1]
        const nextMonth = addMonths(new Date(previousMonth.firstDay), 1)

        updatedMonthsBetween = [
          ...updatedMonthsBetween, // Add the previous months
          {
            year: getYear(nextMonth),
            month: getMonth(nextMonth),
            firstDay: new Date(
              format(nextMonth, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
            ),
          },
        ]

        isLastMonthCurrentMonth =
          nextMonth.getFullYear() === getYear(currentDate) &&
          nextMonth.getMonth() === getMonth(currentDate)

        setMonthsBetween(updatedMonthsBetween)
      }
    }
  }, [isLastMonthCurrentMonth, monthsBetween, currentDate])

  return (
    <aside className='flex flex-col border-r border-emerald-950/20 max-w-[353px] w-full'>
      <div className='border-b flex justify-between border-emerald-950/20 p-4 font-bold text-xl'>
        <Link href={'/'}>Secrets</Link>
        <div className='flex rounded-md overflow-hidden border text-sm border-emerald-950/30'>
          <div
            className={twMerge(
              'p-2 cursor-pointer',
              view == 0 && 'bg-emerald-500 text-white'
            )}
            onClick={() => setView(0)}
          >
            <FiCalendar />
          </div>

          <div
            className={twMerge(
              'p-2 cursor-pointer',
              view == 1 && 'bg-emerald-500 text-white'
            )}
            onClick={() => setView(1)}
          >
            <FiList />
          </div>
        </div>
      </div>
      {view == 0 ? (
        <CalendarView monthsBetween={monthsBetween} />
      ) : (
        <ListView />
      )}
    </aside>
  )
}

export default Sidebar