import { groupedByMonth } from '@/date/days'
import { format } from 'date-fns'
import Calendar from './Calendar'

function CalendarView({ monthsBetween, days }) {
  return (
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
                notesDates={groupedByMonth(days)[
                  `${month.month},${month.year}`
                ]?.map((item) => new Date(item.date))}
              />
            </div>
          )
        }
      )}
    </div>
  )
}

export default CalendarView
