import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
  const id = params.id;
  return (
    <>
        <h1>Dynamic root: {id}</h1>
        
    </>
  )
}

export default page