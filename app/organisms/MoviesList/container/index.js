import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMovies } from '../../../store/movies/actions';
import { makeSelectMovies } from '../../../store/movies/selectors';

import MoviesListComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchMovies()),
  };
}

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesListComponent);
export default HomePageContainer;
