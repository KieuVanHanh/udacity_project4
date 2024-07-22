import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  console.log(process.env.REACT_APP_MOVIE_API_URL);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((response) => {
      console.log('response', response);
      setMovies(response.data.movies);
    });
  }, []);
  console.log('MOVIES', movies);
  return (
    <ul>
      {movies && movies.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
