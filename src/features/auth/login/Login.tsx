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
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../app/pages/Pages';
import { ReturnComponentType } from '../../../types';

import s from './styles/Login.module.css';
import { FormikErrorType } from './types/LoginType';

export const Login = (): ReturnComponentType => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRegistrationClick = (): void => {
    navigate(PATH.REGISTRATION);
  };
  const onForgotPasswordClick = (): void => {
    navigate(PATH.RECOVERY_PASSWORD);
  };
  const PASSWORD_LENGTH = 8;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikErrorType = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (values.password.length < PASSWORD_LENGTH) {
        errors.password = 'Required';
      }

      return errors;
    },
    onSubmit: values => {
      console.log(values);
      // dispatch(loginTC(values));
      /* зачищает форму после успешной отправки формы */
      formik.resetForm();
    },
  });

  const [inputType, setInputType] = useState<string>('password');

  const onShowAndHidePasswordClick = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className={s.loginWrapper}>
      <h2>Sing in</h2>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input
              id="standard-adornment-email"
              type="email"
              {...formik.getFieldProps('email')}
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={inputType}
              {...formik.getFieldProps('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onShowAndHidePasswordClick}
                  >
                    {inputType === 'password' ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControlLabel
            className={s.loginInputFormCheckbox}
            label="Remember me"
            control={<Checkbox />}
            {...formik.getFieldProps('rememberMe')}
          />
          <div className={s.loginButtonForgot}>
            <Button type="button" onClick={onForgotPasswordClick}>
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
          <p>Already have an account?</p>
          <Button type="button" onClick={onRegistrationClick}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};
