import { fromJS } from 'immutable';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
  RESET,
  SET_QUERY,
  SET_TOTAL_PAGES,
} from './constants';

const initialState = fromJS({
  apiKey: 'db9da4f8d8f568db92133c65144dd7fe',
  error: null,
  movies: [],
  page: 1,
  query: '',
  totalPages: 0,
});

function moviesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_MOVIES:
      return state
        .set('error', null);
    case FETCH_MOVIES_ERROR:
      return state
        .set('error', action.error);
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
