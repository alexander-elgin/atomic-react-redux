import { fromJS } from 'immutable';

import {
  FETCH_GENRES,
  FETCH_GENRES_SUCCESS,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  RESET,
  SET_ERROR,
  SET_QUERY,
  SET_TOTAL_PAGES,
} from './constants';

const initialState = fromJS({
  error: null,
  genres: {},
  movies: [],
  page: 1,
  query: '',
  totalPages: 0,
});

function moviesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_GENRES:
      return state
        .set('error', null);
    case FETCH_GENRES_SUCCESS:
      return state
        .set('genres', fromJS(action.genres));
    case FETCH_MOVIES:
      return state
        .set('error', null);
    case FETCH_MOVIES_SUCCESS:
      return state
        .set('movies', fromJS(state.get('movies').toJS().concat(action.movies)))
        .set('page', state.get('page') + 1)
      ;
    case RESET:
      return state
        .set('movies', fromJS([]))
        .set('page', 1)
      ;
    case SET_ERROR:
      return state
        .set('error', action.error);
    case SET_QUERY:
      return state
        .set('query', action.query);
    case SET_TOTAL_PAGES:
      return state
        .set('totalPages', action.totalPages);
    default:
      return state;
  }
}

export default moviesReducer;
