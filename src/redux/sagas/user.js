import axios from 'axios';
import {
  call,
  put,
} from 'redux-saga/effects';

import { isResponseOk } from '../../helpers/isResponseOk';
import { CONSTANTS } from '../../constants';

export const loginRequest = ({ login, password }) => {
  return axios
    .post(`${CONSTANTS.BASE_URL}/api/login`, {
      login,
      password,
    })
    .catch(error => {
      throw error.response.data;
    });
};

export function* loginUser({ payload }) {
  try {
    const response = yield call(loginRequest, payload);

    if (isResponseOk(response)) {
      const { login } = payload;

      localStorage.setItem('login', login);
      yield put({
        type: CONSTANTS.USER.LOGIN.SUCCESS,
        payload: { login },
      });
    } else {
      yield put({ type: CONSTANTS.USER.LOGIN.ERROR, payload: response.data });
    }
  } catch (error) {
    yield put({ type: CONSTANTS.USER.LOGIN.ERROR, payload: { errors: error } });
  }
}
