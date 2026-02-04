import React, { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const genres = ['Sci-Fi', 'Thriller', 'Drama', 'Action', 'Horror', 'Comedy']
  const [currentGenre, setCurrentGenre] = useState(0)
  const [currentBanner, setCurrentBanner] = useState(0)

  const banners = [
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&q=80',
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80'
  ]

  useEffect(() => {
    const genreInterval = setInterval(() => {
      setCurrentGenre((prev) => (prev + 1) % genres.length)
    }, 2000)

    return () => clearInterval(genreInterval)
  }, [])

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(bannerInterval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-backgrounds">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentBanner ? 'active' : ''}`}
            style={{ backgroundImage: `url(${banner})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="season-badge fade-in">NOW SHOWING • 2024 SEASON</div>
          
          <h1 className="hero-title">
            <span className="title-line slide-in-left">Wanna watch</span>
            <span className="title-genre">
              {genres.map((genre, index) => (
                <span
                  key={genre}
                  className={`genre-word ${index === currentGenre ? 'active' : ''}`}
                >
                  {genre}?
                </span>
              ))}
            </span>
          </h1>
          
          <p className="hero-subtitle slide-in-right">
            Discover the art of storytelling through the lens of
            <br />
            <span className="highlight">CINEMA CLUB IITR</span>
          </p>
          
          <div className="hero-buttons scale-in">
            <a href="#gallery" className="btn btn-primary">ENTER THE GALLERY</a>
            <a href="#schedule" className="btn btn-secondary">VIEW SCHEDULE →</a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
