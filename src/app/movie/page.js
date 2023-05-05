import Link from 'next/link'
import React from 'react'

const movie = () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2a5a0d70bfmshf4782258377bb16p13cd12jsneecc7493b81b',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  return (
    <>
        <h1>Movie page</h1>
        <Link href="/movie/abcd">go to</Link>
    </>
  )
}

export default movie