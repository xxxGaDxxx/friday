import React, { useEffect, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { PATH } from '../../../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../../../app/store/store';
import { validatePassword } from '../../../../common/utils/validateForm';
import style from '../../../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../../types';
import s from '../../login/styles/Login.module.scss';
import {
  newPasswordTC,
  setIsInfoNewPasswordAC,
} from '../recoveryPasword/reducer/forgotReducer';

export const NewPassword = (): ReturnComponentType => {
  const infoNewPassword = useAppSelector(state => state.forgot.infoNewPassword);
  const dispatch = useAppDispatch();

  const [inputType, setInputType] = useState<string>('password');

  const navigate = useNavigate();

  const onShowHidePasswordClick = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const { resetPasswordToken } = useParams();

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: values => validatePassword(values),
    onSubmit: values => {
      const { password } = values;

      if (resetPasswordToken) {
        dispatch(newPasswordTC({ password, resetPasswordToken }));
      }

      formik.resetForm();
    },
  });

  useEffect(() => {
    if (infoNewPassword) {
      navigate(PATH.LOGIN);
      dispatch(setIsInfoNewPasswordAC(''));
    }
  }, [dispatch, infoNewPassword, navigate]);

  return (
    <div className={style.container}>
      <h2>Create new password</h2>
      <form onSubmit={formik.handleSubmit}>
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

        {formik.touched.password && formik.errors.password && (
          <div className={s.warningPassword}>{formik.errors.password}</div>
        )}
        <div className={s.loginFooter}>
          <p>Create new password and we will send you further instructions to email</p>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: '100%', borderRadius: '20px' }}
          >
            Create new password
          </Button>
        </div>
      </form>
    </div>
  );
};
