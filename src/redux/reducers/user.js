import { user as userStore } from '../store';
import { CONSTANTS } from '../../constants';

export const user = (state = userStore, action) => {
  switch (action.type) {
    case CONSTANTS.USER.LOGIN.FETCH:
      return { ...state };
    case CONSTANTS.USER.LOGIN.SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        isLoggedIn: true,
      };
    case CONSTANTS.USER.LOGIN.ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case CONSTANTS.USER.CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case CONSTANTS.USER.LOGOUT:
      return {
        ...state,
        login: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
