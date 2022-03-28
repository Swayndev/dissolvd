import React from 'react'
import "./SearchResult.css";

import SearchCard from '../Cards/SearchCard';


const SearchResult = ({
    displayResults, 
    movieResults, 
    setMovieId, 
    setQuery,
    }) => {
  
  
  

    return (
        <div className="search-wrap">
            <div className="search-card-wrap">
                {displayResults &&
                    movieResults.map((movieResult) => (
                        <div key={movieResult.id}>
                            <SearchCard
                                movieResult={movieResult}
                                setMovieId={setMovieId}
                                setQuery={setQuery}
                            />
                        </div>
                    ))}
            </div>
        </div>
  )
}

export default SearchResult