import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {
  Form,
  Input,
  Button,
  Alert,
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons';

import { clearUserErrorsAction, loginAction } from '../../redux/actions';

import css from './Login.module.css';

const LoginComponent = ({
  errors,
  handleUserLogin,
  handleClearErrors,
}) => {
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [form] = Form.useForm();

  const handleSubmit = values => {
    handleUserLogin(values);
  };

  const handleValuesChange = (changedValues, allValues) => {
    if (isLoginFailed) {
      setIsLoginFailed(false);
      handleClearErrors();
    }

    const {
      login,
      password,
    } = allValues;
    const areFieldsFilled = Boolean(login && password);
    const isFormValid = !(form.getFieldsError().filter(field => field.errors.length).length);

    setIsSubmitButtonDisabled(!(areFieldsFilled && isFormValid));
  };

  const validateField = type => ({
    validator(rule, value) {
      const rules = {
        login: {
          regex: /^[a-zA-Z]+$/,
          message: 'Login should only contain latin letters',
        },
        password: {
          regex: /^[a-zA-Z0-9]+$/,
          message: 'Password should only contain latin letters and digits',
        },
      };

      if (rules[type].regex.test(value)) {
        setIsSubmitButtonDisabled(false);

        return Promise.resolve();
      }
      setIsSubmitButtonDisabled(true);

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(rules[type].message);
    },
  });

  useEffect(() => {
    if (!isEmpty(errors)) {
      setIsLoginFailed(true);
      setIsSubmitButtonDisabled(true);
    }
  }, [errors]);

  return (
    <>
      {isLoginFailed && (
        <Alert
          message="Error"
          description="Invalid login or password. Please, check your input."
          type="error"
          className={css.form}
          showIcon
        />
      )}
      <Form
        form={form}
        name="loginForm"
        className={css.form}
        onFinish={handleSubmit}
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          name="login"
          rules={[
            {
              required: true,
              message: 'Please enter your login',
            },
            () => validateField('login'),
          ]}
          validateTrigger={['onBlur']}
        >
          <Input
            prefix={(
              <UserOutlined className="site-form-item-icon" />
          )}
            placeholder="login"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{
            required: true,
            message: 'Please enter your password',
          },
          () => validateField('password'),
          ]}
          validateTrigger={['onBlur']}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={isSubmitButtonDisabled}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

LoginComponent.propTypes = {
  errors: PropTypes.object.isRequired,
  handleUserLogin: PropTypes.func.isRequired,
  handleClearErrors: PropTypes.func.isRequired,
};

export const Login = connect(
  state => ({ errors: get(state, 'user.errors', {}) }),
  dispatch => ({
    handleUserLogin: props => dispatch(loginAction(props)),
    handleClearErrors: () => dispatch(clearUserErrorsAction()),
  }),
)(LoginComponent);
