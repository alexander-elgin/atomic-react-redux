import { fromJS } from 'immutable';

import {
  SET_LOADING,
  RESET_LOADING,
} from './constants';

const initialState = fromJS({
  loading: false,
});

function loadingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return state
        .set('loading', true);
    case RESET_LOADING:
      return state
        .set('loading', false);
    default:
      return state;
  }
}

export default loadingReducer;
