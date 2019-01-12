import { createSelector } from 'reselect';

const selectMovies = (state) => state.get('movies');

const makeSelectError = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('error') !== null
);

const makeSelectGenres = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('genres').toJS()
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
  makeSelectGenres,
  makeSelectMovies,
  makeSelectPage,
  makeSelectQuery,
  makeSelectTotalPages,
};
