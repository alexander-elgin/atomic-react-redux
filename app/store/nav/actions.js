import {
  SET_PAGE_TITLE,
} from './constants';

export function setPageTitle(payload) {
  return {
    type: SET_PAGE_TITLE,
    payload,
  };
}
