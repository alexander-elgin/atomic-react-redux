import React from 'react';
import PropTypes from 'prop-types';

import { mediaBaseUrl } from '../../../env';
import MoviesList from '../../../molecules/MoviesList';

const MoviePage = ({ movie, movies }) => (
  <div>
    <h2>{movie.title}</h2>
    <img src={`${mediaBaseUrl}/w342${movie.poster_path}`} />
    <div>{movie.overview}</div>
    <h3>See Also</h3>
    <MoviesList movies={movies} />
  </div>
);

MoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MoviePage;
