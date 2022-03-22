import React from "react";
import { ResultCard } from "../Cards/ResultCard";

export const SearchPage = ({ errorMessage, movieResults}) => {





  return (
    <div>

      {<p>{errorMessage[0]}</p>}

      {!!movieResults.length && movieResults.map((movie) => (
          <div key={movie.id}>
            <ResultCard movie={movie} />
          </div>
        ))}

    </div>
  );
};
