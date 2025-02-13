import React from "react";
import { directors } from "../data";

function Directors() {
  return( <div>
    <h1>Directors Page</h1>
    {directors.map((directors) => {
    return(
      <div key={directors.name}>
        <h2>Name: {directors.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {directors.movies.map((movie) => <li key={movie}>{movie}</li>)}
        </ul>
        </div>
    )
     } )}
  </div>
  );
}

export default Directors;
