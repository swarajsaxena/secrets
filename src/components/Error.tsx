import React from 'react'

const Error = ({ message }: { message?: string }) => {
  return <div>{message || 'Error'}</div>
}

export default Error
