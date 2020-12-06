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
import { CreateCourse } from '../pages/create-course';
import { EditCourse } from '../pages/edit-course';
import { Layout } from '../components/Layout';

import './App.css';

export const App = () => {
  return (
    <Layout>
      <Switch>
        <IsUserLoggedIn
          exact
          path={CONSTANTS.ROUTE.COURSES}
          component={Courses}
        />
        <IsUserLoggedIn
          exact
          path={CONSTANTS.ROUTE.CREATE_COURSE}
          component={CreateCourse}
        />
        <IsUserLoggedIn
          exact
          path={CONSTANTS.ROUTE.EDIT_COURSE}
          component={EditCourse}
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
    </Layout>
  );
};
