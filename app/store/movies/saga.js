import { call, put, select, takeLatest } from 'redux-saga/effects';

import { FETCH_MOVIES } from './constants';
import { setError, setMovies, setTotalPages } from './actions';
import { makeSelectPage, makeSelectQuery } from './selectors';

import { get } from '../../utils/request';
import { apiKey } from '../../env';

export function* fetchMovies() {
  const page = yield select(makeSelectPage());
  const query = yield select(makeSelectQuery());

  const params = {
    page,
    api_key: apiKey,
  };

  try {
    let moviesData;

    if ((query === undefined) || (query.length === 0)) {
      moviesData = yield call(get, '/movie/popular', params);
    } else {
      params.query = query;
      moviesData = yield call(get, '/search/movie', params);
    }

    yield put(setMovies(moviesData.results));
    yield put(setTotalPages(moviesData.total_pages));
  } catch (err) {
    yield put(setError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
