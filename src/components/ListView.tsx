import { groupedByMonth } from '@/date/days'
import { format } from 'date-fns'
import Link from 'next/link'

function ListView() {
  return (
    <div
      id='rows'
      className='flex flex-col gap-4 overflow-y-scroll no-scroll pb-12'
    >
      {Object.keys(groupedByMonth).map((key, index) => {
        const notesForTheMonth = groupedByMonth[key]
        const [month, year] = key.split(',') // console.log(notesForTheMonth)

        return (
          <div className='flex flex-col gap-2'>
            <div className='pl-6 my-2 py-2 bg-emerald-50 text-emerald-700 font-semibold text-xl'>
              {format(new Date(`${year}-${parseInt(month) + 1}-01`), 'MMM YYY')}
            </div>
            {notesForTheMonth.map((noteForTheDay, index) => (
              <>
                {noteForTheDay.notes.map((note, index) => (
                  <Link
                    href={'/in/entry/' + note.id}
                    className='hover:bg-emerald-600 cursor-pointer border hover:text-emerald-50 p-4 mx-2 rounded-md hover:border-transparent transition-all border-emerald-950/20 text-gray-700'
                  >
                    <div className='font-bold capitalize text-lg'>
                      {note.title}
                    </div>
                    <div className='line-clamp-2 text-sm'>
                      {note.bodyContext ?? (
                        <>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quaerat a consequuntur neque earum, eos
                          architecto quae ex impedit et in.
                        </>
                      )}
                    </div>
                    <div className='text-sm mt-4 font-medium'>
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
