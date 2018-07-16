import {
  CHANGE_USERNAME,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
} from './constants';

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function loadRepositories() {
  return {
    type: LOAD_REPOS,
  };
}

export function setRepositories(repos, currentUsername) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    currentUsername,
  };
}

export function setLoadRepositoriesError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
