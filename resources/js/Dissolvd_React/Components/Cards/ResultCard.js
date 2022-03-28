import React from "react";
import { useNavigate } from "react-router-dom";
import fakeposter from "../../img/fakeposter.png";
import "./Cards.css";

export const ResultCard = ({ movie }) => {

  const navigate = useNavigate()

  return (
    <div className="result-card"
      key={movie.id}
      onClick={

        () => {navigate("/movie/"+ movie.id )}          
      }>

      {movie.poster_path ? (
        <div>

        {/* DEFINE THE POSTER AS A LINK TO THE APPROPRIATE FILM PAGE*/}
          <img
            className="real-poster"
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>
      ) : (
        <div className="filler-poster">
          <img className="filler-poster" src={fakeposter} alt="No Poster" />
        </div>
      )}
    </div>
  );
};
