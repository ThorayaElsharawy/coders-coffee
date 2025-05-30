import React from 'react'

export default function Container({children}) {
  return (
    <div className='mx-auto max-w-screen-xl px-6 md:px-10'>{children}</div>
  )
}
