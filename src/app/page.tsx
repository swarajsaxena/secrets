import CalendarView from '@/components/CalendarView'
import { format } from 'date-fns'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-start w-full'>
      <div className='flex items-center w-full justify-center p-5 border-b border-emerald-950/20'>
        Today • {format(new Date(), 'EEEE, MMMM dd, yyyy')}
      </div>
    </main>
  )
}
