import React, { useState, useEffect } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [selectedGenre, setSelectedGenre] = useState('ALL')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])

  const movies = [
    {
      id: 1,
      title: 'Interstellar',
      year: '2014',
      genre: ['SCI-FI', 'DRAMA'],
      rating: '8.7',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80'
    },
    {
      id: 2,
      title: 'The Dark Knight',
      year: '2008',
      genre: ['ACTION', 'THRILLER'],
      rating: '9.0',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80'
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      year: '1994',
      genre: ['DRAMA', 'COMEDY'],
      rating: '8.9',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80'
    },
    {
      id: 4,
      title: 'Inception',
      year: '2010',
      genre: ['SCI-FI', 'ACTION'],
      rating: '8.8',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80'
    },
    {
      id: 5,
      title: 'The Grand Budapest Hotel',
      year: '2014',
      genre: ['COMEDY', 'DRAMA'],
      rating: '8.1',
      description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80'
    },
    {
      id: 6,
      title: 'Spirited Away',
      year: '2001',
      genre: ['ANIMATION', 'DRAMA'],
      rating: '8.6',
      description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80'
    },
    {
      id: 7,
      title: 'Mad Max: Fury Road',
      year: '2015',
      genre: ['ACTION', 'SCI-FI'],
      rating: '8.1',
      description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80'
    },
    {
      id: 8,
      title: 'Blade Runner 2049',
      year: '2017',
      genre: ['SCI-FI', 'THRILLER'],
      rating: '8.0',
      description: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
    }
  ]

  const genres = ['ALL', 'SCI-FI', 'ACTION', 'DRAMA', 'THRILLER', 'COMEDY', 'ANIMATION', 'HORROR']

  useEffect(() => {
    let result = movies

    if (selectedGenre !== 'ALL') {
      result = result.filter(movie => movie.genre.includes(selectedGenre))
    }

    if (searchTerm) {
      result = result.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredMovies(result)
  }, [selectedGenre, searchTerm])

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <div className="section-title-wrapper">
            <div className="section-line"></div>
            <h2 className="section-title">The Gallery</h2>
          </div>
          <p className="section-subtitle">
            A meticulously chosen selection of cinematic experiences, filtered for your specific taste.
          </p>
        </div>

        <div className="gallery-controls">
          <div className="genre-filters">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search the archive..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="movies-grid">
          {filteredMovies.map((movie, index) => (
            <div
              key={movie.id}
              className="movie-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="movie-image">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              <div className="movie-info">
                <div className="movie-header">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>{movie.rating}</span>
                  </div>
                </div>
                <div className="movie-meta">
                  <span className="movie-year">{movie.year}</span>
                  <div className="movie-genres">
                    {movie.genre.map((g) => (
                      <span key={g} className="genre-tag">{g}</span>
                    ))}
                  </div>
                </div>
                <p className="movie-description">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="no-results">
            <p>No movies found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
