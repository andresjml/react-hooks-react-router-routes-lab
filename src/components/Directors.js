import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(
        element=>(
          <div key={element.name}>
            <h2>{element.name}</h2>
            <ul>
              {element.movies.map(e=>(
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default Directors;
