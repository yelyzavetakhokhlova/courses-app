import { combineReducers } from 'redux';

import { user } from './user';
import { courses } from './courses';

export const reducers = combineReducers({ user, courses });
