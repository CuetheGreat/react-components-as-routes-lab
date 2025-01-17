import React from 'react'
import { directors } from '../data'

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director.name}>
        Name: {director.name}
        <ul>
        {director.movies.map(m => <li key={m}>{m}</li>)}
        </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors
