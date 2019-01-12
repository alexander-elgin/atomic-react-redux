import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchGenres } from '../../../store/movies/actions';
import { makeSelectGenres, makeSelectMovies } from '../../../store/movies/selectors';

import MoviesListComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
  };
}

const mapStateToProps = createStructuredSelector({
  genres: makeSelectGenres(),
  movies: makeSelectMovies(),
});

const MoviesListContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesListComponent);
export default MoviesListContainer;
