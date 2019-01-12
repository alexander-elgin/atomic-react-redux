import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMovies, reset, setQuery } from '../../../store/movies/actions';
import { makeSelectQuery } from '../../../store/movies/selectors';

import HeaderComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchMovies()),
    reset: () => dispatch(reset()),
    setQuery: (query) => dispatch(setQuery(query)),
  };
}

const mapStateToProps = createStructuredSelector({
  query: makeSelectQuery(),
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
export default HeaderContainer;
