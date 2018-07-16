import { fromJS } from 'immutable';

import githubReducer from './reducer';

import {
  changeUsername,
  loadRepositories,
  setRepositories,
  setLoadRepositoriesError,
} from './actions';

describe('github Reducer', () => {
  let state;
  const initialState = {
    currentUsername: '',
    username: '',
    repos: false,
    error: false,
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(githubReducer()).toEqual(state));
  });

  describe('#changeUsername', () => {
    it('changes the username', () => {
      const username = 'alexander-elgin';
      const expectedResult = state.set('username', username);
      expect(githubReducer(state, changeUsername(username))).toEqual(expectedResult);
    });
  });

  describe('#loadRepositories', () => {
    it('resets the error and the repositories list', () => {
      const expectedResult = state.set('error', false).set('repos', false);
      expect(githubReducer(state, loadRepositories())).toEqual(expectedResult);
    });
  });

  describe('#setRepositories', () => {
    it('resets the error and the repositories list', () => {
      const username = 'alexander-elgin';
      const repositories = ['repository'];
      const expectedResult = state.set('currentUsername', username).set('repos', repositories);
      expect(githubReducer(state, setRepositories(repositories, username))).toEqual(expectedResult);
    });
  });

  describe('#setLoadRepositoriesError', () => {
    it('sets the error', () => {
      const error = {
        msg: 'something weird happen',
      };

      const expectedResult = state.set('error', error);
      expect(githubReducer(state, setLoadRepositoriesError(error))).toEqual(expectedResult);
    });
  });
});
