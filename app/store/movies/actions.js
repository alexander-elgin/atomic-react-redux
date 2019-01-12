import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from './constants';

export function fetchMovies() {
  return {
    type: FETCH_MOVIES,
  };
}

export function setMovies(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
  };
}

export function setError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    error,
  };
}
