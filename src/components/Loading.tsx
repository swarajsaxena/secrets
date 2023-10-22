import React from 'react'
import * as Lucide from 'react-icons/lu'

const Loading = () => {
  return (
    <div className='w-full h-full grid place-content-center'>
      <div className='p-2 bg-emerald-100 rounded-md text-emerald-800 text-xl'>
        <Lucide.LuLoader2 className='animate-spin' />
      </div>
    </div>
  )
}

export default Loading
