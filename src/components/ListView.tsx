import { groupedByMonth } from '@/date/days'
import { format } from 'date-fns'
import Link from 'next/link'

function ListView() {
  return (
    <div
      id='rows'
      className='flex flex-col gap-4 overflow-y-scroll no-scroll'
    >
      {Object.keys(groupedByMonth).map((key, index) => {
        const notesForTheMonth = groupedByMonth[key]
        const [month, year] = key.split(',') // console.log(notesForTheMonth)

        return (
          <div className='flex flex-col'>
            <div className='pl-6 my-2 py-2 bg-emerald-50 text-emerald-700 font-semibold text-xl'>
              {format(new Date(`${year}-${parseInt(month) + 1}-01`), 'MMM YYY')}
            </div>
            {notesForTheMonth.map((noteForTheDay, index) => (
              <>
                {noteForTheDay.notes.map((note, index) => (
                  <Link
                    href={'/entry/' + note.id}
                    className='hover:bg-emerald-600 cursor-pointer border-0 hover:text-emerald-50 border-emerald-950/20 p-4 mx-2 rounded-md hover:border-transparent transition-all'
                  >
                    <div className='font-medium capitalize text-lg'>
                      {note.title}
                    </div>
                    <div className='line-clamp-1 text-sm'>{note.bodyText}</div>
                    <div className='text-sm mt-4'>
                      {format(note.dateEdited, 'EEE, MMM dd, yyyy')}
                    </div>
                  </Link>
                ))}
              </>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default ListView
