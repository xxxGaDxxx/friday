import React, { useEffect, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormGroup,
  InputAdornment,
  Paper,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import styles from '../../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../types';

import { registrationTC } from './reducer/registrationReducer';
import s from './styles/Registration.module.scss';
import { FormikRegistrationErrorType } from './types/RegistrateType';

export const Registration = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isRegistered = useAppSelector(state => state.registration.isRegistered);

  const [inputType, setInputType] = useState<string>('password');
  const PASSWORD_LENGTH = 8;

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
    validate: values => {
      const errors: FormikRegistrationErrorType = {};

      if (!values.email) {
        errors.email = '😎 E-mail required!';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '😔 Invalid email address';
      }

      if (!values.password) {
        errors.password = '😎 Enter your password!';
      } else if (values.password.length < PASSWORD_LENGTH) {
        errors.password = '😎 Length of at least 8 characters';
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = '😎 Confirm your password!';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = '😔 Passwords do not match!';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch(registrationTC(values));
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (isRegistered) {
      navigate(PATH.LOGIN);
    }
  }, [isRegistered, dispatch]);

  return (
    <Paper elevation={20} className={styles.container}>
      <article className={s.article}>
        <Typography component="h2">Sign Up</Typography>
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
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: 'purple' }}>{formik.errors.email}</div>
              )}
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
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: 'purple' }}>{formik.errors.password}</div>
              )}
              <TextField
                type={inputType}
                variant="standard"
                label="Confirm password"
                margin="normal"
                {...formik.getFieldProps('confirmPassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment onClick={onShowHidePasswordClick} position="end">
                      {inputType === 'password' ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div style={{ color: 'purple' }}>{formik.errors.confirmPassword}</div>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: '100%', borderRadius: '20px' }}
              >
                Sign Up
              </Button>
            </FormGroup>
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
