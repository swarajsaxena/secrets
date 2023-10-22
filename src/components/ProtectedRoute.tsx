'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const ProtectedRoute = ({ children }) => {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
    router.push('/')
  }
  return <>{children}</>
}

export default ProtectedRoute
