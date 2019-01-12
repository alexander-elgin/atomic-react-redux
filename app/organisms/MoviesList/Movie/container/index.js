import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectGenres } from '../../../../store/movies/selectors';

import MovieComponent from '../component';

const mapStateToProps = createStructuredSelector({
  genres: makeSelectGenres(),
});

const MovieContainer = connect(mapStateToProps, null)(MovieComponent);
export default MovieContainer;