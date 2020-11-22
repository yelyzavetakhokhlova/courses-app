import { takeLatest } from 'redux-saga/effects';

import { CONSTANTS } from '../../constants';
import { loginUser } from './user';

export function* rootSaga() {
  yield takeLatest(CONSTANTS.USER.LOGIN.FETCH, loginUser);
}
