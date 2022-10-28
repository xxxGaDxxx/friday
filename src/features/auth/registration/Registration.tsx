import React, { useEffect, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import styles from '../../../common/styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../common/types';
import { validateRegistrationForm } from '../../../common/utils/validateForm';

import { registrationTC } from './reducer/registrationReducer';
import s from './styles/Registration.module.scss';

export const Registration = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isRegistered = useAppSelector(state => state.registration.isRegistered);

  const [inputType, setInputType] = useState<string>('password');

  const onShowHidePasswordClick = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const onLoginPageClick = (): void => {
    navigate(PATH.LOGIN);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: values => validateRegistrationForm(values),
    onSubmit: values => {
      dispatch(registrationTC(values));
    },
  });

  const errorEmail =
    formik.touched.email && formik.errors.email ? (
      <h3>{formik.errors.email}</h3>
    ) : (
      <h3 style={{ color: '#fff' }}>element</h3>
    );

  const errorPassword =
    formik.touched.password && formik.errors.password ? (
      <h3>{formik.errors.password}</h3>
    ) : (
      <h3 style={{ color: '#fff' }}>element</h3>
    );

  const errorConfirmPassword =
    formik.touched.confirmPassword && formik.errors.confirmPassword ? (
      <h3>{formik.errors.confirmPassword}</h3>
    ) : (
      <h3 style={{ color: '#fff' }}>element</h3>
    );

  useEffect(() => {
    if (isRegistered) {
      navigate(PATH.LOGIN);
    }
  }, [isRegistered, dispatch, navigate]);

  return (
    <Paper elevation={20} className={styles.container}>
      <article className={s.article}>
        <Typography component="h2">Sign Up</Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth className={s.formControl}>
            <TextField
              type="email"
              variant="standard"
              label="Email"
              margin="none"
              {...formik.getFieldProps('email')}
            />

            {errorEmail}

            <TextField
              type={inputType}
              variant="standard"
              label="Password"
              margin="none"
              {...formik.getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment onClick={onShowHidePasswordClick} position="end">
                    {inputType === 'password' ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />

            {errorPassword}

            <TextField
              type={inputType}
              variant="standard"
              label="Confirm password"
              margin="none"
              {...formik.getFieldProps('confirmPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment onClick={onShowHidePasswordClick} position="end">
                    {inputType === 'password' ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />

            {errorConfirmPassword}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: '100%', borderRadius: '20px' }}
            >
              Sign Up
            </Button>
          </FormControl>
        </form>

        <div className={s.regFooter}>
          <p>Already have an account?</p>
          <Button
            className={s.buttonSignIn}
            type="button"
            variant="outlined"
            onClick={onLoginPageClick}
          >
            Sign In
          </Button>
        </div>
      </article>
    </Paper>
  );
};
