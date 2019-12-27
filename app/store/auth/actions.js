import {
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from './constants';

export function setSignInData(user) {
  return {
    type: SIGN_IN_SUCCESS,
    user,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
