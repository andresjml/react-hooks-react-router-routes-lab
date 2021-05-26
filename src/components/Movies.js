import React from "react";
import { movies } from "../data";

function Movies() {  
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(
        element=>(
          <div key={element.title}>
            <h2>{element.title}</h2>
            <p>Time: {element.time} min.</p>
            <ul>
              {element.genres.map(e=>(
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default Movies;
