import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';

const movie = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2a5a0d70bfmshf4782258377bb16p13cd12jsneecc7493b81b',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);
  const data = await res.json();
  const movie_main_data = data.titles;

  return (
    <>
        <h1>Movie page</h1>
        <Link href="/movie/abcd">go to</Link>
        {movie_main_data.map((currelem)=>{
            return <MovieCard  key={currelem.id} {...currelem} />
        })}
    </>
  )
}

export default movie