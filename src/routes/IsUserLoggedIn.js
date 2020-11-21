import React from 'react';
import get from 'lodash/get';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { CONSTANTS } from '../constants';

const IsUserLoggedInComponent = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={CONSTANTS.ROUTE.LOGIN} />
        ))
      }
    />
  );
};

export const IsUserLoggedIn = connect(
  state => ({ isLoggedIn: get(state, 'user.isLoggedIn', false) }),
)(IsUserLoggedInComponent);
