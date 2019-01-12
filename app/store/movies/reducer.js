import { fromJS } from 'immutable';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from './constants';

const initialState = fromJS({
  apiKey: 'db9da4f8d8f568db92133c65144dd7fe',
  error: null,
  movies: [],
  page: 1,
});

function moviesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_MOVIES:
      return state
        .set('error', null);
    case FETCH_MOVIES_SUCCESS:
      return state
        .set('movies', fromJS(state.get('movies').toJS().concat(action.movies)))
        .set('page', state.get('page') + 1)
      ;
    case FETCH_MOVIES_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default moviesReducer;
