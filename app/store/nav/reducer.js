import { fromJS } from 'immutable';

import {
  SET_PAGE_TITLE,
} from './constants';

const initialState = fromJS({
  pageTitle: '',
});

function navReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return state
        .set('pageTitle', action.payload);
    default:
      return state;
  }
}

export default navReducer;
