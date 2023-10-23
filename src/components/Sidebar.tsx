'use client'

import { DayI, calculateMonthsBetween, days, groupedByMonth } from '@/date/days'
import { addMonths, format, getMonth, getYear } from 'date-fns'
import React, { useEffect, useMemo, useState } from 'react'
import Calendar from './Calendar'
import { FiCalendar, FiChevronRight, FiList, FiMenu } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import ListView from './ListView'
import CalendarView from './CalendarView'
import SidebarDropdown from './SidebarDropdown'
import axios from 'axios'
import Loading from './Loading'

const Sidebar = () => {
  let [view, setView] = useState(0)
  let [days, setDays] = useState<DayI[]>()
  const firstMonth = getMonth(!days ? new Date() : new Date(days[0].date))
  const lastMonthMyUse = getMonth(
    !days ? new Date() : new Date(days[days.length - 1].date)
  )
  const [monthsBetween, setMonthsBetween] = useState(
    calculateMonthsBetween(
      !days ? new Date() : new Date(days[0].date),
      !days ? new Date() : new Date(days[days.length - 1].date)
    )
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

  useEffect(() => {
    const fetchDays = async () => {
      await axios.get(`/api/getDays`).then((res) => {
        setDays(res.data.days)
      })
    }
    fetchDays()
  }, [])

  return (
    <aside className='flex flex-col border-r border-emerald-950/20 max-w-[353px] w-full shadow-lg'>
      <div className='border-b flex justify-between border-emerald-950/20 p-4 font-bold text-xl'>
        <SidebarDropdown />
        <Link href={'/in'}>Secrets</Link>
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
      {days ? (
        view == 0 ? (
          <CalendarView
            monthsBetween={monthsBetween}
            days={days}
          />
        ) : (
          <ListView />
        )
      ) : (
        <Loading />
      )}
    </aside>
  )
}

export default Sidebar
