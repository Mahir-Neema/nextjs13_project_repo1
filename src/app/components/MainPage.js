import React from 'react'
import '../styles/mainpage.css'
import Link from 'next/link'


const MainPage = () => {
  return (
    <main className='main_section'>
      <div>
        <title>Movie Website</title>
      </div>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Welcome to Movie Website</h1>
          <p className="hero__subtitle">Discover your next favorite movie</p>
          <Link href="/movie">
            <div className="hero__cta">View All Movies</div>
          </Link>
        </div>
      </section>
      <section className="featured">
        <h2 className="featured__title">Featured Movies</h2>
        <div className="featured__movies">
          <div className="featured__movie">
            <img src="/movie1.jpg" alt="Movie 1" />
            <h3 className="featured__movie-title">Movie 1</h3>
          </div>
          <div className="featured__movie">
            <img src="/movie2.jpg" alt="Movie 2" />
            <h3 className="featured__movie-title">Movie 2</h3>
          </div>
          <div className="featured__movie">
            <img src="/movie3.jpg" alt="Movie 3" />
            <h3 className="featured__movie-title">Movie 3</h3>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainPage