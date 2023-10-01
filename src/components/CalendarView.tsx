'use client'

import { calculateMonthsBetween, days, groupedByMonth } from '@/date/days'
import { addMonths, format, getMonth, getYear } from 'date-fns'
import React, { useEffect, useMemo, useState } from 'react'
import Calendar from './Calendar'
import { FiCalendar, FiList } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

const CalendarView = () => {
  let [view, setView] = useState(1)
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
    if (doc) doc.scrollTop = doc.scrollHeight

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
        Secrets
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
      ) : (
        <div className='flex flex-col gap-4 overflow-y-scroll no-scroll'>
          {Object.keys(groupedByMonth).map((key, index) => {
            const notesForTheMonth = groupedByMonth[key]
            const [month, year] = key.split(',')
            // console.log(notesForTheMonth)
            return (
              <div className='flex flex-col'>
                <div className='pl-6 my-2 py-2 bg-emerald-50 text-emerald-700 font-semibold text-xl'>
                  {format(
                    new Date(`${year}-${parseInt(month) + 1}-01`),
                    'MMM YYY'
                  )}
                </div>
                {notesForTheMonth.map((noteForTheDay, index) => (
                  <>
                    {noteForTheDay.notes.map((note, index) => (
                      <div className='hover:bg-emerald-600 cursor-pointer border-0 hover:text-emerald-50 border-emerald-950/20 p-4 mx-2 rounded-md hover:border-transparent transition-all'>
                        <div className='font-medium capitalize text-lg'>
                          {note.title}
                        </div>
                        <div className='line-clamp-1 text-sm'>
                          {note.bodyText}
                        </div>
                        <div className='text-sm mt-4'>
                          {format(note.dateEdited, 'EEE, MMM dd, yyyy')}
                        </div>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            )
          })}
        </div>
      )}
    </aside>
  )
}

export default CalendarView
