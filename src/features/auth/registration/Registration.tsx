import React from 'react';

import { FormControl, FormGroup, Paper, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import styles from '../../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../types';

import s from './styles/Registration.module.scss';

export const Registration = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();
  const PASSWORD_LENGTH = 8;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <Paper elevation={20} className={styles.container}>
      <article className={s.article}>
        <Typography component="h2">Sign Up</Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormGroup>
              dddddddddddddd
            </FormGroup>
          </FormControl>
        </form>
      </article>
    </Paper>
  );
};
