import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_REPOS } from './constants';
import { setRepositories, setLoadRepositoriesError } from './actions';
import { resetLoading } from '../loading/actions';

import githubData, { getRepositories } from './saga';

const username = 'alexander-elgin';

/* eslint-disable redux-saga/yield-effects */
describe('github Saga', () => {
  let getRepositoriesGenerator;

  beforeEach(() => {
    getRepositoriesGenerator = getRepositories();

    const selectDescriptor = getRepositoriesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getRepositoriesGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('dispatches the setRepositories action if it fetches the repositories data successfully', () => {
    const repositories = [
      {
        name: 'First repo',
      },
      {
        name: 'Second repo',
      },
    ];
    const putDescriptor = getRepositoriesGenerator.next(repositories).value;
    expect(putDescriptor).toEqual(put(setRepositories(repositories, username)));
  });

  it('dispatches the setLoadRepositoriesError action if the request fails', () => {
    const response = new Error('Some error');
    const putDescriptor = getRepositoriesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(setLoadRepositoriesError(response)));
  });

  afterEach(() => {
    const putDescriptor = getRepositoriesGenerator.next().value;
    expect(putDescriptor).toEqual(put(resetLoading()));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepositories));
  });
});
