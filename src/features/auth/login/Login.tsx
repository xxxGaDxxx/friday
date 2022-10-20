import React, { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';

import { PATH } from '../../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { validatePassword } from '../../../common/utils/validateForm';
import styles from '../../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../types';

import { loginTC } from './reducer/loginReducer';
import s from './styles/Login.module.scss';

export const Login = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();

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
    validate: values => validatePassword(values),
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
    <Paper elevation={10} className={styles.container}>
      <h2>Sign in</h2>

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
          Sign In
        </Button>
      </form>

      <div className={s.loginFooter}>
        <p>{`You don't have an account?`}</p>
        <Button
          className={s.buttonSignUp}
          type="button"
          variant="outlined"
          onClick={onRegistrationPageClick}
        >
          Sign Up
        </Button>
      </div>
    </Paper>
  );
};
