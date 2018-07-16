import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
} from './constants';

const initialState = fromJS({
  currentUsername: '',
  username: '',
  repos: false,
  error: false,
});

function githubReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .set('username', action.name);
    case LOAD_REPOS:
      return state
        .set('error', false)
        .set('repos', false);
    case LOAD_REPOS_SUCCESS:
      return state
        .set('currentUsername', action.currentUsername)
        .set('repos', action.repos);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default githubReducer;
