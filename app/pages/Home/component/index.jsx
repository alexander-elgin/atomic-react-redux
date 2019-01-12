import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from '../../../organisms/MoviesList';

const HomePage = ({ fetch, movies }) => (
  <div>
    <h2>Movies</h2>
    <MoviesList />
  </div>
);

export default HomePage;
