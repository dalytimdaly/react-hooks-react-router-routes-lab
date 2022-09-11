import React from "react";
import { directors } from "../data";

function Directors() {

  const dispalyDirectors = directors.map((director, index) => {
    return (
      <div key={index}>
      <p>{director.name}</p>
      <ul>{director.movies.map((movie, index) => {
        return (
          <div key={index}>
            <li>{movie}</li>
          </div>
        )
      })}</ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {dispalyDirectors}
  </div>
  )
}

export default Directors;
