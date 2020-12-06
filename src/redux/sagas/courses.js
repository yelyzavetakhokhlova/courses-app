import {
  call,
  put,
} from 'redux-saga/effects';

import { axios } from './axios';
import { isResponseOk } from '../../helpers/isResponseOk';
import { CONSTANTS } from '../../constants';

export const getCoursesRequest = () => {
  return axios
    .get('/courses');
};

export function* getCourses() {
  try {
    const response = yield call(getCoursesRequest);

    if (isResponseOk(response)) {
      yield put({
        type: CONSTANTS.COURSES.GET.SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({ type: CONSTANTS.COURSES.GET.ERROR, payload: response.data });
    }
  } catch (error) {
    yield put({ type: CONSTANTS.COURSES.GET.ERROR, payload: { errors: error } });
  }
}
