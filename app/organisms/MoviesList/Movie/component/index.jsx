import React from 'react';
import PropTypes from 'prop-types';

import { mediaBaseUrl } from '../../../../env';

const Movie = ({ poster_path, title }) => (
  <div>
    <h5>{ title }</h5>
    <img src={`${mediaBaseUrl}/w185${poster_path}`} />
  </div>
);

Movie.propTypes = {
  title: PropTypes.string
};

export default Movie;
