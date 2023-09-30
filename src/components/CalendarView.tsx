'use client'

import { calculateMonthsBetween, days, groupedByMonth } from '@/date/days'
import { addMonths, format, getMonth, getYear } from 'date-fns'
import React, { useEffect, useMemo, useState } from 'react'
import Calendar from './Calendar'
import { FiCalendar, FiList } from 'react-icons/fi'

const CalendarView = () => {
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
    doc.scrollTop = doc.scrollHeight

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
    <aside className='flex flex-col gap-2 border-r border-sky-950/20 w-max '>
      <div className='border-b flex justify-between border-sky-950/20 p-4 font-bold text-xl'>
        Secrets
        <div className='flex rounded-md overflow-hidden border text-sm border-sky-950/30'>
          <div className='p-2 bg-sky-500 text-white'>
            <FiCalendar />
          </div>

          <div className='p-2'>
            <FiList />
          </div>
        </div>
      </div>

      <div
        id='calendars'
        className='flex flex-col overflow-y-scroll no-scroll p-2'
      >
        {monthsBetween.map(
          (
            month: {
              year: number
              month: number
              firstDay: Date
            },
            index: number
          ) => {
            return (
              <div
                key={index}
                className='flex flex-col gap-2 my-5'
              >
                <div className='font-bold text-slate-950/70 px-3'>
                  {format(month.firstDay, 'MMMM YYY')}
                </div>
                <Calendar
                  monthStarting={month.firstDay}
                  notesDates={groupedByMonth[
                    `${month.month},${month.year}`
                  ]?.map((item) => item.date)}
                />
              </div>
            )
          }
        )}
      </div>
    </aside>
  )
}

export default CalendarView
