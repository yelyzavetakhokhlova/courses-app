import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Button,
  Typography,
  Row,
  Col,
  Avatar,
} from 'antd';

import { logoutAction } from '../../redux/actions';

import css from './Layout.module.css';

const LayoutComponent = ({
  isLoggedIn,
  login,
  children,
  handleUserLogout,
}) => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Row
            justify="space-between"
            align="middle"
          >
            <Col xs>
              <Typography.Title>Logo</Typography.Title>
            </Col>
            { isLoggedIn && (
            <>
              <Col xs>
                <Breadcrumb separator=">">
                  <Breadcrumb.Item>Courses</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col xs>
                <Button
                  size="small"
                  type="text"
                  style={{
                    margin: '0 10px',
                    verticalAlign: 'middle',
                  }}
                  shape="round"
                  onClick={() => {
                    localStorage.removeItem('login');
                    handleUserLogout();
                  }}
                >
                  Logout
                </Button>
                <Avatar
                  style={{
                    backgroundColor: '#f56a00',
                    verticalAlign: 'middle',
                  }}
                  size="large"
                  gap="4"
                >
                  {login}
                </Avatar>
              </Col>
            </>
            )}
          </Row>
        </div>
      </header>
      <main className={css.container}>
        {children}
      </main>
    </>
  );
};

LayoutComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleUserLogout: PropTypes.func.isRequired,
};

export const Layout = connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn,
    login: state.user.login,
  }),
  dispatch => ({ handleUserLogout: () => dispatch(logoutAction()) }),
)(LayoutComponent);
