import React, { useEffect, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { PATH } from '../../../common/enum/pathEnum';
import { validateLoginForm } from '../../../common/utils/validateForm';
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
    validate: values => validateLoginForm(values),
    onSubmit: values => {
      dispatch(loginTC(values));

      formik.resetForm();
    },
  });
  const isPasswordError = formik.touched.password && formik.errors.password;
  const isEmailError = formik.touched.email && formik.errors.email;

  useEffect(() => {
    if (isLoggedIn) {
      navigate(PATH.PROFILE);
    }
  }, [isLoggedIn, navigate]);

  return (
    <Paper elevation={10} className={styles.container}>
      <article className={s.article}>
        <Typography component="h2">Sign in</Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth>
            <FormGroup>
              <TextField
                type="email"
                variant="standard"
                label="Email"
                margin="normal"
                {...formik.getFieldProps('email')}
              />

              {isEmailError && <div style={{ color: 'purple' }}>{formik.errors.email}</div>}

              <TextField
                type={inputType}
                variant="standard"
                label="Password"
                margin="normal"
                {...formik.getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment onClick={onShowHidePasswordClick} position="end">
                      {inputType === 'password' ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
              />

              {isPasswordError && <div style={{ color: 'purple' }}>{formik.errors.password}</div>}

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
            </FormGroup>
          </FormControl>
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
      </article>
    </Paper>
  );
};
