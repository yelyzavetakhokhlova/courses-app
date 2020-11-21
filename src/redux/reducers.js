import { combineReducers } from 'redux';

import { user } from './store';

const userReducer = (state = user) => state;
const coursesReducer = (state = {}) => state;

export const reducers = combineReducers({
  user: userReducer,
  courses: coursesReducer,
});
