import React from 'react';
import get from 'lodash/get';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { CONSTANTS } from '../constants';

const IsUserNotLoggedInComponent = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        !isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={CONSTANTS.ROUTE.COURSES} />
        ))
      }
    />
  );
};

export const IsUserNotLoggedIn = connect(
  state => ({ isLoggedIn: get(state, 'user.isLoggedIn', false) }),
)(IsUserNotLoggedInComponent);
