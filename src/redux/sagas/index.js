import { takeLatest } from 'redux-saga/effects';

import { CONSTANTS } from '../../constants';
import { loginUser } from './user';
import { getCourses } from './courses';

export function* rootSaga() {
  yield takeLatest(CONSTANTS.USER.LOGIN.FETCH, loginUser);
  yield takeLatest(CONSTANTS.COURSES.GET.FETCH, getCourses);
}
