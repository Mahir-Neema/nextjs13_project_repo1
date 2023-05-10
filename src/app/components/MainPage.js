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
            <img src="https://cdn.pixabay.com/photo/2022/06/21/06/13/the-wasp-7275216_960_720.jpg" alt="Movie 1" />
            <h3 className="featured__movie-title">Ant-Man and the Wasp</h3>
          </div>
          <div className="featured__movie">
            <img src="https://w0.peakpx.com/wallpaper/537/108/HD-wallpaper-spider-man-ultra-games-other-games-superhero-marvel-spiderman-videogame-milesmorales.jpg" alt="Movie 2" />
            <h3 className="featured__movie-title">Spiderman</h3>
          </div>
          <div className="featured__movie">
            <img src="https://w0.peakpx.com/wallpaper/761/551/HD-wallpaper-harry-potter-harry-potter-and-the-philosopher-s-stone.jpg" alt="Movie 3" />
            <h3 className="featured__movie-title">Harry Potter and the philosopher stone</h3>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainPage