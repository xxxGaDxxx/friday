import React, { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';

import { PATH } from '../../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { ReturnComponentType } from '../../../types';

import { loginTC } from './reducer/loginReducer';
import s from './styles/Login.module.css';
import { FormikErrorType } from './types/LoginType';

export const Login = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();

  const PASSWORD_LENGTH = 8;

  const navigate = useNavigate();

  const [inputType, setInputType] = useState<string>('password');

  const onShowHidePasswordClick = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const onRegistrationPageClick = (): void => {
    navigate(PATH.REGISTRATION);
  };
  const onForgotPasswordPageClick = (): void => {
    navigate(PATH.RECOVERY_PASSWORD);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikErrorType = {};

      if (values.password.length < PASSWORD_LENGTH) {
        errors.password = 'Length of at least 8 characters ';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch(loginTC(values));
      /* зачищает форму после успешной отправки формы */
      formik.resetForm();
    },
  });
  const isPasswordError = formik.touched.password && formik.errors.password;

  if (isLoggedIn) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <div className={s.loginWrapper}>
      <h2>Sing in</h2>

      <form onSubmit={formik.handleSubmit}>
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel>Email</InputLabel>
          <Input type="email" {...formik.getFieldProps('email')} />
        </FormControl>

        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel>Password</InputLabel>
          <Input
            type={inputType}
            {...formik.getFieldProps('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onShowHidePasswordClick}
                >
                  {inputType === 'password' ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {isPasswordError && (
          <div className={s.warningPassword}>{formik.errors.password}</div>
        )}

        <FormControlLabel
          className={s.loginInputFormCheckbox}
          label="Remember me"
          control={<Checkbox checked={formik.values.rememberMe} />}
          {...formik.getFieldProps('rememberMe')}
        />

        <div className={s.loginButtonForgot}>
          <Button type="button" onClick={onForgotPasswordPageClick}>
            Forgot Password?
          </Button>
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: '100%', borderRadius: '20px' }}
        >
          Login
        </Button>
      </form>

      <div className={s.loginFooter}>
        <p>Already have an account?</p>
        <Button type="button" onClick={onRegistrationPageClick}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};
