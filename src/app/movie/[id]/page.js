import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const page = async({params}) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2a5a0d70bfmshf4782258377bb16p13cd12jsneecc7493b81b',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);
  const data = await res.json();
  const movie_main_data = data[0].details;

  return (
    <>
        <h1>Dynamic root: {id}</h1>
        <div className='container'>
          <h2 className='movie_title'>Netflix \ <span>{movie_main_data.type}</span></h2>
          <div className='card_section'>
            <div>
              <Image src={movie_main_data.backgroundImage.url} alt={movie_main_data.title} width={600} height={600}/>
            </div>
            <div>
              <h1>{movie_main_data.title}</h1>
              <p>{movie_main_data.synopsis}</p>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default page