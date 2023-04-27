import Link from 'next/link'
import React from 'react'

const movie = () => {
  return (
    <>
        <h1>Movie page</h1>
        <Link href="/movie/abcd">go to</Link>
    </>
  )
}

export default movie