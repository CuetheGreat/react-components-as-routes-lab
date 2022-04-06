import React from 'react'
import { movies } from '../data'

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title}>
          Title:{movie.title}
          <br />
          Time:{movie.time}
          <br />
          <ul>
            {movie.genres.map(g => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies
