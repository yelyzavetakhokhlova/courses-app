import { CONSTANTS } from '../constants';

export const loginAction = payload => ({
  type: CONSTANTS.USER.LOGIN.FETCH,
  payload,
});

export const logoutAction = () => ({ type: CONSTANTS.USER.LOGOUT });

export const clearUserErrorsAction = () => ({ type: CONSTANTS.USER.CLEAR_ERRORS });

export const getCoursesAction = () => ({ type: CONSTANTS.COURSES.GET.FETCH });
