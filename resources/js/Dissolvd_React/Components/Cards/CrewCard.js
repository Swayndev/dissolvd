import React from "react";
import fakeposter from "../../img/fakeposter.png";
import "./Cards.css";
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";

export const CrewCard = () => {
  const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";
  const url = `https://api.themoviedb.org/3/movie/718032/credits?api_key=${apiKey}&language=en-US`;

  const [crew, setCrew] = useState([]);

  const loadCrew = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    data && setCrew(data.crew);
  };

  useEffect(() => {
    loadCrew();
  }, []);

  console.log(crew);

  const breakPoints = [{ itemsToShow: 4 }];

  return (
    <div className="film-cast">
      <Carousel breakPoints={breakPoints}>
        {crew.slice(0, 20).map((person) => (
          <div key={person.id}>
            {person.profile_path ? (
              <div>
                <img
                  className="real-poster-person"
                  src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                  alt={`Picture of ${person.name}`}
                />
              </div>
            ) : (
              <div>
                <img
                  className="filler-poster-person"
                  src={fakeposter}
                  alt="No Poster"
                />
              </div>
            )}
            <div>
              <p className="crew-job">
                <strong>{person.job}</strong>
              </p>
            </div>
            <div>
              <p className="crew-name">{person.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
