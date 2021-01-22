import { courses as coursesStore } from '../store';
import { CONSTANTS } from '../../constants';

export const courses = (state = coursesStore, action) => {
  switch (action.type) {
    case CONSTANTS.COURSES.GET.FETCH:
      return { ...state };
    case CONSTANTS.COURSES.GET.SUCCESS:
      return {
        ...state,
        courses: action.payload,
      };
    case CONSTANTS.USER.LOGIN.ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
