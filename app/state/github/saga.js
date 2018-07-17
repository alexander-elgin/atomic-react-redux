import { call, put, select, takeLatest } from 'redux-saga/effects';

import { LOAD_REPOS } from './constants';
import { setRepositories, setLoadRepositoriesError } from './actions';
import { resetLoading } from '../loading/actions';

import request from '../../utils/request';
import { makeSelectUsername } from './selectors';

export function* getRepositories() {
  const username = yield select(makeSelectUsername());

  try {
    const repositories = yield call(request, `https://api.github.com/users/${username}/repos?type=all&sort=updated`);
    yield put(setRepositories(repositories, username));
  } catch (err) {
    yield put(setLoadRepositoriesError(err));
  } finally {
    yield put(resetLoading());
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepositories);
}
