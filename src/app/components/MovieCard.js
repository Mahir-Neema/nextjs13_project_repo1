import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import '../styles/MovieCard.css'

const MovieCard = (currelem) => {
    const {id,type,title,synopsis} = currelem.jawSummary;
  return (
    <>
        <div className='card'>
            <div className='card_image'>
                <Image src={currelem.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
            </div>
            <div className='card_data'>
                <h2>{title}</h2>
                <p>{synopsis}</p>

                <Link href={`/movie/${id}`}>
                    <button>
                        Know More
                    </button>
                </Link>
            </div>
        </div>
        <br/>
    </>
  )
}

export default MovieCard