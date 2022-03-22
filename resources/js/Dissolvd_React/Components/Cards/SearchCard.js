import React from "react";
import fakeposter from "../../img/fakeposter.png";

const SearchCard = ({ movie }) => {
  return (
    <>
      <div className="search-card" key={movie.id}>
        {movie.poster_path ? (
          <div>
          {/* DEFINE THE POSTER AS A LINK TO THE APPROPRIATE FILM PAGE*/}
            <img
              className="real-poster-search"
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          </div>
        ) : (
          <div>
            <img
              className="filler-poster-search"
              src={fakeposter}
              alt="No Poster Found"
            />
          </div>
        )}
        <div className="search-card-info">
          <div className="search-card-heading">
            <h2>{movie.title}</h2>
            {movie.release_date ? (
              <p>{movie.release_date.substring(0, 4)}</p>
            ) : (
              <p>
                <i>Unreleased</i>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
