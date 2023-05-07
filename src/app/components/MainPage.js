import React from 'react'
import '../styles/mainpage.css'
import Link from 'next/link'


const MainPage = () => {
  return (
    <main className='main_section'>
        <div className='mainpage_container'>
          <Link href="/movie" className='watch_movie_btn'>watch movie</Link>
        </div>
    </main>
  )
}

export default MainPage