import React from 'react';
import PropTypes from 'prop-types';

import { mediaBaseUrl } from '../../../../env';
import styles from './styles.scss';

const Movie = ({ history, genres, genre_ids, id, poster_path, title }) => (
  <div className={styles.movie} onClick={() => history.push(`/movie/${id}`)}>
    <h5>{ title }</h5>
    <img src={`${mediaBaseUrl}/w185${poster_path}`} />
    <div className={styles['genre-list']}>
      { genre_ids.map(genre => genres.hasOwnProperty(genre) ? genres[genre] : '').join(' ') }
    </div>
  </div>
);

Movie.propTypes = {
  genres: PropTypes.any,
  title: PropTypes.string,
};

export default Movie;
