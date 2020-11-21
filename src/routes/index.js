import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { IsUserLoggedIn } from './IsUserLoggedIn';
import { IsUserNotLoggedIn } from './IsUserNotLoggedIn';
import { CONSTANTS } from '../constants';
import { Courses } from '../pages/courses';
import { Login } from '../pages/login';

export const App = () => {
  return (
    <Switch>
      <IsUserLoggedIn
        exact
        path={CONSTANTS.ROUTE.COURSES}
        component={Courses}
      />
      <IsUserNotLoggedIn
        exact
        path={CONSTANTS.ROUTE.LOGIN}
        component={Login}
      />
      <Route path="*">
        <Redirect to={CONSTANTS.ROUTE.COURSES} />
      </Route>
    </Switch>
  );
};
