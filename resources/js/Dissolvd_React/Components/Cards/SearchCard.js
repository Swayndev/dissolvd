import React from "react";
import fakeposter from "../../img/fakeposter.png";

const SearchCard = ({ movieResult }) => {
    return (
        <>
            <div className="search-card" key={movieResult.id}>
                {movieResult.poster_path ? (
                    <div>
                        {/* DEFINE THE POSTER AS A LINK TO THE APPROPRIATE FILM PAGE*/}
                        <img
                            className="real-poster-search"
                            src={`https://image.tmdb.org/t/p/w185/${movieResult.poster_path}`}
                            alt={`${movieResult.title} Poster`}
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
                        <h2>{movieResult.title}</h2>
                        {movieResult.release_date ? (
                            <p>({movieResult.release_date.substring(0, 4)})</p>
                        ) : (
                            <p>(No Release Date)</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchCard;
