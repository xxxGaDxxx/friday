import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../../../app/store/store';
import { validateEmail } from '../../../../common/utils/validateForm';
import styles from '../../../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../../types';
import s from '../../login/styles/Login.module.scss';

import { forgotPasswordTC, setIsSuccessAC } from './reducer/forgotReducer';

export const RecoveryPassword = (): ReturnComponentType => {
  const successEmail = useAppSelector(state => state.forgot.success);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onLoginPageClick = (): void => {
    navigate(PATH.LOGIN);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: values => validateEmail(values),

    onSubmit: values => {
      const { email } = values;
      const data = {
        email,
        from: 'test-front-admin <qwegadqwe@gmail.com>',
        message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/new_password/$token$'>
link</a>
</div>`,
      };

      dispatch(forgotPasswordTC(data));
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (successEmail) {
      navigate(PATH.CHECK_EMAIL);
      dispatch(setIsSuccessAC(false));
    }
  }, [successEmail, dispatch, navigate]);

  return (
    <div className={styles.container}>
      <h2>Forgot your password?</h2>

      <form onSubmit={formik.handleSubmit}>
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel>Email</InputLabel>
          <Input type="email" {...formik.getFieldProps('email')} />
        </FormControl>
        {formik.touched.email && formik.errors.email && (
          <div className={s.warningPassword}>{formik.errors.email}</div>
        )}

        <p>Enter your email address and we will send you further instructions </p>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: '100%', borderRadius: '20px' }}
        >
          Send Instructions
        </Button>
      </form>

      <div className={s.loginFooter}>
        <p>Did you remember your password?</p>
        <Button type="button" onClick={onLoginPageClick}>
          Try logging in
        </Button>
      </div>
    </div>
  );
};
