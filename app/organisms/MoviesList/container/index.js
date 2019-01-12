import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMovies } from '../../../store/movies/actions';
import { makeSelectPage, makeSelectTotalPages } from '../../../store/movies/selectors';

import MoviesListComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchMovies()),
  };
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
  totalPages: makeSelectTotalPages(),
});

const MoviesListContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesListComponent);
export default MoviesListContainer;
