import { createSelector } from 'reselect';

const selectGithub = (state) => state.get('github');

const makeSelectUsername = () => createSelector(
  selectGithub,
  (githubState) => githubState.get('username')
);

const makeSelectCurrentUsername = () => createSelector(
  selectGithub,
  (githubState) => githubState.get('currentUsername')
);

const makeSelectRepositories = () => createSelector(
  selectGithub,
  (githubState) => githubState.get('repos')
);

const makeSelectError = () => createSelector(
  selectGithub,
  (githubState) => githubState.get('error')
);

export {
  selectGithub,
  makeSelectError,
  makeSelectRepositories,
  makeSelectCurrentUsername,
  makeSelectUsername,
};
