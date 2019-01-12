import { createSelector } from 'reselect';

const selectMovies = (state) => state.get('movies');

const makeSelectPage = () => createSelector(
  selectMovies,
  (moviesState) => moviesState.get('page')
);

const makeSelectError = () => createSelector(
  selectMovies,
  (repositoriesDataState) => repositoriesDataState.get('error')
);

const makeSelectMovies = () => createSelector(
  selectMovies,
  (repositoriesDataState) => repositoriesDataState.get('movies').toJS()
);


export {
  selectMovies,
  makeSelectPage,
  makeSelectError,
  makeSelectMovies,
};
