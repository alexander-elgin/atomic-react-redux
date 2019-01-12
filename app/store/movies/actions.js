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

export function fetchGenres() {
  return {
    type: FETCH_GENRES,
  };
}

export function fetchMovies() {
  return {
    type: FETCH_MOVIES,
  };
}

export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}

export function setGenres(genres) {
  return {
    type: FETCH_GENRES_SUCCESS,
    genres,
  };
}

export function setMovies(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function setQuery(query) {
  return {
    type: SET_QUERY,
    query,
  };
}

export function setTotalPages(totalPages) {
  return {
    type: SET_TOTAL_PAGES,
    totalPages,
  };
}
