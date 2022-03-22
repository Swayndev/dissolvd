import {useState, useEffect} from 'react'

import { Header } from "./Header/Header";
import  HomePage  from "./HomePage/HomePage";
import { Footer } from "./Footer/Footer";

import {FilmPage}  from './FilmPage/FilmPage';

const Body = () => {

  const apiKey = "f1206acdc6dd0ff0374585c4b4b936a1";

  // ============ FETCH HOME =================
    // REACT HOOKS

  const [query, setQuery] = useState("");

  const [movieResults, setMovieResults] = useState([]);

  // DO NOT FORGET TO DISPLAY ERROR MESSAGE IF TITLE DOES NOT EXIST OR IF LOADING TIME IS SLOW\
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    if(query !== "") {
      handleSearch();
    } else {
      setMovieResults([]);
    }
  }, [query]);


  // FUNCTIONS AND LOGIC
  const handleSearch = async (e) => {


  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`);

  const data = await response.json();

  data && !!data.results.length && setMovieResults(data.results);

  // console.log(data.errors)

  // check if there are some data contained into the json returned by the API
  // if (!!data.errors) {
  //   setMovieResults([]);
  //   setErrorMessage(data.errors)
  // } else if (data.results) {
  //   setMovieResults(data.results);
  // }
      
};

console.log('MOVIE RESULTS', movieResults)

// ======== FETCH INDIVIDUAL MOVIES =================

const [movie, setMovie] = useState([]);

const handleMovie = async () => {
console.log('fetching')
const movieUrl = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}&language=en-US`;

// const movieUrl = (`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`)

  const response = await fetch(movieUrl);

const data = await response.json();

data && setMovie(data);

console.log('THIS IS DATA', data)
}



console.log('THIS IS INDIVIDUAL MOVIE', movie);


useEffect(() => {
    handleMovie();
    }, []);



  // ======================================================
  
    return (
    <div>
    
      <Header setQuery={setQuery}/>
      <HomePage movieResults={movieResults} displayResults={!!movieResults.length && query !== ""}/>
      {/*  
      
      */}
    <FilmPage movie={movie}/>
    <Footer />
    </div>
  )
}

export default Body;