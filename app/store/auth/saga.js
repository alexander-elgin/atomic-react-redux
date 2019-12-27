import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  SIGN_OUT,
} from './constants';

import { removeToken } from '../../utils/auth';

export function* signOut() {
  yield call(removeToken);
  yield put(push('/'));
}

export default function* rootSaga() {
  yield takeLatest(SIGN_OUT, signOut);
}
