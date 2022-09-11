import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map((actor, index) => {
    return (
      <div key={index}>
        <p>{actor.name}</p>
        <ul>Movies:
          {actor.movies.map((movie, index) => {
            return (
              <div key={index}>
                <li>{movie}</li>
              </div>
            )
          })}
        </ul>
      </div>
    )
  })

  return( 
  <div>
    <h1>Actors Page</h1>
    {displayActors}
  </div>
  )
}

export default Actors;
