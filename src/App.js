import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import './App.css';
import dotenv from 'dotenv'

const IMG_API = "https//image.tmdb.org/t/p/w1280";
const FEATURED_API =process.env.REACT_APP_FEATURED_API;
const SEARCH_API =process.env.REACT_APP_SEARCH_API;


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <img className="JudaIcon" src="JudaMove.png" />
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>

      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id}
            {...movie} />)}
      </div>
    </>
  );
}

export default App;
