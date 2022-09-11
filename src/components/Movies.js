import React from "react";
import { movies } from "../data";

function Movies() {

  const displayMovies = movies.map((movie, index) => {


    return (
      <div key={index}>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>Genres:
        {movie.genres.map((genre, index) => 
          {return (
            <div key={index}>
              <li>{genre}</li>
            </div>
          )
        })}
        </ul>
      </div>
    )
  })


  return (
    <div>
    <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;
