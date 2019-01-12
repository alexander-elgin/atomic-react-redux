import { call, put, select, takeLatest } from 'redux-saga/effects';

import { FETCH_MOVIES } from './constants';
import { setMovies, setError } from './actions';
import { makeSelectPage } from './selectors';

import { get } from '../../utils/request';
import { apiKey } from '../../env';

export function* fetchMovies() {
  const page = yield select(makeSelectPage());

  const params = {
    page,
    api_key: apiKey,
  };

  try {
    const moviesData = yield call(get, '/movie/popular', params);
    yield put(setMovies(moviesData.results));
  } catch (err) {
    yield put(setError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
