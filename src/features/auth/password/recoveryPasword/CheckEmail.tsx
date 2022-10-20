import React from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../../app/pages/Pages';
import { useAppSelector } from '../../../../app/store/store';
import checkEmail from '../../../../assets/svg/checkEmail.svg';
import style from '../../../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../../../types';
import s from '../../login/styles/Login.module.scss';

const CheckEmail = (): ReturnComponentType => {
  const email = useAppSelector(state => state.forgot.email);

  const navigate = useNavigate();

  const onLoginPageClick = (): void => {
    navigate(PATH.LOGIN);
  };

  return (
    <div className={style.container}>
      <h2>CheckEmail</h2>

      <img src={checkEmail} alt="check email" />

      <div className={s.loginFooter}>
        <p>We’ve sent an Email with instructions to {email}</p>
        <Button type="button" onClick={onLoginPageClick}>
          Back to login
        </Button>
      </div>
    </div>
  );
};

export default CheckEmail;
