import { createSelector } from 'reselect';

const selectMovies = (state) => state.get('movies');

const makeSelectError = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('error')
);

const makeSelectMovies = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('movies').toJS()
);

const makeSelectPage = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('page')
);

const makeSelectQuery = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('query')
);

const makeSelectTotalPages = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('totalPages')
);


export {
  selectMovies,
  makeSelectError,
  makeSelectMovies,
  makeSelectPage,
  makeSelectQuery,
  makeSelectTotalPages,
};
