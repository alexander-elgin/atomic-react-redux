import { fromJS } from 'immutable';

import {
  selectGithub,
  makeSelectError,
  makeSelectRepositories,
  makeSelectCurrentUsername,
  makeSelectUsername,
} from './selectors';

describe('github selectors', () => {
  const currentUsername = 'alexander-elgin';
  const username = 'alex';
  const repos = ['repository'];
  const error = new Error('something weird happen');

  const githubState = fromJS({ currentUsername, username, repos, error });

  const mockedState = fromJS({
    github: githubState,
  });

  describe('#selectGithub', () => {
    it('selects the GitHub state', () => expect(selectGithub(mockedState)).toEqual(githubState));
  });

  describe('#makeSelectError', () => {
    const errorSelector = makeSelectError();
    it('select the error', () => expect(errorSelector(mockedState)).toEqual(error));
  });

  describe('#makeSelectRepositories', () => {
    const repositoriesSelector = makeSelectRepositories();
    it('select the repositories', () => expect(repositoriesSelector(mockedState)).toEqual(fromJS(repos)));
  });

  describe('#makeSelectCurrentUsername', () => {
    const currentUsernameSelector = makeSelectCurrentUsername();
    it('select the current username', () => expect(currentUsernameSelector(mockedState)).toEqual(currentUsername));
  });

  describe('#makeSelectUsername', () => {
    const usernameSelector = makeSelectUsername();
    it('select the username', () => expect(usernameSelector(mockedState)).toEqual(username));
  });
});
