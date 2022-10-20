import React, { useEffect, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { validateAuthForm } from '../../../common/utils/validateForm';
import styles from '../../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../types';

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
    validate: values => validateAuthForm(values),
    onSubmit: values => {
      dispatch(registrationTC(values));
      formik.resetForm();
    },
  });

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
                <div>{formik.errors.password}</div>
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
