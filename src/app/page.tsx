'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      hello
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export default page
