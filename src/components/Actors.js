import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(
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

export default Actors;
